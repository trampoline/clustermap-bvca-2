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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__45264 = site_stats;var G__45264__$1 = (((G__45264 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__45264));return G__45264__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__45265 = site_stats;var G__45265__$1 = (((G__45265 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__45265));return G__45265__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__45266 = site_stats;var G__45266__$1 = (((G__45266 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__45266));return G__45266__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__45298 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45298__$1 = ((cljs.core.seq_QMARK_.call(null,map__45298))?cljs.core.apply.call(null,cljs.core.hash_map,map__45298):map__45298);var const_count = cljs.core.get.call(null,map__45298__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45298__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45298__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45299 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45299 = (function (pc_count,ic_count,const_count,map__45298,comm,site_stats,all_portfolio_companies_summary_report,meta45300){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45298 = map__45298;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta45300 = meta45300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45299.cljs$lang$type = true;
clustermap.components.map_report.t45299.cljs$lang$ctorStr = "clustermap.components.map-report/t45299";
clustermap.components.map_report.t45299.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45299");
});
clustermap.components.map_report.t45299.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45299.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs45304 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45304))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45304),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45304),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs45309 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45309))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45309),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45309),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs45314 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45314))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45314),(function (){var attrs45315 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45315))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45315),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45315));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45314),(function (){var attrs45316 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45316))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45316),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45316));
}
})());
}
})(),(function (){var attrs45317 = clustermap.formats.money.fmoney.call(null,(function (){var G__45327 = self__.site_stats;var G__45327__$1 = (((G__45327 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45327));var G__45327__$2 = (((G__45327__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45327__$1));return G__45327__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45317))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45317),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45317),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45322 = clustermap.formats.number.fnum.call(null,(function (){var G__45328 = self__.site_stats;var G__45328__$1 = (((G__45328 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45328));var G__45328__$2 = (((G__45328__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45328__$1));return G__45328__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45322))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45322),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45322),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45301){var self__ = this;
var _45301__$1 = this;return self__.meta45300;
});
clustermap.components.map_report.t45299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45301,meta45300__$1){var self__ = this;
var _45301__$1 = this;return (new clustermap.components.map_report.t45299(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45298,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta45300__$1));
});
clustermap.components.map_report.__GT_t45299 = (function __GT_t45299(pc_count__$1,ic_count__$1,const_count__$1,map__45298__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45300){return (new clustermap.components.map_report.t45299(pc_count__$1,ic_count__$1,const_count__$1,map__45298__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45300));
});
}
return (new clustermap.components.map_report.t45299(pc_count,ic_count,const_count,map__45298__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__45354 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45354__$1 = ((cljs.core.seq_QMARK_.call(null,map__45354))?cljs.core.apply.call(null,cljs.core.hash_map,map__45354):map__45354);var const_count = cljs.core.get.call(null,map__45354__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45354__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45354__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45355 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45355 = (function (pc_count,ic_count,const_count,map__45354,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta45356){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45354 = map__45354;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta45356 = meta45356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45355.cljs$lang$type = true;
clustermap.components.map_report.t45355.cljs$lang$ctorStr = "clustermap.components.map-report/t45355";
clustermap.components.map_report.t45355.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45355");
});
clustermap.components.map_report.t45355.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45355.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs45360 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs45360))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45360),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45360));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45361 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45361))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45361),(function (){var attrs45362 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45362))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45362),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45362));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45361),(function (){var attrs45363 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45363))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45363),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45363));
}
})());
}
})(),(function (){var attrs45364 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45364))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45364),(function (){var attrs45365 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45365))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45365),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45365));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45364),(function (){var attrs45366 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45366))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45366),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45366));
}
})());
}
})(),(function (){var attrs45367 = clustermap.formats.money.fmoney.call(null,(function (){var G__45377 = self__.site_stats;var G__45377__$1 = (((G__45377 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45377));var G__45377__$2 = (((G__45377__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45377__$1));return G__45377__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45367))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45367),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45367),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45372 = clustermap.formats.number.fnum.call(null,(function (){var G__45378 = self__.site_stats;var G__45378__$1 = (((G__45378 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45378));var G__45378__$2 = (((G__45378__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45378__$1));return G__45378__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45372))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45372),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45372),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45357){var self__ = this;
var _45357__$1 = this;return self__.meta45356;
});
clustermap.components.map_report.t45355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45357,meta45356__$1){var self__ = this;
var _45357__$1 = this;return (new clustermap.components.map_report.t45355(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45354,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta45356__$1));
});
clustermap.components.map_report.__GT_t45355 = (function __GT_t45355(pc_count__$1,ic_count__$1,const_count__$1,map__45354__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45356){return (new clustermap.components.map_report.t45355(pc_count__$1,ic_count__$1,const_count__$1,map__45354__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45356));
});
}
return (new clustermap.components.map_report.t45355(pc_count,ic_count,const_count,map__45354__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__45404 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45404__$1 = ((cljs.core.seq_QMARK_.call(null,map__45404))?cljs.core.apply.call(null,cljs.core.hash_map,map__45404):map__45404);var const_count = cljs.core.get.call(null,map__45404__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45404__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45404__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45405 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45405 = (function (pc_count,ic_count,const_count,map__45404,path_fn,comm,site_stats,investor_company,investor_company_report,meta45406){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45404 = map__45404;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta45406 = meta45406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45405.cljs$lang$type = true;
clustermap.components.map_report.t45405.cljs$lang$ctorStr = "clustermap.components.map-report/t45405";
clustermap.components.map_report.t45405.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45405");
});
clustermap.components.map_report.t45405.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45405.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs45410 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs45410))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45410),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45410));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45411 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45411))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45411),(function (){var attrs45412 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45412))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45412),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45412));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45411),(function (){var attrs45413 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45413))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45413),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45413));
}
})());
}
})(),(function (){var attrs45414 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45414))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45414),(function (){var attrs45415 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45415))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45415),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45415));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45414),(function (){var attrs45416 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45416))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45416),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45416));
}
})());
}
})(),(function (){var attrs45417 = clustermap.formats.money.fmoney.call(null,(function (){var G__45427 = self__.site_stats;var G__45427__$1 = (((G__45427 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45427));var G__45427__$2 = (((G__45427__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45427__$1));return G__45427__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45417))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45417),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45417),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45422 = clustermap.formats.number.fnum.call(null,(function (){var G__45428 = self__.site_stats;var G__45428__$1 = (((G__45428 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45428));var G__45428__$2 = (((G__45428__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45428__$1));return G__45428__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45422))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45422),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45422),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45407){var self__ = this;
var _45407__$1 = this;return self__.meta45406;
});
clustermap.components.map_report.t45405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45407,meta45406__$1){var self__ = this;
var _45407__$1 = this;return (new clustermap.components.map_report.t45405(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45404,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta45406__$1));
});
clustermap.components.map_report.__GT_t45405 = (function __GT_t45405(pc_count__$1,ic_count__$1,const_count__$1,map__45404__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45406){return (new clustermap.components.map_report.t45405(pc_count__$1,ic_count__$1,const_count__$1,map__45404__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45406));
});
}
return (new clustermap.components.map_report.t45405(pc_count,ic_count,const_count,map__45404__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__45458 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45458__$1 = ((cljs.core.seq_QMARK_.call(null,map__45458))?cljs.core.apply.call(null,cljs.core.hash_map,map__45458):map__45458);var const_count = cljs.core.get.call(null,map__45458__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45458__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45458__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45459 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45459 = (function (pc_count,ic_count,const_count,map__45458,path_fn,comm,site_stats,constituency,constituency_report,meta45460){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45458 = map__45458;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta45460 = meta45460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45459.cljs$lang$type = true;
clustermap.components.map_report.t45459.cljs$lang$ctorStr = "clustermap.components.map-report/t45459";
clustermap.components.map_report.t45459.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45459");
});
clustermap.components.map_report.t45459.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45459.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs45464 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs45464))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45464),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45464),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45469 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45469))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45469),(function (){var attrs45470 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45470))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45470),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45470));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45469),(function (){var attrs45471 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45471))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45471),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45471));
}
})());
}
})(),(function (){var attrs45472 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45472))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45472),(function (){var attrs45473 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45473))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45473),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45473));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45472),(function (){var attrs45474 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45474))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45474),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45474));
}
})());
}
})(),(function (){var attrs45475 = clustermap.formats.money.fmoney.call(null,(function (){var G__45485 = self__.site_stats;var G__45485__$1 = (((G__45485 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45485));var G__45485__$2 = (((G__45485__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45485__$1));return G__45485__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45475))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45475),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45475),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45480 = clustermap.formats.number.fnum.call(null,(function (){var G__45486 = self__.site_stats;var G__45486__$1 = (((G__45486 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45486));var G__45486__$2 = (((G__45486__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45486__$1));return G__45486__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45480))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45480),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45480),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45461){var self__ = this;
var _45461__$1 = this;return self__.meta45460;
});
clustermap.components.map_report.t45459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45461,meta45460__$1){var self__ = this;
var _45461__$1 = this;return (new clustermap.components.map_report.t45459(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45458,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta45460__$1));
});
clustermap.components.map_report.__GT_t45459 = (function __GT_t45459(pc_count__$1,ic_count__$1,const_count__$1,map__45458__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45460){return (new clustermap.components.map_report.t45459(pc_count__$1,ic_count__$1,const_count__$1,map__45458__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45460));
});
}
return (new clustermap.components.map_report.t45459(pc_count,ic_count,const_count,map__45458__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__45491 = om.core.get_shared.call(null,owner);var map__45491__$1 = ((cljs.core.seq_QMARK_.call(null,map__45491))?cljs.core.apply.call(null,cljs.core.hash_map,map__45491):map__45491);var path_fn = cljs.core.get.call(null,map__45491__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45491__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__45492 = cljs.core._EQ__EQ_;var expr__45493 = type;if(cljs.core.truth_(pred__45492.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__45493)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__45492.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__45493)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__45492.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__45493)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
