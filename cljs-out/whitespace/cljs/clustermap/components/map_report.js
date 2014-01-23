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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_stats = new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data);var pc_count = (function (){var G__11218 = pc_stats;var G__11218__$1 = (((G__11218 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11218));return G__11218__$1;
})();var ic_count = (function (){var G__11219 = pc_stats;var G__11219__$1 = (((G__11219 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11219));return G__11219__$1;
})();if(typeof clustermap.components.map_report.t11220 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11220 = (function (ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,meta11221){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.pc_stats = pc_stats;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11221 = meta11221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11220.cljs$lang$type = true;
clustermap.components.map_report.t11220.cljs$lang$ctorStr = "clustermap.components.map-report/t11220";
clustermap.components.map_report.t11220.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11220");
});
clustermap.components.map_report.t11220.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11220.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11225 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11225))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11225),(function (){var attrs11226 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11226))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11226),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11226));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11225),(function (){var attrs11227 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11227))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11227),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11227));
}
})());
}
})(),(function (){var attrs11228 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11228))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11228),(function (){var attrs11229 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11229))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11229),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11229));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11228),(function (){var attrs11230 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11230))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11230),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11230));
}
})());
}
})(),(function (){var attrs11231 = clustermap.formats.money.fmoney.call(null,(function (){var G__11241 = self__.pc_stats;var G__11241__$1 = (((G__11241 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11241));var G__11241__$2 = (((G__11241__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11241__$1));return G__11241__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11231))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11231),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11231),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11236 = clustermap.formats.number.fnum.call(null,(function (){var G__11242 = self__.pc_stats;var G__11242__$1 = (((G__11242 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11242));var G__11242__$2 = (((G__11242__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11242__$1));return G__11242__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11236))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11236),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11236),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11222){var self__ = this;
var _11222__$1 = this;return self__.meta11221;
});
clustermap.components.map_report.t11220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11222,meta11221__$1){var self__ = this;
var _11222__$1 = this;return (new clustermap.components.map_report.t11220(self__.ic_count,self__.pc_count,self__.pc_stats,self__.data,self__.all_portfolio_companies_summary_report,meta11221__$1));
});
clustermap.components.map_report.__GT_t11220 = (function __GT_t11220(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11221){return (new clustermap.components.map_report.t11220(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11221));
});
}
return (new clustermap.components.map_report.t11220(ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(data){var ic_count = (function (){var G__11267 = data;var G__11267__$1 = (((G__11267 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11267));var G__11267__$2 = (((G__11267__$1 == null))?null:cljs.core.count.call(null,G__11267__$1));return G__11267__$2;
})();var const_count = (function (){var G__11268 = data;var G__11268__$1 = (((G__11268 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11268));var G__11268__$2 = (((G__11268__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11268__$1));var G__11268__$3 = (((G__11268__$2 == null))?null:cljs.core.count.call(null,G__11268__$2));return G__11268__$3;
})();if(typeof clustermap.components.map_report.t11269 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11269 = (function (const_count,ic_count,data,portfolio_company_report,meta11270){
this.const_count = const_count;
this.ic_count = ic_count;
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta11270 = meta11270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11269.cljs$lang$type = true;
clustermap.components.map_report.t11269.cljs$lang$ctorStr = "clustermap.components.map-report/t11269";
clustermap.components.map_report.t11269.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11269");
});
clustermap.components.map_report.t11269.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11269.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11272 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_.call(null,attrs11272))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11272),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11272));
}
})()),React.DOM.ul(null,(function (){var attrs11273 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11273))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11273),(function (){var attrs11274 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11274))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11274),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11274));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11273),(function (){var attrs11275 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11275))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11275),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11275));
}
})());
}
})(),(function (){var attrs11276 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11276))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11276),(function (){var attrs11277 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11277))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11277),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11277));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11276),(function (){var attrs11278 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11278))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11278),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11278));
}
})());
}
})(),(function (){var attrs11279 = clustermap.formats.money.fmoney.call(null,(function (){var G__11289 = self__.data;var G__11289__$1 = (((G__11289 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11289));return G__11289__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11279))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11279),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11279),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11284 = clustermap.formats.number.fnum.call(null,(function (){var G__11290 = self__.data;var G__11290__$1 = (((G__11290 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11290));return G__11290__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11284))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11284),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11284),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11271){var self__ = this;
var _11271__$1 = this;return self__.meta11270;
});
clustermap.components.map_report.t11269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11271,meta11270__$1){var self__ = this;
var _11271__$1 = this;return (new clustermap.components.map_report.t11269(self__.const_count,self__.ic_count,self__.data,self__.portfolio_company_report,meta11270__$1));
});
clustermap.components.map_report.__GT_t11269 = (function __GT_t11269(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta11270){return (new clustermap.components.map_report.t11269(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta11270));
});
}
return (new clustermap.components.map_report.t11269(const_count,ic_count,data,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(data){var pc_count = (function (){var G__11315 = data;var G__11315__$1 = (((G__11315 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11315));var G__11315__$2 = (((G__11315__$1 == null))?null:cljs.core.count.call(null,G__11315__$1));return G__11315__$2;
})();var const_count = (function (){var G__11316 = data;var G__11316__$1 = (((G__11316 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11316));var G__11316__$2 = (((G__11316__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11316__$1));var G__11316__$3 = (((G__11316__$2 == null))?null:cljs.core.count.call(null,G__11316__$2));return G__11316__$3;
})();if(typeof clustermap.components.map_report.t11317 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11317 = (function (const_count,pc_count,data,investor_company_report,meta11318){
this.const_count = const_count;
this.pc_count = pc_count;
this.data = data;
this.investor_company_report = investor_company_report;
this.meta11318 = meta11318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11317.cljs$lang$type = true;
clustermap.components.map_report.t11317.cljs$lang$ctorStr = "clustermap.components.map-report/t11317";
clustermap.components.map_report.t11317.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11317");
});
clustermap.components.map_report.t11317.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11317.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11320 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_.call(null,attrs11320))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11320),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11320));
}
})()),React.DOM.ul(null,(function (){var attrs11321 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11321))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11321),(function (){var attrs11322 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11322))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11322),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11322));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11321),(function (){var attrs11323 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11323))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11323),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11323));
}
})());
}
})(),(function (){var attrs11324 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11324))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11324),(function (){var attrs11325 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11325))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11325),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11325));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11324),(function (){var attrs11326 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11326))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11326),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11326));
}
})());
}
})(),(function (){var attrs11327 = clustermap.formats.money.fmoney.call(null,(function (){var G__11337 = self__.data;var G__11337__$1 = (((G__11337 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11337));return G__11337__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11327))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11327),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11327),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11332 = clustermap.formats.number.fnum.call(null,(function (){var G__11338 = self__.data;var G__11338__$1 = (((G__11338 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11338));return G__11338__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11332))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11332),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11332),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11319){var self__ = this;
var _11319__$1 = this;return self__.meta11318;
});
clustermap.components.map_report.t11317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11319,meta11318__$1){var self__ = this;
var _11319__$1 = this;return (new clustermap.components.map_report.t11317(self__.const_count,self__.pc_count,self__.data,self__.investor_company_report,meta11318__$1));
});
clustermap.components.map_report.__GT_t11317 = (function __GT_t11317(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta11318){return (new clustermap.components.map_report.t11317(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta11318));
});
}
return (new clustermap.components.map_report.t11317(const_count,pc_count,data,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(data){var pc_count = (function (){var G__11364 = data;var G__11364__$1 = (((G__11364 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11364));var G__11364__$2 = (((G__11364__$1 == null))?null:cljs.core.count.call(null,G__11364__$1));return G__11364__$2;
})();var ic_count = (function (){var G__11365 = data;var G__11365__$1 = (((G__11365 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11365));var G__11365__$2 = (((G__11365__$1 == null))?null:cljs.core.count.call(null,G__11365__$1));return G__11365__$2;
})();if(typeof clustermap.components.map_report.t11366 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11366 = (function (ic_count,pc_count,data,constituency_report,meta11367){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.data = data;
this.constituency_report = constituency_report;
this.meta11367 = meta11367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11366.cljs$lang$type = true;
clustermap.components.map_report.t11366.cljs$lang$ctorStr = "clustermap.components.map-report/t11366";
clustermap.components.map_report.t11366.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11366");
});
clustermap.components.map_report.t11366.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11366.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11369 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_.call(null,attrs11369))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11369),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11369));
}
})(),(function (){var attrs11370 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_.call(null,attrs11370))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11370),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.data)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11370),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.data)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11371 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11371))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11371),(function (){var attrs11372 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11372))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11372),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11372));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11371),(function (){var attrs11373 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11373))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11373),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11373));
}
})());
}
})(),(function (){var attrs11374 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11374))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11374),(function (){var attrs11375 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11375))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11375),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11375));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11374),(function (){var attrs11376 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11376))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11376),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11376));
}
})());
}
})(),(function (){var attrs11377 = clustermap.formats.money.fmoney.call(null,(function (){var G__11387 = self__.data;var G__11387__$1 = (((G__11387 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11387));return G__11387__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11377))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11377),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11377),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11382 = clustermap.formats.number.fnum.call(null,(function (){var G__11388 = self__.data;var G__11388__$1 = (((G__11388 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11388));return G__11388__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11382))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11382),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11382),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11368){var self__ = this;
var _11368__$1 = this;return self__.meta11367;
});
clustermap.components.map_report.t11366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11368,meta11367__$1){var self__ = this;
var _11368__$1 = this;return (new clustermap.components.map_report.t11366(self__.ic_count,self__.pc_count,self__.data,self__.constituency_report,meta11367__$1));
});
clustermap.components.map_report.__GT_t11366 = (function __GT_t11366(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta11367){return (new clustermap.components.map_report.t11366(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta11367));
});
}
return (new clustermap.components.map_report.t11366(ic_count,pc_count,data,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11392 = cljs.core._EQ__EQ_;var expr__11393 = type;if(cljs.core.truth_(pred__11392.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11393)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11392.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11393)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11392.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11393)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
