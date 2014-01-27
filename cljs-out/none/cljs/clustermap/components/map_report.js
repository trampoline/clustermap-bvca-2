// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
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
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__11292 = apc_stats;var G__11292__$1 = (((G__11292 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11292));return G__11292__$1;
})();var ic_count = (function (){var G__11293 = apc_stats;var G__11293__$1 = (((G__11293 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11293));return G__11293__$1;
})();if(typeof clustermap.components.map_report.t11294 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11294 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta11295){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11295 = meta11295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11294.cljs$lang$type = true;
clustermap.components.map_report.t11294.cljs$lang$ctorStr = "clustermap.components.map-report/t11294";
clustermap.components.map_report.t11294.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11294");
});
clustermap.components.map_report.t11294.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11294.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11299 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11299))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11299),(function (){var attrs11300 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11300))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11300),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11300));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11299),(function (){var attrs11301 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11301))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11301),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11301));
}
})());
}
})(),(function (){var attrs11302 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11302))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11302),(function (){var attrs11303 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11303))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11303),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11303));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11302),(function (){var attrs11304 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11304))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11304),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11304));
}
})());
}
})(),(function (){var attrs11305 = clustermap.formats.money.fmoney.call(null,(function (){var G__11315 = self__.apc_stats;var G__11315__$1 = (((G__11315 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11315));var G__11315__$2 = (((G__11315__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11315__$1));return G__11315__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11305))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11305),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11305),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11310 = clustermap.formats.number.fnum.call(null,(function (){var G__11316 = self__.apc_stats;var G__11316__$1 = (((G__11316 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11316));var G__11316__$2 = (((G__11316__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11316__$1));return G__11316__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11310))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11310),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11310),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11296){var self__ = this;
var _11296__$1 = this;return self__.meta11295;
});
clustermap.components.map_report.t11294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11296,meta11295__$1){var self__ = this;
var _11296__$1 = this;return (new clustermap.components.map_report.t11294(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11295__$1));
});
clustermap.components.map_report.__GT_t11294 = (function __GT_t11294(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11295){return (new clustermap.components.map_report.t11294(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11295));
});
}
return (new clustermap.components.map_report.t11294(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__11341 = portfolio_company;var G__11341__$1 = (((G__11341 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11341));var G__11341__$2 = (((G__11341__$1 == null))?null:cljs.core.count.call(null,G__11341__$1));return G__11341__$2;
})();var const_count = (function (){var G__11342 = portfolio_company;var G__11342__$1 = (((G__11342 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11342));var G__11342__$2 = (((G__11342__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11342__$1));var G__11342__$3 = (((G__11342__$2 == null))?null:cljs.core.count.call(null,G__11342__$2));return G__11342__$3;
})();if(typeof clustermap.components.map_report.t11343 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11343 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta11344){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11344 = meta11344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11343.cljs$lang$type = true;
clustermap.components.map_report.t11343.cljs$lang$ctorStr = "clustermap.components.map-report/t11343";
clustermap.components.map_report.t11343.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11343");
});
clustermap.components.map_report.t11343.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11343.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11346 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11346))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11346),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11346));
}
})()),React.DOM.ul(null,(function (){var attrs11347 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11347))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11347),(function (){var attrs11348 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11348))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11348),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11348));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11347),(function (){var attrs11349 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11349))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11349),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11349));
}
})());
}
})(),(function (){var attrs11350 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11350))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11350),(function (){var attrs11351 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11351))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11351),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11351));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11350),(function (){var attrs11352 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11352))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11352),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11352));
}
})());
}
})(),(function (){var attrs11353 = clustermap.formats.money.fmoney.call(null,(function (){var G__11363 = self__.portfolio_company;var G__11363__$1 = (((G__11363 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11363));return G__11363__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11353))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11353),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11353),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11358 = clustermap.formats.number.fnum.call(null,(function (){var G__11364 = self__.portfolio_company;var G__11364__$1 = (((G__11364 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11364));return G__11364__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11358))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11358),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11358),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11345){var self__ = this;
var _11345__$1 = this;return self__.meta11344;
});
clustermap.components.map_report.t11343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11345,meta11344__$1){var self__ = this;
var _11345__$1 = this;return (new clustermap.components.map_report.t11343(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta11344__$1));
});
clustermap.components.map_report.__GT_t11343 = (function __GT_t11343(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11344){return (new clustermap.components.map_report.t11343(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11344));
});
}
return (new clustermap.components.map_report.t11343(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__11389 = investor_company;var G__11389__$1 = (((G__11389 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11389));var G__11389__$2 = (((G__11389__$1 == null))?null:cljs.core.count.call(null,G__11389__$1));return G__11389__$2;
})();var const_count = (function (){var G__11390 = investor_company;var G__11390__$1 = (((G__11390 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11390));var G__11390__$2 = (((G__11390__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11390__$1));var G__11390__$3 = (((G__11390__$2 == null))?null:cljs.core.count.call(null,G__11390__$2));return G__11390__$3;
})();if(typeof clustermap.components.map_report.t11391 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11391 = (function (const_count,pc_count,investor_company,investor_company_report,meta11392){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11392 = meta11392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11391.cljs$lang$type = true;
clustermap.components.map_report.t11391.cljs$lang$ctorStr = "clustermap.components.map-report/t11391";
clustermap.components.map_report.t11391.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11391");
});
clustermap.components.map_report.t11391.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11391.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11394 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11394))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11394),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11394));
}
})()),React.DOM.ul(null,(function (){var attrs11395 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11395))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11395),(function (){var attrs11396 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11396))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11396),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11396));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11395),(function (){var attrs11397 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11397))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11397),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11397));
}
})());
}
})(),(function (){var attrs11398 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11398))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11398),(function (){var attrs11399 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11399))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11399),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11399));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11398),(function (){var attrs11400 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11400))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11400),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11400));
}
})());
}
})(),(function (){var attrs11401 = clustermap.formats.money.fmoney.call(null,(function (){var G__11411 = self__.investor_company;var G__11411__$1 = (((G__11411 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11411));return G__11411__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11401))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11401),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11401),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11406 = clustermap.formats.number.fnum.call(null,(function (){var G__11412 = self__.investor_company;var G__11412__$1 = (((G__11412 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11412));return G__11412__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11406))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11406),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11406),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11393){var self__ = this;
var _11393__$1 = this;return self__.meta11392;
});
clustermap.components.map_report.t11391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11393,meta11392__$1){var self__ = this;
var _11393__$1 = this;return (new clustermap.components.map_report.t11391(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta11392__$1));
});
clustermap.components.map_report.__GT_t11391 = (function __GT_t11391(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11392){return (new clustermap.components.map_report.t11391(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11392));
});
}
return (new clustermap.components.map_report.t11391(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__11438 = constituency;var G__11438__$1 = (((G__11438 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11438));var G__11438__$2 = (((G__11438__$1 == null))?null:cljs.core.count.call(null,G__11438__$1));return G__11438__$2;
})();var ic_count = (function (){var G__11439 = constituency;var G__11439__$1 = (((G__11439 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11439));var G__11439__$2 = (((G__11439__$1 == null))?null:cljs.core.count.call(null,G__11439__$1));return G__11439__$2;
})();if(typeof clustermap.components.map_report.t11440 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11440 = (function (ic_count,pc_count,constituency,constituency_report,meta11441){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11441 = meta11441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11440.cljs$lang$type = true;
clustermap.components.map_report.t11440.cljs$lang$ctorStr = "clustermap.components.map-report/t11440";
clustermap.components.map_report.t11440.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11440");
});
clustermap.components.map_report.t11440.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11440.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11443 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11443))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11443),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11443));
}
})(),(function (){var attrs11444 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11444))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11444),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11444),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11445 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11445))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11445),(function (){var attrs11446 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11446))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11446),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11446));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11445),(function (){var attrs11447 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11447))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11447),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11447));
}
})());
}
})(),(function (){var attrs11448 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11448))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11448),(function (){var attrs11449 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11449))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11449),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11449));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11448),(function (){var attrs11450 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11450))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11450),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11450));
}
})());
}
})(),(function (){var attrs11451 = clustermap.formats.money.fmoney.call(null,(function (){var G__11461 = self__.constituency;var G__11461__$1 = (((G__11461 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11461));return G__11461__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11451))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11451),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11451),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11456 = clustermap.formats.number.fnum.call(null,(function (){var G__11462 = self__.constituency;var G__11462__$1 = (((G__11462 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11462));return G__11462__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11456))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11456),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11456),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11442){var self__ = this;
var _11442__$1 = this;return self__.meta11441;
});
clustermap.components.map_report.t11440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11442,meta11441__$1){var self__ = this;
var _11442__$1 = this;return (new clustermap.components.map_report.t11440(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta11441__$1));
});
clustermap.components.map_report.__GT_t11440 = (function __GT_t11440(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11441){return (new clustermap.components.map_report.t11440(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11441));
});
}
return (new clustermap.components.map_report.t11440(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11466 = cljs.core._EQ__EQ_;var expr__11467 = type;if(cljs.core.truth_(pred__11466.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11467)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11466.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11467)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11466.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11467)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map