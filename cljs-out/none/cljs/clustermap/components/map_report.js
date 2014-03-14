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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__23358 = site_stats;var G__23358__$1 = (((G__23358 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23358));return G__23358__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__23359 = site_stats;var G__23359__$1 = (((G__23359 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23359));return G__23359__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__23360 = site_stats;var G__23360__$1 = (((G__23360 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23360));return G__23360__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__23392 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23392__$1 = ((cljs.core.seq_QMARK_.call(null,map__23392))?cljs.core.apply.call(null,cljs.core.hash_map,map__23392):map__23392);var const_count = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23393 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23393 = (function (pc_count,ic_count,const_count,map__23392,comm,site_stats,all_portfolio_companies_summary_report,meta23394){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23392 = map__23392;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23394 = meta23394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23393.cljs$lang$type = true;
clustermap.components.map_report.t23393.cljs$lang$ctorStr = "clustermap.components.map-report/t23393";
clustermap.components.map_report.t23393.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23393");
});
clustermap.components.map_report.t23393.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23393.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23398 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23398))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23398),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23398),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs23403 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23403))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23403),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23403),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs23408 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23408))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23408),(function (){var attrs23409 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23409))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23409),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23409));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23408),(function (){var attrs23410 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23410))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23410),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23410));
}
})());
}
})(),(function (){var attrs23411 = clustermap.formats.money.fmoney.call(null,(function (){var G__23421 = self__.site_stats;var G__23421__$1 = (((G__23421 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23421));var G__23421__$2 = (((G__23421__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23421__$1));return G__23421__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23411))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23411),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23411),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23416 = clustermap.formats.number.fnum.call(null,(function (){var G__23422 = self__.site_stats;var G__23422__$1 = (((G__23422 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23422));var G__23422__$2 = (((G__23422__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23422__$1));return G__23422__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23416))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23416),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23416),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23395){var self__ = this;
var _23395__$1 = this;return self__.meta23394;
});
clustermap.components.map_report.t23393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23395,meta23394__$1){var self__ = this;
var _23395__$1 = this;return (new clustermap.components.map_report.t23393(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23392,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23394__$1));
});
clustermap.components.map_report.__GT_t23393 = (function __GT_t23393(pc_count__$1,ic_count__$1,const_count__$1,map__23392__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23394){return (new clustermap.components.map_report.t23393(pc_count__$1,ic_count__$1,const_count__$1,map__23392__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23394));
});
}
return (new clustermap.components.map_report.t23393(pc_count,ic_count,const_count,map__23392__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__23448 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23448__$1 = ((cljs.core.seq_QMARK_.call(null,map__23448))?cljs.core.apply.call(null,cljs.core.hash_map,map__23448):map__23448);var const_count = cljs.core.get.call(null,map__23448__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23448__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23448__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23449 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23449 = (function (pc_count,ic_count,const_count,map__23448,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta23450){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23448 = map__23448;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta23450 = meta23450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23449.cljs$lang$type = true;
clustermap.components.map_report.t23449.cljs$lang$ctorStr = "clustermap.components.map-report/t23449";
clustermap.components.map_report.t23449.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23449");
});
clustermap.components.map_report.t23449.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23449.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs23454 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs23454))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23454),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23454));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23455 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23455))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23455),(function (){var attrs23456 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23456))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23456),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23456));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23455),(function (){var attrs23457 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23457))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23457),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23457));
}
})());
}
})(),(function (){var attrs23458 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23458))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23458),(function (){var attrs23459 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23459))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23459),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23459));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23458),(function (){var attrs23460 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23460))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23460),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23460));
}
})());
}
})(),(function (){var attrs23461 = clustermap.formats.money.fmoney.call(null,(function (){var G__23471 = self__.site_stats;var G__23471__$1 = (((G__23471 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23471));var G__23471__$2 = (((G__23471__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23471__$1));return G__23471__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23461))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23461),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23461),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23466 = clustermap.formats.number.fnum.call(null,(function (){var G__23472 = self__.site_stats;var G__23472__$1 = (((G__23472 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23472));var G__23472__$2 = (((G__23472__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23472__$1));return G__23472__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23466))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23466),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23466),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23451){var self__ = this;
var _23451__$1 = this;return self__.meta23450;
});
clustermap.components.map_report.t23449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23451,meta23450__$1){var self__ = this;
var _23451__$1 = this;return (new clustermap.components.map_report.t23449(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23448,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta23450__$1));
});
clustermap.components.map_report.__GT_t23449 = (function __GT_t23449(pc_count__$1,ic_count__$1,const_count__$1,map__23448__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23450){return (new clustermap.components.map_report.t23449(pc_count__$1,ic_count__$1,const_count__$1,map__23448__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23450));
});
}
return (new clustermap.components.map_report.t23449(pc_count,ic_count,const_count,map__23448__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__23498 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23498__$1 = ((cljs.core.seq_QMARK_.call(null,map__23498))?cljs.core.apply.call(null,cljs.core.hash_map,map__23498):map__23498);var const_count = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23499 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23499 = (function (pc_count,ic_count,const_count,map__23498,path_fn,comm,site_stats,investor_company,investor_company_report,meta23500){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23498 = map__23498;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta23500 = meta23500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23499.cljs$lang$type = true;
clustermap.components.map_report.t23499.cljs$lang$ctorStr = "clustermap.components.map-report/t23499";
clustermap.components.map_report.t23499.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23499");
});
clustermap.components.map_report.t23499.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23499.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23504 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs23504))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23504),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23504));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23505 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23505))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23505),(function (){var attrs23506 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23506))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23506),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23506));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23505),(function (){var attrs23507 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23507))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23507),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23507));
}
})());
}
})(),(function (){var attrs23508 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23508))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23508),(function (){var attrs23509 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23509))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23509),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23509));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23508),(function (){var attrs23510 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23510))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23510),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23510));
}
})());
}
})(),(function (){var attrs23511 = clustermap.formats.money.fmoney.call(null,(function (){var G__23521 = self__.site_stats;var G__23521__$1 = (((G__23521 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23521));var G__23521__$2 = (((G__23521__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23521__$1));return G__23521__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23511))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23511),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23511),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23516 = clustermap.formats.number.fnum.call(null,(function (){var G__23522 = self__.site_stats;var G__23522__$1 = (((G__23522 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23522));var G__23522__$2 = (((G__23522__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23522__$1));return G__23522__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23516))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23516),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23516),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23501){var self__ = this;
var _23501__$1 = this;return self__.meta23500;
});
clustermap.components.map_report.t23499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23501,meta23500__$1){var self__ = this;
var _23501__$1 = this;return (new clustermap.components.map_report.t23499(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23498,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta23500__$1));
});
clustermap.components.map_report.__GT_t23499 = (function __GT_t23499(pc_count__$1,ic_count__$1,const_count__$1,map__23498__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23500){return (new clustermap.components.map_report.t23499(pc_count__$1,ic_count__$1,const_count__$1,map__23498__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23500));
});
}
return (new clustermap.components.map_report.t23499(pc_count,ic_count,const_count,map__23498__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__23552 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23552__$1 = ((cljs.core.seq_QMARK_.call(null,map__23552))?cljs.core.apply.call(null,cljs.core.hash_map,map__23552):map__23552);var const_count = cljs.core.get.call(null,map__23552__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23552__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23552__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23553 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23553 = (function (pc_count,ic_count,const_count,map__23552,path_fn,comm,site_stats,constituency,constituency_report,meta23554){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23552 = map__23552;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta23554 = meta23554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23553.cljs$lang$type = true;
clustermap.components.map_report.t23553.cljs$lang$ctorStr = "clustermap.components.map-report/t23553";
clustermap.components.map_report.t23553.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23553");
});
clustermap.components.map_report.t23553.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23553.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23558 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs23558))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23558),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23558),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23563 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23563))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23563),(function (){var attrs23564 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23564))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23564),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23564));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23563),(function (){var attrs23565 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23565))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23565),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23565));
}
})());
}
})(),(function (){var attrs23566 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23566))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23566),(function (){var attrs23567 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23567))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23567),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23567));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23566),(function (){var attrs23568 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23568))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23568),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23568));
}
})());
}
})(),(function (){var attrs23569 = clustermap.formats.money.fmoney.call(null,(function (){var G__23579 = self__.site_stats;var G__23579__$1 = (((G__23579 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23579));var G__23579__$2 = (((G__23579__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23579__$1));return G__23579__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23569))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23569),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23569),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23574 = clustermap.formats.number.fnum.call(null,(function (){var G__23580 = self__.site_stats;var G__23580__$1 = (((G__23580 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23580));var G__23580__$2 = (((G__23580__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23580__$1));return G__23580__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23574))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23574),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23574),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23555){var self__ = this;
var _23555__$1 = this;return self__.meta23554;
});
clustermap.components.map_report.t23553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23555,meta23554__$1){var self__ = this;
var _23555__$1 = this;return (new clustermap.components.map_report.t23553(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23552,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta23554__$1));
});
clustermap.components.map_report.__GT_t23553 = (function __GT_t23553(pc_count__$1,ic_count__$1,const_count__$1,map__23552__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23554){return (new clustermap.components.map_report.t23553(pc_count__$1,ic_count__$1,const_count__$1,map__23552__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23554));
});
}
return (new clustermap.components.map_report.t23553(pc_count,ic_count,const_count,map__23552__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23585 = om.core.get_shared.call(null,owner);var map__23585__$1 = ((cljs.core.seq_QMARK_.call(null,map__23585))?cljs.core.apply.call(null,cljs.core.hash_map,map__23585):map__23585);var path_fn = cljs.core.get.call(null,map__23585__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23585__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__23586 = cljs.core._EQ__EQ_;var expr__23587 = type;if(cljs.core.truth_(pred__23586.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23587)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__23586.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23587)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__23586.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23587)))
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