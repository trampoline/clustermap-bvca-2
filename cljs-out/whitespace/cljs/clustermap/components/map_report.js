// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__33287 = site_stats;var G__33287__$1 = (((G__33287 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33287));return G__33287__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__33288 = site_stats;var G__33288__$1 = (((G__33288 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33288));return G__33288__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__33289 = site_stats;var G__33289__$1 = (((G__33289 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33289));return G__33289__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__33321 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33321__$1 = ((cljs.core.seq_QMARK_.call(null,map__33321))?cljs.core.apply.call(null,cljs.core.hash_map,map__33321):map__33321);var const_count = cljs.core.get.call(null,map__33321__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33321__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33321__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33322 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33322 = (function (pc_count,ic_count,const_count,map__33321,comm,site_stats,all_portfolio_companies_summary_report,meta33323){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33321 = map__33321;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta33323 = meta33323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33322.cljs$lang$type = true;
clustermap.components.map_report.t33322.cljs$lang$ctorStr = "clustermap.components.map-report/t33322";
clustermap.components.map_report.t33322.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33322");
});
clustermap.components.map_report.t33322.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33322.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs33327 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33327))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33327),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33327),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs33332 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33332))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33332),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33332),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs33337 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33337))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33337),(function (){var attrs33338 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33338))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33338),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33338));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33337),(function (){var attrs33339 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33339))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33339),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33339));
}
})());
}
})(),(function (){var attrs33340 = clustermap.formats.money.fmoney.call(null,(function (){var G__33350 = self__.site_stats;var G__33350__$1 = (((G__33350 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33350));var G__33350__$2 = (((G__33350__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33350__$1));return G__33350__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33340))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33340),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33340),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33345 = clustermap.formats.number.fnum.call(null,(function (){var G__33351 = self__.site_stats;var G__33351__$1 = (((G__33351 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33351));var G__33351__$2 = (((G__33351__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33351__$1));return G__33351__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33345))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33345),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33345),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33324){var self__ = this;
var _33324__$1 = this;return self__.meta33323;
});
clustermap.components.map_report.t33322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33324,meta33323__$1){var self__ = this;
var _33324__$1 = this;return (new clustermap.components.map_report.t33322(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33321,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta33323__$1));
});
clustermap.components.map_report.__GT_t33322 = (function __GT_t33322(pc_count__$1,ic_count__$1,const_count__$1,map__33321__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33323){return (new clustermap.components.map_report.t33322(pc_count__$1,ic_count__$1,const_count__$1,map__33321__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33323));
});
}
return (new clustermap.components.map_report.t33322(pc_count,ic_count,const_count,map__33321__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33377 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33377__$1 = ((cljs.core.seq_QMARK_.call(null,map__33377))?cljs.core.apply.call(null,cljs.core.hash_map,map__33377):map__33377);var const_count = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33378 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33378 = (function (pc_count,ic_count,const_count,map__33377,comm,site_stats,portfolio_company,portfolio_company_report,meta33379){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33377 = map__33377;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33379 = meta33379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33378.cljs$lang$type = true;
clustermap.components.map_report.t33378.cljs$lang$ctorStr = "clustermap.components.map-report/t33378";
clustermap.components.map_report.t33378.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33378");
});
clustermap.components.map_report.t33378.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33378.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs33383 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33383))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33383),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33383));
}
})()),React.DOM.ul(null,(function (){var attrs33384 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33384))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33384),(function (){var attrs33385 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33385))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33385),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33385));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33384),(function (){var attrs33386 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33386))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33386),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33386));
}
})());
}
})(),(function (){var attrs33387 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33387))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33387),(function (){var attrs33388 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33388))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33388),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33388));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33387),(function (){var attrs33389 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33389))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33389),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33389));
}
})());
}
})(),(function (){var attrs33390 = clustermap.formats.money.fmoney.call(null,(function (){var G__33400 = self__.site_stats;var G__33400__$1 = (((G__33400 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33400));var G__33400__$2 = (((G__33400__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33400__$1));return G__33400__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33390))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33390),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33390),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33395 = clustermap.formats.number.fnum.call(null,(function (){var G__33401 = self__.site_stats;var G__33401__$1 = (((G__33401 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33401));var G__33401__$2 = (((G__33401__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33401__$1));return G__33401__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33395))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33395),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33395),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33380){var self__ = this;
var _33380__$1 = this;return self__.meta33379;
});
clustermap.components.map_report.t33378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33380,meta33379__$1){var self__ = this;
var _33380__$1 = this;return (new clustermap.components.map_report.t33378(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33377,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33379__$1));
});
clustermap.components.map_report.__GT_t33378 = (function __GT_t33378(pc_count__$1,ic_count__$1,const_count__$1,map__33377__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33379){return (new clustermap.components.map_report.t33378(pc_count__$1,ic_count__$1,const_count__$1,map__33377__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33379));
});
}
return (new clustermap.components.map_report.t33378(pc_count,ic_count,const_count,map__33377__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33427 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33427__$1 = ((cljs.core.seq_QMARK_.call(null,map__33427))?cljs.core.apply.call(null,cljs.core.hash_map,map__33427):map__33427);var const_count = cljs.core.get.call(null,map__33427__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33427__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33427__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33428 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33428 = (function (pc_count,ic_count,const_count,map__33427,comm,site_stats,investor_company,investor_company_report,meta33429){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33427 = map__33427;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33429 = meta33429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33428.cljs$lang$type = true;
clustermap.components.map_report.t33428.cljs$lang$ctorStr = "clustermap.components.map-report/t33428";
clustermap.components.map_report.t33428.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33428");
});
clustermap.components.map_report.t33428.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33428.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs33433 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33433))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33433),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33433));
}
})()),React.DOM.ul(null,(function (){var attrs33434 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33434))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33434),(function (){var attrs33435 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33435))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33435),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33435));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33434),(function (){var attrs33436 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33436))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33436),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33436));
}
})());
}
})(),(function (){var attrs33437 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33437))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33437),(function (){var attrs33438 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33438))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33438),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33438));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33437),(function (){var attrs33439 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33439))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33439),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33439));
}
})());
}
})(),(function (){var attrs33440 = clustermap.formats.money.fmoney.call(null,(function (){var G__33450 = self__.site_stats;var G__33450__$1 = (((G__33450 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33450));var G__33450__$2 = (((G__33450__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33450__$1));return G__33450__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33440))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33440),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33440),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33445 = clustermap.formats.number.fnum.call(null,(function (){var G__33451 = self__.site_stats;var G__33451__$1 = (((G__33451 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33451));var G__33451__$2 = (((G__33451__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33451__$1));return G__33451__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33445))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33445),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33445),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33430){var self__ = this;
var _33430__$1 = this;return self__.meta33429;
});
clustermap.components.map_report.t33428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33430,meta33429__$1){var self__ = this;
var _33430__$1 = this;return (new clustermap.components.map_report.t33428(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33427,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33429__$1));
});
clustermap.components.map_report.__GT_t33428 = (function __GT_t33428(pc_count__$1,ic_count__$1,const_count__$1,map__33427__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33429){return (new clustermap.components.map_report.t33428(pc_count__$1,ic_count__$1,const_count__$1,map__33427__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33429));
});
}
return (new clustermap.components.map_report.t33428(pc_count,ic_count,const_count,map__33427__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33477 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33477__$1 = ((cljs.core.seq_QMARK_.call(null,map__33477))?cljs.core.apply.call(null,cljs.core.hash_map,map__33477):map__33477);var const_count = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33478 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33478 = (function (pc_count,ic_count,const_count,map__33477,comm,site_stats,constituency,constituency_report,meta33479){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33477 = map__33477;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33479 = meta33479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33478.cljs$lang$type = true;
clustermap.components.map_report.t33478.cljs$lang$ctorStr = "clustermap.components.map-report/t33478";
clustermap.components.map_report.t33478.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33478");
});
clustermap.components.map_report.t33478.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33478.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs33483 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33483))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33483),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33483),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33484 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33484))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33484),(function (){var attrs33485 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33485))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33485),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33485));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33484),(function (){var attrs33486 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33486))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33486),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33486));
}
})());
}
})(),(function (){var attrs33487 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33487))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33487),(function (){var attrs33488 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33488))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33488),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33488));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33487),(function (){var attrs33489 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33489))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33489),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33489));
}
})());
}
})(),(function (){var attrs33490 = clustermap.formats.money.fmoney.call(null,(function (){var G__33500 = self__.site_stats;var G__33500__$1 = (((G__33500 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33500));var G__33500__$2 = (((G__33500__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33500__$1));return G__33500__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33490))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33490),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33490),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33495 = clustermap.formats.number.fnum.call(null,(function (){var G__33501 = self__.site_stats;var G__33501__$1 = (((G__33501 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33501));var G__33501__$2 = (((G__33501__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33501__$1));return G__33501__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33495))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33495),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33495),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33480){var self__ = this;
var _33480__$1 = this;return self__.meta33479;
});
clustermap.components.map_report.t33478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33480,meta33479__$1){var self__ = this;
var _33480__$1 = this;return (new clustermap.components.map_report.t33478(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33477,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33479__$1));
});
clustermap.components.map_report.__GT_t33478 = (function __GT_t33478(pc_count__$1,ic_count__$1,const_count__$1,map__33477__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33479){return (new clustermap.components.map_report.t33478(pc_count__$1,ic_count__$1,const_count__$1,map__33477__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33479));
});
}
return (new clustermap.components.map_report.t33478(pc_count,ic_count,const_count,map__33477__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33505 = cljs.core._EQ__EQ_;var expr__33506 = type;if(cljs.core.truth_(pred__33505.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33506)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33505.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33506)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33505.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33506)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
