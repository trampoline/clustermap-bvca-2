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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__33229 = site_stats;var G__33229__$1 = (((G__33229 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33229));return G__33229__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__33230 = site_stats;var G__33230__$1 = (((G__33230 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33230));return G__33230__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__33231 = site_stats;var G__33231__$1 = (((G__33231 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33231));return G__33231__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__33263 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33263__$1 = ((cljs.core.seq_QMARK_.call(null,map__33263))?cljs.core.apply.call(null,cljs.core.hash_map,map__33263):map__33263);var const_count = cljs.core.get.call(null,map__33263__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33263__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33263__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33264 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33264 = (function (pc_count,ic_count,const_count,map__33263,comm,site_stats,all_portfolio_companies_summary_report,meta33265){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33263 = map__33263;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta33265 = meta33265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33264.cljs$lang$type = true;
clustermap.components.map_report.t33264.cljs$lang$ctorStr = "clustermap.components.map-report/t33264";
clustermap.components.map_report.t33264.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33264");
});
clustermap.components.map_report.t33264.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33264.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs33269 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33269))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33269),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33269),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs33274 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33274))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33274),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33274),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs33279 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33279))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33279),(function (){var attrs33280 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33280))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33280),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33280));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33279),(function (){var attrs33281 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33281))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33281),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33281));
}
})());
}
})(),(function (){var attrs33282 = clustermap.formats.money.fmoney.call(null,(function (){var G__33292 = self__.site_stats;var G__33292__$1 = (((G__33292 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33292));var G__33292__$2 = (((G__33292__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33292__$1));return G__33292__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33282))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33282),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33282),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33287 = clustermap.formats.number.fnum.call(null,(function (){var G__33293 = self__.site_stats;var G__33293__$1 = (((G__33293 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33293));var G__33293__$2 = (((G__33293__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33293__$1));return G__33293__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33287))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33287),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33287),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33266){var self__ = this;
var _33266__$1 = this;return self__.meta33265;
});
clustermap.components.map_report.t33264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33266,meta33265__$1){var self__ = this;
var _33266__$1 = this;return (new clustermap.components.map_report.t33264(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33263,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta33265__$1));
});
clustermap.components.map_report.__GT_t33264 = (function __GT_t33264(pc_count__$1,ic_count__$1,const_count__$1,map__33263__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33265){return (new clustermap.components.map_report.t33264(pc_count__$1,ic_count__$1,const_count__$1,map__33263__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33265));
});
}
return (new clustermap.components.map_report.t33264(pc_count,ic_count,const_count,map__33263__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33319 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33319__$1 = ((cljs.core.seq_QMARK_.call(null,map__33319))?cljs.core.apply.call(null,cljs.core.hash_map,map__33319):map__33319);var const_count = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33320 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33320 = (function (pc_count,ic_count,const_count,map__33319,comm,site_stats,portfolio_company,portfolio_company_report,meta33321){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33319 = map__33319;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33321 = meta33321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33320.cljs$lang$type = true;
clustermap.components.map_report.t33320.cljs$lang$ctorStr = "clustermap.components.map-report/t33320";
clustermap.components.map_report.t33320.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33320");
});
clustermap.components.map_report.t33320.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33320.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs33325 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33325))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33325),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33325));
}
})()),React.DOM.ul(null,(function (){var attrs33326 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33326))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33326),(function (){var attrs33327 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33327))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33327),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33327));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33326),(function (){var attrs33328 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33328))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33328),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33328));
}
})());
}
})(),(function (){var attrs33329 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33329))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33329),(function (){var attrs33330 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33330))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33330),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33330));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33329),(function (){var attrs33331 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33331))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33331),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33331));
}
})());
}
})(),(function (){var attrs33332 = clustermap.formats.money.fmoney.call(null,(function (){var G__33342 = self__.site_stats;var G__33342__$1 = (((G__33342 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33342));var G__33342__$2 = (((G__33342__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33342__$1));return G__33342__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33332))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33332),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33332),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33337 = clustermap.formats.number.fnum.call(null,(function (){var G__33343 = self__.site_stats;var G__33343__$1 = (((G__33343 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33343));var G__33343__$2 = (((G__33343__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33343__$1));return G__33343__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33337))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33337),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33337),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33322){var self__ = this;
var _33322__$1 = this;return self__.meta33321;
});
clustermap.components.map_report.t33320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33322,meta33321__$1){var self__ = this;
var _33322__$1 = this;return (new clustermap.components.map_report.t33320(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33319,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33321__$1));
});
clustermap.components.map_report.__GT_t33320 = (function __GT_t33320(pc_count__$1,ic_count__$1,const_count__$1,map__33319__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33321){return (new clustermap.components.map_report.t33320(pc_count__$1,ic_count__$1,const_count__$1,map__33319__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33321));
});
}
return (new clustermap.components.map_report.t33320(pc_count,ic_count,const_count,map__33319__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33369 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33369__$1 = ((cljs.core.seq_QMARK_.call(null,map__33369))?cljs.core.apply.call(null,cljs.core.hash_map,map__33369):map__33369);var const_count = cljs.core.get.call(null,map__33369__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33369__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33369__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33370 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33370 = (function (pc_count,ic_count,const_count,map__33369,comm,site_stats,investor_company,investor_company_report,meta33371){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33369 = map__33369;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33371 = meta33371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33370.cljs$lang$type = true;
clustermap.components.map_report.t33370.cljs$lang$ctorStr = "clustermap.components.map-report/t33370";
clustermap.components.map_report.t33370.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33370");
});
clustermap.components.map_report.t33370.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33370.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs33375 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33375))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33375),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33375));
}
})()),React.DOM.ul(null,(function (){var attrs33376 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33376))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33376),(function (){var attrs33377 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33377))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33377),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33377));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33376),(function (){var attrs33378 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33378))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33378),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33378));
}
})());
}
})(),(function (){var attrs33379 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33379))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33379),(function (){var attrs33380 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33380))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33380),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33380));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33379),(function (){var attrs33381 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33381))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33381),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33381));
}
})());
}
})(),(function (){var attrs33382 = clustermap.formats.money.fmoney.call(null,(function (){var G__33392 = self__.site_stats;var G__33392__$1 = (((G__33392 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33392));var G__33392__$2 = (((G__33392__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33392__$1));return G__33392__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33382))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33382),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33382),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33387 = clustermap.formats.number.fnum.call(null,(function (){var G__33393 = self__.site_stats;var G__33393__$1 = (((G__33393 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33393));var G__33393__$2 = (((G__33393__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33393__$1));return G__33393__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33387))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33387),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33387),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33372){var self__ = this;
var _33372__$1 = this;return self__.meta33371;
});
clustermap.components.map_report.t33370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33372,meta33371__$1){var self__ = this;
var _33372__$1 = this;return (new clustermap.components.map_report.t33370(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33369,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33371__$1));
});
clustermap.components.map_report.__GT_t33370 = (function __GT_t33370(pc_count__$1,ic_count__$1,const_count__$1,map__33369__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33371){return (new clustermap.components.map_report.t33370(pc_count__$1,ic_count__$1,const_count__$1,map__33369__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33371));
});
}
return (new clustermap.components.map_report.t33370(pc_count,ic_count,const_count,map__33369__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33419 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33419__$1 = ((cljs.core.seq_QMARK_.call(null,map__33419))?cljs.core.apply.call(null,cljs.core.hash_map,map__33419):map__33419);var const_count = cljs.core.get.call(null,map__33419__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33419__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33419__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33420 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33420 = (function (pc_count,ic_count,const_count,map__33419,comm,site_stats,constituency,constituency_report,meta33421){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33419 = map__33419;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33421 = meta33421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33420.cljs$lang$type = true;
clustermap.components.map_report.t33420.cljs$lang$ctorStr = "clustermap.components.map-report/t33420";
clustermap.components.map_report.t33420.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33420");
});
clustermap.components.map_report.t33420.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33420.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs33425 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33425))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33425),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33425),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33426 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33426))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33426),(function (){var attrs33427 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33427))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33427),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33427));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33426),(function (){var attrs33428 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33428))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33428),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33428));
}
})());
}
})(),(function (){var attrs33429 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33429))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33429),(function (){var attrs33430 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33430))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33430),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33430));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33429),(function (){var attrs33431 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33431))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33431),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33431));
}
})());
}
})(),(function (){var attrs33432 = clustermap.formats.money.fmoney.call(null,(function (){var G__33442 = self__.site_stats;var G__33442__$1 = (((G__33442 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33442));var G__33442__$2 = (((G__33442__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33442__$1));return G__33442__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33432))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33432),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33432),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33437 = clustermap.formats.number.fnum.call(null,(function (){var G__33443 = self__.site_stats;var G__33443__$1 = (((G__33443 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33443));var G__33443__$2 = (((G__33443__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33443__$1));return G__33443__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33437))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33437),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33437),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33422){var self__ = this;
var _33422__$1 = this;return self__.meta33421;
});
clustermap.components.map_report.t33420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33422,meta33421__$1){var self__ = this;
var _33422__$1 = this;return (new clustermap.components.map_report.t33420(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33419,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33421__$1));
});
clustermap.components.map_report.__GT_t33420 = (function __GT_t33420(pc_count__$1,ic_count__$1,const_count__$1,map__33419__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33421){return (new clustermap.components.map_report.t33420(pc_count__$1,ic_count__$1,const_count__$1,map__33419__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33421));
});
}
return (new clustermap.components.map_report.t33420(pc_count,ic_count,const_count,map__33419__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33447 = cljs.core._EQ__EQ_;var expr__33448 = type;if(cljs.core.truth_(pred__33447.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33448)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33447.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33448)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33447.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33448)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
