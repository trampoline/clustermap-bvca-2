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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_stats = new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data);var pc_count = (function (){var G__11212 = pc_stats;var G__11212__$1 = (((G__11212 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11212));return G__11212__$1;
})();var ic_count = (function (){var G__11213 = pc_stats;var G__11213__$1 = (((G__11213 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11213));return G__11213__$1;
})();if(typeof clustermap.components.map_report.t11214 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11214 = (function (ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,meta11215){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.pc_stats = pc_stats;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11215 = meta11215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11214.cljs$lang$type = true;
clustermap.components.map_report.t11214.cljs$lang$ctorStr = "clustermap.components.map-report/t11214";
clustermap.components.map_report.t11214.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11214");
});
clustermap.components.map_report.t11214.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11214.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11219 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11219))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11219),(function (){var attrs11220 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11220))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11220),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11220));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11219),(function (){var attrs11221 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11221))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11221),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11221));
}
})());
}
})(),(function (){var attrs11222 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11222))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11222),(function (){var attrs11223 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11223))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11223),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11223));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11222),(function (){var attrs11224 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11224))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11224),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11224));
}
})());
}
})(),(function (){var attrs11225 = clustermap.formats.money.fmoney.call(null,(function (){var G__11235 = self__.pc_stats;var G__11235__$1 = (((G__11235 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11235));var G__11235__$2 = (((G__11235__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11235__$1));return G__11235__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11225))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11225),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11225),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11230 = clustermap.formats.number.fnum.call(null,(function (){var G__11236 = self__.pc_stats;var G__11236__$1 = (((G__11236 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11236));var G__11236__$2 = (((G__11236__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11236__$1));return G__11236__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11230))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11230),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11230),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11216){var self__ = this;
var _11216__$1 = this;return self__.meta11215;
});
clustermap.components.map_report.t11214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11216,meta11215__$1){var self__ = this;
var _11216__$1 = this;return (new clustermap.components.map_report.t11214(self__.ic_count,self__.pc_count,self__.pc_stats,self__.data,self__.all_portfolio_companies_summary_report,meta11215__$1));
});
clustermap.components.map_report.__GT_t11214 = (function __GT_t11214(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11215){return (new clustermap.components.map_report.t11214(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11215));
});
}
return (new clustermap.components.map_report.t11214(ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(data){var ic_count = (function (){var G__11261 = data;var G__11261__$1 = (((G__11261 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11261));var G__11261__$2 = (((G__11261__$1 == null))?null:cljs.core.count.call(null,G__11261__$1));return G__11261__$2;
})();var const_count = (function (){var G__11262 = data;var G__11262__$1 = (((G__11262 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11262));var G__11262__$2 = (((G__11262__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11262__$1));var G__11262__$3 = (((G__11262__$2 == null))?null:cljs.core.count.call(null,G__11262__$2));return G__11262__$3;
})();if(typeof clustermap.components.map_report.t11263 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11263 = (function (const_count,ic_count,data,portfolio_company_report,meta11264){
this.const_count = const_count;
this.ic_count = ic_count;
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta11264 = meta11264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11263.cljs$lang$type = true;
clustermap.components.map_report.t11263.cljs$lang$ctorStr = "clustermap.components.map-report/t11263";
clustermap.components.map_report.t11263.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11263");
});
clustermap.components.map_report.t11263.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11263.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11266 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_.call(null,attrs11266))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11266),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11266));
}
})()),React.DOM.ul(null,(function (){var attrs11267 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11267))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11267),(function (){var attrs11268 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11268))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11268),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11268));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11267),(function (){var attrs11269 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11269))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11269),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11269));
}
})());
}
})(),(function (){var attrs11270 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11270))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11270),(function (){var attrs11271 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11271))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11271),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11271));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11270),(function (){var attrs11272 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11272))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11272),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11272));
}
})());
}
})(),(function (){var attrs11273 = clustermap.formats.money.fmoney.call(null,(function (){var G__11283 = self__.data;var G__11283__$1 = (((G__11283 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11283));return G__11283__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11273))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11273),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11273),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11278 = clustermap.formats.number.fnum.call(null,(function (){var G__11284 = self__.data;var G__11284__$1 = (((G__11284 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11284));return G__11284__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11278))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11278),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11278),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11265){var self__ = this;
var _11265__$1 = this;return self__.meta11264;
});
clustermap.components.map_report.t11263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11265,meta11264__$1){var self__ = this;
var _11265__$1 = this;return (new clustermap.components.map_report.t11263(self__.const_count,self__.ic_count,self__.data,self__.portfolio_company_report,meta11264__$1));
});
clustermap.components.map_report.__GT_t11263 = (function __GT_t11263(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta11264){return (new clustermap.components.map_report.t11263(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta11264));
});
}
return (new clustermap.components.map_report.t11263(const_count,ic_count,data,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(data){var pc_count = (function (){var G__11309 = data;var G__11309__$1 = (((G__11309 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11309));var G__11309__$2 = (((G__11309__$1 == null))?null:cljs.core.count.call(null,G__11309__$1));return G__11309__$2;
})();var const_count = (function (){var G__11310 = data;var G__11310__$1 = (((G__11310 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11310));var G__11310__$2 = (((G__11310__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11310__$1));var G__11310__$3 = (((G__11310__$2 == null))?null:cljs.core.count.call(null,G__11310__$2));return G__11310__$3;
})();if(typeof clustermap.components.map_report.t11311 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11311 = (function (const_count,pc_count,data,investor_company_report,meta11312){
this.const_count = const_count;
this.pc_count = pc_count;
this.data = data;
this.investor_company_report = investor_company_report;
this.meta11312 = meta11312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11311.cljs$lang$type = true;
clustermap.components.map_report.t11311.cljs$lang$ctorStr = "clustermap.components.map-report/t11311";
clustermap.components.map_report.t11311.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11311");
});
clustermap.components.map_report.t11311.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11311.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11314 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_.call(null,attrs11314))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11314),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11314));
}
})()),React.DOM.ul(null,(function (){var attrs11315 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11315))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11315),(function (){var attrs11316 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11316))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11316),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11316));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11315),(function (){var attrs11317 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11317))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11317),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11317));
}
})());
}
})(),(function (){var attrs11318 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11318))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11318),(function (){var attrs11319 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11319))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11319),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11319));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11318),(function (){var attrs11320 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11320))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11320),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11320));
}
})());
}
})(),(function (){var attrs11321 = clustermap.formats.money.fmoney.call(null,(function (){var G__11331 = self__.data;var G__11331__$1 = (((G__11331 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11331));return G__11331__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11321))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11321),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11321),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11326 = clustermap.formats.number.fnum.call(null,(function (){var G__11332 = self__.data;var G__11332__$1 = (((G__11332 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11332));return G__11332__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11326))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11326),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11326),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11313){var self__ = this;
var _11313__$1 = this;return self__.meta11312;
});
clustermap.components.map_report.t11311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11313,meta11312__$1){var self__ = this;
var _11313__$1 = this;return (new clustermap.components.map_report.t11311(self__.const_count,self__.pc_count,self__.data,self__.investor_company_report,meta11312__$1));
});
clustermap.components.map_report.__GT_t11311 = (function __GT_t11311(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta11312){return (new clustermap.components.map_report.t11311(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta11312));
});
}
return (new clustermap.components.map_report.t11311(const_count,pc_count,data,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(data){var pc_count = (function (){var G__11358 = data;var G__11358__$1 = (((G__11358 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11358));var G__11358__$2 = (((G__11358__$1 == null))?null:cljs.core.count.call(null,G__11358__$1));return G__11358__$2;
})();var ic_count = (function (){var G__11359 = data;var G__11359__$1 = (((G__11359 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11359));var G__11359__$2 = (((G__11359__$1 == null))?null:cljs.core.count.call(null,G__11359__$1));return G__11359__$2;
})();if(typeof clustermap.components.map_report.t11360 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11360 = (function (ic_count,pc_count,data,constituency_report,meta11361){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.data = data;
this.constituency_report = constituency_report;
this.meta11361 = meta11361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11360.cljs$lang$type = true;
clustermap.components.map_report.t11360.cljs$lang$ctorStr = "clustermap.components.map-report/t11360";
clustermap.components.map_report.t11360.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11360");
});
clustermap.components.map_report.t11360.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11360.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11363 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_.call(null,attrs11363))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11363),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11363));
}
})(),(function (){var attrs11364 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_.call(null,attrs11364))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11364),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.data)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11364),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.data)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11365 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11365))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11365),(function (){var attrs11366 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11366))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11366),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11366));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11365),(function (){var attrs11367 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11367))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11367),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11367));
}
})());
}
})(),(function (){var attrs11368 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11368))
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
})(),(function (){var attrs11371 = clustermap.formats.money.fmoney.call(null,(function (){var G__11381 = self__.data;var G__11381__$1 = (((G__11381 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11381));return G__11381__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11371))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11371),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11371),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11376 = clustermap.formats.number.fnum.call(null,(function (){var G__11382 = self__.data;var G__11382__$1 = (((G__11382 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11382));return G__11382__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11376))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11376),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11376),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11362){var self__ = this;
var _11362__$1 = this;return self__.meta11361;
});
clustermap.components.map_report.t11360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11362,meta11361__$1){var self__ = this;
var _11362__$1 = this;return (new clustermap.components.map_report.t11360(self__.ic_count,self__.pc_count,self__.data,self__.constituency_report,meta11361__$1));
});
clustermap.components.map_report.__GT_t11360 = (function __GT_t11360(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta11361){return (new clustermap.components.map_report.t11360(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta11361));
});
}
return (new clustermap.components.map_report.t11360(ic_count,pc_count,data,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11386 = cljs.core._EQ__EQ_;var expr__11387 = type;if(cljs.core.truth_(pred__11386.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11387)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11386.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11387)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11386.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11387)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map