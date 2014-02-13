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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__32097 = apc_stats;var G__32097__$1 = (((G__32097 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32097));return G__32097__$1;
})();var ic_count = (function (){var G__32098 = apc_stats;var G__32098__$1 = (((G__32098 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32098));return G__32098__$1;
})();if(typeof clustermap.components.map_report.t32099 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32099 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta32100){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta32100 = meta32100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32099.cljs$lang$type = true;
clustermap.components.map_report.t32099.cljs$lang$ctorStr = "clustermap.components.map-report/t32099";
clustermap.components.map_report.t32099.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32099");
});
clustermap.components.map_report.t32099.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32099.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs32104 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32104))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32104),(function (){var attrs32105 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32105))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32105),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32105));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32104),(function (){var attrs32106 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32106))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32106),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32106));
}
})());
}
})(),(function (){var attrs32107 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32107))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32107),(function (){var attrs32108 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32108))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32108),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32108));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32107),(function (){var attrs32109 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32109))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32109),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32109));
}
})());
}
})(),(function (){var attrs32110 = clustermap.formats.money.fmoney.call(null,(function (){var G__32120 = self__.apc_stats;var G__32120__$1 = (((G__32120 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32120));var G__32120__$2 = (((G__32120__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32120__$1));return G__32120__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32110))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32110),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32110),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32115 = clustermap.formats.number.fnum.call(null,(function (){var G__32121 = self__.apc_stats;var G__32121__$1 = (((G__32121 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32121));var G__32121__$2 = (((G__32121__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32121__$1));return G__32121__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32115))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32115),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32115),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32101){var self__ = this;
var _32101__$1 = this;return self__.meta32100;
});
clustermap.components.map_report.t32099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32101,meta32100__$1){var self__ = this;
var _32101__$1 = this;return (new clustermap.components.map_report.t32099(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta32100__$1));
});
clustermap.components.map_report.__GT_t32099 = (function __GT_t32099(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta32100){return (new clustermap.components.map_report.t32099(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta32100));
});
}
return (new clustermap.components.map_report.t32099(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__32146 = portfolio_company;var G__32146__$1 = (((G__32146 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32146));var G__32146__$2 = (((G__32146__$1 == null))?null:cljs.core.count.call(null,G__32146__$1));return G__32146__$2;
})();var const_count = (function (){var G__32147 = portfolio_company;var G__32147__$1 = (((G__32147 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32147));var G__32147__$2 = (((G__32147__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32147__$1));var G__32147__$3 = (((G__32147__$2 == null))?null:cljs.core.count.call(null,G__32147__$2));return G__32147__$3;
})();if(typeof clustermap.components.map_report.t32148 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32148 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta32149){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta32149 = meta32149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32148.cljs$lang$type = true;
clustermap.components.map_report.t32148.cljs$lang$ctorStr = "clustermap.components.map-report/t32148";
clustermap.components.map_report.t32148.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32148");
});
clustermap.components.map_report.t32148.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32148.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32151 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs32151))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32151),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32151));
}
})()),React.DOM.ul(null,(function (){var attrs32152 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32152))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32152),(function (){var attrs32153 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32153))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32153),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32153));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32152),(function (){var attrs32154 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32154))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32154),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32154));
}
})());
}
})(),(function (){var attrs32155 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32155))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32155),(function (){var attrs32156 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32156))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32156),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32156));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32155),(function (){var attrs32157 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32157))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32157),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32157));
}
})());
}
})(),(function (){var attrs32158 = clustermap.formats.money.fmoney.call(null,(function (){var G__32168 = self__.portfolio_company;var G__32168__$1 = (((G__32168 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__32168));return G__32168__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32158))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32158),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32158),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs32163 = clustermap.formats.number.fnum.call(null,(function (){var G__32169 = self__.portfolio_company;var G__32169__$1 = (((G__32169 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__32169));return G__32169__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32163))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32163),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32163),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32150){var self__ = this;
var _32150__$1 = this;return self__.meta32149;
});
clustermap.components.map_report.t32148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32150,meta32149__$1){var self__ = this;
var _32150__$1 = this;return (new clustermap.components.map_report.t32148(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta32149__$1));
});
clustermap.components.map_report.__GT_t32148 = (function __GT_t32148(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta32149){return (new clustermap.components.map_report.t32148(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta32149));
});
}
return (new clustermap.components.map_report.t32148(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__32194 = investor_company;var G__32194__$1 = (((G__32194 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32194));var G__32194__$2 = (((G__32194__$1 == null))?null:cljs.core.count.call(null,G__32194__$1));return G__32194__$2;
})();var const_count = (function (){var G__32195 = investor_company;var G__32195__$1 = (((G__32195 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32195));var G__32195__$2 = (((G__32195__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32195__$1));var G__32195__$3 = (((G__32195__$2 == null))?null:cljs.core.count.call(null,G__32195__$2));return G__32195__$3;
})();if(typeof clustermap.components.map_report.t32196 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32196 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta32197){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta32197 = meta32197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32196.cljs$lang$type = true;
clustermap.components.map_report.t32196.cljs$lang$ctorStr = "clustermap.components.map-report/t32196";
clustermap.components.map_report.t32196.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32196");
});
clustermap.components.map_report.t32196.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32196.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32199 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs32199))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32199),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32199));
}
})()),React.DOM.ul(null,(function (){var attrs32200 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32200))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32200),(function (){var attrs32201 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32201))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32201),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32201));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32200),(function (){var attrs32202 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32202))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32202),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32202));
}
})());
}
})(),(function (){var attrs32203 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32203))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32203),(function (){var attrs32204 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32204))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32204),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32204));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32203),(function (){var attrs32205 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32205))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32205),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32205));
}
})());
}
})(),(function (){var attrs32206 = clustermap.formats.money.fmoney.call(null,(function (){var G__32216 = self__.investor_company;var G__32216__$1 = (((G__32216 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32216));return G__32216__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32206))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32206),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32206),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32211 = clustermap.formats.number.fnum.call(null,(function (){var G__32217 = self__.investor_company;var G__32217__$1 = (((G__32217 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32217));return G__32217__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32211))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32211),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32211),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32198){var self__ = this;
var _32198__$1 = this;return self__.meta32197;
});
clustermap.components.map_report.t32196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32198,meta32197__$1){var self__ = this;
var _32198__$1 = this;return (new clustermap.components.map_report.t32196(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta32197__$1));
});
clustermap.components.map_report.__GT_t32196 = (function __GT_t32196(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32197){return (new clustermap.components.map_report.t32196(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32197));
});
}
return (new clustermap.components.map_report.t32196(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__32243 = constituency;var G__32243__$1 = (((G__32243 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32243));var G__32243__$2 = (((G__32243__$1 == null))?null:cljs.core.count.call(null,G__32243__$1));return G__32243__$2;
})();var ic_count = (function (){var G__32244 = constituency;var G__32244__$1 = (((G__32244 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32244));var G__32244__$2 = (((G__32244__$1 == null))?null:cljs.core.count.call(null,G__32244__$1));return G__32244__$2;
})();if(typeof clustermap.components.map_report.t32245 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32245 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta32246){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta32246 = meta32246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32245.cljs$lang$type = true;
clustermap.components.map_report.t32245.cljs$lang$ctorStr = "clustermap.components.map-report/t32245";
clustermap.components.map_report.t32245.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32245");
});
clustermap.components.map_report.t32245.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32245.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32248 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32248))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32248),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32248));
}
})(),(function (){var attrs32249 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32249))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs32249),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs32249),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs32250 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32250))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32250),(function (){var attrs32251 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32251))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32251),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32251));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32250),(function (){var attrs32252 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32252))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32252),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32252));
}
})());
}
})(),(function (){var attrs32253 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32253))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32253),(function (){var attrs32254 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32254))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32254),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32254));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32253),(function (){var attrs32255 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32255))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32255),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32255));
}
})());
}
})(),(function (){var attrs32256 = clustermap.formats.money.fmoney.call(null,(function (){var G__32266 = self__.constituency;var G__32266__$1 = (((G__32266 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32266));return G__32266__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32256))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32256),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32256),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32261 = clustermap.formats.number.fnum.call(null,(function (){var G__32267 = self__.constituency;var G__32267__$1 = (((G__32267 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32267));return G__32267__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32261))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32261),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32261),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32247){var self__ = this;
var _32247__$1 = this;return self__.meta32246;
});
clustermap.components.map_report.t32245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32247,meta32246__$1){var self__ = this;
var _32247__$1 = this;return (new clustermap.components.map_report.t32245(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta32246__$1));
});
clustermap.components.map_report.__GT_t32245 = (function __GT_t32245(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32246){return (new clustermap.components.map_report.t32245(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32246));
});
}
return (new clustermap.components.map_report.t32245(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__32271 = cljs.core._EQ__EQ_;var expr__32272 = type;if(cljs.core.truth_(pred__32271.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32272)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32271.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32272)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32271.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32272)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
