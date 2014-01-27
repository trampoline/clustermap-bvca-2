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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__11294 = apc_stats;var G__11294__$1 = (((G__11294 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11294));return G__11294__$1;
})();var ic_count = (function (){var G__11295 = apc_stats;var G__11295__$1 = (((G__11295 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11295));return G__11295__$1;
})();if(typeof clustermap.components.map_report.t11296 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11296 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta11297){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11297 = meta11297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11296.cljs$lang$type = true;
clustermap.components.map_report.t11296.cljs$lang$ctorStr = "clustermap.components.map-report/t11296";
clustermap.components.map_report.t11296.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11296");
});
clustermap.components.map_report.t11296.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11296.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11301 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11301))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11301),(function (){var attrs11302 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11302))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11302),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11302));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11301),(function (){var attrs11303 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11303))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11303),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11303));
}
})());
}
})(),(function (){var attrs11304 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11304))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11304),(function (){var attrs11305 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11305))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11305),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11305));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11304),(function (){var attrs11306 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11306))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11306),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11306));
}
})());
}
})(),(function (){var attrs11307 = clustermap.formats.money.fmoney.call(null,(function (){var G__11317 = self__.apc_stats;var G__11317__$1 = (((G__11317 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11317));var G__11317__$2 = (((G__11317__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11317__$1));return G__11317__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11307))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11307),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11307),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11312 = clustermap.formats.number.fnum.call(null,(function (){var G__11318 = self__.apc_stats;var G__11318__$1 = (((G__11318 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11318));var G__11318__$2 = (((G__11318__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11318__$1));return G__11318__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11312))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11312),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11312),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11298){var self__ = this;
var _11298__$1 = this;return self__.meta11297;
});
clustermap.components.map_report.t11296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11298,meta11297__$1){var self__ = this;
var _11298__$1 = this;return (new clustermap.components.map_report.t11296(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11297__$1));
});
clustermap.components.map_report.__GT_t11296 = (function __GT_t11296(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11297){return (new clustermap.components.map_report.t11296(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11297));
});
}
return (new clustermap.components.map_report.t11296(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__11343 = portfolio_company;var G__11343__$1 = (((G__11343 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11343));var G__11343__$2 = (((G__11343__$1 == null))?null:cljs.core.count.call(null,G__11343__$1));return G__11343__$2;
})();var const_count = (function (){var G__11344 = portfolio_company;var G__11344__$1 = (((G__11344 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11344));var G__11344__$2 = (((G__11344__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11344__$1));var G__11344__$3 = (((G__11344__$2 == null))?null:cljs.core.count.call(null,G__11344__$2));return G__11344__$3;
})();if(typeof clustermap.components.map_report.t11345 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11345 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta11346){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11346 = meta11346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11345.cljs$lang$type = true;
clustermap.components.map_report.t11345.cljs$lang$ctorStr = "clustermap.components.map-report/t11345";
clustermap.components.map_report.t11345.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11345");
});
clustermap.components.map_report.t11345.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11345.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11348 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11348))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11348),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11348));
}
})()),React.DOM.ul(null,(function (){var attrs11349 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11349))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11349),(function (){var attrs11350 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11350))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11350),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11350));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11349),(function (){var attrs11351 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11351))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11351),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11351));
}
})());
}
})(),(function (){var attrs11352 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11352))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11352),(function (){var attrs11353 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11353))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11353),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11353));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11352),(function (){var attrs11354 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11354))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11354),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11354));
}
})());
}
})(),(function (){var attrs11355 = clustermap.formats.money.fmoney.call(null,(function (){var G__11365 = self__.portfolio_company;var G__11365__$1 = (((G__11365 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11365));return G__11365__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11355))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11355),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11355),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11360 = clustermap.formats.number.fnum.call(null,(function (){var G__11366 = self__.portfolio_company;var G__11366__$1 = (((G__11366 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11366));return G__11366__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11360))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11360),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11360),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11347){var self__ = this;
var _11347__$1 = this;return self__.meta11346;
});
clustermap.components.map_report.t11345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11347,meta11346__$1){var self__ = this;
var _11347__$1 = this;return (new clustermap.components.map_report.t11345(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta11346__$1));
});
clustermap.components.map_report.__GT_t11345 = (function __GT_t11345(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11346){return (new clustermap.components.map_report.t11345(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11346));
});
}
return (new clustermap.components.map_report.t11345(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__11391 = investor_company;var G__11391__$1 = (((G__11391 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11391));var G__11391__$2 = (((G__11391__$1 == null))?null:cljs.core.count.call(null,G__11391__$1));return G__11391__$2;
})();var const_count = (function (){var G__11392 = investor_company;var G__11392__$1 = (((G__11392 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11392));var G__11392__$2 = (((G__11392__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11392__$1));var G__11392__$3 = (((G__11392__$2 == null))?null:cljs.core.count.call(null,G__11392__$2));return G__11392__$3;
})();if(typeof clustermap.components.map_report.t11393 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11393 = (function (const_count,pc_count,investor_company,investor_company_report,meta11394){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11394 = meta11394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11393.cljs$lang$type = true;
clustermap.components.map_report.t11393.cljs$lang$ctorStr = "clustermap.components.map-report/t11393";
clustermap.components.map_report.t11393.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11393");
});
clustermap.components.map_report.t11393.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11393.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11396 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11396))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11396),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11396));
}
})()),React.DOM.ul(null,(function (){var attrs11397 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11397))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11397),(function (){var attrs11398 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11398))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11398),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11398));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11397),(function (){var attrs11399 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11399))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11399),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11399));
}
})());
}
})(),(function (){var attrs11400 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11400))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11400),(function (){var attrs11401 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11401))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11401),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11401));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11400),(function (){var attrs11402 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11402))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11402),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11402));
}
})());
}
})(),(function (){var attrs11403 = clustermap.formats.money.fmoney.call(null,(function (){var G__11413 = self__.investor_company;var G__11413__$1 = (((G__11413 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11413));return G__11413__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11403))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11403),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11403),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11408 = clustermap.formats.number.fnum.call(null,(function (){var G__11414 = self__.investor_company;var G__11414__$1 = (((G__11414 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11414));return G__11414__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11408))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11408),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11408),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11395){var self__ = this;
var _11395__$1 = this;return self__.meta11394;
});
clustermap.components.map_report.t11393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11395,meta11394__$1){var self__ = this;
var _11395__$1 = this;return (new clustermap.components.map_report.t11393(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta11394__$1));
});
clustermap.components.map_report.__GT_t11393 = (function __GT_t11393(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11394){return (new clustermap.components.map_report.t11393(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11394));
});
}
return (new clustermap.components.map_report.t11393(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__11440 = constituency;var G__11440__$1 = (((G__11440 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11440));var G__11440__$2 = (((G__11440__$1 == null))?null:cljs.core.count.call(null,G__11440__$1));return G__11440__$2;
})();var ic_count = (function (){var G__11441 = constituency;var G__11441__$1 = (((G__11441 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11441));var G__11441__$2 = (((G__11441__$1 == null))?null:cljs.core.count.call(null,G__11441__$1));return G__11441__$2;
})();if(typeof clustermap.components.map_report.t11442 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11442 = (function (ic_count,pc_count,constituency,constituency_report,meta11443){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11443 = meta11443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11442.cljs$lang$type = true;
clustermap.components.map_report.t11442.cljs$lang$ctorStr = "clustermap.components.map-report/t11442";
clustermap.components.map_report.t11442.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11442");
});
clustermap.components.map_report.t11442.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11442.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11445 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11445))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11445),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11445));
}
})(),(function (){var attrs11446 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11446))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11446),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11446),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11447 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11447))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11447),(function (){var attrs11448 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11448))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11448),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11448));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11447),(function (){var attrs11449 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11449))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11449),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11449));
}
})());
}
})(),(function (){var attrs11450 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11450))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11450),(function (){var attrs11451 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11451))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11451),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11451));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11450),(function (){var attrs11452 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11452))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11452),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11452));
}
})());
}
})(),(function (){var attrs11453 = clustermap.formats.money.fmoney.call(null,(function (){var G__11463 = self__.constituency;var G__11463__$1 = (((G__11463 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11463));return G__11463__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11453))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11453),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11453),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11458 = clustermap.formats.number.fnum.call(null,(function (){var G__11464 = self__.constituency;var G__11464__$1 = (((G__11464 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11464));return G__11464__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11458))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11458),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11458),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11444){var self__ = this;
var _11444__$1 = this;return self__.meta11443;
});
clustermap.components.map_report.t11442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11444,meta11443__$1){var self__ = this;
var _11444__$1 = this;return (new clustermap.components.map_report.t11442(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta11443__$1));
});
clustermap.components.map_report.__GT_t11442 = (function __GT_t11442(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11443){return (new clustermap.components.map_report.t11442(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11443));
});
}
return (new clustermap.components.map_report.t11442(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11468 = cljs.core._EQ__EQ_;var expr__11469 = type;if(cljs.core.truth_(pred__11468.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11469)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11468.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11469)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11468.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11469)))
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