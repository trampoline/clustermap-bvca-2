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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12411 = site_stats;var G__12411__$1 = (((G__12411 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12411));return G__12411__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12412 = site_stats;var G__12412__$1 = (((G__12412 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12412));return G__12412__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12413 = site_stats;var G__12413__$1 = (((G__12413 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12413));return G__12413__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12445 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12445__$1 = ((cljs.core.seq_QMARK_.call(null,map__12445))?cljs.core.apply.call(null,cljs.core.hash_map,map__12445):map__12445);var const_count = cljs.core.get.call(null,map__12445__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12445__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12445__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12446 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12446 = (function (pc_count,ic_count,const_count,map__12445,comm,site_stats,all_portfolio_companies_summary_report,meta12447){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12445 = map__12445;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12447 = meta12447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12446.cljs$lang$type = true;
clustermap.components.map_report.t12446.cljs$lang$ctorStr = "clustermap.components.map-report/t12446";
clustermap.components.map_report.t12446.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12446");
});
clustermap.components.map_report.t12446.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12446.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12451 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12451))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12451),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12451),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs12456 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12456))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12456),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12456),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs12461 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12461))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12461),(function (){var attrs12462 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12462))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12462),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12462));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12461),(function (){var attrs12463 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12463))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12463),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12463));
}
})());
}
})(),(function (){var attrs12464 = clustermap.formats.money.fmoney.call(null,(function (){var G__12474 = self__.site_stats;var G__12474__$1 = (((G__12474 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12474));var G__12474__$2 = (((G__12474__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12474__$1));return G__12474__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12464))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12464),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12464),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12469 = clustermap.formats.number.fnum.call(null,(function (){var G__12475 = self__.site_stats;var G__12475__$1 = (((G__12475 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12475));var G__12475__$2 = (((G__12475__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12475__$1));return G__12475__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12469))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12469),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12469),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12448){var self__ = this;
var _12448__$1 = this;return self__.meta12447;
});
clustermap.components.map_report.t12446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12448,meta12447__$1){var self__ = this;
var _12448__$1 = this;return (new clustermap.components.map_report.t12446(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12445,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12447__$1));
});
clustermap.components.map_report.__GT_t12446 = (function __GT_t12446(pc_count__$1,ic_count__$1,const_count__$1,map__12445__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12447){return (new clustermap.components.map_report.t12446(pc_count__$1,ic_count__$1,const_count__$1,map__12445__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12447));
});
}
return (new clustermap.components.map_report.t12446(pc_count,ic_count,const_count,map__12445__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__12501 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12501__$1 = ((cljs.core.seq_QMARK_.call(null,map__12501))?cljs.core.apply.call(null,cljs.core.hash_map,map__12501):map__12501);var const_count = cljs.core.get.call(null,map__12501__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12501__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12501__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12502 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12502 = (function (pc_count,ic_count,const_count,map__12501,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta12503){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12501 = map__12501;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12503 = meta12503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12502.cljs$lang$type = true;
clustermap.components.map_report.t12502.cljs$lang$ctorStr = "clustermap.components.map-report/t12502";
clustermap.components.map_report.t12502.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12502");
});
clustermap.components.map_report.t12502.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12502.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs12507 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12507))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12507),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12507));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12508 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12508))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12508),(function (){var attrs12509 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12509))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12509),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12509));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12508),(function (){var attrs12510 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12510))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12510),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12510));
}
})());
}
})(),(function (){var attrs12511 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12511))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12511),(function (){var attrs12512 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12512))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12512),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12512));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12511),(function (){var attrs12513 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12513))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12513),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12513));
}
})());
}
})(),(function (){var attrs12514 = clustermap.formats.money.fmoney.call(null,(function (){var G__12524 = self__.site_stats;var G__12524__$1 = (((G__12524 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12524));var G__12524__$2 = (((G__12524__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12524__$1));return G__12524__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12514))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12514),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12514),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12519 = clustermap.formats.number.fnum.call(null,(function (){var G__12525 = self__.site_stats;var G__12525__$1 = (((G__12525 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12525));var G__12525__$2 = (((G__12525__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12525__$1));return G__12525__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12519))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12519),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12519),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12504){var self__ = this;
var _12504__$1 = this;return self__.meta12503;
});
clustermap.components.map_report.t12502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12504,meta12503__$1){var self__ = this;
var _12504__$1 = this;return (new clustermap.components.map_report.t12502(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12501,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12503__$1));
});
clustermap.components.map_report.__GT_t12502 = (function __GT_t12502(pc_count__$1,ic_count__$1,const_count__$1,map__12501__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12503){return (new clustermap.components.map_report.t12502(pc_count__$1,ic_count__$1,const_count__$1,map__12501__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12503));
});
}
return (new clustermap.components.map_report.t12502(pc_count,ic_count,const_count,map__12501__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__12551 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12551__$1 = ((cljs.core.seq_QMARK_.call(null,map__12551))?cljs.core.apply.call(null,cljs.core.hash_map,map__12551):map__12551);var const_count = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12552 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12552 = (function (pc_count,ic_count,const_count,map__12551,path_fn,comm,site_stats,investor_company,investor_company_report,meta12553){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12551 = map__12551;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12553 = meta12553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12552.cljs$lang$type = true;
clustermap.components.map_report.t12552.cljs$lang$ctorStr = "clustermap.components.map-report/t12552";
clustermap.components.map_report.t12552.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12552");
});
clustermap.components.map_report.t12552.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12552.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12557 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12557))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12557),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12557));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12558 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12558))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12558),(function (){var attrs12559 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12559))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12559),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12559));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12558),(function (){var attrs12560 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12560))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12560),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12560));
}
})());
}
})(),(function (){var attrs12561 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12561))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12561),(function (){var attrs12562 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12562))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12562),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12562));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12561),(function (){var attrs12563 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12563))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12563),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12563));
}
})());
}
})(),(function (){var attrs12564 = clustermap.formats.money.fmoney.call(null,(function (){var G__12574 = self__.site_stats;var G__12574__$1 = (((G__12574 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12574));var G__12574__$2 = (((G__12574__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12574__$1));return G__12574__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12564))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12564),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12564),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12569 = clustermap.formats.number.fnum.call(null,(function (){var G__12575 = self__.site_stats;var G__12575__$1 = (((G__12575 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12575));var G__12575__$2 = (((G__12575__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12575__$1));return G__12575__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12569))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12569),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12569),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12554){var self__ = this;
var _12554__$1 = this;return self__.meta12553;
});
clustermap.components.map_report.t12552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12554,meta12553__$1){var self__ = this;
var _12554__$1 = this;return (new clustermap.components.map_report.t12552(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12551,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12553__$1));
});
clustermap.components.map_report.__GT_t12552 = (function __GT_t12552(pc_count__$1,ic_count__$1,const_count__$1,map__12551__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12553){return (new clustermap.components.map_report.t12552(pc_count__$1,ic_count__$1,const_count__$1,map__12551__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12553));
});
}
return (new clustermap.components.map_report.t12552(pc_count,ic_count,const_count,map__12551__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__12605 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12605__$1 = ((cljs.core.seq_QMARK_.call(null,map__12605))?cljs.core.apply.call(null,cljs.core.hash_map,map__12605):map__12605);var const_count = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12606 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12606 = (function (pc_count,ic_count,const_count,map__12605,path_fn,comm,site_stats,constituency,constituency_report,meta12607){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12605 = map__12605;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12607 = meta12607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12606.cljs$lang$type = true;
clustermap.components.map_report.t12606.cljs$lang$ctorStr = "clustermap.components.map-report/t12606";
clustermap.components.map_report.t12606.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12606");
});
clustermap.components.map_report.t12606.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12606.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12611 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12611))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12611),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12611),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12616 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12616))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12616),(function (){var attrs12617 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12617))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12617),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12617));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12616),(function (){var attrs12618 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12618))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12618),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12618));
}
})());
}
})(),(function (){var attrs12619 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12619))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12619),(function (){var attrs12620 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12620))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12620),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12620));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12619),(function (){var attrs12621 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12621))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12621),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12621));
}
})());
}
})(),(function (){var attrs12622 = clustermap.formats.money.fmoney.call(null,(function (){var G__12632 = self__.site_stats;var G__12632__$1 = (((G__12632 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12632));var G__12632__$2 = (((G__12632__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12632__$1));return G__12632__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12622))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12622),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12622),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12627 = clustermap.formats.number.fnum.call(null,(function (){var G__12633 = self__.site_stats;var G__12633__$1 = (((G__12633 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12633));var G__12633__$2 = (((G__12633__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12633__$1));return G__12633__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12627))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12627),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12627),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12608){var self__ = this;
var _12608__$1 = this;return self__.meta12607;
});
clustermap.components.map_report.t12606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12608,meta12607__$1){var self__ = this;
var _12608__$1 = this;return (new clustermap.components.map_report.t12606(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12605,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12607__$1));
});
clustermap.components.map_report.__GT_t12606 = (function __GT_t12606(pc_count__$1,ic_count__$1,const_count__$1,map__12605__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12607){return (new clustermap.components.map_report.t12606(pc_count__$1,ic_count__$1,const_count__$1,map__12605__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12607));
});
}
return (new clustermap.components.map_report.t12606(pc_count,ic_count,const_count,map__12605__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__12638 = om.core.get_shared.call(null,owner);var map__12638__$1 = ((cljs.core.seq_QMARK_.call(null,map__12638))?cljs.core.apply.call(null,cljs.core.hash_map,map__12638):map__12638);var path_fn = cljs.core.get.call(null,map__12638__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12638__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12639 = cljs.core._EQ__EQ_;var expr__12640 = type;if(cljs.core.truth_(pred__12639.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12640)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__12639.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12640)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__12639.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12640)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
