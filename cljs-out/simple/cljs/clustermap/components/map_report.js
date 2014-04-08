// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('domina.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12359 = site_stats;var G__12359__$1 = (((G__12359 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12359));return G__12359__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12360 = site_stats;var G__12360__$1 = (((G__12360 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12360));return G__12360__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12361 = site_stats;var G__12361__$1 = (((G__12361 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12361));return G__12361__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12393 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12393__$1 = ((cljs.core.seq_QMARK_.call(null,map__12393))?cljs.core.apply.call(null,cljs.core.hash_map,map__12393):map__12393);var const_count = cljs.core.get.call(null,map__12393__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12393__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12393__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12394 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12394 = (function (pc_count,ic_count,const_count,map__12393,comm,site_stats,all_portfolio_companies_summary_report,meta12395){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12393 = map__12393;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12395 = meta12395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12394.cljs$lang$type = true;
clustermap.components.map_report.t12394.cljs$lang$ctorStr = "clustermap.components.map-report/t12394";
clustermap.components.map_report.t12394.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12394");
});
clustermap.components.map_report.t12394.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12394.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12399 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12399))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12399),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12399),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs12404 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12404))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12404),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12404),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs12409 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12409))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12409),(function (){var attrs12410 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12410))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12410),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12410));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12409),(function (){var attrs12411 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12411))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12411),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12411));
}
})());
}
})(),(function (){var attrs12412 = clustermap.formats.money.fmoney.call(null,(function (){var G__12422 = self__.site_stats;var G__12422__$1 = (((G__12422 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12422));var G__12422__$2 = (((G__12422__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12422__$1));return G__12422__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12412))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12412),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12412),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12417 = clustermap.formats.number.fnum.call(null,(function (){var G__12423 = self__.site_stats;var G__12423__$1 = (((G__12423 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12423));var G__12423__$2 = (((G__12423__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12423__$1));return G__12423__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12417))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12417),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12417),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12396){var self__ = this;
var _12396__$1 = this;return self__.meta12395;
});
clustermap.components.map_report.t12394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12396,meta12395__$1){var self__ = this;
var _12396__$1 = this;return (new clustermap.components.map_report.t12394(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12393,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12395__$1));
});
clustermap.components.map_report.__GT_t12394 = (function __GT_t12394(pc_count__$1,ic_count__$1,const_count__$1,map__12393__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12395){return (new clustermap.components.map_report.t12394(pc_count__$1,ic_count__$1,const_count__$1,map__12393__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12395));
});
}
return (new clustermap.components.map_report.t12394(pc_count,ic_count,const_count,map__12393__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__12449 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12449__$1 = ((cljs.core.seq_QMARK_.call(null,map__12449))?cljs.core.apply.call(null,cljs.core.hash_map,map__12449):map__12449);var const_count = cljs.core.get.call(null,map__12449__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12449__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12449__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12450 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12450 = (function (pc_count,ic_count,const_count,map__12449,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta12451){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12449 = map__12449;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12451 = meta12451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12450.cljs$lang$type = true;
clustermap.components.map_report.t12450.cljs$lang$ctorStr = "clustermap.components.map-report/t12450";
clustermap.components.map_report.t12450.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12450");
});
clustermap.components.map_report.t12450.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12450.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs12455 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12455))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12455),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12455));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12456 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12456))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12456),(function (){var attrs12457 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12457))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12457),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12457));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12456),(function (){var attrs12458 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12458))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12458),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12458));
}
})());
}
})(),(function (){var attrs12459 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12459))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12459),(function (){var attrs12460 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12460))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12460),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12460));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12459),(function (){var attrs12461 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12461))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12461),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12461));
}
})());
}
})(),(function (){var attrs12462 = clustermap.formats.money.fmoney.call(null,(function (){var G__12472 = self__.site_stats;var G__12472__$1 = (((G__12472 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12472));var G__12472__$2 = (((G__12472__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12472__$1));return G__12472__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12462))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12462),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12462),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12467 = clustermap.formats.number.fnum.call(null,(function (){var G__12473 = self__.site_stats;var G__12473__$1 = (((G__12473 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12473));var G__12473__$2 = (((G__12473__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12473__$1));return G__12473__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12467))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12467),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12467),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12452){var self__ = this;
var _12452__$1 = this;return self__.meta12451;
});
clustermap.components.map_report.t12450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12452,meta12451__$1){var self__ = this;
var _12452__$1 = this;return (new clustermap.components.map_report.t12450(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12449,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12451__$1));
});
clustermap.components.map_report.__GT_t12450 = (function __GT_t12450(pc_count__$1,ic_count__$1,const_count__$1,map__12449__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12451){return (new clustermap.components.map_report.t12450(pc_count__$1,ic_count__$1,const_count__$1,map__12449__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12451));
});
}
return (new clustermap.components.map_report.t12450(pc_count,ic_count,const_count,map__12449__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__12499 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12499__$1 = ((cljs.core.seq_QMARK_.call(null,map__12499))?cljs.core.apply.call(null,cljs.core.hash_map,map__12499):map__12499);var const_count = cljs.core.get.call(null,map__12499__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12499__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12499__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12500 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12500 = (function (pc_count,ic_count,const_count,map__12499,path_fn,comm,site_stats,investor_company,investor_company_report,meta12501){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12499 = map__12499;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12501 = meta12501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12500.cljs$lang$type = true;
clustermap.components.map_report.t12500.cljs$lang$ctorStr = "clustermap.components.map-report/t12500";
clustermap.components.map_report.t12500.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12500");
});
clustermap.components.map_report.t12500.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12500.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12505 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12505))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12505),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12505));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12506 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12506))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12506),(function (){var attrs12507 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12507))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12507),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12507));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12506),(function (){var attrs12508 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12508))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12508),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12508));
}
})());
}
})(),(function (){var attrs12509 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12509))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12509),(function (){var attrs12510 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12510))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12510),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12510));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12509),(function (){var attrs12511 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12511))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12511),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12511));
}
})());
}
})(),(function (){var attrs12512 = clustermap.formats.money.fmoney.call(null,(function (){var G__12522 = self__.site_stats;var G__12522__$1 = (((G__12522 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12522));var G__12522__$2 = (((G__12522__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12522__$1));return G__12522__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12512))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12512),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12512),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12517 = clustermap.formats.number.fnum.call(null,(function (){var G__12523 = self__.site_stats;var G__12523__$1 = (((G__12523 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12523));var G__12523__$2 = (((G__12523__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12523__$1));return G__12523__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12517))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12517),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12517),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12502){var self__ = this;
var _12502__$1 = this;return self__.meta12501;
});
clustermap.components.map_report.t12500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12502,meta12501__$1){var self__ = this;
var _12502__$1 = this;return (new clustermap.components.map_report.t12500(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12499,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12501__$1));
});
clustermap.components.map_report.__GT_t12500 = (function __GT_t12500(pc_count__$1,ic_count__$1,const_count__$1,map__12499__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12501){return (new clustermap.components.map_report.t12500(pc_count__$1,ic_count__$1,const_count__$1,map__12499__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12501));
});
}
return (new clustermap.components.map_report.t12500(pc_count,ic_count,const_count,map__12499__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__12553 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12553__$1 = ((cljs.core.seq_QMARK_.call(null,map__12553))?cljs.core.apply.call(null,cljs.core.hash_map,map__12553):map__12553);var const_count = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12554 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12554 = (function (pc_count,ic_count,const_count,map__12553,path_fn,comm,site_stats,constituency,constituency_report,meta12555){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12553 = map__12553;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12555 = meta12555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12554.cljs$lang$type = true;
clustermap.components.map_report.t12554.cljs$lang$ctorStr = "clustermap.components.map-report/t12554";
clustermap.components.map_report.t12554.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12554");
});
clustermap.components.map_report.t12554.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12554.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12559 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12559))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12559),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12559),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12564 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12564))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12564),(function (){var attrs12565 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12565))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12565),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12565));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12564),(function (){var attrs12566 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12566))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12566),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12566));
}
})());
}
})(),(function (){var attrs12567 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12567))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12567),(function (){var attrs12568 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12568))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12568),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12568));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12567),(function (){var attrs12569 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12569))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12569),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12569));
}
})());
}
})(),(function (){var attrs12570 = clustermap.formats.money.fmoney.call(null,(function (){var G__12580 = self__.site_stats;var G__12580__$1 = (((G__12580 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12580));var G__12580__$2 = (((G__12580__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12580__$1));return G__12580__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12570))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12570),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12570),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12575 = clustermap.formats.number.fnum.call(null,(function (){var G__12581 = self__.site_stats;var G__12581__$1 = (((G__12581 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12581));var G__12581__$2 = (((G__12581__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12581__$1));return G__12581__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12575))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12575),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12575),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12556){var self__ = this;
var _12556__$1 = this;return self__.meta12555;
});
clustermap.components.map_report.t12554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12556,meta12555__$1){var self__ = this;
var _12556__$1 = this;return (new clustermap.components.map_report.t12554(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12553,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12555__$1));
});
clustermap.components.map_report.__GT_t12554 = (function __GT_t12554(pc_count__$1,ic_count__$1,const_count__$1,map__12553__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12555){return (new clustermap.components.map_report.t12554(pc_count__$1,ic_count__$1,const_count__$1,map__12553__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12555));
});
}
return (new clustermap.components.map_report.t12554(pc_count,ic_count,const_count,map__12553__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__12586 = om.core.get_shared.call(null,owner);var map__12586__$1 = ((cljs.core.seq_QMARK_.call(null,map__12586))?cljs.core.apply.call(null,cljs.core.hash_map,map__12586):map__12586);var path_fn = cljs.core.get.call(null,map__12586__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12586__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12587 = cljs.core._EQ__EQ_;var expr__12588 = type;if(cljs.core.truth_(pred__12587.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12588)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__12587.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12588)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__12587.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12588)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
