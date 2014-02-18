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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__33275 = site_stats;var G__33275__$1 = (((G__33275 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33275));return G__33275__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__33276 = site_stats;var G__33276__$1 = (((G__33276 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33276));return G__33276__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__33277 = site_stats;var G__33277__$1 = (((G__33277 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33277));return G__33277__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__33309 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33309__$1 = ((cljs.core.seq_QMARK_.call(null,map__33309))?cljs.core.apply.call(null,cljs.core.hash_map,map__33309):map__33309);var const_count = cljs.core.get.call(null,map__33309__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33309__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33309__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33310 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33310 = (function (pc_count,ic_count,const_count,map__33309,comm,site_stats,all_portfolio_companies_summary_report,meta33311){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33309 = map__33309;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta33311 = meta33311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33310.cljs$lang$type = true;
clustermap.components.map_report.t33310.cljs$lang$ctorStr = "clustermap.components.map-report/t33310";
clustermap.components.map_report.t33310.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33310");
});
clustermap.components.map_report.t33310.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33310.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs33315 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33315))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33315),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33315),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs33320 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33320))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33320),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33320),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs33325 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33325))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33325),(function (){var attrs33326 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33326))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33326),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33326));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33325),(function (){var attrs33327 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33327))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33327),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33327));
}
})());
}
})(),(function (){var attrs33328 = clustermap.formats.money.fmoney.call(null,(function (){var G__33338 = self__.site_stats;var G__33338__$1 = (((G__33338 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33338));var G__33338__$2 = (((G__33338__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33338__$1));return G__33338__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33328))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33328),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33328),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33333 = clustermap.formats.number.fnum.call(null,(function (){var G__33339 = self__.site_stats;var G__33339__$1 = (((G__33339 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33339));var G__33339__$2 = (((G__33339__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33339__$1));return G__33339__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33333))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33333),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33333),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33312){var self__ = this;
var _33312__$1 = this;return self__.meta33311;
});
clustermap.components.map_report.t33310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33312,meta33311__$1){var self__ = this;
var _33312__$1 = this;return (new clustermap.components.map_report.t33310(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33309,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta33311__$1));
});
clustermap.components.map_report.__GT_t33310 = (function __GT_t33310(pc_count__$1,ic_count__$1,const_count__$1,map__33309__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33311){return (new clustermap.components.map_report.t33310(pc_count__$1,ic_count__$1,const_count__$1,map__33309__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33311));
});
}
return (new clustermap.components.map_report.t33310(pc_count,ic_count,const_count,map__33309__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33365 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33365__$1 = ((cljs.core.seq_QMARK_.call(null,map__33365))?cljs.core.apply.call(null,cljs.core.hash_map,map__33365):map__33365);var const_count = cljs.core.get.call(null,map__33365__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33365__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33365__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33366 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33366 = (function (pc_count,ic_count,const_count,map__33365,comm,site_stats,portfolio_company,portfolio_company_report,meta33367){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33365 = map__33365;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33367 = meta33367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33366.cljs$lang$type = true;
clustermap.components.map_report.t33366.cljs$lang$ctorStr = "clustermap.components.map-report/t33366";
clustermap.components.map_report.t33366.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33366");
});
clustermap.components.map_report.t33366.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33366.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs33371 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33371))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33371),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33371));
}
})()),React.DOM.ul(null,(function (){var attrs33372 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33372))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33372),(function (){var attrs33373 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33373))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33373),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33373));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33372),(function (){var attrs33374 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33374))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33374),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33374));
}
})());
}
})(),(function (){var attrs33375 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33375))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33375),(function (){var attrs33376 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33376))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33376),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33376));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33375),(function (){var attrs33377 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33377))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33377),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33377));
}
})());
}
})(),(function (){var attrs33378 = clustermap.formats.money.fmoney.call(null,(function (){var G__33388 = self__.site_stats;var G__33388__$1 = (((G__33388 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33388));var G__33388__$2 = (((G__33388__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33388__$1));return G__33388__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33378))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33378),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33378),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33383 = clustermap.formats.number.fnum.call(null,(function (){var G__33389 = self__.site_stats;var G__33389__$1 = (((G__33389 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33389));var G__33389__$2 = (((G__33389__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33389__$1));return G__33389__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33383))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33383),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33383),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33368){var self__ = this;
var _33368__$1 = this;return self__.meta33367;
});
clustermap.components.map_report.t33366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33368,meta33367__$1){var self__ = this;
var _33368__$1 = this;return (new clustermap.components.map_report.t33366(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33365,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33367__$1));
});
clustermap.components.map_report.__GT_t33366 = (function __GT_t33366(pc_count__$1,ic_count__$1,const_count__$1,map__33365__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33367){return (new clustermap.components.map_report.t33366(pc_count__$1,ic_count__$1,const_count__$1,map__33365__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33367));
});
}
return (new clustermap.components.map_report.t33366(pc_count,ic_count,const_count,map__33365__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33415 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33415__$1 = ((cljs.core.seq_QMARK_.call(null,map__33415))?cljs.core.apply.call(null,cljs.core.hash_map,map__33415):map__33415);var const_count = cljs.core.get.call(null,map__33415__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33415__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33415__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33416 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33416 = (function (pc_count,ic_count,const_count,map__33415,comm,site_stats,investor_company,investor_company_report,meta33417){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33415 = map__33415;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33417 = meta33417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33416.cljs$lang$type = true;
clustermap.components.map_report.t33416.cljs$lang$ctorStr = "clustermap.components.map-report/t33416";
clustermap.components.map_report.t33416.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33416");
});
clustermap.components.map_report.t33416.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33416.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs33421 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33421))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33421),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33421));
}
})()),React.DOM.ul(null,(function (){var attrs33422 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33422))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33422),(function (){var attrs33423 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33423))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33423),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33423));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33422),(function (){var attrs33424 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33424))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33424),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33424));
}
})());
}
})(),(function (){var attrs33425 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33425))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33425),(function (){var attrs33426 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33426))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33426),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33426));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33425),(function (){var attrs33427 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33427))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33427),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33427));
}
})());
}
})(),(function (){var attrs33428 = clustermap.formats.money.fmoney.call(null,(function (){var G__33438 = self__.site_stats;var G__33438__$1 = (((G__33438 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33438));var G__33438__$2 = (((G__33438__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33438__$1));return G__33438__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33428))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33428),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33428),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33433 = clustermap.formats.number.fnum.call(null,(function (){var G__33439 = self__.site_stats;var G__33439__$1 = (((G__33439 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33439));var G__33439__$2 = (((G__33439__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33439__$1));return G__33439__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33433))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33433),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33433),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33418){var self__ = this;
var _33418__$1 = this;return self__.meta33417;
});
clustermap.components.map_report.t33416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33418,meta33417__$1){var self__ = this;
var _33418__$1 = this;return (new clustermap.components.map_report.t33416(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33415,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33417__$1));
});
clustermap.components.map_report.__GT_t33416 = (function __GT_t33416(pc_count__$1,ic_count__$1,const_count__$1,map__33415__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33417){return (new clustermap.components.map_report.t33416(pc_count__$1,ic_count__$1,const_count__$1,map__33415__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33417));
});
}
return (new clustermap.components.map_report.t33416(pc_count,ic_count,const_count,map__33415__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33465 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33465__$1 = ((cljs.core.seq_QMARK_.call(null,map__33465))?cljs.core.apply.call(null,cljs.core.hash_map,map__33465):map__33465);var const_count = cljs.core.get.call(null,map__33465__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33465__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33465__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33466 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33466 = (function (pc_count,ic_count,const_count,map__33465,comm,site_stats,constituency,constituency_report,meta33467){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33465 = map__33465;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33467 = meta33467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33466.cljs$lang$type = true;
clustermap.components.map_report.t33466.cljs$lang$ctorStr = "clustermap.components.map-report/t33466";
clustermap.components.map_report.t33466.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33466");
});
clustermap.components.map_report.t33466.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33466.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs33471 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33471))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33471),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33471),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33472 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33472))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33472),(function (){var attrs33473 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33473))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33473),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33473));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33472),(function (){var attrs33474 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33474))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33474),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33474));
}
})());
}
})(),(function (){var attrs33475 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33475))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33475),(function (){var attrs33476 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33476))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33476),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33476));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33475),(function (){var attrs33477 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33477))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33477),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33477));
}
})());
}
})(),(function (){var attrs33478 = clustermap.formats.money.fmoney.call(null,(function (){var G__33488 = self__.site_stats;var G__33488__$1 = (((G__33488 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33488));var G__33488__$2 = (((G__33488__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33488__$1));return G__33488__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33478))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33478),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33478),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33483 = clustermap.formats.number.fnum.call(null,(function (){var G__33489 = self__.site_stats;var G__33489__$1 = (((G__33489 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33489));var G__33489__$2 = (((G__33489__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33489__$1));return G__33489__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33483))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33483),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33483),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33468){var self__ = this;
var _33468__$1 = this;return self__.meta33467;
});
clustermap.components.map_report.t33466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33468,meta33467__$1){var self__ = this;
var _33468__$1 = this;return (new clustermap.components.map_report.t33466(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33465,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33467__$1));
});
clustermap.components.map_report.__GT_t33466 = (function __GT_t33466(pc_count__$1,ic_count__$1,const_count__$1,map__33465__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33467){return (new clustermap.components.map_report.t33466(pc_count__$1,ic_count__$1,const_count__$1,map__33465__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33467));
});
}
return (new clustermap.components.map_report.t33466(pc_count,ic_count,const_count,map__33465__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33493 = cljs.core._EQ__EQ_;var expr__33494 = type;if(cljs.core.truth_(pred__33493.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33494)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33493.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33494)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33493.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33494)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
