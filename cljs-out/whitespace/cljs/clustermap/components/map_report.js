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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__45320 = site_stats;var G__45320__$1 = (((G__45320 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__45320));return G__45320__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__45321 = site_stats;var G__45321__$1 = (((G__45321 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__45321));return G__45321__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__45322 = site_stats;var G__45322__$1 = (((G__45322 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__45322));return G__45322__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__45354 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45354__$1 = ((cljs.core.seq_QMARK_.call(null,map__45354))?cljs.core.apply.call(null,cljs.core.hash_map,map__45354):map__45354);var const_count = cljs.core.get.call(null,map__45354__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45354__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45354__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45355 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45355 = (function (pc_count,ic_count,const_count,map__45354,comm,site_stats,all_portfolio_companies_summary_report,meta45356){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45354 = map__45354;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
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
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs45360 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45360))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45360),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45360),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs45365 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45365))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45365),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45365),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs45370 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45370))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45370),(function (){var attrs45371 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45371))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45371),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45371));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45370),(function (){var attrs45372 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45372))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45372),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45372));
}
})());
}
})(),(function (){var attrs45373 = clustermap.formats.money.fmoney.call(null,(function (){var G__45383 = self__.site_stats;var G__45383__$1 = (((G__45383 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45383));var G__45383__$2 = (((G__45383__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45383__$1));return G__45383__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45373))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45373),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45373),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45378 = clustermap.formats.number.fnum.call(null,(function (){var G__45384 = self__.site_stats;var G__45384__$1 = (((G__45384 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45384));var G__45384__$2 = (((G__45384__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45384__$1));return G__45384__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45378))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45378),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45378),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45357){var self__ = this;
var _45357__$1 = this;return self__.meta45356;
});
clustermap.components.map_report.t45355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45357,meta45356__$1){var self__ = this;
var _45357__$1 = this;return (new clustermap.components.map_report.t45355(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45354,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta45356__$1));
});
clustermap.components.map_report.__GT_t45355 = (function __GT_t45355(pc_count__$1,ic_count__$1,const_count__$1,map__45354__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45356){return (new clustermap.components.map_report.t45355(pc_count__$1,ic_count__$1,const_count__$1,map__45354__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45356));
});
}
return (new clustermap.components.map_report.t45355(pc_count,ic_count,const_count,map__45354__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__45410 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45410__$1 = ((cljs.core.seq_QMARK_.call(null,map__45410))?cljs.core.apply.call(null,cljs.core.hash_map,map__45410):map__45410);var const_count = cljs.core.get.call(null,map__45410__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45410__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45410__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45411 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45411 = (function (pc_count,ic_count,const_count,map__45410,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta45412){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45410 = map__45410;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta45412 = meta45412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45411.cljs$lang$type = true;
clustermap.components.map_report.t45411.cljs$lang$ctorStr = "clustermap.components.map-report/t45411";
clustermap.components.map_report.t45411.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45411");
});
clustermap.components.map_report.t45411.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45411.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs45416 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs45416))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45416),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45416));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45417 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45417))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45417),(function (){var attrs45418 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45418))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45418),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45418));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45417),(function (){var attrs45419 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45419))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45419),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45419));
}
})());
}
})(),(function (){var attrs45420 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45420))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45420),(function (){var attrs45421 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45421))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45421),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45421));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45420),(function (){var attrs45422 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45422))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45422),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45422));
}
})());
}
})(),(function (){var attrs45423 = clustermap.formats.money.fmoney.call(null,(function (){var G__45433 = self__.site_stats;var G__45433__$1 = (((G__45433 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45433));var G__45433__$2 = (((G__45433__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45433__$1));return G__45433__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45423))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45423),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45423),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45428 = clustermap.formats.number.fnum.call(null,(function (){var G__45434 = self__.site_stats;var G__45434__$1 = (((G__45434 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45434));var G__45434__$2 = (((G__45434__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45434__$1));return G__45434__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45428))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45428),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45428),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45413){var self__ = this;
var _45413__$1 = this;return self__.meta45412;
});
clustermap.components.map_report.t45411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45413,meta45412__$1){var self__ = this;
var _45413__$1 = this;return (new clustermap.components.map_report.t45411(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45410,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta45412__$1));
});
clustermap.components.map_report.__GT_t45411 = (function __GT_t45411(pc_count__$1,ic_count__$1,const_count__$1,map__45410__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45412){return (new clustermap.components.map_report.t45411(pc_count__$1,ic_count__$1,const_count__$1,map__45410__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45412));
});
}
return (new clustermap.components.map_report.t45411(pc_count,ic_count,const_count,map__45410__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__45460 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45460__$1 = ((cljs.core.seq_QMARK_.call(null,map__45460))?cljs.core.apply.call(null,cljs.core.hash_map,map__45460):map__45460);var const_count = cljs.core.get.call(null,map__45460__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45460__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45460__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45461 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45461 = (function (pc_count,ic_count,const_count,map__45460,path_fn,comm,site_stats,investor_company,investor_company_report,meta45462){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45460 = map__45460;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta45462 = meta45462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45461.cljs$lang$type = true;
clustermap.components.map_report.t45461.cljs$lang$ctorStr = "clustermap.components.map-report/t45461";
clustermap.components.map_report.t45461.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45461");
});
clustermap.components.map_report.t45461.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45461.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs45466 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs45466))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45466),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45466));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45467 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45467))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45467),(function (){var attrs45468 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45468))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45468),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45468));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45467),(function (){var attrs45469 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45469))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45469),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45469));
}
})());
}
})(),(function (){var attrs45470 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45470))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45470),(function (){var attrs45471 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45471))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45471),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45471));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45470),(function (){var attrs45472 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45472))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45472),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45472));
}
})());
}
})(),(function (){var attrs45473 = clustermap.formats.money.fmoney.call(null,(function (){var G__45483 = self__.site_stats;var G__45483__$1 = (((G__45483 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45483));var G__45483__$2 = (((G__45483__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45483__$1));return G__45483__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45473))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45473),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45473),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45478 = clustermap.formats.number.fnum.call(null,(function (){var G__45484 = self__.site_stats;var G__45484__$1 = (((G__45484 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45484));var G__45484__$2 = (((G__45484__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45484__$1));return G__45484__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45478))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45478),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45478),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45463){var self__ = this;
var _45463__$1 = this;return self__.meta45462;
});
clustermap.components.map_report.t45461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45463,meta45462__$1){var self__ = this;
var _45463__$1 = this;return (new clustermap.components.map_report.t45461(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45460,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta45462__$1));
});
clustermap.components.map_report.__GT_t45461 = (function __GT_t45461(pc_count__$1,ic_count__$1,const_count__$1,map__45460__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45462){return (new clustermap.components.map_report.t45461(pc_count__$1,ic_count__$1,const_count__$1,map__45460__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45462));
});
}
return (new clustermap.components.map_report.t45461(pc_count,ic_count,const_count,map__45460__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__45514 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45514__$1 = ((cljs.core.seq_QMARK_.call(null,map__45514))?cljs.core.apply.call(null,cljs.core.hash_map,map__45514):map__45514);var const_count = cljs.core.get.call(null,map__45514__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45514__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45514__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45515 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45515 = (function (pc_count,ic_count,const_count,map__45514,path_fn,comm,site_stats,constituency,constituency_report,meta45516){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45514 = map__45514;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta45516 = meta45516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45515.cljs$lang$type = true;
clustermap.components.map_report.t45515.cljs$lang$ctorStr = "clustermap.components.map-report/t45515";
clustermap.components.map_report.t45515.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45515");
});
clustermap.components.map_report.t45515.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45515.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs45520 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs45520))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45520),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45520),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45525 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45525))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45525),(function (){var attrs45526 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45526))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45526),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45526));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45525),(function (){var attrs45527 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45527))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45527),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45527));
}
})());
}
})(),(function (){var attrs45528 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45528))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45528),(function (){var attrs45529 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45529))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45529),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45529));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45528),(function (){var attrs45530 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45530))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45530),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45530));
}
})());
}
})(),(function (){var attrs45531 = clustermap.formats.money.fmoney.call(null,(function (){var G__45541 = self__.site_stats;var G__45541__$1 = (((G__45541 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45541));var G__45541__$2 = (((G__45541__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45541__$1));return G__45541__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45531))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45531),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45531),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45536 = clustermap.formats.number.fnum.call(null,(function (){var G__45542 = self__.site_stats;var G__45542__$1 = (((G__45542 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45542));var G__45542__$2 = (((G__45542__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45542__$1));return G__45542__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45536))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45536),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45536),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45517){var self__ = this;
var _45517__$1 = this;return self__.meta45516;
});
clustermap.components.map_report.t45515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45517,meta45516__$1){var self__ = this;
var _45517__$1 = this;return (new clustermap.components.map_report.t45515(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45514,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta45516__$1));
});
clustermap.components.map_report.__GT_t45515 = (function __GT_t45515(pc_count__$1,ic_count__$1,const_count__$1,map__45514__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45516){return (new clustermap.components.map_report.t45515(pc_count__$1,ic_count__$1,const_count__$1,map__45514__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45516));
});
}
return (new clustermap.components.map_report.t45515(pc_count,ic_count,const_count,map__45514__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__45547 = om.core.get_shared.call(null,owner);var map__45547__$1 = ((cljs.core.seq_QMARK_.call(null,map__45547))?cljs.core.apply.call(null,cljs.core.hash_map,map__45547):map__45547);var path_fn = cljs.core.get.call(null,map__45547__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45547__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__45548 = cljs.core._EQ__EQ_;var expr__45549 = type;if(cljs.core.truth_(pred__45548.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__45549)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__45548.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__45549)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__45548.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__45549)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
