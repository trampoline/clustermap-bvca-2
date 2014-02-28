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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12130 = site_stats;var G__12130__$1 = (((G__12130 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12130));return G__12130__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12131 = site_stats;var G__12131__$1 = (((G__12131 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12131));return G__12131__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12132 = site_stats;var G__12132__$1 = (((G__12132 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12132));return G__12132__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12164 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12164__$1 = ((cljs.core.seq_QMARK_.call(null,map__12164))?cljs.core.apply.call(null,cljs.core.hash_map,map__12164):map__12164);var const_count = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12165 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12165 = (function (pc_count,ic_count,const_count,map__12164,comm,site_stats,all_portfolio_companies_summary_report,meta12166){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12164 = map__12164;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12166 = meta12166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12165.cljs$lang$type = true;
clustermap.components.map_report.t12165.cljs$lang$ctorStr = "clustermap.components.map-report/t12165";
clustermap.components.map_report.t12165.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12165");
});
clustermap.components.map_report.t12165.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12165.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12170 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12170))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12170),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12170),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12175 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12175))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12175),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12175),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12180 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12180))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12180),(function (){var attrs12181 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12181))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12181),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12181));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12180),(function (){var attrs12182 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12182))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12182),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12182));
}
})());
}
})(),(function (){var attrs12183 = clustermap.formats.money.fmoney.call(null,(function (){var G__12193 = self__.site_stats;var G__12193__$1 = (((G__12193 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12193));var G__12193__$2 = (((G__12193__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12193__$1));return G__12193__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12183))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12183),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12183),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12188 = clustermap.formats.number.fnum.call(null,(function (){var G__12194 = self__.site_stats;var G__12194__$1 = (((G__12194 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12194));var G__12194__$2 = (((G__12194__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12194__$1));return G__12194__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12188))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12188),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12188),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12167){var self__ = this;
var _12167__$1 = this;return self__.meta12166;
});
clustermap.components.map_report.t12165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12167,meta12166__$1){var self__ = this;
var _12167__$1 = this;return (new clustermap.components.map_report.t12165(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12164,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12166__$1));
});
clustermap.components.map_report.__GT_t12165 = (function __GT_t12165(pc_count__$1,ic_count__$1,const_count__$1,map__12164__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12166){return (new clustermap.components.map_report.t12165(pc_count__$1,ic_count__$1,const_count__$1,map__12164__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12166));
});
}
return (new clustermap.components.map_report.t12165(pc_count,ic_count,const_count,map__12164__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12220 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12220__$1 = ((cljs.core.seq_QMARK_.call(null,map__12220))?cljs.core.apply.call(null,cljs.core.hash_map,map__12220):map__12220);var const_count = cljs.core.get.call(null,map__12220__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12220__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12220__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12221 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12221 = (function (pc_count,ic_count,const_count,map__12220,comm,site_stats,portfolio_company,portfolio_company_report,meta12222){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12220 = map__12220;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12222 = meta12222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12221.cljs$lang$type = true;
clustermap.components.map_report.t12221.cljs$lang$ctorStr = "clustermap.components.map-report/t12221";
clustermap.components.map_report.t12221.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12221");
});
clustermap.components.map_report.t12221.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12221.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12226 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12226))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12226),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12226));
}
})()),React.DOM.ul(null,(function (){var attrs12227 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12227))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12227),(function (){var attrs12228 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12228))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12228),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12228));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12227),(function (){var attrs12229 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12229))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12229),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12229));
}
})());
}
})(),(function (){var attrs12230 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12230))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12230),(function (){var attrs12231 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12231))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12231),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12231));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12230),(function (){var attrs12232 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12232))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12232),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12232));
}
})());
}
})(),(function (){var attrs12233 = clustermap.formats.money.fmoney.call(null,(function (){var G__12243 = self__.site_stats;var G__12243__$1 = (((G__12243 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12243));var G__12243__$2 = (((G__12243__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12243__$1));return G__12243__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12233))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12233),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12233),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12238 = clustermap.formats.number.fnum.call(null,(function (){var G__12244 = self__.site_stats;var G__12244__$1 = (((G__12244 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12244));var G__12244__$2 = (((G__12244__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12244__$1));return G__12244__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12238))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12238),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12238),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12223){var self__ = this;
var _12223__$1 = this;return self__.meta12222;
});
clustermap.components.map_report.t12221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12223,meta12222__$1){var self__ = this;
var _12223__$1 = this;return (new clustermap.components.map_report.t12221(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12220,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12222__$1));
});
clustermap.components.map_report.__GT_t12221 = (function __GT_t12221(pc_count__$1,ic_count__$1,const_count__$1,map__12220__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12222){return (new clustermap.components.map_report.t12221(pc_count__$1,ic_count__$1,const_count__$1,map__12220__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12222));
});
}
return (new clustermap.components.map_report.t12221(pc_count,ic_count,const_count,map__12220__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12270 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12270__$1 = ((cljs.core.seq_QMARK_.call(null,map__12270))?cljs.core.apply.call(null,cljs.core.hash_map,map__12270):map__12270);var const_count = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12271 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12271 = (function (pc_count,ic_count,const_count,map__12270,comm,site_stats,investor_company,investor_company_report,meta12272){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12270 = map__12270;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12272 = meta12272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12271.cljs$lang$type = true;
clustermap.components.map_report.t12271.cljs$lang$ctorStr = "clustermap.components.map-report/t12271";
clustermap.components.map_report.t12271.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12271");
});
clustermap.components.map_report.t12271.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12271.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12276 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12276))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12276),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12276));
}
})()),React.DOM.ul(null,(function (){var attrs12277 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12277))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12277),(function (){var attrs12278 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12278))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12278),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12278));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12277),(function (){var attrs12279 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12279))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12279),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12279));
}
})());
}
})(),(function (){var attrs12280 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12280))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12280),(function (){var attrs12281 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12281))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12281),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12281));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12280),(function (){var attrs12282 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12282))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12282),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12282));
}
})());
}
})(),(function (){var attrs12283 = clustermap.formats.money.fmoney.call(null,(function (){var G__12293 = self__.site_stats;var G__12293__$1 = (((G__12293 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12293));var G__12293__$2 = (((G__12293__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12293__$1));return G__12293__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12283))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12283),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12283),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12288 = clustermap.formats.number.fnum.call(null,(function (){var G__12294 = self__.site_stats;var G__12294__$1 = (((G__12294 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12294));var G__12294__$2 = (((G__12294__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12294__$1));return G__12294__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12288))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12288),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12288),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12273){var self__ = this;
var _12273__$1 = this;return self__.meta12272;
});
clustermap.components.map_report.t12271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12273,meta12272__$1){var self__ = this;
var _12273__$1 = this;return (new clustermap.components.map_report.t12271(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12270,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12272__$1));
});
clustermap.components.map_report.__GT_t12271 = (function __GT_t12271(pc_count__$1,ic_count__$1,const_count__$1,map__12270__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12272){return (new clustermap.components.map_report.t12271(pc_count__$1,ic_count__$1,const_count__$1,map__12270__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12272));
});
}
return (new clustermap.components.map_report.t12271(pc_count,ic_count,const_count,map__12270__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12324 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12324__$1 = ((cljs.core.seq_QMARK_.call(null,map__12324))?cljs.core.apply.call(null,cljs.core.hash_map,map__12324):map__12324);var const_count = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12325 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12325 = (function (pc_count,ic_count,const_count,map__12324,comm,site_stats,constituency,constituency_report,meta12326){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12324 = map__12324;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12326 = meta12326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12325.cljs$lang$type = true;
clustermap.components.map_report.t12325.cljs$lang$ctorStr = "clustermap.components.map-report/t12325";
clustermap.components.map_report.t12325.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12325");
});
clustermap.components.map_report.t12325.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12325.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12330 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12330))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12330),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12330),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})()),React.DOM.ul(null,(function (){var attrs12335 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12335))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12335),(function (){var attrs12336 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12336))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12336),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12336));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12335),(function (){var attrs12337 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12337))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12337),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12337));
}
})());
}
})(),(function (){var attrs12338 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12338))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12338),(function (){var attrs12339 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12339))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12339),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12339));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12338),(function (){var attrs12340 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12340))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12340),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12340));
}
})());
}
})(),(function (){var attrs12341 = clustermap.formats.money.fmoney.call(null,(function (){var G__12351 = self__.site_stats;var G__12351__$1 = (((G__12351 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12351));var G__12351__$2 = (((G__12351__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12351__$1));return G__12351__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12341))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12341),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12341),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12346 = clustermap.formats.number.fnum.call(null,(function (){var G__12352 = self__.site_stats;var G__12352__$1 = (((G__12352 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12352));var G__12352__$2 = (((G__12352__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12352__$1));return G__12352__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12346))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12346),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12346),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12327){var self__ = this;
var _12327__$1 = this;return self__.meta12326;
});
clustermap.components.map_report.t12325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12327,meta12326__$1){var self__ = this;
var _12327__$1 = this;return (new clustermap.components.map_report.t12325(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12324,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12326__$1));
});
clustermap.components.map_report.__GT_t12325 = (function __GT_t12325(pc_count__$1,ic_count__$1,const_count__$1,map__12324__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12326){return (new clustermap.components.map_report.t12325(pc_count__$1,ic_count__$1,const_count__$1,map__12324__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12326));
});
}
return (new clustermap.components.map_report.t12325(pc_count,ic_count,const_count,map__12324__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12356 = cljs.core._EQ__EQ_;var expr__12357 = type;if(cljs.core.truth_(pred__12356.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12357)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12356.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12357)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12356.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12357)))
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