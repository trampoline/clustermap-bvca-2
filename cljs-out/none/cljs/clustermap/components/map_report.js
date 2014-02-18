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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12129 = site_stats;var G__12129__$1 = (((G__12129 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12129));return G__12129__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12130 = site_stats;var G__12130__$1 = (((G__12130 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12130));return G__12130__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12131 = site_stats;var G__12131__$1 = (((G__12131 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12131));return G__12131__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12163 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12163__$1 = ((cljs.core.seq_QMARK_.call(null,map__12163))?cljs.core.apply.call(null,cljs.core.hash_map,map__12163):map__12163);var const_count = cljs.core.get.call(null,map__12163__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12163__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12163__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12164 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12164 = (function (pc_count,ic_count,const_count,map__12163,comm,site_stats,all_portfolio_companies_summary_report,meta12165){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12163 = map__12163;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12165 = meta12165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12164.cljs$lang$type = true;
clustermap.components.map_report.t12164.cljs$lang$ctorStr = "clustermap.components.map-report/t12164";
clustermap.components.map_report.t12164.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12164");
});
clustermap.components.map_report.t12164.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12164.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12169 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12169))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12169),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12169),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12174 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12174))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12174),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12174),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12179 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12179))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12179),(function (){var attrs12180 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12180))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12180),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12180));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12179),(function (){var attrs12181 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12181))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12181),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12181));
}
})());
}
})(),(function (){var attrs12182 = clustermap.formats.money.fmoney.call(null,(function (){var G__12192 = self__.site_stats;var G__12192__$1 = (((G__12192 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12192));var G__12192__$2 = (((G__12192__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12192__$1));return G__12192__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12182))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12182),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12182),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12187 = clustermap.formats.number.fnum.call(null,(function (){var G__12193 = self__.site_stats;var G__12193__$1 = (((G__12193 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12193));var G__12193__$2 = (((G__12193__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12193__$1));return G__12193__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12187))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12187),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12187),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12166){var self__ = this;
var _12166__$1 = this;return self__.meta12165;
});
clustermap.components.map_report.t12164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12166,meta12165__$1){var self__ = this;
var _12166__$1 = this;return (new clustermap.components.map_report.t12164(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12163,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12165__$1));
});
clustermap.components.map_report.__GT_t12164 = (function __GT_t12164(pc_count__$1,ic_count__$1,const_count__$1,map__12163__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12165){return (new clustermap.components.map_report.t12164(pc_count__$1,ic_count__$1,const_count__$1,map__12163__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12165));
});
}
return (new clustermap.components.map_report.t12164(pc_count,ic_count,const_count,map__12163__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12219 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12219__$1 = ((cljs.core.seq_QMARK_.call(null,map__12219))?cljs.core.apply.call(null,cljs.core.hash_map,map__12219):map__12219);var const_count = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12220 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12220 = (function (pc_count,ic_count,const_count,map__12219,comm,site_stats,portfolio_company,portfolio_company_report,meta12221){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12219 = map__12219;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12221 = meta12221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12220.cljs$lang$type = true;
clustermap.components.map_report.t12220.cljs$lang$ctorStr = "clustermap.components.map-report/t12220";
clustermap.components.map_report.t12220.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12220");
});
clustermap.components.map_report.t12220.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12220.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12225 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12225))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12225),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12225));
}
})()),React.DOM.ul(null,(function (){var attrs12226 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12226))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12226),(function (){var attrs12227 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12227))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12227),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12227));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12226),(function (){var attrs12228 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12228))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12228),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12228));
}
})());
}
})(),(function (){var attrs12229 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12229))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12229),(function (){var attrs12230 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12230))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12230),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12230));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12229),(function (){var attrs12231 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12231))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12231),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12231));
}
})());
}
})(),(function (){var attrs12232 = clustermap.formats.money.fmoney.call(null,(function (){var G__12242 = self__.site_stats;var G__12242__$1 = (((G__12242 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12242));var G__12242__$2 = (((G__12242__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12242__$1));return G__12242__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12232))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12232),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12232),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12237 = clustermap.formats.number.fnum.call(null,(function (){var G__12243 = self__.site_stats;var G__12243__$1 = (((G__12243 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12243));var G__12243__$2 = (((G__12243__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12243__$1));return G__12243__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12237))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12237),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12237),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12222){var self__ = this;
var _12222__$1 = this;return self__.meta12221;
});
clustermap.components.map_report.t12220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12222,meta12221__$1){var self__ = this;
var _12222__$1 = this;return (new clustermap.components.map_report.t12220(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12219,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12221__$1));
});
clustermap.components.map_report.__GT_t12220 = (function __GT_t12220(pc_count__$1,ic_count__$1,const_count__$1,map__12219__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12221){return (new clustermap.components.map_report.t12220(pc_count__$1,ic_count__$1,const_count__$1,map__12219__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12221));
});
}
return (new clustermap.components.map_report.t12220(pc_count,ic_count,const_count,map__12219__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12269 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12269__$1 = ((cljs.core.seq_QMARK_.call(null,map__12269))?cljs.core.apply.call(null,cljs.core.hash_map,map__12269):map__12269);var const_count = cljs.core.get.call(null,map__12269__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12269__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12269__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12270 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12270 = (function (pc_count,ic_count,const_count,map__12269,comm,site_stats,investor_company,investor_company_report,meta12271){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12269 = map__12269;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12271 = meta12271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12270.cljs$lang$type = true;
clustermap.components.map_report.t12270.cljs$lang$ctorStr = "clustermap.components.map-report/t12270";
clustermap.components.map_report.t12270.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12270");
});
clustermap.components.map_report.t12270.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12270.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12275 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12275))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12275),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12275));
}
})()),React.DOM.ul(null,(function (){var attrs12276 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12276))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12276),(function (){var attrs12277 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12277))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12277),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12277));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12276),(function (){var attrs12278 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12278))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12278),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12278));
}
})());
}
})(),(function (){var attrs12279 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12279))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12279),(function (){var attrs12280 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12280))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12280),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12280));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12279),(function (){var attrs12281 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12281))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12281),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12281));
}
})());
}
})(),(function (){var attrs12282 = clustermap.formats.money.fmoney.call(null,(function (){var G__12292 = self__.site_stats;var G__12292__$1 = (((G__12292 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12292));var G__12292__$2 = (((G__12292__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12292__$1));return G__12292__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12282))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12282),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12282),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12287 = clustermap.formats.number.fnum.call(null,(function (){var G__12293 = self__.site_stats;var G__12293__$1 = (((G__12293 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12293));var G__12293__$2 = (((G__12293__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12293__$1));return G__12293__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12287))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12287),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12287),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12272){var self__ = this;
var _12272__$1 = this;return self__.meta12271;
});
clustermap.components.map_report.t12270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12272,meta12271__$1){var self__ = this;
var _12272__$1 = this;return (new clustermap.components.map_report.t12270(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12269,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12271__$1));
});
clustermap.components.map_report.__GT_t12270 = (function __GT_t12270(pc_count__$1,ic_count__$1,const_count__$1,map__12269__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12271){return (new clustermap.components.map_report.t12270(pc_count__$1,ic_count__$1,const_count__$1,map__12269__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12271));
});
}
return (new clustermap.components.map_report.t12270(pc_count,ic_count,const_count,map__12269__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12319 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12319__$1 = ((cljs.core.seq_QMARK_.call(null,map__12319))?cljs.core.apply.call(null,cljs.core.hash_map,map__12319):map__12319);var const_count = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12320 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12320 = (function (pc_count,ic_count,const_count,map__12319,comm,site_stats,constituency,constituency_report,meta12321){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12319 = map__12319;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12321 = meta12321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12320.cljs$lang$type = true;
clustermap.components.map_report.t12320.cljs$lang$ctorStr = "clustermap.components.map-report/t12320";
clustermap.components.map_report.t12320.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12320");
});
clustermap.components.map_report.t12320.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12320.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12325 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12325))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12325),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12325),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12326 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12326))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12326),(function (){var attrs12327 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12327))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12327),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12327));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12326),(function (){var attrs12328 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12328))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12328),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12328));
}
})());
}
})(),(function (){var attrs12329 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12329))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12329),(function (){var attrs12330 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12330))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12330),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12330));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12329),(function (){var attrs12331 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12331))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12331),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12331));
}
})());
}
})(),(function (){var attrs12332 = clustermap.formats.money.fmoney.call(null,(function (){var G__12342 = self__.site_stats;var G__12342__$1 = (((G__12342 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12342));var G__12342__$2 = (((G__12342__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12342__$1));return G__12342__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12332))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12332),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12332),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12337 = clustermap.formats.number.fnum.call(null,(function (){var G__12343 = self__.site_stats;var G__12343__$1 = (((G__12343 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12343));var G__12343__$2 = (((G__12343__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12343__$1));return G__12343__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12337))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12337),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12337),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12322){var self__ = this;
var _12322__$1 = this;return self__.meta12321;
});
clustermap.components.map_report.t12320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12322,meta12321__$1){var self__ = this;
var _12322__$1 = this;return (new clustermap.components.map_report.t12320(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12319,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12321__$1));
});
clustermap.components.map_report.__GT_t12320 = (function __GT_t12320(pc_count__$1,ic_count__$1,const_count__$1,map__12319__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12321){return (new clustermap.components.map_report.t12320(pc_count__$1,ic_count__$1,const_count__$1,map__12319__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12321));
});
}
return (new clustermap.components.map_report.t12320(pc_count,ic_count,const_count,map__12319__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__12347 = cljs.core._EQ__EQ_;var expr__12348 = type;if(cljs.core.truth_(pred__12347.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12348)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12347.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12348)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12347.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12348)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map