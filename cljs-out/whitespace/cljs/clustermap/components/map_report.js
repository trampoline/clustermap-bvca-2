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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__45418 = site_stats;var G__45418__$1 = (((G__45418 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__45418));return G__45418__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__45419 = site_stats;var G__45419__$1 = (((G__45419 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__45419));return G__45419__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__45420 = site_stats;var G__45420__$1 = (((G__45420 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__45420));return G__45420__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__45452 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45452__$1 = ((cljs.core.seq_QMARK_.call(null,map__45452))?cljs.core.apply.call(null,cljs.core.hash_map,map__45452):map__45452);var const_count = cljs.core.get.call(null,map__45452__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45452__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45452__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45453 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45453 = (function (pc_count,ic_count,const_count,map__45452,comm,site_stats,all_portfolio_companies_summary_report,meta45454){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45452 = map__45452;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta45454 = meta45454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45453.cljs$lang$type = true;
clustermap.components.map_report.t45453.cljs$lang$ctorStr = "clustermap.components.map-report/t45453";
clustermap.components.map_report.t45453.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45453");
});
clustermap.components.map_report.t45453.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45453.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs45458 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45458))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45458),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45458),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs45463 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45463))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45463),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45463),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs45468 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45468))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45468),(function (){var attrs45469 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45469))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45469),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45469));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45468),(function (){var attrs45470 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45470))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45470),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45470));
}
})());
}
})(),(function (){var attrs45471 = clustermap.formats.money.fmoney.call(null,(function (){var G__45481 = self__.site_stats;var G__45481__$1 = (((G__45481 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45481));var G__45481__$2 = (((G__45481__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45481__$1));return G__45481__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45471))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45471),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45471),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45476 = clustermap.formats.number.fnum.call(null,(function (){var G__45482 = self__.site_stats;var G__45482__$1 = (((G__45482 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45482));var G__45482__$2 = (((G__45482__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45482__$1));return G__45482__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45476))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45476),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45476),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45455){var self__ = this;
var _45455__$1 = this;return self__.meta45454;
});
clustermap.components.map_report.t45453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45455,meta45454__$1){var self__ = this;
var _45455__$1 = this;return (new clustermap.components.map_report.t45453(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45452,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta45454__$1));
});
clustermap.components.map_report.__GT_t45453 = (function __GT_t45453(pc_count__$1,ic_count__$1,const_count__$1,map__45452__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45454){return (new clustermap.components.map_report.t45453(pc_count__$1,ic_count__$1,const_count__$1,map__45452__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45454));
});
}
return (new clustermap.components.map_report.t45453(pc_count,ic_count,const_count,map__45452__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__45508 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45508__$1 = ((cljs.core.seq_QMARK_.call(null,map__45508))?cljs.core.apply.call(null,cljs.core.hash_map,map__45508):map__45508);var const_count = cljs.core.get.call(null,map__45508__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45508__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45508__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45509 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45509 = (function (pc_count,ic_count,const_count,map__45508,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta45510){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45508 = map__45508;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta45510 = meta45510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45509.cljs$lang$type = true;
clustermap.components.map_report.t45509.cljs$lang$ctorStr = "clustermap.components.map-report/t45509";
clustermap.components.map_report.t45509.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45509");
});
clustermap.components.map_report.t45509.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45509.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs45514 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs45514))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45514),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45514));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45515 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45515))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45515),(function (){var attrs45516 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45516))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45516),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45516));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45515),(function (){var attrs45517 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45517))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45517),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45517));
}
})());
}
})(),(function (){var attrs45518 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45518))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45518),(function (){var attrs45519 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45519))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45519),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45519));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45518),(function (){var attrs45520 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45520))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45520),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45520));
}
})());
}
})(),(function (){var attrs45521 = clustermap.formats.money.fmoney.call(null,(function (){var G__45531 = self__.site_stats;var G__45531__$1 = (((G__45531 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45531));var G__45531__$2 = (((G__45531__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45531__$1));return G__45531__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45521))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45521),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45521),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45526 = clustermap.formats.number.fnum.call(null,(function (){var G__45532 = self__.site_stats;var G__45532__$1 = (((G__45532 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45532));var G__45532__$2 = (((G__45532__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45532__$1));return G__45532__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45526))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45526),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45526),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45511){var self__ = this;
var _45511__$1 = this;return self__.meta45510;
});
clustermap.components.map_report.t45509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45511,meta45510__$1){var self__ = this;
var _45511__$1 = this;return (new clustermap.components.map_report.t45509(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45508,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta45510__$1));
});
clustermap.components.map_report.__GT_t45509 = (function __GT_t45509(pc_count__$1,ic_count__$1,const_count__$1,map__45508__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45510){return (new clustermap.components.map_report.t45509(pc_count__$1,ic_count__$1,const_count__$1,map__45508__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45510));
});
}
return (new clustermap.components.map_report.t45509(pc_count,ic_count,const_count,map__45508__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__45558 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45558__$1 = ((cljs.core.seq_QMARK_.call(null,map__45558))?cljs.core.apply.call(null,cljs.core.hash_map,map__45558):map__45558);var const_count = cljs.core.get.call(null,map__45558__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45558__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45558__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45559 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45559 = (function (pc_count,ic_count,const_count,map__45558,path_fn,comm,site_stats,investor_company,investor_company_report,meta45560){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45558 = map__45558;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta45560 = meta45560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45559.cljs$lang$type = true;
clustermap.components.map_report.t45559.cljs$lang$ctorStr = "clustermap.components.map-report/t45559";
clustermap.components.map_report.t45559.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45559");
});
clustermap.components.map_report.t45559.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45559.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs45564 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs45564))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45564),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45564));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45565 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45565))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45565),(function (){var attrs45566 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45566))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45566),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45566));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45565),(function (){var attrs45567 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45567))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45567),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45567));
}
})());
}
})(),(function (){var attrs45568 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45568))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45568),(function (){var attrs45569 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45569))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45569),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45569));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45568),(function (){var attrs45570 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45570))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45570),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45570));
}
})());
}
})(),(function (){var attrs45571 = clustermap.formats.money.fmoney.call(null,(function (){var G__45581 = self__.site_stats;var G__45581__$1 = (((G__45581 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45581));var G__45581__$2 = (((G__45581__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45581__$1));return G__45581__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45571))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45571),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45571),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45576 = clustermap.formats.number.fnum.call(null,(function (){var G__45582 = self__.site_stats;var G__45582__$1 = (((G__45582 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45582));var G__45582__$2 = (((G__45582__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45582__$1));return G__45582__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45576))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45576),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45576),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45561){var self__ = this;
var _45561__$1 = this;return self__.meta45560;
});
clustermap.components.map_report.t45559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45561,meta45560__$1){var self__ = this;
var _45561__$1 = this;return (new clustermap.components.map_report.t45559(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45558,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta45560__$1));
});
clustermap.components.map_report.__GT_t45559 = (function __GT_t45559(pc_count__$1,ic_count__$1,const_count__$1,map__45558__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45560){return (new clustermap.components.map_report.t45559(pc_count__$1,ic_count__$1,const_count__$1,map__45558__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45560));
});
}
return (new clustermap.components.map_report.t45559(pc_count,ic_count,const_count,map__45558__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__45612 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45612__$1 = ((cljs.core.seq_QMARK_.call(null,map__45612))?cljs.core.apply.call(null,cljs.core.hash_map,map__45612):map__45612);var const_count = cljs.core.get.call(null,map__45612__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45612__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45612__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45613 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45613 = (function (pc_count,ic_count,const_count,map__45612,path_fn,comm,site_stats,constituency,constituency_report,meta45614){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45612 = map__45612;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta45614 = meta45614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45613.cljs$lang$type = true;
clustermap.components.map_report.t45613.cljs$lang$ctorStr = "clustermap.components.map-report/t45613";
clustermap.components.map_report.t45613.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45613");
});
clustermap.components.map_report.t45613.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45613.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs45618 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs45618))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45618),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45618),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45623 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45623))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45623),(function (){var attrs45624 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45624))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45624),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45624));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45623),(function (){var attrs45625 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45625))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45625),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45625));
}
})());
}
})(),(function (){var attrs45626 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45626))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45626),(function (){var attrs45627 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45627))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45627),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45627));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45626),(function (){var attrs45628 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45628))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45628),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45628));
}
})());
}
})(),(function (){var attrs45629 = clustermap.formats.money.fmoney.call(null,(function (){var G__45639 = self__.site_stats;var G__45639__$1 = (((G__45639 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45639));var G__45639__$2 = (((G__45639__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45639__$1));return G__45639__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45629))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45629),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45629),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45634 = clustermap.formats.number.fnum.call(null,(function (){var G__45640 = self__.site_stats;var G__45640__$1 = (((G__45640 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45640));var G__45640__$2 = (((G__45640__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45640__$1));return G__45640__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45634))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45634),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45634),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45615){var self__ = this;
var _45615__$1 = this;return self__.meta45614;
});
clustermap.components.map_report.t45613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45615,meta45614__$1){var self__ = this;
var _45615__$1 = this;return (new clustermap.components.map_report.t45613(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45612,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta45614__$1));
});
clustermap.components.map_report.__GT_t45613 = (function __GT_t45613(pc_count__$1,ic_count__$1,const_count__$1,map__45612__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45614){return (new clustermap.components.map_report.t45613(pc_count__$1,ic_count__$1,const_count__$1,map__45612__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45614));
});
}
return (new clustermap.components.map_report.t45613(pc_count,ic_count,const_count,map__45612__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__45645 = om.core.get_shared.call(null,owner);var map__45645__$1 = ((cljs.core.seq_QMARK_.call(null,map__45645))?cljs.core.apply.call(null,cljs.core.hash_map,map__45645):map__45645);var path_fn = cljs.core.get.call(null,map__45645__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45645__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__45646 = cljs.core._EQ__EQ_;var expr__45647 = type;if(cljs.core.truth_(pred__45646.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__45647)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__45646.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__45647)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__45646.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__45647)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
