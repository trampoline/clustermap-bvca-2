// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__33280 = site_stats;var G__33280__$1 = (((G__33280 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33280));return G__33280__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__33281 = site_stats;var G__33281__$1 = (((G__33281 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33281));return G__33281__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__33282 = site_stats;var G__33282__$1 = (((G__33282 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33282));return G__33282__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__33314 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33314__$1 = ((cljs.core.seq_QMARK_.call(null,map__33314))?cljs.core.apply.call(null,cljs.core.hash_map,map__33314):map__33314);var const_count = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33315 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33315 = (function (pc_count,ic_count,const_count,map__33314,comm,site_stats,all_portfolio_companies_summary_report,meta33316){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33314 = map__33314;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta33316 = meta33316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33315.cljs$lang$type = true;
clustermap.components.map_report.t33315.cljs$lang$ctorStr = "clustermap.components.map-report/t33315";
clustermap.components.map_report.t33315.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33315");
});
clustermap.components.map_report.t33315.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33315.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs33320 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33320))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33320),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33320),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs33325 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33325))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33325),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33325),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs33330 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33330))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33330),(function (){var attrs33331 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33331))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33331),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33331));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33330),(function (){var attrs33332 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33332))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33332),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33332));
}
})());
}
})(),(function (){var attrs33333 = clustermap.formats.money.fmoney.call(null,(function (){var G__33343 = self__.site_stats;var G__33343__$1 = (((G__33343 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33343));var G__33343__$2 = (((G__33343__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33343__$1));return G__33343__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33333))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33333),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33333),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33338 = clustermap.formats.number.fnum.call(null,(function (){var G__33344 = self__.site_stats;var G__33344__$1 = (((G__33344 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33344));var G__33344__$2 = (((G__33344__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33344__$1));return G__33344__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33338))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33338),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33338),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33317){var self__ = this;
var _33317__$1 = this;return self__.meta33316;
});
clustermap.components.map_report.t33315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33317,meta33316__$1){var self__ = this;
var _33317__$1 = this;return (new clustermap.components.map_report.t33315(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33314,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta33316__$1));
});
clustermap.components.map_report.__GT_t33315 = (function __GT_t33315(pc_count__$1,ic_count__$1,const_count__$1,map__33314__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33316){return (new clustermap.components.map_report.t33315(pc_count__$1,ic_count__$1,const_count__$1,map__33314__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33316));
});
}
return (new clustermap.components.map_report.t33315(pc_count,ic_count,const_count,map__33314__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33370 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33370__$1 = ((cljs.core.seq_QMARK_.call(null,map__33370))?cljs.core.apply.call(null,cljs.core.hash_map,map__33370):map__33370);var const_count = cljs.core.get.call(null,map__33370__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33370__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33370__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33371 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33371 = (function (pc_count,ic_count,const_count,map__33370,comm,site_stats,portfolio_company,portfolio_company_report,meta33372){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33370 = map__33370;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33372 = meta33372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33371.cljs$lang$type = true;
clustermap.components.map_report.t33371.cljs$lang$ctorStr = "clustermap.components.map-report/t33371";
clustermap.components.map_report.t33371.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33371");
});
clustermap.components.map_report.t33371.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33371.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs33376 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33376))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33376),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33376));
}
})()),React.DOM.ul(null,(function (){var attrs33377 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33377))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33377),(function (){var attrs33378 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33378))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33378),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33378));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33377),(function (){var attrs33379 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33379))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33379),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33379));
}
})());
}
})(),(function (){var attrs33380 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33380))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33380),(function (){var attrs33381 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33381))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33381),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33381));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33380),(function (){var attrs33382 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33382))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33382),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33382));
}
})());
}
})(),(function (){var attrs33383 = clustermap.formats.money.fmoney.call(null,(function (){var G__33393 = self__.site_stats;var G__33393__$1 = (((G__33393 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33393));var G__33393__$2 = (((G__33393__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33393__$1));return G__33393__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33383))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33383),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33383),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33388 = clustermap.formats.number.fnum.call(null,(function (){var G__33394 = self__.site_stats;var G__33394__$1 = (((G__33394 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33394));var G__33394__$2 = (((G__33394__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33394__$1));return G__33394__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33388))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33388),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33388),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33373){var self__ = this;
var _33373__$1 = this;return self__.meta33372;
});
clustermap.components.map_report.t33371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33373,meta33372__$1){var self__ = this;
var _33373__$1 = this;return (new clustermap.components.map_report.t33371(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33370,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33372__$1));
});
clustermap.components.map_report.__GT_t33371 = (function __GT_t33371(pc_count__$1,ic_count__$1,const_count__$1,map__33370__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33372){return (new clustermap.components.map_report.t33371(pc_count__$1,ic_count__$1,const_count__$1,map__33370__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33372));
});
}
return (new clustermap.components.map_report.t33371(pc_count,ic_count,const_count,map__33370__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33420 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33420__$1 = ((cljs.core.seq_QMARK_.call(null,map__33420))?cljs.core.apply.call(null,cljs.core.hash_map,map__33420):map__33420);var const_count = cljs.core.get.call(null,map__33420__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33420__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33420__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33421 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33421 = (function (pc_count,ic_count,const_count,map__33420,comm,site_stats,investor_company,investor_company_report,meta33422){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33420 = map__33420;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33422 = meta33422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33421.cljs$lang$type = true;
clustermap.components.map_report.t33421.cljs$lang$ctorStr = "clustermap.components.map-report/t33421";
clustermap.components.map_report.t33421.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33421");
});
clustermap.components.map_report.t33421.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33421.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs33426 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33426))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33426),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33426));
}
})()),React.DOM.ul(null,(function (){var attrs33427 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33427))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33427),(function (){var attrs33428 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33428))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33428),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33428));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33427),(function (){var attrs33429 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33429))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33429),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33429));
}
})());
}
})(),(function (){var attrs33430 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33430))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33430),(function (){var attrs33431 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33431))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33431),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33431));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33430),(function (){var attrs33432 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33432))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33432),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33432));
}
})());
}
})(),(function (){var attrs33433 = clustermap.formats.money.fmoney.call(null,(function (){var G__33443 = self__.site_stats;var G__33443__$1 = (((G__33443 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33443));var G__33443__$2 = (((G__33443__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33443__$1));return G__33443__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33433))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33433),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33433),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33438 = clustermap.formats.number.fnum.call(null,(function (){var G__33444 = self__.site_stats;var G__33444__$1 = (((G__33444 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33444));var G__33444__$2 = (((G__33444__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33444__$1));return G__33444__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33438))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33438),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33438),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33423){var self__ = this;
var _33423__$1 = this;return self__.meta33422;
});
clustermap.components.map_report.t33421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33423,meta33422__$1){var self__ = this;
var _33423__$1 = this;return (new clustermap.components.map_report.t33421(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33420,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33422__$1));
});
clustermap.components.map_report.__GT_t33421 = (function __GT_t33421(pc_count__$1,ic_count__$1,const_count__$1,map__33420__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33422){return (new clustermap.components.map_report.t33421(pc_count__$1,ic_count__$1,const_count__$1,map__33420__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33422));
});
}
return (new clustermap.components.map_report.t33421(pc_count,ic_count,const_count,map__33420__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33474 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33474__$1 = ((cljs.core.seq_QMARK_.call(null,map__33474))?cljs.core.apply.call(null,cljs.core.hash_map,map__33474):map__33474);var const_count = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33475 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33475 = (function (pc_count,ic_count,const_count,map__33474,comm,site_stats,constituency,constituency_report,meta33476){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33474 = map__33474;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33476 = meta33476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33475.cljs$lang$type = true;
clustermap.components.map_report.t33475.cljs$lang$ctorStr = "clustermap.components.map-report/t33475";
clustermap.components.map_report.t33475.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33475");
});
clustermap.components.map_report.t33475.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33475.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs33480 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33480))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33480),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33480),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})()),React.DOM.ul(null,(function (){var attrs33485 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33485))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33485),(function (){var attrs33486 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33486))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33486),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33486));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33485),(function (){var attrs33487 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33487))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33487),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33487));
}
})());
}
})(),(function (){var attrs33488 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33488))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33488),(function (){var attrs33489 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33489))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33489),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33489));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33488),(function (){var attrs33490 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33490))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33490),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33490));
}
})());
}
})(),(function (){var attrs33491 = clustermap.formats.money.fmoney.call(null,(function (){var G__33501 = self__.site_stats;var G__33501__$1 = (((G__33501 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33501));var G__33501__$2 = (((G__33501__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33501__$1));return G__33501__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33491))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33491),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33491),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33496 = clustermap.formats.number.fnum.call(null,(function (){var G__33502 = self__.site_stats;var G__33502__$1 = (((G__33502 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33502));var G__33502__$2 = (((G__33502__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33502__$1));return G__33502__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33496))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33496),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33496),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33477){var self__ = this;
var _33477__$1 = this;return self__.meta33476;
});
clustermap.components.map_report.t33475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33477,meta33476__$1){var self__ = this;
var _33477__$1 = this;return (new clustermap.components.map_report.t33475(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33474,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33476__$1));
});
clustermap.components.map_report.__GT_t33475 = (function __GT_t33475(pc_count__$1,ic_count__$1,const_count__$1,map__33474__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33476){return (new clustermap.components.map_report.t33475(pc_count__$1,ic_count__$1,const_count__$1,map__33474__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33476));
});
}
return (new clustermap.components.map_report.t33475(pc_count,ic_count,const_count,map__33474__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33506 = cljs.core._EQ__EQ_;var expr__33507 = type;if(cljs.core.truth_(pred__33506.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33507)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33506.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33507)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33506.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33507)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
