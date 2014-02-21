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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12146 = site_stats;var G__12146__$1 = (((G__12146 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12146));return G__12146__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12147 = site_stats;var G__12147__$1 = (((G__12147 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12147));return G__12147__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12148 = site_stats;var G__12148__$1 = (((G__12148 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12148));return G__12148__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12180 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12180__$1 = ((cljs.core.seq_QMARK_.call(null,map__12180))?cljs.core.apply.call(null,cljs.core.hash_map,map__12180):map__12180);var const_count = cljs.core.get.call(null,map__12180__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12180__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12180__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12181 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12181 = (function (pc_count,ic_count,const_count,map__12180,comm,site_stats,all_portfolio_companies_summary_report,meta12182){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12180 = map__12180;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12182 = meta12182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12181.cljs$lang$type = true;
clustermap.components.map_report.t12181.cljs$lang$ctorStr = "clustermap.components.map-report/t12181";
clustermap.components.map_report.t12181.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12181");
});
clustermap.components.map_report.t12181.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12181.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12186 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12186))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12186),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12186),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12191 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12191))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12191),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12191),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12196 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12196))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12196),(function (){var attrs12197 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12197))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12197),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12197));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12196),(function (){var attrs12198 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12198))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12198),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12198));
}
})());
}
})(),(function (){var attrs12199 = clustermap.formats.money.fmoney.call(null,(function (){var G__12209 = self__.site_stats;var G__12209__$1 = (((G__12209 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12209));var G__12209__$2 = (((G__12209__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12209__$1));return G__12209__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12199))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12199),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12199),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12204 = clustermap.formats.number.fnum.call(null,(function (){var G__12210 = self__.site_stats;var G__12210__$1 = (((G__12210 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12210));var G__12210__$2 = (((G__12210__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12210__$1));return G__12210__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12204))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12204),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12204),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12183){var self__ = this;
var _12183__$1 = this;return self__.meta12182;
});
clustermap.components.map_report.t12181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12183,meta12182__$1){var self__ = this;
var _12183__$1 = this;return (new clustermap.components.map_report.t12181(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12180,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12182__$1));
});
clustermap.components.map_report.__GT_t12181 = (function __GT_t12181(pc_count__$1,ic_count__$1,const_count__$1,map__12180__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12182){return (new clustermap.components.map_report.t12181(pc_count__$1,ic_count__$1,const_count__$1,map__12180__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12182));
});
}
return (new clustermap.components.map_report.t12181(pc_count,ic_count,const_count,map__12180__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12236 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12236__$1 = ((cljs.core.seq_QMARK_.call(null,map__12236))?cljs.core.apply.call(null,cljs.core.hash_map,map__12236):map__12236);var const_count = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12237 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12237 = (function (pc_count,ic_count,const_count,map__12236,comm,site_stats,portfolio_company,portfolio_company_report,meta12238){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12236 = map__12236;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12238 = meta12238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12237.cljs$lang$type = true;
clustermap.components.map_report.t12237.cljs$lang$ctorStr = "clustermap.components.map-report/t12237";
clustermap.components.map_report.t12237.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12237");
});
clustermap.components.map_report.t12237.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12237.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12242 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12242))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12242),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12242));
}
})()),React.DOM.ul(null,(function (){var attrs12243 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12243))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12243),(function (){var attrs12244 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12244))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12244),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12244));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12243),(function (){var attrs12245 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12245))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12245),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12245));
}
})());
}
})(),(function (){var attrs12246 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12246))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12246),(function (){var attrs12247 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12247))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12247),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12247));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12246),(function (){var attrs12248 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12248))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12248),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12248));
}
})());
}
})(),(function (){var attrs12249 = clustermap.formats.money.fmoney.call(null,(function (){var G__12259 = self__.site_stats;var G__12259__$1 = (((G__12259 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12259));var G__12259__$2 = (((G__12259__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12259__$1));return G__12259__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12249))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12249),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12249),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12254 = clustermap.formats.number.fnum.call(null,(function (){var G__12260 = self__.site_stats;var G__12260__$1 = (((G__12260 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12260));var G__12260__$2 = (((G__12260__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12260__$1));return G__12260__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12254))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12254),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12254),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12239){var self__ = this;
var _12239__$1 = this;return self__.meta12238;
});
clustermap.components.map_report.t12237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12239,meta12238__$1){var self__ = this;
var _12239__$1 = this;return (new clustermap.components.map_report.t12237(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12236,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12238__$1));
});
clustermap.components.map_report.__GT_t12237 = (function __GT_t12237(pc_count__$1,ic_count__$1,const_count__$1,map__12236__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12238){return (new clustermap.components.map_report.t12237(pc_count__$1,ic_count__$1,const_count__$1,map__12236__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12238));
});
}
return (new clustermap.components.map_report.t12237(pc_count,ic_count,const_count,map__12236__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12286 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12286__$1 = ((cljs.core.seq_QMARK_.call(null,map__12286))?cljs.core.apply.call(null,cljs.core.hash_map,map__12286):map__12286);var const_count = cljs.core.get.call(null,map__12286__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12286__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12286__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12287 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12287 = (function (pc_count,ic_count,const_count,map__12286,comm,site_stats,investor_company,investor_company_report,meta12288){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12286 = map__12286;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12288 = meta12288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12287.cljs$lang$type = true;
clustermap.components.map_report.t12287.cljs$lang$ctorStr = "clustermap.components.map-report/t12287";
clustermap.components.map_report.t12287.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12287");
});
clustermap.components.map_report.t12287.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12287.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12292 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12292))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12292),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12292));
}
})()),React.DOM.ul(null,(function (){var attrs12293 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12293))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12293),(function (){var attrs12294 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12294))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12294),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12294));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12293),(function (){var attrs12295 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12295))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12295),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12295));
}
})());
}
})(),(function (){var attrs12296 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12296))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12296),(function (){var attrs12297 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12297))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12297),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12297));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12296),(function (){var attrs12298 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12298))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12298),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12298));
}
})());
}
})(),(function (){var attrs12299 = clustermap.formats.money.fmoney.call(null,(function (){var G__12309 = self__.site_stats;var G__12309__$1 = (((G__12309 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12309));var G__12309__$2 = (((G__12309__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12309__$1));return G__12309__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12299))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12299),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12299),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12304 = clustermap.formats.number.fnum.call(null,(function (){var G__12310 = self__.site_stats;var G__12310__$1 = (((G__12310 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12310));var G__12310__$2 = (((G__12310__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12310__$1));return G__12310__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12304))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12304),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12304),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12289){var self__ = this;
var _12289__$1 = this;return self__.meta12288;
});
clustermap.components.map_report.t12287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12289,meta12288__$1){var self__ = this;
var _12289__$1 = this;return (new clustermap.components.map_report.t12287(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12286,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12288__$1));
});
clustermap.components.map_report.__GT_t12287 = (function __GT_t12287(pc_count__$1,ic_count__$1,const_count__$1,map__12286__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12288){return (new clustermap.components.map_report.t12287(pc_count__$1,ic_count__$1,const_count__$1,map__12286__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12288));
});
}
return (new clustermap.components.map_report.t12287(pc_count,ic_count,const_count,map__12286__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12340 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12340__$1 = ((cljs.core.seq_QMARK_.call(null,map__12340))?cljs.core.apply.call(null,cljs.core.hash_map,map__12340):map__12340);var const_count = cljs.core.get.call(null,map__12340__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12340__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12340__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12341 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12341 = (function (pc_count,ic_count,const_count,map__12340,comm,site_stats,constituency,constituency_report,meta12342){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12340 = map__12340;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12342 = meta12342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12341.cljs$lang$type = true;
clustermap.components.map_report.t12341.cljs$lang$ctorStr = "clustermap.components.map-report/t12341";
clustermap.components.map_report.t12341.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12341");
});
clustermap.components.map_report.t12341.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12341.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12346 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12346))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12346),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12346),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12351 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12351))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12351),(function (){var attrs12352 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12352))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12352),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12352));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12351),(function (){var attrs12353 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12353))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12353),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12353));
}
})());
}
})(),(function (){var attrs12354 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12354))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12354),(function (){var attrs12355 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12355))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12355),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12355));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12354),(function (){var attrs12356 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12356))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12356),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12356));
}
})());
}
})(),(function (){var attrs12357 = clustermap.formats.money.fmoney.call(null,(function (){var G__12367 = self__.site_stats;var G__12367__$1 = (((G__12367 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12367));var G__12367__$2 = (((G__12367__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12367__$1));return G__12367__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12357))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12357),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12357),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12362 = clustermap.formats.number.fnum.call(null,(function (){var G__12368 = self__.site_stats;var G__12368__$1 = (((G__12368 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12368));var G__12368__$2 = (((G__12368__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12368__$1));return G__12368__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12362))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12362),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12362),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12343){var self__ = this;
var _12343__$1 = this;return self__.meta12342;
});
clustermap.components.map_report.t12341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12343,meta12342__$1){var self__ = this;
var _12343__$1 = this;return (new clustermap.components.map_report.t12341(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12340,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12342__$1));
});
clustermap.components.map_report.__GT_t12341 = (function __GT_t12341(pc_count__$1,ic_count__$1,const_count__$1,map__12340__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12342){return (new clustermap.components.map_report.t12341(pc_count__$1,ic_count__$1,const_count__$1,map__12340__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12342));
});
}
return (new clustermap.components.map_report.t12341(pc_count,ic_count,const_count,map__12340__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__12372 = cljs.core._EQ__EQ_;var expr__12373 = type;if(cljs.core.truth_(pred__12372.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12373)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12372.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12373)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12372.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12373)))
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