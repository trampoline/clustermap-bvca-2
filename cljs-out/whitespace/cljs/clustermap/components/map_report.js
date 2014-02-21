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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__33352 = site_stats;var G__33352__$1 = (((G__33352 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33352));return G__33352__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__33353 = site_stats;var G__33353__$1 = (((G__33353 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33353));return G__33353__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__33354 = site_stats;var G__33354__$1 = (((G__33354 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33354));return G__33354__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__33386 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33386__$1 = ((cljs.core.seq_QMARK_.call(null,map__33386))?cljs.core.apply.call(null,cljs.core.hash_map,map__33386):map__33386);var const_count = cljs.core.get.call(null,map__33386__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33386__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33386__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33387 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33387 = (function (pc_count,ic_count,const_count,map__33386,comm,site_stats,all_portfolio_companies_summary_report,meta33388){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33386 = map__33386;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta33388 = meta33388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33387.cljs$lang$type = true;
clustermap.components.map_report.t33387.cljs$lang$ctorStr = "clustermap.components.map-report/t33387";
clustermap.components.map_report.t33387.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33387");
});
clustermap.components.map_report.t33387.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33387.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs33392 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33392))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33392),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33392),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs33397 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33397))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33397),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33397),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs33402 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33402))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33402),(function (){var attrs33403 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33403))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33403),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33403));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33402),(function (){var attrs33404 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33404))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33404),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33404));
}
})());
}
})(),(function (){var attrs33405 = clustermap.formats.money.fmoney.call(null,(function (){var G__33415 = self__.site_stats;var G__33415__$1 = (((G__33415 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33415));var G__33415__$2 = (((G__33415__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33415__$1));return G__33415__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33405))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33405),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33405),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33410 = clustermap.formats.number.fnum.call(null,(function (){var G__33416 = self__.site_stats;var G__33416__$1 = (((G__33416 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33416));var G__33416__$2 = (((G__33416__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33416__$1));return G__33416__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33410))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33410),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33410),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33389){var self__ = this;
var _33389__$1 = this;return self__.meta33388;
});
clustermap.components.map_report.t33387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33389,meta33388__$1){var self__ = this;
var _33389__$1 = this;return (new clustermap.components.map_report.t33387(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33386,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta33388__$1));
});
clustermap.components.map_report.__GT_t33387 = (function __GT_t33387(pc_count__$1,ic_count__$1,const_count__$1,map__33386__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33388){return (new clustermap.components.map_report.t33387(pc_count__$1,ic_count__$1,const_count__$1,map__33386__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33388));
});
}
return (new clustermap.components.map_report.t33387(pc_count,ic_count,const_count,map__33386__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33442 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33442__$1 = ((cljs.core.seq_QMARK_.call(null,map__33442))?cljs.core.apply.call(null,cljs.core.hash_map,map__33442):map__33442);var const_count = cljs.core.get.call(null,map__33442__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33442__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33442__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33443 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33443 = (function (pc_count,ic_count,const_count,map__33442,comm,site_stats,portfolio_company,portfolio_company_report,meta33444){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33442 = map__33442;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33444 = meta33444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33443.cljs$lang$type = true;
clustermap.components.map_report.t33443.cljs$lang$ctorStr = "clustermap.components.map-report/t33443";
clustermap.components.map_report.t33443.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33443");
});
clustermap.components.map_report.t33443.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33443.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs33448 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33448))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33448),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33448));
}
})()),React.DOM.ul(null,(function (){var attrs33449 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33449))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33449),(function (){var attrs33450 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33450))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33450),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33450));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33449),(function (){var attrs33451 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33451))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33451),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33451));
}
})());
}
})(),(function (){var attrs33452 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33452))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33452),(function (){var attrs33453 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33453))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33453),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33453));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33452),(function (){var attrs33454 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33454))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33454),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33454));
}
})());
}
})(),(function (){var attrs33455 = clustermap.formats.money.fmoney.call(null,(function (){var G__33465 = self__.site_stats;var G__33465__$1 = (((G__33465 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33465));var G__33465__$2 = (((G__33465__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33465__$1));return G__33465__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33455))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33455),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33455),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33460 = clustermap.formats.number.fnum.call(null,(function (){var G__33466 = self__.site_stats;var G__33466__$1 = (((G__33466 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33466));var G__33466__$2 = (((G__33466__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33466__$1));return G__33466__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33460))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33460),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33460),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33445){var self__ = this;
var _33445__$1 = this;return self__.meta33444;
});
clustermap.components.map_report.t33443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33445,meta33444__$1){var self__ = this;
var _33445__$1 = this;return (new clustermap.components.map_report.t33443(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33442,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33444__$1));
});
clustermap.components.map_report.__GT_t33443 = (function __GT_t33443(pc_count__$1,ic_count__$1,const_count__$1,map__33442__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33444){return (new clustermap.components.map_report.t33443(pc_count__$1,ic_count__$1,const_count__$1,map__33442__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33444));
});
}
return (new clustermap.components.map_report.t33443(pc_count,ic_count,const_count,map__33442__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33492 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33492__$1 = ((cljs.core.seq_QMARK_.call(null,map__33492))?cljs.core.apply.call(null,cljs.core.hash_map,map__33492):map__33492);var const_count = cljs.core.get.call(null,map__33492__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33492__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33492__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33493 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33493 = (function (pc_count,ic_count,const_count,map__33492,comm,site_stats,investor_company,investor_company_report,meta33494){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33492 = map__33492;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33494 = meta33494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33493.cljs$lang$type = true;
clustermap.components.map_report.t33493.cljs$lang$ctorStr = "clustermap.components.map-report/t33493";
clustermap.components.map_report.t33493.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33493");
});
clustermap.components.map_report.t33493.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33493.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs33498 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33498))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33498),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33498));
}
})()),React.DOM.ul(null,(function (){var attrs33499 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33499))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33499),(function (){var attrs33500 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33500))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33500),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33500));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33499),(function (){var attrs33501 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33501))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33501),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33501));
}
})());
}
})(),(function (){var attrs33502 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33502))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33502),(function (){var attrs33503 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33503))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33503),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33503));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33502),(function (){var attrs33504 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33504))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33504),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33504));
}
})());
}
})(),(function (){var attrs33505 = clustermap.formats.money.fmoney.call(null,(function (){var G__33515 = self__.site_stats;var G__33515__$1 = (((G__33515 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33515));var G__33515__$2 = (((G__33515__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33515__$1));return G__33515__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33505))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33505),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33505),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33510 = clustermap.formats.number.fnum.call(null,(function (){var G__33516 = self__.site_stats;var G__33516__$1 = (((G__33516 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33516));var G__33516__$2 = (((G__33516__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33516__$1));return G__33516__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33510))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33510),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33510),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33495){var self__ = this;
var _33495__$1 = this;return self__.meta33494;
});
clustermap.components.map_report.t33493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33495,meta33494__$1){var self__ = this;
var _33495__$1 = this;return (new clustermap.components.map_report.t33493(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33492,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33494__$1));
});
clustermap.components.map_report.__GT_t33493 = (function __GT_t33493(pc_count__$1,ic_count__$1,const_count__$1,map__33492__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33494){return (new clustermap.components.map_report.t33493(pc_count__$1,ic_count__$1,const_count__$1,map__33492__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33494));
});
}
return (new clustermap.components.map_report.t33493(pc_count,ic_count,const_count,map__33492__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33546 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33546__$1 = ((cljs.core.seq_QMARK_.call(null,map__33546))?cljs.core.apply.call(null,cljs.core.hash_map,map__33546):map__33546);var const_count = cljs.core.get.call(null,map__33546__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33546__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33546__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33547 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33547 = (function (pc_count,ic_count,const_count,map__33546,comm,site_stats,constituency,constituency_report,meta33548){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33546 = map__33546;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33548 = meta33548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33547.cljs$lang$type = true;
clustermap.components.map_report.t33547.cljs$lang$ctorStr = "clustermap.components.map-report/t33547";
clustermap.components.map_report.t33547.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33547");
});
clustermap.components.map_report.t33547.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33547.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs33552 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33552))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33552),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33552),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33557 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33557))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33557),(function (){var attrs33558 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33558))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33558),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33558));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33557),(function (){var attrs33559 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33559))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33559),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33559));
}
})());
}
})(),(function (){var attrs33560 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33560))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33560),(function (){var attrs33561 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33561))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33561),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33561));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33560),(function (){var attrs33562 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33562))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33562),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33562));
}
})());
}
})(),(function (){var attrs33563 = clustermap.formats.money.fmoney.call(null,(function (){var G__33573 = self__.site_stats;var G__33573__$1 = (((G__33573 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33573));var G__33573__$2 = (((G__33573__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33573__$1));return G__33573__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33563))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33563),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33563),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33568 = clustermap.formats.number.fnum.call(null,(function (){var G__33574 = self__.site_stats;var G__33574__$1 = (((G__33574 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33574));var G__33574__$2 = (((G__33574__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33574__$1));return G__33574__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33568))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33568),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33568),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33549){var self__ = this;
var _33549__$1 = this;return self__.meta33548;
});
clustermap.components.map_report.t33547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33549,meta33548__$1){var self__ = this;
var _33549__$1 = this;return (new clustermap.components.map_report.t33547(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33546,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33548__$1));
});
clustermap.components.map_report.__GT_t33547 = (function __GT_t33547(pc_count__$1,ic_count__$1,const_count__$1,map__33546__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33548){return (new clustermap.components.map_report.t33547(pc_count__$1,ic_count__$1,const_count__$1,map__33546__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33548));
});
}
return (new clustermap.components.map_report.t33547(pc_count,ic_count,const_count,map__33546__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33578 = cljs.core._EQ__EQ_;var expr__33579 = type;if(cljs.core.truth_(pred__33578.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33579)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33578.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33579)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33578.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33579)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
