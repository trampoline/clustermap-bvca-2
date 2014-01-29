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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__31188 = apc_stats;var G__31188__$1 = (((G__31188 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31188));return G__31188__$1;
})();var ic_count = (function (){var G__31189 = apc_stats;var G__31189__$1 = (((G__31189 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31189));return G__31189__$1;
})();if(typeof clustermap.components.map_report.t31190 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31190 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta31191){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31191 = meta31191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31190.cljs$lang$type = true;
clustermap.components.map_report.t31190.cljs$lang$ctorStr = "clustermap.components.map-report/t31190";
clustermap.components.map_report.t31190.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31190");
});
clustermap.components.map_report.t31190.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31190.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31195 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31195))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31195),(function (){var attrs31196 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31196))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31196),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31196));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31195),(function (){var attrs31197 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31197))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31197),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31197));
}
})());
}
})(),(function (){var attrs31198 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31198))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31198),(function (){var attrs31199 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31199))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31199),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31199));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31198),(function (){var attrs31200 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31200))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31200),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31200));
}
})());
}
})(),(function (){var attrs31201 = clustermap.formats.money.fmoney.call(null,(function (){var G__31211 = self__.apc_stats;var G__31211__$1 = (((G__31211 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31211));var G__31211__$2 = (((G__31211__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31211__$1));return G__31211__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31201))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31201),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31201),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31206 = clustermap.formats.number.fnum.call(null,(function (){var G__31212 = self__.apc_stats;var G__31212__$1 = (((G__31212 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31212));var G__31212__$2 = (((G__31212__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31212__$1));return G__31212__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31206))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31206),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31206),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31192){var self__ = this;
var _31192__$1 = this;return self__.meta31191;
});
clustermap.components.map_report.t31190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31192,meta31191__$1){var self__ = this;
var _31192__$1 = this;return (new clustermap.components.map_report.t31190(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31191__$1));
});
clustermap.components.map_report.__GT_t31190 = (function __GT_t31190(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31191){return (new clustermap.components.map_report.t31190(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31191));
});
}
return (new clustermap.components.map_report.t31190(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__31237 = portfolio_company;var G__31237__$1 = (((G__31237 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31237));var G__31237__$2 = (((G__31237__$1 == null))?null:cljs.core.count.call(null,G__31237__$1));return G__31237__$2;
})();var const_count = (function (){var G__31238 = portfolio_company;var G__31238__$1 = (((G__31238 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31238));var G__31238__$2 = (((G__31238__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31238__$1));var G__31238__$3 = (((G__31238__$2 == null))?null:cljs.core.count.call(null,G__31238__$2));return G__31238__$3;
})();if(typeof clustermap.components.map_report.t31239 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31239 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta31240){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31240 = meta31240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31239.cljs$lang$type = true;
clustermap.components.map_report.t31239.cljs$lang$ctorStr = "clustermap.components.map-report/t31239";
clustermap.components.map_report.t31239.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31239");
});
clustermap.components.map_report.t31239.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31239.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31242 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31242))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31242),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31242));
}
})()),React.DOM.ul(null,(function (){var attrs31243 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31243))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31243),(function (){var attrs31244 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31244))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31244),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31244));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31243),(function (){var attrs31245 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31245))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31245),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31245));
}
})());
}
})(),(function (){var attrs31246 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31246))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31246),(function (){var attrs31247 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31247))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31247),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31247));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31246),(function (){var attrs31248 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31248))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31248),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31248));
}
})());
}
})(),(function (){var attrs31249 = clustermap.formats.money.fmoney.call(null,(function (){var G__31259 = self__.portfolio_company;var G__31259__$1 = (((G__31259 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31259));return G__31259__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31249))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31249),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31249),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31254 = clustermap.formats.number.fnum.call(null,(function (){var G__31260 = self__.portfolio_company;var G__31260__$1 = (((G__31260 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31260));return G__31260__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31254))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31254),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31254),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t31239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31241){var self__ = this;
var _31241__$1 = this;return self__.meta31240;
});
clustermap.components.map_report.t31239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31241,meta31240__$1){var self__ = this;
var _31241__$1 = this;return (new clustermap.components.map_report.t31239(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta31240__$1));
});
clustermap.components.map_report.__GT_t31239 = (function __GT_t31239(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta31240){return (new clustermap.components.map_report.t31239(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta31240));
});
}
return (new clustermap.components.map_report.t31239(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__31285 = investor_company;var G__31285__$1 = (((G__31285 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31285));var G__31285__$2 = (((G__31285__$1 == null))?null:cljs.core.count.call(null,G__31285__$1));return G__31285__$2;
})();var const_count = (function (){var G__31286 = investor_company;var G__31286__$1 = (((G__31286 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31286));var G__31286__$2 = (((G__31286__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31286__$1));var G__31286__$3 = (((G__31286__$2 == null))?null:cljs.core.count.call(null,G__31286__$2));return G__31286__$3;
})();if(typeof clustermap.components.map_report.t31287 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31287 = (function (const_count,pc_count,investor_company,investor_company_report,meta31288){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta31288 = meta31288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31287.cljs$lang$type = true;
clustermap.components.map_report.t31287.cljs$lang$ctorStr = "clustermap.components.map-report/t31287";
clustermap.components.map_report.t31287.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31287");
});
clustermap.components.map_report.t31287.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31287.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31290 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs31290))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31290),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31290));
}
})()),React.DOM.ul(null,(function (){var attrs31291 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31291))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31291),(function (){var attrs31292 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31292))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31292),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31292));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31291),(function (){var attrs31293 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31293))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31293),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31293));
}
})());
}
})(),(function (){var attrs31294 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31294))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31294),(function (){var attrs31295 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31295))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31295),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31295));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31294),(function (){var attrs31296 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31296))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31296),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31296));
}
})());
}
})(),(function (){var attrs31297 = clustermap.formats.money.fmoney.call(null,(function (){var G__31307 = self__.investor_company;var G__31307__$1 = (((G__31307 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31307));return G__31307__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31297))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31297),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31297),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31302 = clustermap.formats.number.fnum.call(null,(function (){var G__31308 = self__.investor_company;var G__31308__$1 = (((G__31308 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31308));return G__31308__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31302))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31302),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31302),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31289){var self__ = this;
var _31289__$1 = this;return self__.meta31288;
});
clustermap.components.map_report.t31287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31289,meta31288__$1){var self__ = this;
var _31289__$1 = this;return (new clustermap.components.map_report.t31287(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta31288__$1));
});
clustermap.components.map_report.__GT_t31287 = (function __GT_t31287(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta31288){return (new clustermap.components.map_report.t31287(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta31288));
});
}
return (new clustermap.components.map_report.t31287(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__31334 = constituency;var G__31334__$1 = (((G__31334 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31334));var G__31334__$2 = (((G__31334__$1 == null))?null:cljs.core.count.call(null,G__31334__$1));return G__31334__$2;
})();var ic_count = (function (){var G__31335 = constituency;var G__31335__$1 = (((G__31335 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31335));var G__31335__$2 = (((G__31335__$1 == null))?null:cljs.core.count.call(null,G__31335__$1));return G__31335__$2;
})();if(typeof clustermap.components.map_report.t31336 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31336 = (function (ic_count,pc_count,constituency,constituency_report,meta31337){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31337 = meta31337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31336.cljs$lang$type = true;
clustermap.components.map_report.t31336.cljs$lang$ctorStr = "clustermap.components.map-report/t31336";
clustermap.components.map_report.t31336.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31336");
});
clustermap.components.map_report.t31336.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31336.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31339 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31339))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31339),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31339));
}
})(),(function (){var attrs31340 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31340))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31340),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31340),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31341 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31341))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31341),(function (){var attrs31342 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31342))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31342),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31342));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31341),(function (){var attrs31343 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31343))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31343),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31343));
}
})());
}
})(),(function (){var attrs31344 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31344))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31344),(function (){var attrs31345 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31345))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31345),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31345));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31344),(function (){var attrs31346 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31346))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31346),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31346));
}
})());
}
})(),(function (){var attrs31347 = clustermap.formats.money.fmoney.call(null,(function (){var G__31357 = self__.constituency;var G__31357__$1 = (((G__31357 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31357));return G__31357__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31347))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31347),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31347),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31352 = clustermap.formats.number.fnum.call(null,(function (){var G__31358 = self__.constituency;var G__31358__$1 = (((G__31358 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31358));return G__31358__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31352))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31352),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31352),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31338){var self__ = this;
var _31338__$1 = this;return self__.meta31337;
});
clustermap.components.map_report.t31336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31338,meta31337__$1){var self__ = this;
var _31338__$1 = this;return (new clustermap.components.map_report.t31336(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta31337__$1));
});
clustermap.components.map_report.__GT_t31336 = (function __GT_t31336(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31337){return (new clustermap.components.map_report.t31336(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31337));
});
}
return (new clustermap.components.map_report.t31336(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31362 = cljs.core._EQ__EQ_;var expr__31363 = type;if(cljs.core.truth_(pred__31362.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31363)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31362.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31363)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31362.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31363)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
