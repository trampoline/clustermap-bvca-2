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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__23252 = site_stats;var G__23252__$1 = (((G__23252 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23252));return G__23252__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__23253 = site_stats;var G__23253__$1 = (((G__23253 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23253));return G__23253__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__23254 = site_stats;var G__23254__$1 = (((G__23254 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23254));return G__23254__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__23286 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23286__$1 = ((cljs.core.seq_QMARK_.call(null,map__23286))?cljs.core.apply.call(null,cljs.core.hash_map,map__23286):map__23286);var const_count = cljs.core.get.call(null,map__23286__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23286__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23286__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23287 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23287 = (function (pc_count,ic_count,const_count,map__23286,comm,site_stats,all_portfolio_companies_summary_report,meta23288){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23286 = map__23286;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23288 = meta23288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23287.cljs$lang$type = true;
clustermap.components.map_report.t23287.cljs$lang$ctorStr = "clustermap.components.map-report/t23287";
clustermap.components.map_report.t23287.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23287");
});
clustermap.components.map_report.t23287.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23287.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23292 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23292))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23292),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23292),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs23297 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23297))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23297),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23297),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs23302 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23302))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23302),(function (){var attrs23303 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23303))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23303),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23303));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23302),(function (){var attrs23304 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23304))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23304),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23304));
}
})());
}
})(),(function (){var attrs23305 = clustermap.formats.money.fmoney.call(null,(function (){var G__23315 = self__.site_stats;var G__23315__$1 = (((G__23315 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23315));var G__23315__$2 = (((G__23315__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23315__$1));return G__23315__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23305))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23305),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23305),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23310 = clustermap.formats.number.fnum.call(null,(function (){var G__23316 = self__.site_stats;var G__23316__$1 = (((G__23316 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23316));var G__23316__$2 = (((G__23316__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23316__$1));return G__23316__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23310))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23310),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23310),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23289){var self__ = this;
var _23289__$1 = this;return self__.meta23288;
});
clustermap.components.map_report.t23287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23289,meta23288__$1){var self__ = this;
var _23289__$1 = this;return (new clustermap.components.map_report.t23287(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23286,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23288__$1));
});
clustermap.components.map_report.__GT_t23287 = (function __GT_t23287(pc_count__$1,ic_count__$1,const_count__$1,map__23286__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23288){return (new clustermap.components.map_report.t23287(pc_count__$1,ic_count__$1,const_count__$1,map__23286__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23288));
});
}
return (new clustermap.components.map_report.t23287(pc_count,ic_count,const_count,map__23286__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__23342 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23342__$1 = ((cljs.core.seq_QMARK_.call(null,map__23342))?cljs.core.apply.call(null,cljs.core.hash_map,map__23342):map__23342);var const_count = cljs.core.get.call(null,map__23342__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23342__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23342__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23343 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23343 = (function (pc_count,ic_count,const_count,map__23342,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta23344){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23342 = map__23342;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta23344 = meta23344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23343.cljs$lang$type = true;
clustermap.components.map_report.t23343.cljs$lang$ctorStr = "clustermap.components.map-report/t23343";
clustermap.components.map_report.t23343.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23343");
});
clustermap.components.map_report.t23343.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23343.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs23348 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs23348))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23348),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23348));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23349 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23349))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23349),(function (){var attrs23350 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23350))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23350),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23350));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23349),(function (){var attrs23351 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23351))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23351),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23351));
}
})());
}
})(),(function (){var attrs23352 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23352))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23352),(function (){var attrs23353 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23353))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23353),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23353));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23352),(function (){var attrs23354 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23354))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23354),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23354));
}
})());
}
})(),(function (){var attrs23355 = clustermap.formats.money.fmoney.call(null,(function (){var G__23365 = self__.site_stats;var G__23365__$1 = (((G__23365 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23365));var G__23365__$2 = (((G__23365__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23365__$1));return G__23365__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23355))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23355),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23355),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23360 = clustermap.formats.number.fnum.call(null,(function (){var G__23366 = self__.site_stats;var G__23366__$1 = (((G__23366 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23366));var G__23366__$2 = (((G__23366__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23366__$1));return G__23366__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23360))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23360),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23360),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23345){var self__ = this;
var _23345__$1 = this;return self__.meta23344;
});
clustermap.components.map_report.t23343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23345,meta23344__$1){var self__ = this;
var _23345__$1 = this;return (new clustermap.components.map_report.t23343(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23342,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta23344__$1));
});
clustermap.components.map_report.__GT_t23343 = (function __GT_t23343(pc_count__$1,ic_count__$1,const_count__$1,map__23342__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23344){return (new clustermap.components.map_report.t23343(pc_count__$1,ic_count__$1,const_count__$1,map__23342__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23344));
});
}
return (new clustermap.components.map_report.t23343(pc_count,ic_count,const_count,map__23342__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__23392 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23392__$1 = ((cljs.core.seq_QMARK_.call(null,map__23392))?cljs.core.apply.call(null,cljs.core.hash_map,map__23392):map__23392);var const_count = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23393 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23393 = (function (pc_count,ic_count,const_count,map__23392,path_fn,comm,site_stats,investor_company,investor_company_report,meta23394){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23392 = map__23392;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
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
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23398 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs23398))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23398),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23398));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23399 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23399))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23399),(function (){var attrs23400 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23400))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23400),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23400));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23399),(function (){var attrs23401 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23401))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23401),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23401));
}
})());
}
})(),(function (){var attrs23402 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23402))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23402),(function (){var attrs23403 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23403))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23403),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23403));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23402),(function (){var attrs23404 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23404))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23404),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23404));
}
})());
}
})(),(function (){var attrs23405 = clustermap.formats.money.fmoney.call(null,(function (){var G__23415 = self__.site_stats;var G__23415__$1 = (((G__23415 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23415));var G__23415__$2 = (((G__23415__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23415__$1));return G__23415__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23405))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23405),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23405),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23410 = clustermap.formats.number.fnum.call(null,(function (){var G__23416 = self__.site_stats;var G__23416__$1 = (((G__23416 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23416));var G__23416__$2 = (((G__23416__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23416__$1));return G__23416__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23410))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23410),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23410),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23395){var self__ = this;
var _23395__$1 = this;return self__.meta23394;
});
clustermap.components.map_report.t23393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23395,meta23394__$1){var self__ = this;
var _23395__$1 = this;return (new clustermap.components.map_report.t23393(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23392,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta23394__$1));
});
clustermap.components.map_report.__GT_t23393 = (function __GT_t23393(pc_count__$1,ic_count__$1,const_count__$1,map__23392__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23394){return (new clustermap.components.map_report.t23393(pc_count__$1,ic_count__$1,const_count__$1,map__23392__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23394));
});
}
return (new clustermap.components.map_report.t23393(pc_count,ic_count,const_count,map__23392__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__23446 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23446__$1 = ((cljs.core.seq_QMARK_.call(null,map__23446))?cljs.core.apply.call(null,cljs.core.hash_map,map__23446):map__23446);var const_count = cljs.core.get.call(null,map__23446__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23446__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23446__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23447 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23447 = (function (pc_count,ic_count,const_count,map__23446,path_fn,comm,site_stats,constituency,constituency_report,meta23448){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23446 = map__23446;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta23448 = meta23448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23447.cljs$lang$type = true;
clustermap.components.map_report.t23447.cljs$lang$ctorStr = "clustermap.components.map-report/t23447";
clustermap.components.map_report.t23447.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23447");
});
clustermap.components.map_report.t23447.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23447.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23452 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs23452))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23452),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23452),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23457 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23457))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23457),(function (){var attrs23458 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23458))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23458),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23458));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23457),(function (){var attrs23459 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs23459))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23459),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23459));
}
})());
}
})(),(function (){var attrs23460 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23460))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23460),(function (){var attrs23461 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23461))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23461),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23461));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23460),(function (){var attrs23462 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23462))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23462),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23462));
}
})());
}
})(),(function (){var attrs23463 = clustermap.formats.money.fmoney.call(null,(function (){var G__23473 = self__.site_stats;var G__23473__$1 = (((G__23473 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23473));var G__23473__$2 = (((G__23473__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23473__$1));return G__23473__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23463))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23463),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23463),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23468 = clustermap.formats.number.fnum.call(null,(function (){var G__23474 = self__.site_stats;var G__23474__$1 = (((G__23474 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23474));var G__23474__$2 = (((G__23474__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23474__$1));return G__23474__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23468))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23468),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23468),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23449){var self__ = this;
var _23449__$1 = this;return self__.meta23448;
});
clustermap.components.map_report.t23447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23449,meta23448__$1){var self__ = this;
var _23449__$1 = this;return (new clustermap.components.map_report.t23447(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23446,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta23448__$1));
});
clustermap.components.map_report.__GT_t23447 = (function __GT_t23447(pc_count__$1,ic_count__$1,const_count__$1,map__23446__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23448){return (new clustermap.components.map_report.t23447(pc_count__$1,ic_count__$1,const_count__$1,map__23446__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23448));
});
}
return (new clustermap.components.map_report.t23447(pc_count,ic_count,const_count,map__23446__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23479 = om.core.get_shared.call(null,owner);var map__23479__$1 = ((cljs.core.seq_QMARK_.call(null,map__23479))?cljs.core.apply.call(null,cljs.core.hash_map,map__23479):map__23479);var path_fn = cljs.core.get.call(null,map__23479__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23479__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__23480 = cljs.core._EQ__EQ_;var expr__23481 = type;if(cljs.core.truth_(pred__23480.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23481)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__23480.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23481)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__23480.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23481)))
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