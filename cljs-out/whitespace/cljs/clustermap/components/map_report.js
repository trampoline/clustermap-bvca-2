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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__33304 = site_stats;var G__33304__$1 = (((G__33304 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33304));return G__33304__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__33305 = site_stats;var G__33305__$1 = (((G__33305 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33305));return G__33305__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__33306 = site_stats;var G__33306__$1 = (((G__33306 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33306));return G__33306__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__33338 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33338__$1 = ((cljs.core.seq_QMARK_.call(null,map__33338))?cljs.core.apply.call(null,cljs.core.hash_map,map__33338):map__33338);var const_count = cljs.core.get.call(null,map__33338__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33338__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33338__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33339 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33339 = (function (pc_count,ic_count,const_count,map__33338,comm,site_stats,all_portfolio_companies_summary_report,meta33340){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33338 = map__33338;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta33340 = meta33340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33339.cljs$lang$type = true;
clustermap.components.map_report.t33339.cljs$lang$ctorStr = "clustermap.components.map-report/t33339";
clustermap.components.map_report.t33339.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33339");
});
clustermap.components.map_report.t33339.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33339.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs33344 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33344))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33344),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33344),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs33349 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33349))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33349),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33349),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs33354 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33354))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33354),(function (){var attrs33355 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33355))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33355),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33355));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33354),(function (){var attrs33356 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33356))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33356),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33356));
}
})());
}
})(),(function (){var attrs33357 = clustermap.formats.money.fmoney.call(null,(function (){var G__33367 = self__.site_stats;var G__33367__$1 = (((G__33367 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33367));var G__33367__$2 = (((G__33367__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33367__$1));return G__33367__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33357))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33357),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33357),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33362 = clustermap.formats.number.fnum.call(null,(function (){var G__33368 = self__.site_stats;var G__33368__$1 = (((G__33368 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33368));var G__33368__$2 = (((G__33368__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33368__$1));return G__33368__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33362))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33362),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33362),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33341){var self__ = this;
var _33341__$1 = this;return self__.meta33340;
});
clustermap.components.map_report.t33339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33341,meta33340__$1){var self__ = this;
var _33341__$1 = this;return (new clustermap.components.map_report.t33339(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33338,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta33340__$1));
});
clustermap.components.map_report.__GT_t33339 = (function __GT_t33339(pc_count__$1,ic_count__$1,const_count__$1,map__33338__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33340){return (new clustermap.components.map_report.t33339(pc_count__$1,ic_count__$1,const_count__$1,map__33338__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33340));
});
}
return (new clustermap.components.map_report.t33339(pc_count,ic_count,const_count,map__33338__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33394 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33394__$1 = ((cljs.core.seq_QMARK_.call(null,map__33394))?cljs.core.apply.call(null,cljs.core.hash_map,map__33394):map__33394);var const_count = cljs.core.get.call(null,map__33394__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33394__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33394__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33395 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33395 = (function (pc_count,ic_count,const_count,map__33394,comm,site_stats,portfolio_company,portfolio_company_report,meta33396){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33394 = map__33394;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33396 = meta33396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33395.cljs$lang$type = true;
clustermap.components.map_report.t33395.cljs$lang$ctorStr = "clustermap.components.map-report/t33395";
clustermap.components.map_report.t33395.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33395");
});
clustermap.components.map_report.t33395.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33395.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs33400 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33400))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33400),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33400));
}
})()),React.DOM.ul(null,(function (){var attrs33401 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33401))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33401),(function (){var attrs33402 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33402))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33402),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33402));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33401),(function (){var attrs33403 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33403))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33403),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33403));
}
})());
}
})(),(function (){var attrs33404 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33404))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33404),(function (){var attrs33405 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33405))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33405),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33405));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33404),(function (){var attrs33406 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33406))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33406),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33406));
}
})());
}
})(),(function (){var attrs33407 = clustermap.formats.money.fmoney.call(null,(function (){var G__33417 = self__.site_stats;var G__33417__$1 = (((G__33417 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33417));var G__33417__$2 = (((G__33417__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33417__$1));return G__33417__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33407))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33407),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33407),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33412 = clustermap.formats.number.fnum.call(null,(function (){var G__33418 = self__.site_stats;var G__33418__$1 = (((G__33418 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33418));var G__33418__$2 = (((G__33418__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33418__$1));return G__33418__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33412))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33412),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33412),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33397){var self__ = this;
var _33397__$1 = this;return self__.meta33396;
});
clustermap.components.map_report.t33395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33397,meta33396__$1){var self__ = this;
var _33397__$1 = this;return (new clustermap.components.map_report.t33395(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33394,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33396__$1));
});
clustermap.components.map_report.__GT_t33395 = (function __GT_t33395(pc_count__$1,ic_count__$1,const_count__$1,map__33394__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33396){return (new clustermap.components.map_report.t33395(pc_count__$1,ic_count__$1,const_count__$1,map__33394__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33396));
});
}
return (new clustermap.components.map_report.t33395(pc_count,ic_count,const_count,map__33394__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33444 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33444__$1 = ((cljs.core.seq_QMARK_.call(null,map__33444))?cljs.core.apply.call(null,cljs.core.hash_map,map__33444):map__33444);var const_count = cljs.core.get.call(null,map__33444__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33444__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33444__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33445 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33445 = (function (pc_count,ic_count,const_count,map__33444,comm,site_stats,investor_company,investor_company_report,meta33446){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33444 = map__33444;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33446 = meta33446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33445.cljs$lang$type = true;
clustermap.components.map_report.t33445.cljs$lang$ctorStr = "clustermap.components.map-report/t33445";
clustermap.components.map_report.t33445.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33445");
});
clustermap.components.map_report.t33445.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33445.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs33450 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33450))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33450),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33450));
}
})()),React.DOM.ul(null,(function (){var attrs33451 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33451))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33451),(function (){var attrs33452 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33452))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33452),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33452));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33451),(function (){var attrs33453 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33453))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33453),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33453));
}
})());
}
})(),(function (){var attrs33454 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33454))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33454),(function (){var attrs33455 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33455))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33455),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33455));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33454),(function (){var attrs33456 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33456))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33456),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33456));
}
})());
}
})(),(function (){var attrs33457 = clustermap.formats.money.fmoney.call(null,(function (){var G__33467 = self__.site_stats;var G__33467__$1 = (((G__33467 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33467));var G__33467__$2 = (((G__33467__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33467__$1));return G__33467__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33457))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33457),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33457),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33462 = clustermap.formats.number.fnum.call(null,(function (){var G__33468 = self__.site_stats;var G__33468__$1 = (((G__33468 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33468));var G__33468__$2 = (((G__33468__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33468__$1));return G__33468__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33462))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33462),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33462),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33447){var self__ = this;
var _33447__$1 = this;return self__.meta33446;
});
clustermap.components.map_report.t33445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33447,meta33446__$1){var self__ = this;
var _33447__$1 = this;return (new clustermap.components.map_report.t33445(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33444,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33446__$1));
});
clustermap.components.map_report.__GT_t33445 = (function __GT_t33445(pc_count__$1,ic_count__$1,const_count__$1,map__33444__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33446){return (new clustermap.components.map_report.t33445(pc_count__$1,ic_count__$1,const_count__$1,map__33444__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33446));
});
}
return (new clustermap.components.map_report.t33445(pc_count,ic_count,const_count,map__33444__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33498 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33498__$1 = ((cljs.core.seq_QMARK_.call(null,map__33498))?cljs.core.apply.call(null,cljs.core.hash_map,map__33498):map__33498);var const_count = cljs.core.get.call(null,map__33498__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33498__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33498__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33499 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33499 = (function (pc_count,ic_count,const_count,map__33498,comm,site_stats,constituency,constituency_report,meta33500){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33498 = map__33498;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33500 = meta33500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33499.cljs$lang$type = true;
clustermap.components.map_report.t33499.cljs$lang$ctorStr = "clustermap.components.map-report/t33499";
clustermap.components.map_report.t33499.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33499");
});
clustermap.components.map_report.t33499.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33499.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs33504 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33504))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33504),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33504),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})()),React.DOM.ul(null,(function (){var attrs33509 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33509))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33509),(function (){var attrs33510 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33510))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33510),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33510));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33509),(function (){var attrs33511 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33511))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33511),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33511));
}
})());
}
})(),(function (){var attrs33512 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33512))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33512),(function (){var attrs33513 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33513))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33513),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33513));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33512),(function (){var attrs33514 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33514))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33514),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33514));
}
})());
}
})(),(function (){var attrs33515 = clustermap.formats.money.fmoney.call(null,(function (){var G__33525 = self__.site_stats;var G__33525__$1 = (((G__33525 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33525));var G__33525__$2 = (((G__33525__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33525__$1));return G__33525__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33515))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33515),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33515),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33520 = clustermap.formats.number.fnum.call(null,(function (){var G__33526 = self__.site_stats;var G__33526__$1 = (((G__33526 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33526));var G__33526__$2 = (((G__33526__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33526__$1));return G__33526__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33520))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33520),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33520),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33501){var self__ = this;
var _33501__$1 = this;return self__.meta33500;
});
clustermap.components.map_report.t33499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33501,meta33500__$1){var self__ = this;
var _33501__$1 = this;return (new clustermap.components.map_report.t33499(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33498,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33500__$1));
});
clustermap.components.map_report.__GT_t33499 = (function __GT_t33499(pc_count__$1,ic_count__$1,const_count__$1,map__33498__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33500){return (new clustermap.components.map_report.t33499(pc_count__$1,ic_count__$1,const_count__$1,map__33498__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33500));
});
}
return (new clustermap.components.map_report.t33499(pc_count,ic_count,const_count,map__33498__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__33530 = cljs.core._EQ__EQ_;var expr__33531 = type;if(cljs.core.truth_(pred__33530.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33531)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33530.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33531)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33530.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33531)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
