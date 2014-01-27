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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__11169 = apc_stats;var G__11169__$1 = (((G__11169 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11169));return G__11169__$1;
})();var ic_count = (function (){var G__11170 = apc_stats;var G__11170__$1 = (((G__11170 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11170));return G__11170__$1;
})();if(typeof clustermap.components.map_report.t11171 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11171 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta11172){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11172 = meta11172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11171.cljs$lang$type = true;
clustermap.components.map_report.t11171.cljs$lang$ctorStr = "clustermap.components.map-report/t11171";
clustermap.components.map_report.t11171.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11171");
});
clustermap.components.map_report.t11171.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11171.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11176 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11176))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11176),(function (){var attrs11177 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11177))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11177),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11177));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11176),(function (){var attrs11178 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11178))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11178),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11178));
}
})());
}
})(),(function (){var attrs11179 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11179))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11179),(function (){var attrs11180 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11180))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11180),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11180));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11179),(function (){var attrs11181 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11181))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11181),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11181));
}
})());
}
})(),(function (){var attrs11182 = clustermap.formats.money.fmoney.call(null,(function (){var G__11192 = self__.apc_stats;var G__11192__$1 = (((G__11192 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11192));var G__11192__$2 = (((G__11192__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11192__$1));return G__11192__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11182))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11182),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11182),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11187 = clustermap.formats.number.fnum.call(null,(function (){var G__11193 = self__.apc_stats;var G__11193__$1 = (((G__11193 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11193));var G__11193__$2 = (((G__11193__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11193__$1));return G__11193__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11187))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11187),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11187),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11173){var self__ = this;
var _11173__$1 = this;return self__.meta11172;
});
clustermap.components.map_report.t11171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11173,meta11172__$1){var self__ = this;
var _11173__$1 = this;return (new clustermap.components.map_report.t11171(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11172__$1));
});
clustermap.components.map_report.__GT_t11171 = (function __GT_t11171(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11172){return (new clustermap.components.map_report.t11171(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11172));
});
}
return (new clustermap.components.map_report.t11171(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__11218 = portfolio_company;var G__11218__$1 = (((G__11218 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11218));var G__11218__$2 = (((G__11218__$1 == null))?null:cljs.core.count.call(null,G__11218__$1));return G__11218__$2;
})();var const_count = (function (){var G__11219 = portfolio_company;var G__11219__$1 = (((G__11219 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11219));var G__11219__$2 = (((G__11219__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11219__$1));var G__11219__$3 = (((G__11219__$2 == null))?null:cljs.core.count.call(null,G__11219__$2));return G__11219__$3;
})();if(typeof clustermap.components.map_report.t11220 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11220 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta11221){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11221 = meta11221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11220.cljs$lang$type = true;
clustermap.components.map_report.t11220.cljs$lang$ctorStr = "clustermap.components.map-report/t11220";
clustermap.components.map_report.t11220.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11220");
});
clustermap.components.map_report.t11220.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11220.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11223 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11223))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11223),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11223));
}
})()),React.DOM.ul(null,(function (){var attrs11224 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11224))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11224),(function (){var attrs11225 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11225))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11225),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11225));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11224),(function (){var attrs11226 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11226))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11226),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11226));
}
})());
}
})(),(function (){var attrs11227 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11227))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11227),(function (){var attrs11228 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11228))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11228),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11228));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11227),(function (){var attrs11229 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11229))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11229),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11229));
}
})());
}
})(),(function (){var attrs11230 = clustermap.formats.money.fmoney.call(null,(function (){var G__11240 = self__.portfolio_company;var G__11240__$1 = (((G__11240 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11240));return G__11240__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11230))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11230),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11230),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11235 = clustermap.formats.number.fnum.call(null,(function (){var G__11241 = self__.portfolio_company;var G__11241__$1 = (((G__11241 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11241));return G__11241__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11235))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11235),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11235),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11222){var self__ = this;
var _11222__$1 = this;return self__.meta11221;
});
clustermap.components.map_report.t11220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11222,meta11221__$1){var self__ = this;
var _11222__$1 = this;return (new clustermap.components.map_report.t11220(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta11221__$1));
});
clustermap.components.map_report.__GT_t11220 = (function __GT_t11220(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11221){return (new clustermap.components.map_report.t11220(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11221));
});
}
return (new clustermap.components.map_report.t11220(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__11266 = investor_company;var G__11266__$1 = (((G__11266 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11266));var G__11266__$2 = (((G__11266__$1 == null))?null:cljs.core.count.call(null,G__11266__$1));return G__11266__$2;
})();var const_count = (function (){var G__11267 = investor_company;var G__11267__$1 = (((G__11267 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11267));var G__11267__$2 = (((G__11267__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11267__$1));var G__11267__$3 = (((G__11267__$2 == null))?null:cljs.core.count.call(null,G__11267__$2));return G__11267__$3;
})();if(typeof clustermap.components.map_report.t11268 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11268 = (function (const_count,pc_count,investor_company,investor_company_report,meta11269){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11269 = meta11269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11268.cljs$lang$type = true;
clustermap.components.map_report.t11268.cljs$lang$ctorStr = "clustermap.components.map-report/t11268";
clustermap.components.map_report.t11268.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11268");
});
clustermap.components.map_report.t11268.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11268.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11271 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11271))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11271),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11271));
}
})()),React.DOM.ul(null,(function (){var attrs11272 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11272))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11272),(function (){var attrs11273 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11273))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11273),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11273));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11272),(function (){var attrs11274 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11274))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11274),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11274));
}
})());
}
})(),(function (){var attrs11275 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11275))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11275),(function (){var attrs11276 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11276))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11276),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11276));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11275),(function (){var attrs11277 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11277))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11277),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11277));
}
})());
}
})(),(function (){var attrs11278 = clustermap.formats.money.fmoney.call(null,(function (){var G__11288 = self__.investor_company;var G__11288__$1 = (((G__11288 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11288));return G__11288__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11278))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11278),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11278),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11283 = clustermap.formats.number.fnum.call(null,(function (){var G__11289 = self__.investor_company;var G__11289__$1 = (((G__11289 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11289));return G__11289__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11283))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11283),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11283),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11270){var self__ = this;
var _11270__$1 = this;return self__.meta11269;
});
clustermap.components.map_report.t11268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11270,meta11269__$1){var self__ = this;
var _11270__$1 = this;return (new clustermap.components.map_report.t11268(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta11269__$1));
});
clustermap.components.map_report.__GT_t11268 = (function __GT_t11268(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11269){return (new clustermap.components.map_report.t11268(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11269));
});
}
return (new clustermap.components.map_report.t11268(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__11315 = constituency;var G__11315__$1 = (((G__11315 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11315));var G__11315__$2 = (((G__11315__$1 == null))?null:cljs.core.count.call(null,G__11315__$1));return G__11315__$2;
})();var ic_count = (function (){var G__11316 = constituency;var G__11316__$1 = (((G__11316 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11316));var G__11316__$2 = (((G__11316__$1 == null))?null:cljs.core.count.call(null,G__11316__$1));return G__11316__$2;
})();if(typeof clustermap.components.map_report.t11317 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11317 = (function (ic_count,pc_count,constituency,constituency_report,meta11318){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11318 = meta11318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11317.cljs$lang$type = true;
clustermap.components.map_report.t11317.cljs$lang$ctorStr = "clustermap.components.map-report/t11317";
clustermap.components.map_report.t11317.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11317");
});
clustermap.components.map_report.t11317.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11317.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11320 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11320))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11320),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11320));
}
})(),(function (){var attrs11321 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11321))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11321),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11321),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11322 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11322))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11322),(function (){var attrs11323 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11323))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11323),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11323));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11322),(function (){var attrs11324 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11324))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11324),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11324));
}
})());
}
})(),(function (){var attrs11325 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11325))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11325),(function (){var attrs11326 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11326))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11326),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11326));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11325),(function (){var attrs11327 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11327))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11327),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11327));
}
})());
}
})(),(function (){var attrs11328 = clustermap.formats.money.fmoney.call(null,(function (){var G__11338 = self__.constituency;var G__11338__$1 = (((G__11338 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11338));return G__11338__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11328))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11328),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11328),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11333 = clustermap.formats.number.fnum.call(null,(function (){var G__11339 = self__.constituency;var G__11339__$1 = (((G__11339 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11339));return G__11339__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11333))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11333),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11333),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11319){var self__ = this;
var _11319__$1 = this;return self__.meta11318;
});
clustermap.components.map_report.t11317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11319,meta11318__$1){var self__ = this;
var _11319__$1 = this;return (new clustermap.components.map_report.t11317(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta11318__$1));
});
clustermap.components.map_report.__GT_t11317 = (function __GT_t11317(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11318){return (new clustermap.components.map_report.t11317(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11318));
});
}
return (new clustermap.components.map_report.t11317(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11343 = cljs.core._EQ__EQ_;var expr__11344 = type;if(cljs.core.truth_(pred__11343.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11344)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11343.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11344)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11343.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11344)))
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