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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__32025 = apc_stats;var G__32025__$1 = (((G__32025 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32025));return G__32025__$1;
})();var ic_count = (function (){var G__32026 = apc_stats;var G__32026__$1 = (((G__32026 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32026));return G__32026__$1;
})();if(typeof clustermap.components.map_report.t32027 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32027 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta32028){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta32028 = meta32028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32027.cljs$lang$type = true;
clustermap.components.map_report.t32027.cljs$lang$ctorStr = "clustermap.components.map-report/t32027";
clustermap.components.map_report.t32027.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32027");
});
clustermap.components.map_report.t32027.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32027.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs32032 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32032))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32032),(function (){var attrs32033 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32033))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32033),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32033));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32032),(function (){var attrs32034 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32034))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32034),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32034));
}
})());
}
})(),(function (){var attrs32035 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32035))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32035),(function (){var attrs32036 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32036))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32036),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32036));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32035),(function (){var attrs32037 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32037))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32037),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32037));
}
})());
}
})(),(function (){var attrs32038 = clustermap.formats.money.fmoney.call(null,(function (){var G__32048 = self__.apc_stats;var G__32048__$1 = (((G__32048 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32048));var G__32048__$2 = (((G__32048__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32048__$1));return G__32048__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32038))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32038),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32038),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32043 = clustermap.formats.number.fnum.call(null,(function (){var G__32049 = self__.apc_stats;var G__32049__$1 = (((G__32049 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32049));var G__32049__$2 = (((G__32049__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32049__$1));return G__32049__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32043))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32043),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32043),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32029){var self__ = this;
var _32029__$1 = this;return self__.meta32028;
});
clustermap.components.map_report.t32027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32029,meta32028__$1){var self__ = this;
var _32029__$1 = this;return (new clustermap.components.map_report.t32027(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta32028__$1));
});
clustermap.components.map_report.__GT_t32027 = (function __GT_t32027(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta32028){return (new clustermap.components.map_report.t32027(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta32028));
});
}
return (new clustermap.components.map_report.t32027(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__32074 = portfolio_company;var G__32074__$1 = (((G__32074 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32074));var G__32074__$2 = (((G__32074__$1 == null))?null:cljs.core.count.call(null,G__32074__$1));return G__32074__$2;
})();var const_count = (function (){var G__32075 = portfolio_company;var G__32075__$1 = (((G__32075 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32075));var G__32075__$2 = (((G__32075__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32075__$1));var G__32075__$3 = (((G__32075__$2 == null))?null:cljs.core.count.call(null,G__32075__$2));return G__32075__$3;
})();if(typeof clustermap.components.map_report.t32076 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32076 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta32077){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta32077 = meta32077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32076.cljs$lang$type = true;
clustermap.components.map_report.t32076.cljs$lang$ctorStr = "clustermap.components.map-report/t32076";
clustermap.components.map_report.t32076.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32076");
});
clustermap.components.map_report.t32076.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32076.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32079 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs32079))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32079),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32079));
}
})()),React.DOM.ul(null,(function (){var attrs32080 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32080))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32080),(function (){var attrs32081 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32081))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32081),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32081));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32080),(function (){var attrs32082 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32082))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32082),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32082));
}
})());
}
})(),(function (){var attrs32083 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32083))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32083),(function (){var attrs32084 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32084))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32084),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32084));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32083),(function (){var attrs32085 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32085))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32085),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32085));
}
})());
}
})(),(function (){var attrs32086 = clustermap.formats.money.fmoney.call(null,(function (){var G__32096 = self__.portfolio_company;var G__32096__$1 = (((G__32096 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__32096));return G__32096__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32086))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32086),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32086),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs32091 = clustermap.formats.number.fnum.call(null,(function (){var G__32097 = self__.portfolio_company;var G__32097__$1 = (((G__32097 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__32097));return G__32097__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32091))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32091),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32091),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32078){var self__ = this;
var _32078__$1 = this;return self__.meta32077;
});
clustermap.components.map_report.t32076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32078,meta32077__$1){var self__ = this;
var _32078__$1 = this;return (new clustermap.components.map_report.t32076(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta32077__$1));
});
clustermap.components.map_report.__GT_t32076 = (function __GT_t32076(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta32077){return (new clustermap.components.map_report.t32076(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta32077));
});
}
return (new clustermap.components.map_report.t32076(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__32122 = investor_company;var G__32122__$1 = (((G__32122 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32122));var G__32122__$2 = (((G__32122__$1 == null))?null:cljs.core.count.call(null,G__32122__$1));return G__32122__$2;
})();var const_count = (function (){var G__32123 = investor_company;var G__32123__$1 = (((G__32123 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32123));var G__32123__$2 = (((G__32123__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32123__$1));var G__32123__$3 = (((G__32123__$2 == null))?null:cljs.core.count.call(null,G__32123__$2));return G__32123__$3;
})();if(typeof clustermap.components.map_report.t32124 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32124 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta32125){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta32125 = meta32125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32124.cljs$lang$type = true;
clustermap.components.map_report.t32124.cljs$lang$ctorStr = "clustermap.components.map-report/t32124";
clustermap.components.map_report.t32124.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32124");
});
clustermap.components.map_report.t32124.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32124.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32127 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs32127))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32127),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32127));
}
})()),React.DOM.ul(null,(function (){var attrs32128 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32128))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32128),(function (){var attrs32129 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32129))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32129),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32129));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32128),(function (){var attrs32130 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32130))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32130),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32130));
}
})());
}
})(),(function (){var attrs32131 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32131))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32131),(function (){var attrs32132 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32132))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32132),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32132));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32131),(function (){var attrs32133 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32133))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32133),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32133));
}
})());
}
})(),(function (){var attrs32134 = clustermap.formats.money.fmoney.call(null,(function (){var G__32144 = self__.investor_company;var G__32144__$1 = (((G__32144 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32144));return G__32144__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32134))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32134),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32134),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32139 = clustermap.formats.number.fnum.call(null,(function (){var G__32145 = self__.investor_company;var G__32145__$1 = (((G__32145 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32145));return G__32145__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32139))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32139),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32139),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32126){var self__ = this;
var _32126__$1 = this;return self__.meta32125;
});
clustermap.components.map_report.t32124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32126,meta32125__$1){var self__ = this;
var _32126__$1 = this;return (new clustermap.components.map_report.t32124(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta32125__$1));
});
clustermap.components.map_report.__GT_t32124 = (function __GT_t32124(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32125){return (new clustermap.components.map_report.t32124(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32125));
});
}
return (new clustermap.components.map_report.t32124(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__32171 = constituency;var G__32171__$1 = (((G__32171 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32171));var G__32171__$2 = (((G__32171__$1 == null))?null:cljs.core.count.call(null,G__32171__$1));return G__32171__$2;
})();var ic_count = (function (){var G__32172 = constituency;var G__32172__$1 = (((G__32172 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32172));var G__32172__$2 = (((G__32172__$1 == null))?null:cljs.core.count.call(null,G__32172__$1));return G__32172__$2;
})();if(typeof clustermap.components.map_report.t32173 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32173 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta32174){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta32174 = meta32174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32173.cljs$lang$type = true;
clustermap.components.map_report.t32173.cljs$lang$ctorStr = "clustermap.components.map-report/t32173";
clustermap.components.map_report.t32173.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32173");
});
clustermap.components.map_report.t32173.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32173.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32176 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32176))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32176),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32176));
}
})(),(function (){var attrs32177 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32177))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs32177),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs32177),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs32178 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32178))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32178),(function (){var attrs32179 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32179))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32179),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32179));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32178),(function (){var attrs32180 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32180))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32180),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32180));
}
})());
}
})(),(function (){var attrs32181 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32181))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32181),(function (){var attrs32182 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32182))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32182),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32182));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32181),(function (){var attrs32183 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32183))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32183),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32183));
}
})());
}
})(),(function (){var attrs32184 = clustermap.formats.money.fmoney.call(null,(function (){var G__32194 = self__.constituency;var G__32194__$1 = (((G__32194 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32194));return G__32194__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32184))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32184),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32184),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32189 = clustermap.formats.number.fnum.call(null,(function (){var G__32195 = self__.constituency;var G__32195__$1 = (((G__32195 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32195));return G__32195__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32189))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32189),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32189),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32175){var self__ = this;
var _32175__$1 = this;return self__.meta32174;
});
clustermap.components.map_report.t32173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32175,meta32174__$1){var self__ = this;
var _32175__$1 = this;return (new clustermap.components.map_report.t32173(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta32174__$1));
});
clustermap.components.map_report.__GT_t32173 = (function __GT_t32173(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32174){return (new clustermap.components.map_report.t32173(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32174));
});
}
return (new clustermap.components.map_report.t32173(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__32199 = cljs.core._EQ__EQ_;var expr__32200 = type;if(cljs.core.truth_(pred__32199.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32200)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32199.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32200)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32199.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32200)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
