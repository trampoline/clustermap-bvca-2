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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__22450 = site_stats;var G__22450__$1 = (((G__22450 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__22450));return G__22450__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__22451 = site_stats;var G__22451__$1 = (((G__22451 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__22451));return G__22451__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__22452 = site_stats;var G__22452__$1 = (((G__22452 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__22452));return G__22452__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22484 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__22484__$1 = ((cljs.core.seq_QMARK_.call(null,map__22484))?cljs.core.apply.call(null,cljs.core.hash_map,map__22484):map__22484);var const_count = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t22485 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22485 = (function (pc_count,ic_count,const_count,map__22484,comm,site_stats,all_portfolio_companies_summary_report,meta22486){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22484 = map__22484;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22486 = meta22486;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22485.cljs$lang$type = true;
clustermap.components.map_report.t22485.cljs$lang$ctorStr = "clustermap.components.map-report/t22485";
clustermap.components.map_report.t22485.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t22485");
});
clustermap.components.map_report.t22485.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22485.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22490 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22490))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22490),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22490),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22495 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22495))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22495),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22495),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22500 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22500))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22500),(function (){var attrs22501 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs22501))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22501),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22501));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22500),(function (){var attrs22502 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs22502))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22502),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22502));
}
})());
}
})(),(function (){var attrs22503 = clustermap.formats.money.fmoney.call(null,(function (){var G__22513 = self__.site_stats;var G__22513__$1 = (((G__22513 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__22513));var G__22513__$2 = (((G__22513__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__22513__$1));return G__22513__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22503))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22503),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22503),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22508 = clustermap.formats.number.fnum.call(null,(function (){var G__22514 = self__.site_stats;var G__22514__$1 = (((G__22514 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__22514));var G__22514__$2 = (((G__22514__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__22514__$1));return G__22514__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22508))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22508),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22508),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t22485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22487){var self__ = this;
var _22487__$1 = this;return self__.meta22486;
});
clustermap.components.map_report.t22485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22487,meta22486__$1){var self__ = this;
var _22487__$1 = this;return (new clustermap.components.map_report.t22485(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22484,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22486__$1));
});
clustermap.components.map_report.__GT_t22485 = (function __GT_t22485(pc_count__$1,ic_count__$1,const_count__$1,map__22484__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22486){return (new clustermap.components.map_report.t22485(pc_count__$1,ic_count__$1,const_count__$1,map__22484__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22486));
});
}
return (new clustermap.components.map_report.t22485(pc_count,ic_count,const_count,map__22484__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22538 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__22538__$1 = ((cljs.core.seq_QMARK_.call(null,map__22538))?cljs.core.apply.call(null,cljs.core.hash_map,map__22538):map__22538);var const_count = cljs.core.get.call(null,map__22538__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__22538__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__22538__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t22539 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22539 = (function (pc_count,ic_count,const_count,map__22538,comm,site_stats,portfolio_company,portfolio_company_report,meta22540){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22538 = map__22538;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22540 = meta22540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22539.cljs$lang$type = true;
clustermap.components.map_report.t22539.cljs$lang$ctorStr = "clustermap.components.map-report/t22539";
clustermap.components.map_report.t22539.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t22539");
});
clustermap.components.map_report.t22539.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22539.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22542 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs22542))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs22542),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs22542));
}
})()),React.DOM.ul(null,(function (){var attrs22543 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs22543))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22543),(function (){var attrs22544 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs22544))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22544),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22544));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22543),(function (){var attrs22545 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs22545))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22545),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22545));
}
})());
}
})(),(function (){var attrs22546 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs22546))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22546),(function (){var attrs22547 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs22547))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22547),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22547));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22546),(function (){var attrs22548 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs22548))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22548),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22548));
}
})());
}
})(),(function (){var attrs22549 = clustermap.formats.money.fmoney.call(null,(function (){var G__22559 = self__.site_stats;var G__22559__$1 = (((G__22559 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__22559));var G__22559__$2 = (((G__22559__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__22559__$1));return G__22559__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22549))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22549),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22549),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22554 = clustermap.formats.number.fnum.call(null,(function (){var G__22560 = self__.site_stats;var G__22560__$1 = (((G__22560 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__22560));var G__22560__$2 = (((G__22560__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__22560__$1));return G__22560__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22554))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22554),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22554),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t22539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22541){var self__ = this;
var _22541__$1 = this;return self__.meta22540;
});
clustermap.components.map_report.t22539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22541,meta22540__$1){var self__ = this;
var _22541__$1 = this;return (new clustermap.components.map_report.t22539(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22538,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22540__$1));
});
clustermap.components.map_report.__GT_t22539 = (function __GT_t22539(pc_count__$1,ic_count__$1,const_count__$1,map__22538__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22540){return (new clustermap.components.map_report.t22539(pc_count__$1,ic_count__$1,const_count__$1,map__22538__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22540));
});
}
return (new clustermap.components.map_report.t22539(pc_count,ic_count,const_count,map__22538__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22584 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__22584__$1 = ((cljs.core.seq_QMARK_.call(null,map__22584))?cljs.core.apply.call(null,cljs.core.hash_map,map__22584):map__22584);var const_count = cljs.core.get.call(null,map__22584__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__22584__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__22584__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t22585 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22585 = (function (pc_count,ic_count,const_count,map__22584,comm,site_stats,investor_company,investor_company_report,meta22586){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22584 = map__22584;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22586 = meta22586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22585.cljs$lang$type = true;
clustermap.components.map_report.t22585.cljs$lang$ctorStr = "clustermap.components.map-report/t22585";
clustermap.components.map_report.t22585.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t22585");
});
clustermap.components.map_report.t22585.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22585.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22588 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs22588))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs22588),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs22588));
}
})()),React.DOM.ul(null,(function (){var attrs22589 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs22589))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22589),(function (){var attrs22590 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs22590))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22590),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22590));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22589),(function (){var attrs22591 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs22591))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22591),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22591));
}
})());
}
})(),(function (){var attrs22592 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs22592))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22592),(function (){var attrs22593 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs22593))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22593),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22593));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22592),(function (){var attrs22594 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs22594))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22594),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22594));
}
})());
}
})(),(function (){var attrs22595 = clustermap.formats.money.fmoney.call(null,(function (){var G__22605 = self__.site_stats;var G__22605__$1 = (((G__22605 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__22605));var G__22605__$2 = (((G__22605__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__22605__$1));return G__22605__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22595))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22595),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22595),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22600 = clustermap.formats.number.fnum.call(null,(function (){var G__22606 = self__.site_stats;var G__22606__$1 = (((G__22606 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__22606));var G__22606__$2 = (((G__22606__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__22606__$1));return G__22606__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22600))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22600),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22600),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t22585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22587){var self__ = this;
var _22587__$1 = this;return self__.meta22586;
});
clustermap.components.map_report.t22585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22587,meta22586__$1){var self__ = this;
var _22587__$1 = this;return (new clustermap.components.map_report.t22585(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22584,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22586__$1));
});
clustermap.components.map_report.__GT_t22585 = (function __GT_t22585(pc_count__$1,ic_count__$1,const_count__$1,map__22584__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22586){return (new clustermap.components.map_report.t22585(pc_count__$1,ic_count__$1,const_count__$1,map__22584__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22586));
});
}
return (new clustermap.components.map_report.t22585(pc_count,ic_count,const_count,map__22584__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22631 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__22631__$1 = ((cljs.core.seq_QMARK_.call(null,map__22631))?cljs.core.apply.call(null,cljs.core.hash_map,map__22631):map__22631);var const_count = cljs.core.get.call(null,map__22631__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__22631__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__22631__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t22632 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22632 = (function (pc_count,ic_count,const_count,map__22631,comm,site_stats,constituency,constituency_report,meta22633){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22631 = map__22631;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22633 = meta22633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22632.cljs$lang$type = true;
clustermap.components.map_report.t22632.cljs$lang$ctorStr = "clustermap.components.map-report/t22632";
clustermap.components.map_report.t22632.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t22632");
});
clustermap.components.map_report.t22632.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22632.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22635 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs22635))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs22635),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs22635));
}
})(),(function (){var attrs22636 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs22636))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs22636),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs22636),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22637 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs22637))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22637),(function (){var attrs22638 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs22638))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22638),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22638));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22637),(function (){var attrs22639 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs22639))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22639),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22639));
}
})());
}
})(),(function (){var attrs22640 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs22640))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22640),(function (){var attrs22641 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs22641))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22641),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22641));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22640),(function (){var attrs22642 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs22642))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs22642),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs22642));
}
})());
}
})(),(function (){var attrs22643 = clustermap.formats.money.fmoney.call(null,(function (){var G__22653 = self__.site_stats;var G__22653__$1 = (((G__22653 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__22653));var G__22653__$2 = (((G__22653__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__22653__$1));return G__22653__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22643))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22643),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22643),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22648 = clustermap.formats.number.fnum.call(null,(function (){var G__22654 = self__.site_stats;var G__22654__$1 = (((G__22654 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__22654));var G__22654__$2 = (((G__22654__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__22654__$1));return G__22654__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22648))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs22648),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs22648),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t22632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22634){var self__ = this;
var _22634__$1 = this;return self__.meta22633;
});
clustermap.components.map_report.t22632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22634,meta22633__$1){var self__ = this;
var _22634__$1 = this;return (new clustermap.components.map_report.t22632(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22631,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22633__$1));
});
clustermap.components.map_report.__GT_t22632 = (function __GT_t22632(pc_count__$1,ic_count__$1,const_count__$1,map__22631__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22633){return (new clustermap.components.map_report.t22632(pc_count__$1,ic_count__$1,const_count__$1,map__22631__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22633));
});
}
return (new clustermap.components.map_report.t22632(pc_count,ic_count,const_count,map__22631__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__22658 = cljs.core._EQ__EQ_;var expr__22659 = type;if(cljs.core.truth_(pred__22658.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__22659)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__22658.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__22659)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__22658.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__22659)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
