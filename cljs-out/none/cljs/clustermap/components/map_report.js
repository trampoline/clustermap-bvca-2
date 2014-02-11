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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11779 = apc_stats;var G__11779__$1 = (((G__11779 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11779));return G__11779__$1;
})();var ic_count = (function (){var G__11780 = apc_stats;var G__11780__$1 = (((G__11780 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11780));return G__11780__$1;
})();if(typeof clustermap.components.map_report.t11781 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11781 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11782){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11782 = meta11782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11781.cljs$lang$type = true;
clustermap.components.map_report.t11781.cljs$lang$ctorStr = "clustermap.components.map-report/t11781";
clustermap.components.map_report.t11781.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11781");
});
clustermap.components.map_report.t11781.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11781.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11786 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11786))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11786),(function (){var attrs11787 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11787))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11787),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11787));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11786),(function (){var attrs11788 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11788))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11788),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11788));
}
})());
}
})(),(function (){var attrs11789 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11789))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11789),(function (){var attrs11790 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11790))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11790),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11790));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11789),(function (){var attrs11791 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11791))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11791),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11791));
}
})());
}
})(),(function (){var attrs11792 = clustermap.formats.money.fmoney.call(null,(function (){var G__11802 = self__.apc_stats;var G__11802__$1 = (((G__11802 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11802));var G__11802__$2 = (((G__11802__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11802__$1));return G__11802__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11792))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11792),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11792),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11797 = clustermap.formats.number.fnum.call(null,(function (){var G__11803 = self__.apc_stats;var G__11803__$1 = (((G__11803 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11803));var G__11803__$2 = (((G__11803__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11803__$1));return G__11803__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11797))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11797),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11797),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11783){var self__ = this;
var _11783__$1 = this;return self__.meta11782;
});
clustermap.components.map_report.t11781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11783,meta11782__$1){var self__ = this;
var _11783__$1 = this;return (new clustermap.components.map_report.t11781(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11782__$1));
});
clustermap.components.map_report.__GT_t11781 = (function __GT_t11781(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11782){return (new clustermap.components.map_report.t11781(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11782));
});
}
return (new clustermap.components.map_report.t11781(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11828 = portfolio_company;var G__11828__$1 = (((G__11828 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11828));var G__11828__$2 = (((G__11828__$1 == null))?null:cljs.core.count.call(null,G__11828__$1));return G__11828__$2;
})();var const_count = (function (){var G__11829 = portfolio_company;var G__11829__$1 = (((G__11829 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11829));var G__11829__$2 = (((G__11829__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11829__$1));var G__11829__$3 = (((G__11829__$2 == null))?null:cljs.core.count.call(null,G__11829__$2));return G__11829__$3;
})();if(typeof clustermap.components.map_report.t11830 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11830 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11831){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11831 = meta11831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11830.cljs$lang$type = true;
clustermap.components.map_report.t11830.cljs$lang$ctorStr = "clustermap.components.map-report/t11830";
clustermap.components.map_report.t11830.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11830");
});
clustermap.components.map_report.t11830.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11830.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11833 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11833))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11833),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11833));
}
})()),React.DOM.ul(null,(function (){var attrs11834 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11834))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11834),(function (){var attrs11835 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11835))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11835),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11835));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11834),(function (){var attrs11836 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11836))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11836),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11836));
}
})());
}
})(),(function (){var attrs11837 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11837))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11837),(function (){var attrs11838 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11838))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11838),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11838));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11837),(function (){var attrs11839 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11839))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11839),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11839));
}
})());
}
})(),(function (){var attrs11840 = clustermap.formats.money.fmoney.call(null,(function (){var G__11850 = self__.portfolio_company;var G__11850__$1 = (((G__11850 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11850));return G__11850__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11840))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11840),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11840),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11845 = clustermap.formats.number.fnum.call(null,(function (){var G__11851 = self__.portfolio_company;var G__11851__$1 = (((G__11851 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11851));return G__11851__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11845))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11845),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11845),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11832){var self__ = this;
var _11832__$1 = this;return self__.meta11831;
});
clustermap.components.map_report.t11830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11832,meta11831__$1){var self__ = this;
var _11832__$1 = this;return (new clustermap.components.map_report.t11830(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11831__$1));
});
clustermap.components.map_report.__GT_t11830 = (function __GT_t11830(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11831){return (new clustermap.components.map_report.t11830(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11831));
});
}
return (new clustermap.components.map_report.t11830(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11876 = investor_company;var G__11876__$1 = (((G__11876 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11876));var G__11876__$2 = (((G__11876__$1 == null))?null:cljs.core.count.call(null,G__11876__$1));return G__11876__$2;
})();var const_count = (function (){var G__11877 = investor_company;var G__11877__$1 = (((G__11877 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11877));var G__11877__$2 = (((G__11877__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11877__$1));var G__11877__$3 = (((G__11877__$2 == null))?null:cljs.core.count.call(null,G__11877__$2));return G__11877__$3;
})();if(typeof clustermap.components.map_report.t11878 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11878 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11879){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11879 = meta11879;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11878.cljs$lang$type = true;
clustermap.components.map_report.t11878.cljs$lang$ctorStr = "clustermap.components.map-report/t11878";
clustermap.components.map_report.t11878.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11878");
});
clustermap.components.map_report.t11878.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11878.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11881 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11881))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11881),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11881));
}
})()),React.DOM.ul(null,(function (){var attrs11882 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11882))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11882),(function (){var attrs11883 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11883))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11883),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11883));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11882),(function (){var attrs11884 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11884))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11884),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11884));
}
})());
}
})(),(function (){var attrs11885 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11885))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11885),(function (){var attrs11886 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11886))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11886),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11886));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11885),(function (){var attrs11887 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11887))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11887),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11887));
}
})());
}
})(),(function (){var attrs11888 = clustermap.formats.money.fmoney.call(null,(function (){var G__11898 = self__.investor_company;var G__11898__$1 = (((G__11898 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11898));return G__11898__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11888))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11888),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11888),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11893 = clustermap.formats.number.fnum.call(null,(function (){var G__11899 = self__.investor_company;var G__11899__$1 = (((G__11899 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11899));return G__11899__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11893))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11893),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11893),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11880){var self__ = this;
var _11880__$1 = this;return self__.meta11879;
});
clustermap.components.map_report.t11878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11880,meta11879__$1){var self__ = this;
var _11880__$1 = this;return (new clustermap.components.map_report.t11878(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11879__$1));
});
clustermap.components.map_report.__GT_t11878 = (function __GT_t11878(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11879){return (new clustermap.components.map_report.t11878(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11879));
});
}
return (new clustermap.components.map_report.t11878(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11925 = constituency;var G__11925__$1 = (((G__11925 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11925));var G__11925__$2 = (((G__11925__$1 == null))?null:cljs.core.count.call(null,G__11925__$1));return G__11925__$2;
})();var ic_count = (function (){var G__11926 = constituency;var G__11926__$1 = (((G__11926 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11926));var G__11926__$2 = (((G__11926__$1 == null))?null:cljs.core.count.call(null,G__11926__$1));return G__11926__$2;
})();if(typeof clustermap.components.map_report.t11927 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11927 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11928){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11928 = meta11928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11927.cljs$lang$type = true;
clustermap.components.map_report.t11927.cljs$lang$ctorStr = "clustermap.components.map-report/t11927";
clustermap.components.map_report.t11927.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11927");
});
clustermap.components.map_report.t11927.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11927.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11930 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11930))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11930),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11930));
}
})(),(function (){var attrs11931 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11931))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11931),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11931),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11932 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11932))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11932),(function (){var attrs11933 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11933))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11933),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11933));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11932),(function (){var attrs11934 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11934))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11934),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11934));
}
})());
}
})(),(function (){var attrs11935 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11935))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11935),(function (){var attrs11936 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11936))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11936),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11936));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11935),(function (){var attrs11937 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11937))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11937),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11937));
}
})());
}
})(),(function (){var attrs11938 = clustermap.formats.money.fmoney.call(null,(function (){var G__11948 = self__.constituency;var G__11948__$1 = (((G__11948 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11948));return G__11948__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11938))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11938),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11938),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11943 = clustermap.formats.number.fnum.call(null,(function (){var G__11949 = self__.constituency;var G__11949__$1 = (((G__11949 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11949));return G__11949__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11943))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11943),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11943),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11929){var self__ = this;
var _11929__$1 = this;return self__.meta11928;
});
clustermap.components.map_report.t11927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11929,meta11928__$1){var self__ = this;
var _11929__$1 = this;return (new clustermap.components.map_report.t11927(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11928__$1));
});
clustermap.components.map_report.__GT_t11927 = (function __GT_t11927(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11928){return (new clustermap.components.map_report.t11927(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11928));
});
}
return (new clustermap.components.map_report.t11927(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11953 = cljs.core._EQ__EQ_;var expr__11954 = type;if(cljs.core.truth_(pred__11953.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11954)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11953.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11954)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11953.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11954)))
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