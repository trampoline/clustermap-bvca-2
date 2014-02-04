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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11753 = apc_stats;var G__11753__$1 = (((G__11753 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11753));return G__11753__$1;
})();var ic_count = (function (){var G__11754 = apc_stats;var G__11754__$1 = (((G__11754 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11754));return G__11754__$1;
})();if(typeof clustermap.components.map_report.t11755 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11755 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11756){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11756 = meta11756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11755.cljs$lang$type = true;
clustermap.components.map_report.t11755.cljs$lang$ctorStr = "clustermap.components.map-report/t11755";
clustermap.components.map_report.t11755.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11755");
});
clustermap.components.map_report.t11755.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11755.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11760 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11760))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11760),(function (){var attrs11761 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11761))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11761),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11761));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11760),(function (){var attrs11762 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11762))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11762),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11762));
}
})());
}
})(),(function (){var attrs11763 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11763))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11763),(function (){var attrs11764 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11764))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11764),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11764));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11763),(function (){var attrs11765 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11765))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11765),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11765));
}
})());
}
})(),(function (){var attrs11766 = clustermap.formats.money.fmoney.call(null,(function (){var G__11776 = self__.apc_stats;var G__11776__$1 = (((G__11776 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11776));var G__11776__$2 = (((G__11776__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11776__$1));return G__11776__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11766))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11766),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11766),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11771 = clustermap.formats.number.fnum.call(null,(function (){var G__11777 = self__.apc_stats;var G__11777__$1 = (((G__11777 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11777));var G__11777__$2 = (((G__11777__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11777__$1));return G__11777__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11771))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11771),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11771),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11757){var self__ = this;
var _11757__$1 = this;return self__.meta11756;
});
clustermap.components.map_report.t11755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11757,meta11756__$1){var self__ = this;
var _11757__$1 = this;return (new clustermap.components.map_report.t11755(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11756__$1));
});
clustermap.components.map_report.__GT_t11755 = (function __GT_t11755(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11756){return (new clustermap.components.map_report.t11755(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11756));
});
}
return (new clustermap.components.map_report.t11755(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11802 = portfolio_company;var G__11802__$1 = (((G__11802 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11802));var G__11802__$2 = (((G__11802__$1 == null))?null:cljs.core.count.call(null,G__11802__$1));return G__11802__$2;
})();var const_count = (function (){var G__11803 = portfolio_company;var G__11803__$1 = (((G__11803 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11803));var G__11803__$2 = (((G__11803__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11803__$1));var G__11803__$3 = (((G__11803__$2 == null))?null:cljs.core.count.call(null,G__11803__$2));return G__11803__$3;
})();if(typeof clustermap.components.map_report.t11804 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11804 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11805){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11805 = meta11805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11804.cljs$lang$type = true;
clustermap.components.map_report.t11804.cljs$lang$ctorStr = "clustermap.components.map-report/t11804";
clustermap.components.map_report.t11804.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11804");
});
clustermap.components.map_report.t11804.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11804.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11807 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11807))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11807),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11807));
}
})()),React.DOM.ul(null,(function (){var attrs11808 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11808))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11808),(function (){var attrs11809 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11809))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11809),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11809));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11808),(function (){var attrs11810 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11810))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11810),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11810));
}
})());
}
})(),(function (){var attrs11811 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11811))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11811),(function (){var attrs11812 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11812))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11812),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11812));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11811),(function (){var attrs11813 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11813))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11813),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11813));
}
})());
}
})(),(function (){var attrs11814 = clustermap.formats.money.fmoney.call(null,(function (){var G__11824 = self__.portfolio_company;var G__11824__$1 = (((G__11824 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11824));return G__11824__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11814))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11814),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11814),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11819 = clustermap.formats.number.fnum.call(null,(function (){var G__11825 = self__.portfolio_company;var G__11825__$1 = (((G__11825 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11825));return G__11825__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11819))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11819),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11819),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11806){var self__ = this;
var _11806__$1 = this;return self__.meta11805;
});
clustermap.components.map_report.t11804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11806,meta11805__$1){var self__ = this;
var _11806__$1 = this;return (new clustermap.components.map_report.t11804(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11805__$1));
});
clustermap.components.map_report.__GT_t11804 = (function __GT_t11804(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11805){return (new clustermap.components.map_report.t11804(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11805));
});
}
return (new clustermap.components.map_report.t11804(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11850 = investor_company;var G__11850__$1 = (((G__11850 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11850));var G__11850__$2 = (((G__11850__$1 == null))?null:cljs.core.count.call(null,G__11850__$1));return G__11850__$2;
})();var const_count = (function (){var G__11851 = investor_company;var G__11851__$1 = (((G__11851 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11851));var G__11851__$2 = (((G__11851__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11851__$1));var G__11851__$3 = (((G__11851__$2 == null))?null:cljs.core.count.call(null,G__11851__$2));return G__11851__$3;
})();if(typeof clustermap.components.map_report.t11852 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11852 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11853){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11853 = meta11853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11852.cljs$lang$type = true;
clustermap.components.map_report.t11852.cljs$lang$ctorStr = "clustermap.components.map-report/t11852";
clustermap.components.map_report.t11852.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11852");
});
clustermap.components.map_report.t11852.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11852.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11855 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11855))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11855),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11855));
}
})()),React.DOM.ul(null,(function (){var attrs11856 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11856))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11856),(function (){var attrs11857 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11857))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11857),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11857));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11856),(function (){var attrs11858 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11858))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11858),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11858));
}
})());
}
})(),(function (){var attrs11859 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11859))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11859),(function (){var attrs11860 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11860))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11860),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11860));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11859),(function (){var attrs11861 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11861))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11861),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11861));
}
})());
}
})(),(function (){var attrs11862 = clustermap.formats.money.fmoney.call(null,(function (){var G__11872 = self__.investor_company;var G__11872__$1 = (((G__11872 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11872));return G__11872__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11862))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11862),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11862),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11867 = clustermap.formats.number.fnum.call(null,(function (){var G__11873 = self__.investor_company;var G__11873__$1 = (((G__11873 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11873));return G__11873__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11867))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11867),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11867),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11854){var self__ = this;
var _11854__$1 = this;return self__.meta11853;
});
clustermap.components.map_report.t11852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11854,meta11853__$1){var self__ = this;
var _11854__$1 = this;return (new clustermap.components.map_report.t11852(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11853__$1));
});
clustermap.components.map_report.__GT_t11852 = (function __GT_t11852(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11853){return (new clustermap.components.map_report.t11852(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11853));
});
}
return (new clustermap.components.map_report.t11852(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11899 = constituency;var G__11899__$1 = (((G__11899 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11899));var G__11899__$2 = (((G__11899__$1 == null))?null:cljs.core.count.call(null,G__11899__$1));return G__11899__$2;
})();var ic_count = (function (){var G__11900 = constituency;var G__11900__$1 = (((G__11900 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11900));var G__11900__$2 = (((G__11900__$1 == null))?null:cljs.core.count.call(null,G__11900__$1));return G__11900__$2;
})();if(typeof clustermap.components.map_report.t11901 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11901 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11902){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11902 = meta11902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11901.cljs$lang$type = true;
clustermap.components.map_report.t11901.cljs$lang$ctorStr = "clustermap.components.map-report/t11901";
clustermap.components.map_report.t11901.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11901");
});
clustermap.components.map_report.t11901.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11901.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11904 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11904))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11904),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11904));
}
})(),(function (){var attrs11905 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11905))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11905),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11905),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11906 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11906))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11906),(function (){var attrs11907 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11907))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11907),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11907));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11906),(function (){var attrs11908 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11908))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11908),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11908));
}
})());
}
})(),(function (){var attrs11909 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11909))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11909),(function (){var attrs11910 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11910))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11910),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11910));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11909),(function (){var attrs11911 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11911))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11911),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11911));
}
})());
}
})(),(function (){var attrs11912 = clustermap.formats.money.fmoney.call(null,(function (){var G__11922 = self__.constituency;var G__11922__$1 = (((G__11922 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11922));return G__11922__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11912))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11912),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11912),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11917 = clustermap.formats.number.fnum.call(null,(function (){var G__11923 = self__.constituency;var G__11923__$1 = (((G__11923 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11923));return G__11923__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11917))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11917),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11917),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11903){var self__ = this;
var _11903__$1 = this;return self__.meta11902;
});
clustermap.components.map_report.t11901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11903,meta11902__$1){var self__ = this;
var _11903__$1 = this;return (new clustermap.components.map_report.t11901(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11902__$1));
});
clustermap.components.map_report.__GT_t11901 = (function __GT_t11901(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11902){return (new clustermap.components.map_report.t11901(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11902));
});
}
return (new clustermap.components.map_report.t11901(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11927 = cljs.core._EQ__EQ_;var expr__11928 = type;if(cljs.core.truth_(pred__11927.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11928)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11927.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11928)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11927.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11928)))
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