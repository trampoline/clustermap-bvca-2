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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12435 = site_stats;var G__12435__$1 = (((G__12435 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12435));return G__12435__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12436 = site_stats;var G__12436__$1 = (((G__12436 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12436));return G__12436__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12437 = site_stats;var G__12437__$1 = (((G__12437 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12437));return G__12437__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12469 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12469__$1 = ((cljs.core.seq_QMARK_.call(null,map__12469))?cljs.core.apply.call(null,cljs.core.hash_map,map__12469):map__12469);var const_count = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12470 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12470 = (function (pc_count,ic_count,const_count,map__12469,comm,site_stats,all_portfolio_companies_summary_report,meta12471){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12469 = map__12469;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12471 = meta12471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12470.cljs$lang$type = true;
clustermap.components.map_report.t12470.cljs$lang$ctorStr = "clustermap.components.map-report/t12470";
clustermap.components.map_report.t12470.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12470");
});
clustermap.components.map_report.t12470.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12470.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12475 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12475))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12475),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12475),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12480 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12480))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12480),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12480),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12485 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12485))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12485),(function (){var attrs12486 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12486))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12486),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12486));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12485),(function (){var attrs12487 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12487))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12487),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12487));
}
})());
}
})(),(function (){var attrs12488 = clustermap.formats.money.fmoney.call(null,(function (){var G__12498 = self__.site_stats;var G__12498__$1 = (((G__12498 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12498));var G__12498__$2 = (((G__12498__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12498__$1));return G__12498__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12488))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12488),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12488),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12493 = clustermap.formats.number.fnum.call(null,(function (){var G__12499 = self__.site_stats;var G__12499__$1 = (((G__12499 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12499));var G__12499__$2 = (((G__12499__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12499__$1));return G__12499__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12493))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12493),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12493),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12472){var self__ = this;
var _12472__$1 = this;return self__.meta12471;
});
clustermap.components.map_report.t12470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12472,meta12471__$1){var self__ = this;
var _12472__$1 = this;return (new clustermap.components.map_report.t12470(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12469,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12471__$1));
});
clustermap.components.map_report.__GT_t12470 = (function __GT_t12470(pc_count__$1,ic_count__$1,const_count__$1,map__12469__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12471){return (new clustermap.components.map_report.t12470(pc_count__$1,ic_count__$1,const_count__$1,map__12469__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12471));
});
}
return (new clustermap.components.map_report.t12470(pc_count,ic_count,const_count,map__12469__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__12525 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12525__$1 = ((cljs.core.seq_QMARK_.call(null,map__12525))?cljs.core.apply.call(null,cljs.core.hash_map,map__12525):map__12525);var const_count = cljs.core.get.call(null,map__12525__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12525__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12525__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12526 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12526 = (function (pc_count,ic_count,const_count,map__12525,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta12527){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12525 = map__12525;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12527 = meta12527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12526.cljs$lang$type = true;
clustermap.components.map_report.t12526.cljs$lang$ctorStr = "clustermap.components.map-report/t12526";
clustermap.components.map_report.t12526.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12526");
});
clustermap.components.map_report.t12526.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12526.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12531 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12531))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12531),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12531));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12532 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12532))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12532),(function (){var attrs12533 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12533))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12533),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12533));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12532),(function (){var attrs12534 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12534))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12534),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12534));
}
})());
}
})(),(function (){var attrs12535 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12535))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12535),(function (){var attrs12536 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12536))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12536),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12536));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12535),(function (){var attrs12537 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12537))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12537),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12537));
}
})());
}
})(),(function (){var attrs12538 = clustermap.formats.money.fmoney.call(null,(function (){var G__12548 = self__.site_stats;var G__12548__$1 = (((G__12548 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12548));var G__12548__$2 = (((G__12548__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12548__$1));return G__12548__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12538))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12538),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12538),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12543 = clustermap.formats.number.fnum.call(null,(function (){var G__12549 = self__.site_stats;var G__12549__$1 = (((G__12549 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12549));var G__12549__$2 = (((G__12549__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12549__$1));return G__12549__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12543))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12543),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12543),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12528){var self__ = this;
var _12528__$1 = this;return self__.meta12527;
});
clustermap.components.map_report.t12526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12528,meta12527__$1){var self__ = this;
var _12528__$1 = this;return (new clustermap.components.map_report.t12526(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12525,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12527__$1));
});
clustermap.components.map_report.__GT_t12526 = (function __GT_t12526(pc_count__$1,ic_count__$1,const_count__$1,map__12525__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12527){return (new clustermap.components.map_report.t12526(pc_count__$1,ic_count__$1,const_count__$1,map__12525__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12527));
});
}
return (new clustermap.components.map_report.t12526(pc_count,ic_count,const_count,map__12525__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__12575 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12575__$1 = ((cljs.core.seq_QMARK_.call(null,map__12575))?cljs.core.apply.call(null,cljs.core.hash_map,map__12575):map__12575);var const_count = cljs.core.get.call(null,map__12575__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12575__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12575__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12576 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12576 = (function (pc_count,ic_count,const_count,map__12575,path_fn,comm,site_stats,investor_company,investor_company_report,meta12577){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12575 = map__12575;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12577 = meta12577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12576.cljs$lang$type = true;
clustermap.components.map_report.t12576.cljs$lang$ctorStr = "clustermap.components.map-report/t12576";
clustermap.components.map_report.t12576.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12576");
});
clustermap.components.map_report.t12576.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12576.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12581 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12581))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12581),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12581));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12582 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12582))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12582),(function (){var attrs12583 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12583))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12583),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12583));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12582),(function (){var attrs12584 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12584))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12584),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12584));
}
})());
}
})(),(function (){var attrs12585 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12585))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12585),(function (){var attrs12586 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12586))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12586),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12586));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12585),(function (){var attrs12587 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12587))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12587),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12587));
}
})());
}
})(),(function (){var attrs12588 = clustermap.formats.money.fmoney.call(null,(function (){var G__12598 = self__.site_stats;var G__12598__$1 = (((G__12598 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12598));var G__12598__$2 = (((G__12598__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12598__$1));return G__12598__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12588))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12588),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12588),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12593 = clustermap.formats.number.fnum.call(null,(function (){var G__12599 = self__.site_stats;var G__12599__$1 = (((G__12599 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12599));var G__12599__$2 = (((G__12599__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12599__$1));return G__12599__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12593))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12593),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12593),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12578){var self__ = this;
var _12578__$1 = this;return self__.meta12577;
});
clustermap.components.map_report.t12576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12578,meta12577__$1){var self__ = this;
var _12578__$1 = this;return (new clustermap.components.map_report.t12576(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12575,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12577__$1));
});
clustermap.components.map_report.__GT_t12576 = (function __GT_t12576(pc_count__$1,ic_count__$1,const_count__$1,map__12575__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12577){return (new clustermap.components.map_report.t12576(pc_count__$1,ic_count__$1,const_count__$1,map__12575__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12577));
});
}
return (new clustermap.components.map_report.t12576(pc_count,ic_count,const_count,map__12575__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__12629 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12629__$1 = ((cljs.core.seq_QMARK_.call(null,map__12629))?cljs.core.apply.call(null,cljs.core.hash_map,map__12629):map__12629);var const_count = cljs.core.get.call(null,map__12629__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12629__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12629__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12630 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12630 = (function (pc_count,ic_count,const_count,map__12629,path_fn,comm,site_stats,constituency,constituency_report,meta12631){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12629 = map__12629;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12631 = meta12631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12630.cljs$lang$type = true;
clustermap.components.map_report.t12630.cljs$lang$ctorStr = "clustermap.components.map-report/t12630";
clustermap.components.map_report.t12630.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12630");
});
clustermap.components.map_report.t12630.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12630.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12635 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12635))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12635),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12635),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12640 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12640))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12640),(function (){var attrs12641 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12641))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12641),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12641));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12640),(function (){var attrs12642 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12642))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12642),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12642));
}
})());
}
})(),(function (){var attrs12643 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12643))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12643),(function (){var attrs12644 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12644))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12644),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12644));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12643),(function (){var attrs12645 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12645))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12645),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12645));
}
})());
}
})(),(function (){var attrs12646 = clustermap.formats.money.fmoney.call(null,(function (){var G__12656 = self__.site_stats;var G__12656__$1 = (((G__12656 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12656));var G__12656__$2 = (((G__12656__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12656__$1));return G__12656__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12646))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12646),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12646),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12651 = clustermap.formats.number.fnum.call(null,(function (){var G__12657 = self__.site_stats;var G__12657__$1 = (((G__12657 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12657));var G__12657__$2 = (((G__12657__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12657__$1));return G__12657__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12651))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12651),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12651),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12632){var self__ = this;
var _12632__$1 = this;return self__.meta12631;
});
clustermap.components.map_report.t12630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12632,meta12631__$1){var self__ = this;
var _12632__$1 = this;return (new clustermap.components.map_report.t12630(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12629,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12631__$1));
});
clustermap.components.map_report.__GT_t12630 = (function __GT_t12630(pc_count__$1,ic_count__$1,const_count__$1,map__12629__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12631){return (new clustermap.components.map_report.t12630(pc_count__$1,ic_count__$1,const_count__$1,map__12629__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12631));
});
}
return (new clustermap.components.map_report.t12630(pc_count,ic_count,const_count,map__12629__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__12662 = om.core.get_shared.call(null,owner);var map__12662__$1 = ((cljs.core.seq_QMARK_.call(null,map__12662))?cljs.core.apply.call(null,cljs.core.hash_map,map__12662):map__12662);var path_fn = cljs.core.get.call(null,map__12662__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12662__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12663 = cljs.core._EQ__EQ_;var expr__12664 = type;if(cljs.core.truth_(pred__12663.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12664)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__12663.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12664)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__12663.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12664)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
