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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11803 = apc_stats;var G__11803__$1 = (((G__11803 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11803));return G__11803__$1;
})();var ic_count = (function (){var G__11804 = apc_stats;var G__11804__$1 = (((G__11804 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11804));return G__11804__$1;
})();if(typeof clustermap.components.map_report.t11805 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11805 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11806){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11806 = meta11806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11805.cljs$lang$type = true;
clustermap.components.map_report.t11805.cljs$lang$ctorStr = "clustermap.components.map-report/t11805";
clustermap.components.map_report.t11805.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11805");
});
clustermap.components.map_report.t11805.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11805.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11810 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11810))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11810),(function (){var attrs11811 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11811))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11811),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11811));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11810),(function (){var attrs11812 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11812))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11812),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11812));
}
})());
}
})(),(function (){var attrs11813 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11813))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11813),(function (){var attrs11814 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11814))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11814),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11814));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11813),(function (){var attrs11815 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11815))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11815),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11815));
}
})());
}
})(),(function (){var attrs11816 = clustermap.formats.money.fmoney.call(null,(function (){var G__11826 = self__.apc_stats;var G__11826__$1 = (((G__11826 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11826));var G__11826__$2 = (((G__11826__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11826__$1));return G__11826__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11816))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11816),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11816),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11821 = clustermap.formats.number.fnum.call(null,(function (){var G__11827 = self__.apc_stats;var G__11827__$1 = (((G__11827 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11827));var G__11827__$2 = (((G__11827__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11827__$1));return G__11827__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11821))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11821),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11821),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11807){var self__ = this;
var _11807__$1 = this;return self__.meta11806;
});
clustermap.components.map_report.t11805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11807,meta11806__$1){var self__ = this;
var _11807__$1 = this;return (new clustermap.components.map_report.t11805(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11806__$1));
});
clustermap.components.map_report.__GT_t11805 = (function __GT_t11805(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11806){return (new clustermap.components.map_report.t11805(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11806));
});
}
return (new clustermap.components.map_report.t11805(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11852 = portfolio_company;var G__11852__$1 = (((G__11852 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11852));var G__11852__$2 = (((G__11852__$1 == null))?null:cljs.core.count.call(null,G__11852__$1));return G__11852__$2;
})();var const_count = (function (){var G__11853 = portfolio_company;var G__11853__$1 = (((G__11853 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11853));var G__11853__$2 = (((G__11853__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11853__$1));var G__11853__$3 = (((G__11853__$2 == null))?null:cljs.core.count.call(null,G__11853__$2));return G__11853__$3;
})();if(typeof clustermap.components.map_report.t11854 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11854 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11855){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11855 = meta11855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11854.cljs$lang$type = true;
clustermap.components.map_report.t11854.cljs$lang$ctorStr = "clustermap.components.map-report/t11854";
clustermap.components.map_report.t11854.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11854");
});
clustermap.components.map_report.t11854.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11854.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11857 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11857))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11857),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11857));
}
})()),React.DOM.ul(null,(function (){var attrs11858 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11858))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11858),(function (){var attrs11859 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11859))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11859),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11859));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11858),(function (){var attrs11860 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11860))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11860),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11860));
}
})());
}
})(),(function (){var attrs11861 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11861))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11861),(function (){var attrs11862 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11862))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11862),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11862));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11861),(function (){var attrs11863 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11863))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11863),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11863));
}
})());
}
})(),(function (){var attrs11864 = clustermap.formats.money.fmoney.call(null,(function (){var G__11874 = self__.portfolio_company;var G__11874__$1 = (((G__11874 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11874));return G__11874__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11864))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11864),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11864),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11869 = clustermap.formats.number.fnum.call(null,(function (){var G__11875 = self__.portfolio_company;var G__11875__$1 = (((G__11875 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11875));return G__11875__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11869))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11869),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11869),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11856){var self__ = this;
var _11856__$1 = this;return self__.meta11855;
});
clustermap.components.map_report.t11854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11856,meta11855__$1){var self__ = this;
var _11856__$1 = this;return (new clustermap.components.map_report.t11854(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11855__$1));
});
clustermap.components.map_report.__GT_t11854 = (function __GT_t11854(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11855){return (new clustermap.components.map_report.t11854(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11855));
});
}
return (new clustermap.components.map_report.t11854(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11900 = investor_company;var G__11900__$1 = (((G__11900 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11900));var G__11900__$2 = (((G__11900__$1 == null))?null:cljs.core.count.call(null,G__11900__$1));return G__11900__$2;
})();var const_count = (function (){var G__11901 = investor_company;var G__11901__$1 = (((G__11901 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11901));var G__11901__$2 = (((G__11901__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11901__$1));var G__11901__$3 = (((G__11901__$2 == null))?null:cljs.core.count.call(null,G__11901__$2));return G__11901__$3;
})();if(typeof clustermap.components.map_report.t11902 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11902 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11903){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11903 = meta11903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11902.cljs$lang$type = true;
clustermap.components.map_report.t11902.cljs$lang$ctorStr = "clustermap.components.map-report/t11902";
clustermap.components.map_report.t11902.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11902");
});
clustermap.components.map_report.t11902.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11902.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11905 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11905))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11905),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11905));
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
})(),(function (){var attrs11909 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11909))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11909),(function (){var attrs11910 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11910))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11910),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11910));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11909),(function (){var attrs11911 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11911))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11911),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11911));
}
})());
}
})(),(function (){var attrs11912 = clustermap.formats.money.fmoney.call(null,(function (){var G__11922 = self__.investor_company;var G__11922__$1 = (((G__11922 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11922));return G__11922__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11912))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11912),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11912),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11917 = clustermap.formats.number.fnum.call(null,(function (){var G__11923 = self__.investor_company;var G__11923__$1 = (((G__11923 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11923));return G__11923__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11917))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11917),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11917),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11904){var self__ = this;
var _11904__$1 = this;return self__.meta11903;
});
clustermap.components.map_report.t11902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11904,meta11903__$1){var self__ = this;
var _11904__$1 = this;return (new clustermap.components.map_report.t11902(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11903__$1));
});
clustermap.components.map_report.__GT_t11902 = (function __GT_t11902(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11903){return (new clustermap.components.map_report.t11902(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11903));
});
}
return (new clustermap.components.map_report.t11902(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11949 = constituency;var G__11949__$1 = (((G__11949 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11949));var G__11949__$2 = (((G__11949__$1 == null))?null:cljs.core.count.call(null,G__11949__$1));return G__11949__$2;
})();var ic_count = (function (){var G__11950 = constituency;var G__11950__$1 = (((G__11950 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11950));var G__11950__$2 = (((G__11950__$1 == null))?null:cljs.core.count.call(null,G__11950__$1));return G__11950__$2;
})();if(typeof clustermap.components.map_report.t11951 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11951 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11952){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11952 = meta11952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11951.cljs$lang$type = true;
clustermap.components.map_report.t11951.cljs$lang$ctorStr = "clustermap.components.map-report/t11951";
clustermap.components.map_report.t11951.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11951");
});
clustermap.components.map_report.t11951.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11951.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11954 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11954))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11954),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11954));
}
})(),(function (){var attrs11955 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11955))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11955),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11955),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11956 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11956))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11956),(function (){var attrs11957 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11957))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11957),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11957));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11956),(function (){var attrs11958 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11958))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11958),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11958));
}
})());
}
})(),(function (){var attrs11959 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11959))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11959),(function (){var attrs11960 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11960))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11960),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11960));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11959),(function (){var attrs11961 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11961))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11961),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11961));
}
})());
}
})(),(function (){var attrs11962 = clustermap.formats.money.fmoney.call(null,(function (){var G__11972 = self__.constituency;var G__11972__$1 = (((G__11972 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11972));return G__11972__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11962))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11962),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11962),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11967 = clustermap.formats.number.fnum.call(null,(function (){var G__11973 = self__.constituency;var G__11973__$1 = (((G__11973 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11973));return G__11973__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11967))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11967),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11967),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11953){var self__ = this;
var _11953__$1 = this;return self__.meta11952;
});
clustermap.components.map_report.t11951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11953,meta11952__$1){var self__ = this;
var _11953__$1 = this;return (new clustermap.components.map_report.t11951(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11952__$1));
});
clustermap.components.map_report.__GT_t11951 = (function __GT_t11951(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11952){return (new clustermap.components.map_report.t11951(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11952));
});
}
return (new clustermap.components.map_report.t11951(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11977 = cljs.core._EQ__EQ_;var expr__11978 = type;if(cljs.core.truth_(pred__11977.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11978)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11977.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11978)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11977.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11978)))
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