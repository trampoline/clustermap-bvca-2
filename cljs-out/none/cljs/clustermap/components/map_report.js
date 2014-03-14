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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__23376 = site_stats;var G__23376__$1 = (((G__23376 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23376));return G__23376__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__23377 = site_stats;var G__23377__$1 = (((G__23377 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23377));return G__23377__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__23378 = site_stats;var G__23378__$1 = (((G__23378 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23378));return G__23378__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__23410 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23410__$1 = ((cljs.core.seq_QMARK_.call(null,map__23410))?cljs.core.apply.call(null,cljs.core.hash_map,map__23410):map__23410);var const_count = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23411 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23411 = (function (pc_count,ic_count,const_count,map__23410,comm,site_stats,all_portfolio_companies_summary_report,meta23412){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23410 = map__23410;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23412 = meta23412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23411.cljs$lang$type = true;
clustermap.components.map_report.t23411.cljs$lang$ctorStr = "clustermap.components.map-report/t23411";
clustermap.components.map_report.t23411.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23411");
});
clustermap.components.map_report.t23411.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23411.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23416 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23416))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23416),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23416),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs23421 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23421))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23421),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23421),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs23426 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23426))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23426),(function (){var attrs23427 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23427))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23427),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23427));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23426),(function (){var attrs23428 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23428))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23428),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23428));
}
})());
}
})(),(function (){var attrs23429 = clustermap.formats.money.fmoney.call(null,(function (){var G__23439 = self__.site_stats;var G__23439__$1 = (((G__23439 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23439));var G__23439__$2 = (((G__23439__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23439__$1));return G__23439__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23429))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23429),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23429),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23434 = clustermap.formats.number.fnum.call(null,(function (){var G__23440 = self__.site_stats;var G__23440__$1 = (((G__23440 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23440));var G__23440__$2 = (((G__23440__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23440__$1));return G__23440__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23434))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23434),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23434),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23413){var self__ = this;
var _23413__$1 = this;return self__.meta23412;
});
clustermap.components.map_report.t23411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23413,meta23412__$1){var self__ = this;
var _23413__$1 = this;return (new clustermap.components.map_report.t23411(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23410,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23412__$1));
});
clustermap.components.map_report.__GT_t23411 = (function __GT_t23411(pc_count__$1,ic_count__$1,const_count__$1,map__23410__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23412){return (new clustermap.components.map_report.t23411(pc_count__$1,ic_count__$1,const_count__$1,map__23410__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23412));
});
}
return (new clustermap.components.map_report.t23411(pc_count,ic_count,const_count,map__23410__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__23466 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23466__$1 = ((cljs.core.seq_QMARK_.call(null,map__23466))?cljs.core.apply.call(null,cljs.core.hash_map,map__23466):map__23466);var const_count = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23467 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23467 = (function (pc_count,ic_count,const_count,map__23466,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta23468){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23466 = map__23466;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta23468 = meta23468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23467.cljs$lang$type = true;
clustermap.components.map_report.t23467.cljs$lang$ctorStr = "clustermap.components.map-report/t23467";
clustermap.components.map_report.t23467.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23467");
});
clustermap.components.map_report.t23467.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23467.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs23472 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs23472))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23472),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23472));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23473 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23473))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23473),(function (){var attrs23474 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23474))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23474),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23474));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23473),(function (){var attrs23475 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23475))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23475),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23475));
}
})());
}
})(),(function (){var attrs23476 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23476))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23476),(function (){var attrs23477 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23477))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23477),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23477));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23476),(function (){var attrs23478 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23478))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23478),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23478));
}
})());
}
})(),(function (){var attrs23479 = clustermap.formats.money.fmoney.call(null,(function (){var G__23489 = self__.site_stats;var G__23489__$1 = (((G__23489 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23489));var G__23489__$2 = (((G__23489__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23489__$1));return G__23489__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23479))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23479),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23479),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23484 = clustermap.formats.number.fnum.call(null,(function (){var G__23490 = self__.site_stats;var G__23490__$1 = (((G__23490 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23490));var G__23490__$2 = (((G__23490__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23490__$1));return G__23490__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23484))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23484),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23484),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23469){var self__ = this;
var _23469__$1 = this;return self__.meta23468;
});
clustermap.components.map_report.t23467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23469,meta23468__$1){var self__ = this;
var _23469__$1 = this;return (new clustermap.components.map_report.t23467(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23466,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta23468__$1));
});
clustermap.components.map_report.__GT_t23467 = (function __GT_t23467(pc_count__$1,ic_count__$1,const_count__$1,map__23466__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23468){return (new clustermap.components.map_report.t23467(pc_count__$1,ic_count__$1,const_count__$1,map__23466__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23468));
});
}
return (new clustermap.components.map_report.t23467(pc_count,ic_count,const_count,map__23466__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__23516 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23516__$1 = ((cljs.core.seq_QMARK_.call(null,map__23516))?cljs.core.apply.call(null,cljs.core.hash_map,map__23516):map__23516);var const_count = cljs.core.get.call(null,map__23516__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23516__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23516__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23517 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23517 = (function (pc_count,ic_count,const_count,map__23516,path_fn,comm,site_stats,investor_company,investor_company_report,meta23518){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23516 = map__23516;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta23518 = meta23518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23517.cljs$lang$type = true;
clustermap.components.map_report.t23517.cljs$lang$ctorStr = "clustermap.components.map-report/t23517";
clustermap.components.map_report.t23517.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23517");
});
clustermap.components.map_report.t23517.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23517.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23522 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs23522))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23522),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23522));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23523 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23523))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23523),(function (){var attrs23524 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23524))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23524),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23524));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23523),(function (){var attrs23525 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23525))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23525),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23525));
}
})());
}
})(),(function (){var attrs23526 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23526))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23526),(function (){var attrs23527 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23527))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23527),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23527));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23526),(function (){var attrs23528 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23528))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23528),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23528));
}
})());
}
})(),(function (){var attrs23529 = clustermap.formats.money.fmoney.call(null,(function (){var G__23539 = self__.site_stats;var G__23539__$1 = (((G__23539 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23539));var G__23539__$2 = (((G__23539__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23539__$1));return G__23539__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23529))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23529),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23529),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23534 = clustermap.formats.number.fnum.call(null,(function (){var G__23540 = self__.site_stats;var G__23540__$1 = (((G__23540 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23540));var G__23540__$2 = (((G__23540__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23540__$1));return G__23540__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23534))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23534),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23534),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23519){var self__ = this;
var _23519__$1 = this;return self__.meta23518;
});
clustermap.components.map_report.t23517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23519,meta23518__$1){var self__ = this;
var _23519__$1 = this;return (new clustermap.components.map_report.t23517(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23516,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta23518__$1));
});
clustermap.components.map_report.__GT_t23517 = (function __GT_t23517(pc_count__$1,ic_count__$1,const_count__$1,map__23516__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23518){return (new clustermap.components.map_report.t23517(pc_count__$1,ic_count__$1,const_count__$1,map__23516__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23518));
});
}
return (new clustermap.components.map_report.t23517(pc_count,ic_count,const_count,map__23516__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__23570 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23570__$1 = ((cljs.core.seq_QMARK_.call(null,map__23570))?cljs.core.apply.call(null,cljs.core.hash_map,map__23570):map__23570);var const_count = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23571 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23571 = (function (pc_count,ic_count,const_count,map__23570,path_fn,comm,site_stats,constituency,constituency_report,meta23572){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23570 = map__23570;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta23572 = meta23572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23571.cljs$lang$type = true;
clustermap.components.map_report.t23571.cljs$lang$ctorStr = "clustermap.components.map-report/t23571";
clustermap.components.map_report.t23571.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23571");
});
clustermap.components.map_report.t23571.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23571.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23576 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs23576))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23576),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23576),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23581 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23581))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23581),(function (){var attrs23582 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23582))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23582),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23582));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23581),(function (){var attrs23583 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23583))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23583),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23583));
}
})());
}
})(),(function (){var attrs23584 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23584))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23584),(function (){var attrs23585 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23585))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23585),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23585));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23584),(function (){var attrs23586 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23586))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23586),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23586));
}
})());
}
})(),(function (){var attrs23587 = clustermap.formats.money.fmoney.call(null,(function (){var G__23597 = self__.site_stats;var G__23597__$1 = (((G__23597 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23597));var G__23597__$2 = (((G__23597__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23597__$1));return G__23597__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23587))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23587),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23587),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23592 = clustermap.formats.number.fnum.call(null,(function (){var G__23598 = self__.site_stats;var G__23598__$1 = (((G__23598 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23598));var G__23598__$2 = (((G__23598__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23598__$1));return G__23598__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23592))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23592),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23592),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23573){var self__ = this;
var _23573__$1 = this;return self__.meta23572;
});
clustermap.components.map_report.t23571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23573,meta23572__$1){var self__ = this;
var _23573__$1 = this;return (new clustermap.components.map_report.t23571(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23570,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta23572__$1));
});
clustermap.components.map_report.__GT_t23571 = (function __GT_t23571(pc_count__$1,ic_count__$1,const_count__$1,map__23570__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23572){return (new clustermap.components.map_report.t23571(pc_count__$1,ic_count__$1,const_count__$1,map__23570__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23572));
});
}
return (new clustermap.components.map_report.t23571(pc_count,ic_count,const_count,map__23570__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23603 = om.core.get_shared.call(null,owner);var map__23603__$1 = ((cljs.core.seq_QMARK_.call(null,map__23603))?cljs.core.apply.call(null,cljs.core.hash_map,map__23603):map__23603);var path_fn = cljs.core.get.call(null,map__23603__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23603__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__23604 = cljs.core._EQ__EQ_;var expr__23605 = type;if(cljs.core.truth_(pred__23604.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23605)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__23604.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23605)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__23604.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23605)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map