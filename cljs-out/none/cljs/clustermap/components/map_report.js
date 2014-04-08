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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12351 = site_stats;var G__12351__$1 = (((G__12351 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12351));return G__12351__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12352 = site_stats;var G__12352__$1 = (((G__12352 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12352));return G__12352__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12353 = site_stats;var G__12353__$1 = (((G__12353 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12353));return G__12353__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12385 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12385__$1 = ((cljs.core.seq_QMARK_.call(null,map__12385))?cljs.core.apply.call(null,cljs.core.hash_map,map__12385):map__12385);var const_count = cljs.core.get.call(null,map__12385__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12385__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12385__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12386 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12386 = (function (pc_count,ic_count,const_count,map__12385,comm,site_stats,all_portfolio_companies_summary_report,meta12387){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12385 = map__12385;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12387 = meta12387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12386.cljs$lang$type = true;
clustermap.components.map_report.t12386.cljs$lang$ctorStr = "clustermap.components.map-report/t12386";
clustermap.components.map_report.t12386.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12386");
});
clustermap.components.map_report.t12386.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12386.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12391 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12391))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12391),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12391),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs12396 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12396))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12396),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12396),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs12401 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12401))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12401),(function (){var attrs12402 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12402))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12402),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12402));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12401),(function (){var attrs12403 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12403))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12403),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12403));
}
})());
}
})(),(function (){var attrs12404 = clustermap.formats.money.fmoney.call(null,(function (){var G__12414 = self__.site_stats;var G__12414__$1 = (((G__12414 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12414));var G__12414__$2 = (((G__12414__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12414__$1));return G__12414__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12404))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12404),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12404),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12409 = clustermap.formats.number.fnum.call(null,(function (){var G__12415 = self__.site_stats;var G__12415__$1 = (((G__12415 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12415));var G__12415__$2 = (((G__12415__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12415__$1));return G__12415__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12409))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12409),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12409),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12388){var self__ = this;
var _12388__$1 = this;return self__.meta12387;
});
clustermap.components.map_report.t12386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12388,meta12387__$1){var self__ = this;
var _12388__$1 = this;return (new clustermap.components.map_report.t12386(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12385,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12387__$1));
});
clustermap.components.map_report.__GT_t12386 = (function __GT_t12386(pc_count__$1,ic_count__$1,const_count__$1,map__12385__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12387){return (new clustermap.components.map_report.t12386(pc_count__$1,ic_count__$1,const_count__$1,map__12385__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12387));
});
}
return (new clustermap.components.map_report.t12386(pc_count,ic_count,const_count,map__12385__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__12441 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12441__$1 = ((cljs.core.seq_QMARK_.call(null,map__12441))?cljs.core.apply.call(null,cljs.core.hash_map,map__12441):map__12441);var const_count = cljs.core.get.call(null,map__12441__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12441__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12441__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12442 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12442 = (function (pc_count,ic_count,const_count,map__12441,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta12443){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12441 = map__12441;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12443 = meta12443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12442.cljs$lang$type = true;
clustermap.components.map_report.t12442.cljs$lang$ctorStr = "clustermap.components.map-report/t12442";
clustermap.components.map_report.t12442.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12442");
});
clustermap.components.map_report.t12442.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12442.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs12447 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12447))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12447),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12447));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12448 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12448))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12448),(function (){var attrs12449 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12449))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12449),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12449));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12448),(function (){var attrs12450 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12450))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12450),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12450));
}
})());
}
})(),(function (){var attrs12451 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12451))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12451),(function (){var attrs12452 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12452))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12452),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12452));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12451),(function (){var attrs12453 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12453))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12453),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12453));
}
})());
}
})(),(function (){var attrs12454 = clustermap.formats.money.fmoney.call(null,(function (){var G__12464 = self__.site_stats;var G__12464__$1 = (((G__12464 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12464));var G__12464__$2 = (((G__12464__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12464__$1));return G__12464__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12454))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12454),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12454),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12459 = clustermap.formats.number.fnum.call(null,(function (){var G__12465 = self__.site_stats;var G__12465__$1 = (((G__12465 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12465));var G__12465__$2 = (((G__12465__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12465__$1));return G__12465__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12459))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12459),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12459),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12444){var self__ = this;
var _12444__$1 = this;return self__.meta12443;
});
clustermap.components.map_report.t12442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12444,meta12443__$1){var self__ = this;
var _12444__$1 = this;return (new clustermap.components.map_report.t12442(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12441,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12443__$1));
});
clustermap.components.map_report.__GT_t12442 = (function __GT_t12442(pc_count__$1,ic_count__$1,const_count__$1,map__12441__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12443){return (new clustermap.components.map_report.t12442(pc_count__$1,ic_count__$1,const_count__$1,map__12441__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12443));
});
}
return (new clustermap.components.map_report.t12442(pc_count,ic_count,const_count,map__12441__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__12491 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12491__$1 = ((cljs.core.seq_QMARK_.call(null,map__12491))?cljs.core.apply.call(null,cljs.core.hash_map,map__12491):map__12491);var const_count = cljs.core.get.call(null,map__12491__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12491__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12491__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12492 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12492 = (function (pc_count,ic_count,const_count,map__12491,path_fn,comm,site_stats,investor_company,investor_company_report,meta12493){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12491 = map__12491;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12493 = meta12493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12492.cljs$lang$type = true;
clustermap.components.map_report.t12492.cljs$lang$ctorStr = "clustermap.components.map-report/t12492";
clustermap.components.map_report.t12492.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12492");
});
clustermap.components.map_report.t12492.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12492.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12497 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12497))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12497),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12497));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12498 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12498))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12498),(function (){var attrs12499 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12499))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12499),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12499));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12498),(function (){var attrs12500 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12500))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12500),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12500));
}
})());
}
})(),(function (){var attrs12501 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12501))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12501),(function (){var attrs12502 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12502))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12502),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12502));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12501),(function (){var attrs12503 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12503))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12503),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12503));
}
})());
}
})(),(function (){var attrs12504 = clustermap.formats.money.fmoney.call(null,(function (){var G__12514 = self__.site_stats;var G__12514__$1 = (((G__12514 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12514));var G__12514__$2 = (((G__12514__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12514__$1));return G__12514__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12504))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12504),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12504),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12509 = clustermap.formats.number.fnum.call(null,(function (){var G__12515 = self__.site_stats;var G__12515__$1 = (((G__12515 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12515));var G__12515__$2 = (((G__12515__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12515__$1));return G__12515__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12509))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12509),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12509),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12494){var self__ = this;
var _12494__$1 = this;return self__.meta12493;
});
clustermap.components.map_report.t12492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12494,meta12493__$1){var self__ = this;
var _12494__$1 = this;return (new clustermap.components.map_report.t12492(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12491,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12493__$1));
});
clustermap.components.map_report.__GT_t12492 = (function __GT_t12492(pc_count__$1,ic_count__$1,const_count__$1,map__12491__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12493){return (new clustermap.components.map_report.t12492(pc_count__$1,ic_count__$1,const_count__$1,map__12491__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12493));
});
}
return (new clustermap.components.map_report.t12492(pc_count,ic_count,const_count,map__12491__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__12545 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12545__$1 = ((cljs.core.seq_QMARK_.call(null,map__12545))?cljs.core.apply.call(null,cljs.core.hash_map,map__12545):map__12545);var const_count = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12546 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12546 = (function (pc_count,ic_count,const_count,map__12545,path_fn,comm,site_stats,constituency,constituency_report,meta12547){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12545 = map__12545;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12547 = meta12547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12546.cljs$lang$type = true;
clustermap.components.map_report.t12546.cljs$lang$ctorStr = "clustermap.components.map-report/t12546";
clustermap.components.map_report.t12546.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12546");
});
clustermap.components.map_report.t12546.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12546.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12551 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12551))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12551),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12551),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12556 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12556))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12556),(function (){var attrs12557 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12557))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12557),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12557));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12556),(function (){var attrs12558 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12558))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12558),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12558));
}
})());
}
})(),(function (){var attrs12559 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12559))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12559),(function (){var attrs12560 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12560))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12560),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12560));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12559),(function (){var attrs12561 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12561))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12561),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12561));
}
})());
}
})(),(function (){var attrs12562 = clustermap.formats.money.fmoney.call(null,(function (){var G__12572 = self__.site_stats;var G__12572__$1 = (((G__12572 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12572));var G__12572__$2 = (((G__12572__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12572__$1));return G__12572__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12562))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12562),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12562),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12567 = clustermap.formats.number.fnum.call(null,(function (){var G__12573 = self__.site_stats;var G__12573__$1 = (((G__12573 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12573));var G__12573__$2 = (((G__12573__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12573__$1));return G__12573__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12567))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12567),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12567),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12548){var self__ = this;
var _12548__$1 = this;return self__.meta12547;
});
clustermap.components.map_report.t12546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12548,meta12547__$1){var self__ = this;
var _12548__$1 = this;return (new clustermap.components.map_report.t12546(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12545,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12547__$1));
});
clustermap.components.map_report.__GT_t12546 = (function __GT_t12546(pc_count__$1,ic_count__$1,const_count__$1,map__12545__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12547){return (new clustermap.components.map_report.t12546(pc_count__$1,ic_count__$1,const_count__$1,map__12545__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12547));
});
}
return (new clustermap.components.map_report.t12546(pc_count,ic_count,const_count,map__12545__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__12578 = om.core.get_shared.call(null,owner);var map__12578__$1 = ((cljs.core.seq_QMARK_.call(null,map__12578))?cljs.core.apply.call(null,cljs.core.hash_map,map__12578):map__12578);var path_fn = cljs.core.get.call(null,map__12578__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12578__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12579 = cljs.core._EQ__EQ_;var expr__12580 = type;if(cljs.core.truth_(pred__12579.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12580)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__12579.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12580)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__12579.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12580)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map