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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12405 = site_stats;var G__12405__$1 = (((G__12405 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12405));return G__12405__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12406 = site_stats;var G__12406__$1 = (((G__12406 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12406));return G__12406__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12407 = site_stats;var G__12407__$1 = (((G__12407 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12407));return G__12407__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12439 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12439__$1 = ((cljs.core.seq_QMARK_.call(null,map__12439))?cljs.core.apply.call(null,cljs.core.hash_map,map__12439):map__12439);var const_count = cljs.core.get.call(null,map__12439__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12439__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12439__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12440 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12440 = (function (pc_count,ic_count,const_count,map__12439,comm,site_stats,all_portfolio_companies_summary_report,meta12441){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12439 = map__12439;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12441 = meta12441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12440.cljs$lang$type = true;
clustermap.components.map_report.t12440.cljs$lang$ctorStr = "clustermap.components.map-report/t12440";
clustermap.components.map_report.t12440.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12440");
});
clustermap.components.map_report.t12440.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12440.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12445 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12445))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12445),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12445),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs12450 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12450))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12450),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12450),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs12455 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12455))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12455),(function (){var attrs12456 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12456))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12456),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12456));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12455),(function (){var attrs12457 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12457))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12457),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12457));
}
})());
}
})(),(function (){var attrs12458 = clustermap.formats.money.fmoney.call(null,(function (){var G__12468 = self__.site_stats;var G__12468__$1 = (((G__12468 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12468));var G__12468__$2 = (((G__12468__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12468__$1));return G__12468__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12458))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12458),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12458),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12463 = clustermap.formats.number.fnum.call(null,(function (){var G__12469 = self__.site_stats;var G__12469__$1 = (((G__12469 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12469));var G__12469__$2 = (((G__12469__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12469__$1));return G__12469__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12463))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12463),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12463),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12442){var self__ = this;
var _12442__$1 = this;return self__.meta12441;
});
clustermap.components.map_report.t12440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12442,meta12441__$1){var self__ = this;
var _12442__$1 = this;return (new clustermap.components.map_report.t12440(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12439,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12441__$1));
});
clustermap.components.map_report.__GT_t12440 = (function __GT_t12440(pc_count__$1,ic_count__$1,const_count__$1,map__12439__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12441){return (new clustermap.components.map_report.t12440(pc_count__$1,ic_count__$1,const_count__$1,map__12439__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12441));
});
}
return (new clustermap.components.map_report.t12440(pc_count,ic_count,const_count,map__12439__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__12495 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12495__$1 = ((cljs.core.seq_QMARK_.call(null,map__12495))?cljs.core.apply.call(null,cljs.core.hash_map,map__12495):map__12495);var const_count = cljs.core.get.call(null,map__12495__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12495__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12495__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12496 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12496 = (function (pc_count,ic_count,const_count,map__12495,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta12497){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12495 = map__12495;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12497 = meta12497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12496.cljs$lang$type = true;
clustermap.components.map_report.t12496.cljs$lang$ctorStr = "clustermap.components.map-report/t12496";
clustermap.components.map_report.t12496.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12496");
});
clustermap.components.map_report.t12496.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12496.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs12501 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12501))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12501),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12501));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12502 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12502))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12502),(function (){var attrs12503 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12503))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12503),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12503));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12502),(function (){var attrs12504 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12504))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12504),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12504));
}
})());
}
})(),(function (){var attrs12505 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12505))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12505),(function (){var attrs12506 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12506))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12506),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12506));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12505),(function (){var attrs12507 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12507))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12507),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12507));
}
})());
}
})(),(function (){var attrs12508 = clustermap.formats.money.fmoney.call(null,(function (){var G__12518 = self__.site_stats;var G__12518__$1 = (((G__12518 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12518));var G__12518__$2 = (((G__12518__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12518__$1));return G__12518__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12508))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12508),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12508),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12513 = clustermap.formats.number.fnum.call(null,(function (){var G__12519 = self__.site_stats;var G__12519__$1 = (((G__12519 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12519));var G__12519__$2 = (((G__12519__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12519__$1));return G__12519__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12513))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12513),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12513),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12498){var self__ = this;
var _12498__$1 = this;return self__.meta12497;
});
clustermap.components.map_report.t12496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12498,meta12497__$1){var self__ = this;
var _12498__$1 = this;return (new clustermap.components.map_report.t12496(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12495,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12497__$1));
});
clustermap.components.map_report.__GT_t12496 = (function __GT_t12496(pc_count__$1,ic_count__$1,const_count__$1,map__12495__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12497){return (new clustermap.components.map_report.t12496(pc_count__$1,ic_count__$1,const_count__$1,map__12495__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12497));
});
}
return (new clustermap.components.map_report.t12496(pc_count,ic_count,const_count,map__12495__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__12545 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12545__$1 = ((cljs.core.seq_QMARK_.call(null,map__12545))?cljs.core.apply.call(null,cljs.core.hash_map,map__12545):map__12545);var const_count = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12546 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12546 = (function (pc_count,ic_count,const_count,map__12545,path_fn,comm,site_stats,investor_company,investor_company_report,meta12547){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12545 = map__12545;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
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
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12551 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12551))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12551),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12551));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12552 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12552))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12552),(function (){var attrs12553 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12553))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12553),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12553));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12552),(function (){var attrs12554 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12554))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12554),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12554));
}
})());
}
})(),(function (){var attrs12555 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12555))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12555),(function (){var attrs12556 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12556))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12556),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12556));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12555),(function (){var attrs12557 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12557))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12557),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12557));
}
})());
}
})(),(function (){var attrs12558 = clustermap.formats.money.fmoney.call(null,(function (){var G__12568 = self__.site_stats;var G__12568__$1 = (((G__12568 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12568));var G__12568__$2 = (((G__12568__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12568__$1));return G__12568__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12558))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12558),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12558),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12563 = clustermap.formats.number.fnum.call(null,(function (){var G__12569 = self__.site_stats;var G__12569__$1 = (((G__12569 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12569));var G__12569__$2 = (((G__12569__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12569__$1));return G__12569__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12563))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12563),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12563),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12548){var self__ = this;
var _12548__$1 = this;return self__.meta12547;
});
clustermap.components.map_report.t12546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12548,meta12547__$1){var self__ = this;
var _12548__$1 = this;return (new clustermap.components.map_report.t12546(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12545,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12547__$1));
});
clustermap.components.map_report.__GT_t12546 = (function __GT_t12546(pc_count__$1,ic_count__$1,const_count__$1,map__12545__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12547){return (new clustermap.components.map_report.t12546(pc_count__$1,ic_count__$1,const_count__$1,map__12545__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12547));
});
}
return (new clustermap.components.map_report.t12546(pc_count,ic_count,const_count,map__12545__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__12599 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12599__$1 = ((cljs.core.seq_QMARK_.call(null,map__12599))?cljs.core.apply.call(null,cljs.core.hash_map,map__12599):map__12599);var const_count = cljs.core.get.call(null,map__12599__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12599__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12599__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12600 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12600 = (function (pc_count,ic_count,const_count,map__12599,path_fn,comm,site_stats,constituency,constituency_report,meta12601){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12599 = map__12599;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12601 = meta12601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12600.cljs$lang$type = true;
clustermap.components.map_report.t12600.cljs$lang$ctorStr = "clustermap.components.map-report/t12600";
clustermap.components.map_report.t12600.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12600");
});
clustermap.components.map_report.t12600.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12600.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12605 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12605))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12605),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12605),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12610 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12610))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12610),(function (){var attrs12611 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12611))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12611),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12611));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12610),(function (){var attrs12612 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12612))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12612),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12612));
}
})());
}
})(),(function (){var attrs12613 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12613))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12613),(function (){var attrs12614 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12614))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12614),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12614));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12613),(function (){var attrs12615 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12615))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12615),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12615));
}
})());
}
})(),(function (){var attrs12616 = clustermap.formats.money.fmoney.call(null,(function (){var G__12626 = self__.site_stats;var G__12626__$1 = (((G__12626 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12626));var G__12626__$2 = (((G__12626__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12626__$1));return G__12626__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12616))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12616),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12616),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12621 = clustermap.formats.number.fnum.call(null,(function (){var G__12627 = self__.site_stats;var G__12627__$1 = (((G__12627 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12627));var G__12627__$2 = (((G__12627__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12627__$1));return G__12627__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12621))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12621),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12621),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12602){var self__ = this;
var _12602__$1 = this;return self__.meta12601;
});
clustermap.components.map_report.t12600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12602,meta12601__$1){var self__ = this;
var _12602__$1 = this;return (new clustermap.components.map_report.t12600(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12599,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12601__$1));
});
clustermap.components.map_report.__GT_t12600 = (function __GT_t12600(pc_count__$1,ic_count__$1,const_count__$1,map__12599__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12601){return (new clustermap.components.map_report.t12600(pc_count__$1,ic_count__$1,const_count__$1,map__12599__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12601));
});
}
return (new clustermap.components.map_report.t12600(pc_count,ic_count,const_count,map__12599__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__12632 = om.core.get_shared.call(null,owner);var map__12632__$1 = ((cljs.core.seq_QMARK_.call(null,map__12632))?cljs.core.apply.call(null,cljs.core.hash_map,map__12632):map__12632);var path_fn = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12633 = cljs.core._EQ__EQ_;var expr__12634 = type;if(cljs.core.truth_(pred__12633.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12634)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__12633.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12634)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__12633.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12634)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
