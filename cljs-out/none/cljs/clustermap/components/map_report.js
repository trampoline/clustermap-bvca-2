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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__11385 = apc_stats;var G__11385__$1 = (((G__11385 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11385));return G__11385__$1;
})();var ic_count = (function (){var G__11386 = apc_stats;var G__11386__$1 = (((G__11386 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11386));return G__11386__$1;
})();if(typeof clustermap.components.map_report.t11387 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11387 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta11388){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11388 = meta11388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11387.cljs$lang$type = true;
clustermap.components.map_report.t11387.cljs$lang$ctorStr = "clustermap.components.map-report/t11387";
clustermap.components.map_report.t11387.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11387");
});
clustermap.components.map_report.t11387.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11387.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11392 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11392))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11392),(function (){var attrs11393 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11393))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11393),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11393));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11392),(function (){var attrs11394 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11394))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11394),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11394));
}
})());
}
})(),(function (){var attrs11395 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11395))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11395),(function (){var attrs11396 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11396))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11396),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11396));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11395),(function (){var attrs11397 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11397))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11397),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11397));
}
})());
}
})(),(function (){var attrs11398 = clustermap.formats.money.fmoney.call(null,(function (){var G__11408 = self__.apc_stats;var G__11408__$1 = (((G__11408 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11408));var G__11408__$2 = (((G__11408__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11408__$1));return G__11408__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11398))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11398),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11398),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11403 = clustermap.formats.number.fnum.call(null,(function (){var G__11409 = self__.apc_stats;var G__11409__$1 = (((G__11409 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11409));var G__11409__$2 = (((G__11409__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11409__$1));return G__11409__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11403))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11403),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11403),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11389){var self__ = this;
var _11389__$1 = this;return self__.meta11388;
});
clustermap.components.map_report.t11387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11389,meta11388__$1){var self__ = this;
var _11389__$1 = this;return (new clustermap.components.map_report.t11387(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11388__$1));
});
clustermap.components.map_report.__GT_t11387 = (function __GT_t11387(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11388){return (new clustermap.components.map_report.t11387(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11388));
});
}
return (new clustermap.components.map_report.t11387(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__11434 = portfolio_company;var G__11434__$1 = (((G__11434 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11434));var G__11434__$2 = (((G__11434__$1 == null))?null:cljs.core.count.call(null,G__11434__$1));return G__11434__$2;
})();var const_count = (function (){var G__11435 = portfolio_company;var G__11435__$1 = (((G__11435 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11435));var G__11435__$2 = (((G__11435__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11435__$1));var G__11435__$3 = (((G__11435__$2 == null))?null:cljs.core.count.call(null,G__11435__$2));return G__11435__$3;
})();if(typeof clustermap.components.map_report.t11436 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11436 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta11437){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11437 = meta11437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11436.cljs$lang$type = true;
clustermap.components.map_report.t11436.cljs$lang$ctorStr = "clustermap.components.map-report/t11436";
clustermap.components.map_report.t11436.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11436");
});
clustermap.components.map_report.t11436.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11436.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11439 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11439))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11439),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11439));
}
})()),React.DOM.ul(null,(function (){var attrs11440 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11440))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11440),(function (){var attrs11441 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11441))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11441),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11441));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11440),(function (){var attrs11442 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11442))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11442),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11442));
}
})());
}
})(),(function (){var attrs11443 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11443))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11443),(function (){var attrs11444 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11444))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11444),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11444));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11443),(function (){var attrs11445 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11445))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11445),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11445));
}
})());
}
})(),(function (){var attrs11446 = clustermap.formats.money.fmoney.call(null,(function (){var G__11456 = self__.portfolio_company;var G__11456__$1 = (((G__11456 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11456));return G__11456__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11446))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11446),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11446),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11451 = clustermap.formats.number.fnum.call(null,(function (){var G__11457 = self__.portfolio_company;var G__11457__$1 = (((G__11457 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11457));return G__11457__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11451))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11451),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11451),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11438){var self__ = this;
var _11438__$1 = this;return self__.meta11437;
});
clustermap.components.map_report.t11436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11438,meta11437__$1){var self__ = this;
var _11438__$1 = this;return (new clustermap.components.map_report.t11436(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta11437__$1));
});
clustermap.components.map_report.__GT_t11436 = (function __GT_t11436(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11437){return (new clustermap.components.map_report.t11436(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11437));
});
}
return (new clustermap.components.map_report.t11436(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__11482 = investor_company;var G__11482__$1 = (((G__11482 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11482));var G__11482__$2 = (((G__11482__$1 == null))?null:cljs.core.count.call(null,G__11482__$1));return G__11482__$2;
})();var const_count = (function (){var G__11483 = investor_company;var G__11483__$1 = (((G__11483 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11483));var G__11483__$2 = (((G__11483__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11483__$1));var G__11483__$3 = (((G__11483__$2 == null))?null:cljs.core.count.call(null,G__11483__$2));return G__11483__$3;
})();if(typeof clustermap.components.map_report.t11484 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11484 = (function (const_count,pc_count,investor_company,investor_company_report,meta11485){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11485 = meta11485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11484.cljs$lang$type = true;
clustermap.components.map_report.t11484.cljs$lang$ctorStr = "clustermap.components.map-report/t11484";
clustermap.components.map_report.t11484.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11484");
});
clustermap.components.map_report.t11484.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11484.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11487 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11487))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11487),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11487));
}
})()),React.DOM.ul(null,(function (){var attrs11488 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11488))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11488),(function (){var attrs11489 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11489))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11489),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11489));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11488),(function (){var attrs11490 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11490))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11490),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11490));
}
})());
}
})(),(function (){var attrs11491 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11491))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11491),(function (){var attrs11492 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11492))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11492),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11492));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11491),(function (){var attrs11493 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11493))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11493),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11493));
}
})());
}
})(),(function (){var attrs11494 = clustermap.formats.money.fmoney.call(null,(function (){var G__11504 = self__.investor_company;var G__11504__$1 = (((G__11504 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11504));return G__11504__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11494))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11494),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11494),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11499 = clustermap.formats.number.fnum.call(null,(function (){var G__11505 = self__.investor_company;var G__11505__$1 = (((G__11505 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11505));return G__11505__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11499))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11499),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11499),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11486){var self__ = this;
var _11486__$1 = this;return self__.meta11485;
});
clustermap.components.map_report.t11484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11486,meta11485__$1){var self__ = this;
var _11486__$1 = this;return (new clustermap.components.map_report.t11484(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta11485__$1));
});
clustermap.components.map_report.__GT_t11484 = (function __GT_t11484(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11485){return (new clustermap.components.map_report.t11484(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11485));
});
}
return (new clustermap.components.map_report.t11484(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__11531 = constituency;var G__11531__$1 = (((G__11531 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11531));var G__11531__$2 = (((G__11531__$1 == null))?null:cljs.core.count.call(null,G__11531__$1));return G__11531__$2;
})();var ic_count = (function (){var G__11532 = constituency;var G__11532__$1 = (((G__11532 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11532));var G__11532__$2 = (((G__11532__$1 == null))?null:cljs.core.count.call(null,G__11532__$1));return G__11532__$2;
})();if(typeof clustermap.components.map_report.t11533 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11533 = (function (ic_count,pc_count,constituency,constituency_report,meta11534){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11534 = meta11534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11533.cljs$lang$type = true;
clustermap.components.map_report.t11533.cljs$lang$ctorStr = "clustermap.components.map-report/t11533";
clustermap.components.map_report.t11533.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11533");
});
clustermap.components.map_report.t11533.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11533.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11536 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11536))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11536),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11536));
}
})(),(function (){var attrs11537 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11537))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11537),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11537),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11538 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11538))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11538),(function (){var attrs11539 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11539))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11539),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11539));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11538),(function (){var attrs11540 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11540))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11540),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11540));
}
})());
}
})(),(function (){var attrs11541 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11541))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11541),(function (){var attrs11542 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11542))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11542),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11542));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11541),(function (){var attrs11543 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11543))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11543),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11543));
}
})());
}
})(),(function (){var attrs11544 = clustermap.formats.money.fmoney.call(null,(function (){var G__11554 = self__.constituency;var G__11554__$1 = (((G__11554 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11554));return G__11554__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11544))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11544),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11544),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11549 = clustermap.formats.number.fnum.call(null,(function (){var G__11555 = self__.constituency;var G__11555__$1 = (((G__11555 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11555));return G__11555__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11549))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11549),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11549),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11535){var self__ = this;
var _11535__$1 = this;return self__.meta11534;
});
clustermap.components.map_report.t11533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11535,meta11534__$1){var self__ = this;
var _11535__$1 = this;return (new clustermap.components.map_report.t11533(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta11534__$1));
});
clustermap.components.map_report.__GT_t11533 = (function __GT_t11533(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11534){return (new clustermap.components.map_report.t11533(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11534));
});
}
return (new clustermap.components.map_report.t11533(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11559 = cljs.core._EQ__EQ_;var expr__11560 = type;if(cljs.core.truth_(pred__11559.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11560)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11559.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11560)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11559.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11560)))
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