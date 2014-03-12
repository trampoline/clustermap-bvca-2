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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__45402 = site_stats;var G__45402__$1 = (((G__45402 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__45402));return G__45402__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__45403 = site_stats;var G__45403__$1 = (((G__45403 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__45403));return G__45403__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__45404 = site_stats;var G__45404__$1 = (((G__45404 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__45404));return G__45404__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__45436 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45436__$1 = ((cljs.core.seq_QMARK_.call(null,map__45436))?cljs.core.apply.call(null,cljs.core.hash_map,map__45436):map__45436);var const_count = cljs.core.get.call(null,map__45436__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45436__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45436__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45437 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45437 = (function (pc_count,ic_count,const_count,map__45436,comm,site_stats,all_portfolio_companies_summary_report,meta45438){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45436 = map__45436;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta45438 = meta45438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45437.cljs$lang$type = true;
clustermap.components.map_report.t45437.cljs$lang$ctorStr = "clustermap.components.map-report/t45437";
clustermap.components.map_report.t45437.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45437");
});
clustermap.components.map_report.t45437.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45437.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs45442 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45442))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45442),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45442),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs45447 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45447))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45447),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45447),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs45452 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45452))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45452),(function (){var attrs45453 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45453))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45453),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45453));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45452),(function (){var attrs45454 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45454))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45454),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45454));
}
})());
}
})(),(function (){var attrs45455 = clustermap.formats.money.fmoney.call(null,(function (){var G__45465 = self__.site_stats;var G__45465__$1 = (((G__45465 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45465));var G__45465__$2 = (((G__45465__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45465__$1));return G__45465__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45455))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45455),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45455),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45460 = clustermap.formats.number.fnum.call(null,(function (){var G__45466 = self__.site_stats;var G__45466__$1 = (((G__45466 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45466));var G__45466__$2 = (((G__45466__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45466__$1));return G__45466__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45460))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45460),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45460),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45439){var self__ = this;
var _45439__$1 = this;return self__.meta45438;
});
clustermap.components.map_report.t45437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45439,meta45438__$1){var self__ = this;
var _45439__$1 = this;return (new clustermap.components.map_report.t45437(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45436,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta45438__$1));
});
clustermap.components.map_report.__GT_t45437 = (function __GT_t45437(pc_count__$1,ic_count__$1,const_count__$1,map__45436__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45438){return (new clustermap.components.map_report.t45437(pc_count__$1,ic_count__$1,const_count__$1,map__45436__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45438));
});
}
return (new clustermap.components.map_report.t45437(pc_count,ic_count,const_count,map__45436__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__45492 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45492__$1 = ((cljs.core.seq_QMARK_.call(null,map__45492))?cljs.core.apply.call(null,cljs.core.hash_map,map__45492):map__45492);var const_count = cljs.core.get.call(null,map__45492__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45492__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45492__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45493 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45493 = (function (pc_count,ic_count,const_count,map__45492,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta45494){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45492 = map__45492;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta45494 = meta45494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45493.cljs$lang$type = true;
clustermap.components.map_report.t45493.cljs$lang$ctorStr = "clustermap.components.map-report/t45493";
clustermap.components.map_report.t45493.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45493");
});
clustermap.components.map_report.t45493.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45493.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs45498 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs45498))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45498),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45498));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45499 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45499))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45499),(function (){var attrs45500 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45500))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45500),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45500));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45499),(function (){var attrs45501 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45501))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45501),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45501));
}
})());
}
})(),(function (){var attrs45502 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45502))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45502),(function (){var attrs45503 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45503))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45503),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45503));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45502),(function (){var attrs45504 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45504))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45504),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45504));
}
})());
}
})(),(function (){var attrs45505 = clustermap.formats.money.fmoney.call(null,(function (){var G__45515 = self__.site_stats;var G__45515__$1 = (((G__45515 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45515));var G__45515__$2 = (((G__45515__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45515__$1));return G__45515__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45505))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45505),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45505),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45510 = clustermap.formats.number.fnum.call(null,(function (){var G__45516 = self__.site_stats;var G__45516__$1 = (((G__45516 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45516));var G__45516__$2 = (((G__45516__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45516__$1));return G__45516__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45510))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45510),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45510),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45495){var self__ = this;
var _45495__$1 = this;return self__.meta45494;
});
clustermap.components.map_report.t45493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45495,meta45494__$1){var self__ = this;
var _45495__$1 = this;return (new clustermap.components.map_report.t45493(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45492,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta45494__$1));
});
clustermap.components.map_report.__GT_t45493 = (function __GT_t45493(pc_count__$1,ic_count__$1,const_count__$1,map__45492__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45494){return (new clustermap.components.map_report.t45493(pc_count__$1,ic_count__$1,const_count__$1,map__45492__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45494));
});
}
return (new clustermap.components.map_report.t45493(pc_count,ic_count,const_count,map__45492__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__45542 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45542__$1 = ((cljs.core.seq_QMARK_.call(null,map__45542))?cljs.core.apply.call(null,cljs.core.hash_map,map__45542):map__45542);var const_count = cljs.core.get.call(null,map__45542__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45542__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45542__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45543 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45543 = (function (pc_count,ic_count,const_count,map__45542,path_fn,comm,site_stats,investor_company,investor_company_report,meta45544){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45542 = map__45542;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta45544 = meta45544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45543.cljs$lang$type = true;
clustermap.components.map_report.t45543.cljs$lang$ctorStr = "clustermap.components.map-report/t45543";
clustermap.components.map_report.t45543.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45543");
});
clustermap.components.map_report.t45543.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45543.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs45548 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs45548))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45548),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45548));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45549 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45549))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45549),(function (){var attrs45550 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45550))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45550),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45550));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45549),(function (){var attrs45551 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45551))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45551),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45551));
}
})());
}
})(),(function (){var attrs45552 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45552))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45552),(function (){var attrs45553 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45553))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45553),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45553));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45552),(function (){var attrs45554 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45554))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45554),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45554));
}
})());
}
})(),(function (){var attrs45555 = clustermap.formats.money.fmoney.call(null,(function (){var G__45565 = self__.site_stats;var G__45565__$1 = (((G__45565 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45565));var G__45565__$2 = (((G__45565__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45565__$1));return G__45565__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45555))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45555),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45555),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45560 = clustermap.formats.number.fnum.call(null,(function (){var G__45566 = self__.site_stats;var G__45566__$1 = (((G__45566 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45566));var G__45566__$2 = (((G__45566__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45566__$1));return G__45566__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45560))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45560),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45560),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45545){var self__ = this;
var _45545__$1 = this;return self__.meta45544;
});
clustermap.components.map_report.t45543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45545,meta45544__$1){var self__ = this;
var _45545__$1 = this;return (new clustermap.components.map_report.t45543(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45542,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta45544__$1));
});
clustermap.components.map_report.__GT_t45543 = (function __GT_t45543(pc_count__$1,ic_count__$1,const_count__$1,map__45542__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45544){return (new clustermap.components.map_report.t45543(pc_count__$1,ic_count__$1,const_count__$1,map__45542__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45544));
});
}
return (new clustermap.components.map_report.t45543(pc_count,ic_count,const_count,map__45542__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__45596 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45596__$1 = ((cljs.core.seq_QMARK_.call(null,map__45596))?cljs.core.apply.call(null,cljs.core.hash_map,map__45596):map__45596);var const_count = cljs.core.get.call(null,map__45596__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45596__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45596__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45597 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45597 = (function (pc_count,ic_count,const_count,map__45596,path_fn,comm,site_stats,constituency,constituency_report,meta45598){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45596 = map__45596;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta45598 = meta45598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45597.cljs$lang$type = true;
clustermap.components.map_report.t45597.cljs$lang$ctorStr = "clustermap.components.map-report/t45597";
clustermap.components.map_report.t45597.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45597");
});
clustermap.components.map_report.t45597.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45597.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs45602 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs45602))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45602),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45602),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45607 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45607))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45607),(function (){var attrs45608 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45608))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45608),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45608));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45607),(function (){var attrs45609 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs45609))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45609),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45609));
}
})());
}
})(),(function (){var attrs45610 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45610))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45610),(function (){var attrs45611 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45611))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45611),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45611));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45610),(function (){var attrs45612 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45612))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45612),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45612));
}
})());
}
})(),(function (){var attrs45613 = clustermap.formats.money.fmoney.call(null,(function (){var G__45623 = self__.site_stats;var G__45623__$1 = (((G__45623 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45623));var G__45623__$2 = (((G__45623__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45623__$1));return G__45623__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45613))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45613),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45613),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs45618 = clustermap.formats.number.fnum.call(null,(function (){var G__45624 = self__.site_stats;var G__45624__$1 = (((G__45624 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45624));var G__45624__$2 = (((G__45624__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45624__$1));return G__45624__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45618))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45618),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45618),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45599){var self__ = this;
var _45599__$1 = this;return self__.meta45598;
});
clustermap.components.map_report.t45597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45599,meta45598__$1){var self__ = this;
var _45599__$1 = this;return (new clustermap.components.map_report.t45597(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45596,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta45598__$1));
});
clustermap.components.map_report.__GT_t45597 = (function __GT_t45597(pc_count__$1,ic_count__$1,const_count__$1,map__45596__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45598){return (new clustermap.components.map_report.t45597(pc_count__$1,ic_count__$1,const_count__$1,map__45596__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45598));
});
}
return (new clustermap.components.map_report.t45597(pc_count,ic_count,const_count,map__45596__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__45629 = om.core.get_shared.call(null,owner);var map__45629__$1 = ((cljs.core.seq_QMARK_.call(null,map__45629))?cljs.core.apply.call(null,cljs.core.hash_map,map__45629):map__45629);var path_fn = cljs.core.get.call(null,map__45629__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45629__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__45630 = cljs.core._EQ__EQ_;var expr__45631 = type;if(cljs.core.truth_(pred__45630.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__45631)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__45630.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__45631)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__45630.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__45631)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
