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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__11313 = apc_stats;var G__11313__$1 = (((G__11313 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11313));return G__11313__$1;
})();var ic_count = (function (){var G__11314 = apc_stats;var G__11314__$1 = (((G__11314 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11314));return G__11314__$1;
})();if(typeof clustermap.components.map_report.t11315 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11315 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta11316){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11316 = meta11316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11315.cljs$lang$type = true;
clustermap.components.map_report.t11315.cljs$lang$ctorStr = "clustermap.components.map-report/t11315";
clustermap.components.map_report.t11315.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11315");
});
clustermap.components.map_report.t11315.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11315.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11320 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11320))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11320),(function (){var attrs11321 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11321))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11321),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11321));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11320),(function (){var attrs11322 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11322))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11322),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11322));
}
})());
}
})(),(function (){var attrs11323 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11323))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11323),(function (){var attrs11324 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11324))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11324),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11324));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11323),(function (){var attrs11325 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11325))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11325),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11325));
}
})());
}
})(),(function (){var attrs11326 = clustermap.formats.money.fmoney.call(null,(function (){var G__11336 = self__.apc_stats;var G__11336__$1 = (((G__11336 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11336));var G__11336__$2 = (((G__11336__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11336__$1));return G__11336__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11326))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11326),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11326),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11331 = clustermap.formats.number.fnum.call(null,(function (){var G__11337 = self__.apc_stats;var G__11337__$1 = (((G__11337 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11337));var G__11337__$2 = (((G__11337__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11337__$1));return G__11337__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11331))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11331),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11331),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11317){var self__ = this;
var _11317__$1 = this;return self__.meta11316;
});
clustermap.components.map_report.t11315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11317,meta11316__$1){var self__ = this;
var _11317__$1 = this;return (new clustermap.components.map_report.t11315(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11316__$1));
});
clustermap.components.map_report.__GT_t11315 = (function __GT_t11315(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11316){return (new clustermap.components.map_report.t11315(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11316));
});
}
return (new clustermap.components.map_report.t11315(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__11362 = portfolio_company;var G__11362__$1 = (((G__11362 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11362));var G__11362__$2 = (((G__11362__$1 == null))?null:cljs.core.count.call(null,G__11362__$1));return G__11362__$2;
})();var const_count = (function (){var G__11363 = portfolio_company;var G__11363__$1 = (((G__11363 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11363));var G__11363__$2 = (((G__11363__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11363__$1));var G__11363__$3 = (((G__11363__$2 == null))?null:cljs.core.count.call(null,G__11363__$2));return G__11363__$3;
})();if(typeof clustermap.components.map_report.t11364 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11364 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta11365){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11365 = meta11365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11364.cljs$lang$type = true;
clustermap.components.map_report.t11364.cljs$lang$ctorStr = "clustermap.components.map-report/t11364";
clustermap.components.map_report.t11364.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11364");
});
clustermap.components.map_report.t11364.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11364.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11367 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11367))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11367),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11367));
}
})()),React.DOM.ul(null,(function (){var attrs11368 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11368))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11368),(function (){var attrs11369 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11369))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11369),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11369));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11368),(function (){var attrs11370 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11370))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11370),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11370));
}
})());
}
})(),(function (){var attrs11371 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11371))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11371),(function (){var attrs11372 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11372))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11372),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11372));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11371),(function (){var attrs11373 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11373))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11373),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11373));
}
})());
}
})(),(function (){var attrs11374 = clustermap.formats.money.fmoney.call(null,(function (){var G__11384 = self__.portfolio_company;var G__11384__$1 = (((G__11384 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11384));return G__11384__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11374))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11374),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11374),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11379 = clustermap.formats.number.fnum.call(null,(function (){var G__11385 = self__.portfolio_company;var G__11385__$1 = (((G__11385 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11385));return G__11385__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11379))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11379),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11379),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11366){var self__ = this;
var _11366__$1 = this;return self__.meta11365;
});
clustermap.components.map_report.t11364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11366,meta11365__$1){var self__ = this;
var _11366__$1 = this;return (new clustermap.components.map_report.t11364(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta11365__$1));
});
clustermap.components.map_report.__GT_t11364 = (function __GT_t11364(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11365){return (new clustermap.components.map_report.t11364(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11365));
});
}
return (new clustermap.components.map_report.t11364(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__11410 = investor_company;var G__11410__$1 = (((G__11410 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11410));var G__11410__$2 = (((G__11410__$1 == null))?null:cljs.core.count.call(null,G__11410__$1));return G__11410__$2;
})();var const_count = (function (){var G__11411 = investor_company;var G__11411__$1 = (((G__11411 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11411));var G__11411__$2 = (((G__11411__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11411__$1));var G__11411__$3 = (((G__11411__$2 == null))?null:cljs.core.count.call(null,G__11411__$2));return G__11411__$3;
})();if(typeof clustermap.components.map_report.t11412 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11412 = (function (const_count,pc_count,investor_company,investor_company_report,meta11413){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11413 = meta11413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11412.cljs$lang$type = true;
clustermap.components.map_report.t11412.cljs$lang$ctorStr = "clustermap.components.map-report/t11412";
clustermap.components.map_report.t11412.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11412");
});
clustermap.components.map_report.t11412.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11412.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11415 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11415))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11415),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11415));
}
})()),React.DOM.ul(null,(function (){var attrs11416 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11416))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11416),(function (){var attrs11417 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11417))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11417),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11417));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11416),(function (){var attrs11418 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11418))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11418),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11418));
}
})());
}
})(),(function (){var attrs11419 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11419))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11419),(function (){var attrs11420 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11420))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11420),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11420));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11419),(function (){var attrs11421 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11421))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11421),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11421));
}
})());
}
})(),(function (){var attrs11422 = clustermap.formats.money.fmoney.call(null,(function (){var G__11432 = self__.investor_company;var G__11432__$1 = (((G__11432 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11432));return G__11432__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11422))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11422),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11422),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11427 = clustermap.formats.number.fnum.call(null,(function (){var G__11433 = self__.investor_company;var G__11433__$1 = (((G__11433 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11433));return G__11433__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11427))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11427),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11427),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11414){var self__ = this;
var _11414__$1 = this;return self__.meta11413;
});
clustermap.components.map_report.t11412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11414,meta11413__$1){var self__ = this;
var _11414__$1 = this;return (new clustermap.components.map_report.t11412(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta11413__$1));
});
clustermap.components.map_report.__GT_t11412 = (function __GT_t11412(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11413){return (new clustermap.components.map_report.t11412(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11413));
});
}
return (new clustermap.components.map_report.t11412(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__11459 = constituency;var G__11459__$1 = (((G__11459 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11459));var G__11459__$2 = (((G__11459__$1 == null))?null:cljs.core.count.call(null,G__11459__$1));return G__11459__$2;
})();var ic_count = (function (){var G__11460 = constituency;var G__11460__$1 = (((G__11460 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11460));var G__11460__$2 = (((G__11460__$1 == null))?null:cljs.core.count.call(null,G__11460__$1));return G__11460__$2;
})();if(typeof clustermap.components.map_report.t11461 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11461 = (function (ic_count,pc_count,constituency,constituency_report,meta11462){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11462 = meta11462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11461.cljs$lang$type = true;
clustermap.components.map_report.t11461.cljs$lang$ctorStr = "clustermap.components.map-report/t11461";
clustermap.components.map_report.t11461.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11461");
});
clustermap.components.map_report.t11461.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11461.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11464 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11464))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11464),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11464));
}
})(),(function (){var attrs11465 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11465))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11465),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11465),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11466 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11466))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11466),(function (){var attrs11467 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11467))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11467),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11467));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11466),(function (){var attrs11468 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11468))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11468),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11468));
}
})());
}
})(),(function (){var attrs11469 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11469))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11469),(function (){var attrs11470 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11470))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11470),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11470));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11469),(function (){var attrs11471 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11471))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11471),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11471));
}
})());
}
})(),(function (){var attrs11472 = clustermap.formats.money.fmoney.call(null,(function (){var G__11482 = self__.constituency;var G__11482__$1 = (((G__11482 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11482));return G__11482__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11472))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11472),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11472),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11477 = clustermap.formats.number.fnum.call(null,(function (){var G__11483 = self__.constituency;var G__11483__$1 = (((G__11483 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11483));return G__11483__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11477))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11477),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11477),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11463){var self__ = this;
var _11463__$1 = this;return self__.meta11462;
});
clustermap.components.map_report.t11461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11463,meta11462__$1){var self__ = this;
var _11463__$1 = this;return (new clustermap.components.map_report.t11461(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta11462__$1));
});
clustermap.components.map_report.__GT_t11461 = (function __GT_t11461(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11462){return (new clustermap.components.map_report.t11461(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11462));
});
}
return (new clustermap.components.map_report.t11461(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11487 = cljs.core._EQ__EQ_;var expr__11488 = type;if(cljs.core.truth_(pred__11487.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11488)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11487.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11488)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11487.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11488)))
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