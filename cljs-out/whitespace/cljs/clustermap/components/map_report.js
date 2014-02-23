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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__33340 = site_stats;var G__33340__$1 = (((G__33340 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33340));return G__33340__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__33341 = site_stats;var G__33341__$1 = (((G__33341 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33341));return G__33341__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__33342 = site_stats;var G__33342__$1 = (((G__33342 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33342));return G__33342__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__33374 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33374__$1 = ((cljs.core.seq_QMARK_.call(null,map__33374))?cljs.core.apply.call(null,cljs.core.hash_map,map__33374):map__33374);var const_count = cljs.core.get.call(null,map__33374__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33374__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33374__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33375 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33375 = (function (pc_count,ic_count,const_count,map__33374,comm,site_stats,all_portfolio_companies_summary_report,meta33376){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33374 = map__33374;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta33376 = meta33376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33375.cljs$lang$type = true;
clustermap.components.map_report.t33375.cljs$lang$ctorStr = "clustermap.components.map-report/t33375";
clustermap.components.map_report.t33375.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33375");
});
clustermap.components.map_report.t33375.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33375.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs33380 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33380))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33380),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33380),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs33385 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33385))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33385),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33385),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs33390 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33390))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33390),(function (){var attrs33391 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33391))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33391),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33391));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33390),(function (){var attrs33392 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33392))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33392),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33392));
}
})());
}
})(),(function (){var attrs33393 = clustermap.formats.money.fmoney.call(null,(function (){var G__33403 = self__.site_stats;var G__33403__$1 = (((G__33403 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33403));var G__33403__$2 = (((G__33403__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33403__$1));return G__33403__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33393))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33393),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33393),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33398 = clustermap.formats.number.fnum.call(null,(function (){var G__33404 = self__.site_stats;var G__33404__$1 = (((G__33404 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33404));var G__33404__$2 = (((G__33404__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33404__$1));return G__33404__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33398))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33398),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33398),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33377){var self__ = this;
var _33377__$1 = this;return self__.meta33376;
});
clustermap.components.map_report.t33375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33377,meta33376__$1){var self__ = this;
var _33377__$1 = this;return (new clustermap.components.map_report.t33375(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33374,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta33376__$1));
});
clustermap.components.map_report.__GT_t33375 = (function __GT_t33375(pc_count__$1,ic_count__$1,const_count__$1,map__33374__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33376){return (new clustermap.components.map_report.t33375(pc_count__$1,ic_count__$1,const_count__$1,map__33374__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33376));
});
}
return (new clustermap.components.map_report.t33375(pc_count,ic_count,const_count,map__33374__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33430 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33430__$1 = ((cljs.core.seq_QMARK_.call(null,map__33430))?cljs.core.apply.call(null,cljs.core.hash_map,map__33430):map__33430);var const_count = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33431 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33431 = (function (pc_count,ic_count,const_count,map__33430,comm,site_stats,portfolio_company,portfolio_company_report,meta33432){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33430 = map__33430;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33432 = meta33432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33431.cljs$lang$type = true;
clustermap.components.map_report.t33431.cljs$lang$ctorStr = "clustermap.components.map-report/t33431";
clustermap.components.map_report.t33431.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33431");
});
clustermap.components.map_report.t33431.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33431.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs33436 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33436))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33436),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33436));
}
})()),React.DOM.ul(null,(function (){var attrs33437 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33437))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33437),(function (){var attrs33438 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33438))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33438),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33438));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33437),(function (){var attrs33439 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33439))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33439),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33439));
}
})());
}
})(),(function (){var attrs33440 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33440))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33440),(function (){var attrs33441 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33441))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33441),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33441));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33440),(function (){var attrs33442 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33442))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33442),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33442));
}
})());
}
})(),(function (){var attrs33443 = clustermap.formats.money.fmoney.call(null,(function (){var G__33453 = self__.site_stats;var G__33453__$1 = (((G__33453 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33453));var G__33453__$2 = (((G__33453__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33453__$1));return G__33453__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33443))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33443),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33443),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33448 = clustermap.formats.number.fnum.call(null,(function (){var G__33454 = self__.site_stats;var G__33454__$1 = (((G__33454 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33454));var G__33454__$2 = (((G__33454__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33454__$1));return G__33454__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33448))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33448),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33448),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33433){var self__ = this;
var _33433__$1 = this;return self__.meta33432;
});
clustermap.components.map_report.t33431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33433,meta33432__$1){var self__ = this;
var _33433__$1 = this;return (new clustermap.components.map_report.t33431(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33430,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33432__$1));
});
clustermap.components.map_report.__GT_t33431 = (function __GT_t33431(pc_count__$1,ic_count__$1,const_count__$1,map__33430__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33432){return (new clustermap.components.map_report.t33431(pc_count__$1,ic_count__$1,const_count__$1,map__33430__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33432));
});
}
return (new clustermap.components.map_report.t33431(pc_count,ic_count,const_count,map__33430__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33480 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33480__$1 = ((cljs.core.seq_QMARK_.call(null,map__33480))?cljs.core.apply.call(null,cljs.core.hash_map,map__33480):map__33480);var const_count = cljs.core.get.call(null,map__33480__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33480__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33480__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33481 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33481 = (function (pc_count,ic_count,const_count,map__33480,comm,site_stats,investor_company,investor_company_report,meta33482){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33480 = map__33480;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33482 = meta33482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33481.cljs$lang$type = true;
clustermap.components.map_report.t33481.cljs$lang$ctorStr = "clustermap.components.map-report/t33481";
clustermap.components.map_report.t33481.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33481");
});
clustermap.components.map_report.t33481.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33481.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs33486 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33486))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33486),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33486));
}
})()),React.DOM.ul(null,(function (){var attrs33487 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33487))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33487),(function (){var attrs33488 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33488))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33488),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33488));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33487),(function (){var attrs33489 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33489))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33489),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33489));
}
})());
}
})(),(function (){var attrs33490 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33490))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33490),(function (){var attrs33491 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33491))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33491),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33491));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33490),(function (){var attrs33492 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33492))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33492),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33492));
}
})());
}
})(),(function (){var attrs33493 = clustermap.formats.money.fmoney.call(null,(function (){var G__33503 = self__.site_stats;var G__33503__$1 = (((G__33503 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33503));var G__33503__$2 = (((G__33503__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33503__$1));return G__33503__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33493))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33493),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33493),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33498 = clustermap.formats.number.fnum.call(null,(function (){var G__33504 = self__.site_stats;var G__33504__$1 = (((G__33504 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33504));var G__33504__$2 = (((G__33504__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33504__$1));return G__33504__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33498))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33498),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33498),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33483){var self__ = this;
var _33483__$1 = this;return self__.meta33482;
});
clustermap.components.map_report.t33481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33483,meta33482__$1){var self__ = this;
var _33483__$1 = this;return (new clustermap.components.map_report.t33481(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33480,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33482__$1));
});
clustermap.components.map_report.__GT_t33481 = (function __GT_t33481(pc_count__$1,ic_count__$1,const_count__$1,map__33480__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33482){return (new clustermap.components.map_report.t33481(pc_count__$1,ic_count__$1,const_count__$1,map__33480__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33482));
});
}
return (new clustermap.components.map_report.t33481(pc_count,ic_count,const_count,map__33480__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33534 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33534__$1 = ((cljs.core.seq_QMARK_.call(null,map__33534))?cljs.core.apply.call(null,cljs.core.hash_map,map__33534):map__33534);var const_count = cljs.core.get.call(null,map__33534__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33534__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33534__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33535 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33535 = (function (pc_count,ic_count,const_count,map__33534,comm,site_stats,constituency,constituency_report,meta33536){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33534 = map__33534;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33536 = meta33536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33535.cljs$lang$type = true;
clustermap.components.map_report.t33535.cljs$lang$ctorStr = "clustermap.components.map-report/t33535";
clustermap.components.map_report.t33535.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33535");
});
clustermap.components.map_report.t33535.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33535.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs33540 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33540))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33540),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33540),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33545 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33545))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33545),(function (){var attrs33546 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33546))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33546),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33546));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33545),(function (){var attrs33547 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33547))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33547),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33547));
}
})());
}
})(),(function (){var attrs33548 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33548))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33548),(function (){var attrs33549 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33549))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33549),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33549));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33548),(function (){var attrs33550 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33550))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33550),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33550));
}
})());
}
})(),(function (){var attrs33551 = clustermap.formats.money.fmoney.call(null,(function (){var G__33561 = self__.site_stats;var G__33561__$1 = (((G__33561 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33561));var G__33561__$2 = (((G__33561__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33561__$1));return G__33561__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33551))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33551),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33551),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33556 = clustermap.formats.number.fnum.call(null,(function (){var G__33562 = self__.site_stats;var G__33562__$1 = (((G__33562 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33562));var G__33562__$2 = (((G__33562__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33562__$1));return G__33562__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33556))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33556),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33556),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33537){var self__ = this;
var _33537__$1 = this;return self__.meta33536;
});
clustermap.components.map_report.t33535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33537,meta33536__$1){var self__ = this;
var _33537__$1 = this;return (new clustermap.components.map_report.t33535(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33534,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33536__$1));
});
clustermap.components.map_report.__GT_t33535 = (function __GT_t33535(pc_count__$1,ic_count__$1,const_count__$1,map__33534__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33536){return (new clustermap.components.map_report.t33535(pc_count__$1,ic_count__$1,const_count__$1,map__33534__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33536));
});
}
return (new clustermap.components.map_report.t33535(pc_count,ic_count,const_count,map__33534__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33566 = cljs.core._EQ__EQ_;var expr__33567 = type;if(cljs.core.truth_(pred__33566.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33567)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33566.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33567)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33566.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33567)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
