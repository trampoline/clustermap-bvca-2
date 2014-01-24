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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__11208 = apc_stats;var G__11208__$1 = (((G__11208 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11208));return G__11208__$1;
})();var ic_count = (function (){var G__11209 = apc_stats;var G__11209__$1 = (((G__11209 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11209));return G__11209__$1;
})();if(typeof clustermap.components.map_report.t11210 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11210 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta11211){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11211 = meta11211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11210.cljs$lang$type = true;
clustermap.components.map_report.t11210.cljs$lang$ctorStr = "clustermap.components.map-report/t11210";
clustermap.components.map_report.t11210.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11210");
});
clustermap.components.map_report.t11210.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11210.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11215 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11215))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11215),(function (){var attrs11216 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11216))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11216),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11216));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11215),(function (){var attrs11217 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11217))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11217),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11217));
}
})());
}
})(),(function (){var attrs11218 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11218))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11218),(function (){var attrs11219 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11219))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11219),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11219));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11218),(function (){var attrs11220 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11220))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11220),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11220));
}
})());
}
})(),(function (){var attrs11221 = clustermap.formats.money.fmoney.call(null,(function (){var G__11231 = self__.apc_stats;var G__11231__$1 = (((G__11231 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11231));var G__11231__$2 = (((G__11231__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11231__$1));return G__11231__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11221))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11221),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11221),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11226 = clustermap.formats.number.fnum.call(null,(function (){var G__11232 = self__.apc_stats;var G__11232__$1 = (((G__11232 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11232));var G__11232__$2 = (((G__11232__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11232__$1));return G__11232__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11226))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11226),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11226),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11212){var self__ = this;
var _11212__$1 = this;return self__.meta11211;
});
clustermap.components.map_report.t11210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11212,meta11211__$1){var self__ = this;
var _11212__$1 = this;return (new clustermap.components.map_report.t11210(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11211__$1));
});
clustermap.components.map_report.__GT_t11210 = (function __GT_t11210(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11211){return (new clustermap.components.map_report.t11210(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11211));
});
}
return (new clustermap.components.map_report.t11210(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__11257 = portfolio_company;var G__11257__$1 = (((G__11257 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11257));var G__11257__$2 = (((G__11257__$1 == null))?null:cljs.core.count.call(null,G__11257__$1));return G__11257__$2;
})();var const_count = (function (){var G__11258 = portfolio_company;var G__11258__$1 = (((G__11258 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11258));var G__11258__$2 = (((G__11258__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11258__$1));var G__11258__$3 = (((G__11258__$2 == null))?null:cljs.core.count.call(null,G__11258__$2));return G__11258__$3;
})();if(typeof clustermap.components.map_report.t11259 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11259 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta11260){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11260 = meta11260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11259.cljs$lang$type = true;
clustermap.components.map_report.t11259.cljs$lang$ctorStr = "clustermap.components.map-report/t11259";
clustermap.components.map_report.t11259.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11259");
});
clustermap.components.map_report.t11259.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11259.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11262 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11262))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11262),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11262));
}
})()),React.DOM.ul(null,(function (){var attrs11263 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11263))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11263),(function (){var attrs11264 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11264))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11264),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11264));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11263),(function (){var attrs11265 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11265))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11265),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11265));
}
})());
}
})(),(function (){var attrs11266 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11266))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11266),(function (){var attrs11267 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11267))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11267),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11267));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11266),(function (){var attrs11268 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11268))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11268),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11268));
}
})());
}
})(),(function (){var attrs11269 = clustermap.formats.money.fmoney.call(null,(function (){var G__11279 = self__.portfolio_company;var G__11279__$1 = (((G__11279 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11279));return G__11279__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11269))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11269),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11269),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11274 = clustermap.formats.number.fnum.call(null,(function (){var G__11280 = self__.portfolio_company;var G__11280__$1 = (((G__11280 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11280));return G__11280__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11274))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11274),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11274),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11261){var self__ = this;
var _11261__$1 = this;return self__.meta11260;
});
clustermap.components.map_report.t11259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11261,meta11260__$1){var self__ = this;
var _11261__$1 = this;return (new clustermap.components.map_report.t11259(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta11260__$1));
});
clustermap.components.map_report.__GT_t11259 = (function __GT_t11259(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11260){return (new clustermap.components.map_report.t11259(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11260));
});
}
return (new clustermap.components.map_report.t11259(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__11305 = investor_company;var G__11305__$1 = (((G__11305 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11305));var G__11305__$2 = (((G__11305__$1 == null))?null:cljs.core.count.call(null,G__11305__$1));return G__11305__$2;
})();var const_count = (function (){var G__11306 = investor_company;var G__11306__$1 = (((G__11306 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11306));var G__11306__$2 = (((G__11306__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11306__$1));var G__11306__$3 = (((G__11306__$2 == null))?null:cljs.core.count.call(null,G__11306__$2));return G__11306__$3;
})();if(typeof clustermap.components.map_report.t11307 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11307 = (function (const_count,pc_count,investor_company,investor_company_report,meta11308){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11308 = meta11308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11307.cljs$lang$type = true;
clustermap.components.map_report.t11307.cljs$lang$ctorStr = "clustermap.components.map-report/t11307";
clustermap.components.map_report.t11307.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11307");
});
clustermap.components.map_report.t11307.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11307.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11310 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11310))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11310),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11310));
}
})()),React.DOM.ul(null,(function (){var attrs11311 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11311))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11311),(function (){var attrs11312 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11312))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11312),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11312));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11311),(function (){var attrs11313 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11313))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11313),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11313));
}
})());
}
})(),(function (){var attrs11314 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11314))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11314),(function (){var attrs11315 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11315))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11315),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11315));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11314),(function (){var attrs11316 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11316))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11316),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11316));
}
})());
}
})(),(function (){var attrs11317 = clustermap.formats.money.fmoney.call(null,(function (){var G__11327 = self__.investor_company;var G__11327__$1 = (((G__11327 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11327));return G__11327__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11317))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11317),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11317),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11322 = clustermap.formats.number.fnum.call(null,(function (){var G__11328 = self__.investor_company;var G__11328__$1 = (((G__11328 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11328));return G__11328__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11322))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11322),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11322),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11309){var self__ = this;
var _11309__$1 = this;return self__.meta11308;
});
clustermap.components.map_report.t11307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11309,meta11308__$1){var self__ = this;
var _11309__$1 = this;return (new clustermap.components.map_report.t11307(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta11308__$1));
});
clustermap.components.map_report.__GT_t11307 = (function __GT_t11307(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11308){return (new clustermap.components.map_report.t11307(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11308));
});
}
return (new clustermap.components.map_report.t11307(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__11354 = constituency;var G__11354__$1 = (((G__11354 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11354));var G__11354__$2 = (((G__11354__$1 == null))?null:cljs.core.count.call(null,G__11354__$1));return G__11354__$2;
})();var ic_count = (function (){var G__11355 = constituency;var G__11355__$1 = (((G__11355 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11355));var G__11355__$2 = (((G__11355__$1 == null))?null:cljs.core.count.call(null,G__11355__$1));return G__11355__$2;
})();if(typeof clustermap.components.map_report.t11356 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11356 = (function (ic_count,pc_count,constituency,constituency_report,meta11357){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11357 = meta11357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11356.cljs$lang$type = true;
clustermap.components.map_report.t11356.cljs$lang$ctorStr = "clustermap.components.map-report/t11356";
clustermap.components.map_report.t11356.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11356");
});
clustermap.components.map_report.t11356.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11356.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11359 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11359))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11359),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11359));
}
})(),(function (){var attrs11360 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11360))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11360),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11360),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11361 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11361))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11361),(function (){var attrs11362 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11362))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11362),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11362));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11361),(function (){var attrs11363 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11363))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11363),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11363));
}
})());
}
})(),(function (){var attrs11364 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11364))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11364),(function (){var attrs11365 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11365))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11365),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11365));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11364),(function (){var attrs11366 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11366))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11366),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11366));
}
})());
}
})(),(function (){var attrs11367 = clustermap.formats.money.fmoney.call(null,(function (){var G__11377 = self__.constituency;var G__11377__$1 = (((G__11377 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11377));return G__11377__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11367))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11367),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11367),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11372 = clustermap.formats.number.fnum.call(null,(function (){var G__11378 = self__.constituency;var G__11378__$1 = (((G__11378 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11378));return G__11378__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11372))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11372),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11372),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11358){var self__ = this;
var _11358__$1 = this;return self__.meta11357;
});
clustermap.components.map_report.t11356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11358,meta11357__$1){var self__ = this;
var _11358__$1 = this;return (new clustermap.components.map_report.t11356(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta11357__$1));
});
clustermap.components.map_report.__GT_t11356 = (function __GT_t11356(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11357){return (new clustermap.components.map_report.t11356(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11357));
});
}
return (new clustermap.components.map_report.t11356(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11382 = cljs.core._EQ__EQ_;var expr__11383 = type;if(cljs.core.truth_(pred__11382.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11383)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11382.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11383)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11382.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11383)))
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