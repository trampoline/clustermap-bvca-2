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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__32283 = apc_stats;var G__32283__$1 = (((G__32283 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32283));return G__32283__$1;
})();var ic_count = (function (){var G__32284 = apc_stats;var G__32284__$1 = (((G__32284 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32284));return G__32284__$1;
})();if(typeof clustermap.components.map_report.t32285 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32285 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta32286){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta32286 = meta32286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32285.cljs$lang$type = true;
clustermap.components.map_report.t32285.cljs$lang$ctorStr = "clustermap.components.map-report/t32285";
clustermap.components.map_report.t32285.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32285");
});
clustermap.components.map_report.t32285.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32285.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs32290 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32290))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32290),(function (){var attrs32291 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32291))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32291),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32291));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32290),(function (){var attrs32292 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32292))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32292),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32292));
}
})());
}
})(),(function (){var attrs32293 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32293))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32293),(function (){var attrs32294 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32294))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32294),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32294));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32293),(function (){var attrs32295 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32295))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32295),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32295));
}
})());
}
})(),(function (){var attrs32296 = clustermap.formats.money.fmoney.call(null,(function (){var G__32306 = self__.apc_stats;var G__32306__$1 = (((G__32306 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32306));var G__32306__$2 = (((G__32306__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32306__$1));return G__32306__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32296))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32296),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32296),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32301 = clustermap.formats.number.fnum.call(null,(function (){var G__32307 = self__.apc_stats;var G__32307__$1 = (((G__32307 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32307));var G__32307__$2 = (((G__32307__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32307__$1));return G__32307__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32301))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32301),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32301),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32287){var self__ = this;
var _32287__$1 = this;return self__.meta32286;
});
clustermap.components.map_report.t32285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32287,meta32286__$1){var self__ = this;
var _32287__$1 = this;return (new clustermap.components.map_report.t32285(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta32286__$1));
});
clustermap.components.map_report.__GT_t32285 = (function __GT_t32285(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta32286){return (new clustermap.components.map_report.t32285(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta32286));
});
}
return (new clustermap.components.map_report.t32285(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__32332 = portfolio_company;var G__32332__$1 = (((G__32332 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32332));var G__32332__$2 = (((G__32332__$1 == null))?null:cljs.core.count.call(null,G__32332__$1));return G__32332__$2;
})();var const_count = (function (){var G__32333 = portfolio_company;var G__32333__$1 = (((G__32333 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32333));var G__32333__$2 = (((G__32333__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32333__$1));var G__32333__$3 = (((G__32333__$2 == null))?null:cljs.core.count.call(null,G__32333__$2));return G__32333__$3;
})();if(typeof clustermap.components.map_report.t32334 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32334 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta32335){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta32335 = meta32335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32334.cljs$lang$type = true;
clustermap.components.map_report.t32334.cljs$lang$ctorStr = "clustermap.components.map-report/t32334";
clustermap.components.map_report.t32334.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32334");
});
clustermap.components.map_report.t32334.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32334.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32337 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs32337))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32337),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32337));
}
})()),React.DOM.ul(null,(function (){var attrs32338 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32338))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32338),(function (){var attrs32339 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32339))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32339),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32339));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32338),(function (){var attrs32340 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32340))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32340),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32340));
}
})());
}
})(),(function (){var attrs32341 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32341))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32341),(function (){var attrs32342 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32342))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32342),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32342));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32341),(function (){var attrs32343 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32343))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32343),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32343));
}
})());
}
})(),(function (){var attrs32344 = clustermap.formats.money.fmoney.call(null,(function (){var G__32354 = self__.portfolio_company;var G__32354__$1 = (((G__32354 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__32354));return G__32354__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32344))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32344),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32344),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs32349 = clustermap.formats.number.fnum.call(null,(function (){var G__32355 = self__.portfolio_company;var G__32355__$1 = (((G__32355 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__32355));return G__32355__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32349))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32349),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32349),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32336){var self__ = this;
var _32336__$1 = this;return self__.meta32335;
});
clustermap.components.map_report.t32334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32336,meta32335__$1){var self__ = this;
var _32336__$1 = this;return (new clustermap.components.map_report.t32334(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta32335__$1));
});
clustermap.components.map_report.__GT_t32334 = (function __GT_t32334(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta32335){return (new clustermap.components.map_report.t32334(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta32335));
});
}
return (new clustermap.components.map_report.t32334(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__32380 = investor_company;var G__32380__$1 = (((G__32380 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32380));var G__32380__$2 = (((G__32380__$1 == null))?null:cljs.core.count.call(null,G__32380__$1));return G__32380__$2;
})();var const_count = (function (){var G__32381 = investor_company;var G__32381__$1 = (((G__32381 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32381));var G__32381__$2 = (((G__32381__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32381__$1));var G__32381__$3 = (((G__32381__$2 == null))?null:cljs.core.count.call(null,G__32381__$2));return G__32381__$3;
})();if(typeof clustermap.components.map_report.t32382 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32382 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta32383){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta32383 = meta32383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32382.cljs$lang$type = true;
clustermap.components.map_report.t32382.cljs$lang$ctorStr = "clustermap.components.map-report/t32382";
clustermap.components.map_report.t32382.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32382");
});
clustermap.components.map_report.t32382.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32382.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32385 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs32385))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32385),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32385));
}
})()),React.DOM.ul(null,(function (){var attrs32386 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32386))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32386),(function (){var attrs32387 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32387))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32387),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32387));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32386),(function (){var attrs32388 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32388))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32388),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32388));
}
})());
}
})(),(function (){var attrs32389 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32389))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32389),(function (){var attrs32390 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32390))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32390),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32390));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32389),(function (){var attrs32391 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32391))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32391),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32391));
}
})());
}
})(),(function (){var attrs32392 = clustermap.formats.money.fmoney.call(null,(function (){var G__32402 = self__.investor_company;var G__32402__$1 = (((G__32402 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32402));return G__32402__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32392))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32392),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32392),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32397 = clustermap.formats.number.fnum.call(null,(function (){var G__32403 = self__.investor_company;var G__32403__$1 = (((G__32403 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32403));return G__32403__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32397))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32397),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32397),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32384){var self__ = this;
var _32384__$1 = this;return self__.meta32383;
});
clustermap.components.map_report.t32382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32384,meta32383__$1){var self__ = this;
var _32384__$1 = this;return (new clustermap.components.map_report.t32382(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta32383__$1));
});
clustermap.components.map_report.__GT_t32382 = (function __GT_t32382(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32383){return (new clustermap.components.map_report.t32382(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32383));
});
}
return (new clustermap.components.map_report.t32382(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__32429 = constituency;var G__32429__$1 = (((G__32429 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32429));var G__32429__$2 = (((G__32429__$1 == null))?null:cljs.core.count.call(null,G__32429__$1));return G__32429__$2;
})();var ic_count = (function (){var G__32430 = constituency;var G__32430__$1 = (((G__32430 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32430));var G__32430__$2 = (((G__32430__$1 == null))?null:cljs.core.count.call(null,G__32430__$1));return G__32430__$2;
})();if(typeof clustermap.components.map_report.t32431 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32431 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta32432){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta32432 = meta32432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32431.cljs$lang$type = true;
clustermap.components.map_report.t32431.cljs$lang$ctorStr = "clustermap.components.map-report/t32431";
clustermap.components.map_report.t32431.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32431");
});
clustermap.components.map_report.t32431.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32431.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32434 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32434))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32434),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32434));
}
})(),(function (){var attrs32435 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32435))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs32435),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs32435),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs32436 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32436))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32436),(function (){var attrs32437 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32437))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32437),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32437));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32436),(function (){var attrs32438 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32438))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32438),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32438));
}
})());
}
})(),(function (){var attrs32439 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32439))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32439),(function (){var attrs32440 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32440))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32440),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32440));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32439),(function (){var attrs32441 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32441))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32441),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32441));
}
})());
}
})(),(function (){var attrs32442 = clustermap.formats.money.fmoney.call(null,(function (){var G__32452 = self__.constituency;var G__32452__$1 = (((G__32452 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32452));return G__32452__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32442))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32442),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32442),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32447 = clustermap.formats.number.fnum.call(null,(function (){var G__32453 = self__.constituency;var G__32453__$1 = (((G__32453 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32453));return G__32453__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32447))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32447),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32447),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32433){var self__ = this;
var _32433__$1 = this;return self__.meta32432;
});
clustermap.components.map_report.t32431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32433,meta32432__$1){var self__ = this;
var _32433__$1 = this;return (new clustermap.components.map_report.t32431(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta32432__$1));
});
clustermap.components.map_report.__GT_t32431 = (function __GT_t32431(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32432){return (new clustermap.components.map_report.t32431(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32432));
});
}
return (new clustermap.components.map_report.t32431(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__32457 = cljs.core._EQ__EQ_;var expr__32458 = type;if(cljs.core.truth_(pred__32457.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32458)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32457.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32458)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32457.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32458)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
