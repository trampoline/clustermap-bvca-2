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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12113 = site_stats;var G__12113__$1 = (((G__12113 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12113));return G__12113__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12114 = site_stats;var G__12114__$1 = (((G__12114 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12114));return G__12114__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12115 = site_stats;var G__12115__$1 = (((G__12115 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12115));return G__12115__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12147 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12147__$1 = ((cljs.core.seq_QMARK_.call(null,map__12147))?cljs.core.apply.call(null,cljs.core.hash_map,map__12147):map__12147);var const_count = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12148 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12148 = (function (pc_count,ic_count,const_count,map__12147,comm,site_stats,all_portfolio_companies_summary_report,meta12149){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12147 = map__12147;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12149 = meta12149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12148.cljs$lang$type = true;
clustermap.components.map_report.t12148.cljs$lang$ctorStr = "clustermap.components.map-report/t12148";
clustermap.components.map_report.t12148.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12148");
});
clustermap.components.map_report.t12148.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12148.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12153 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12153))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12153),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12153),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12158 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12158))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12158),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12158),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12163 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12163))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12163),(function (){var attrs12164 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12164))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12164),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12164));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12163),(function (){var attrs12165 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12165))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12165),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12165));
}
})());
}
})(),(function (){var attrs12166 = clustermap.formats.money.fmoney.call(null,(function (){var G__12176 = self__.site_stats;var G__12176__$1 = (((G__12176 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12176));var G__12176__$2 = (((G__12176__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12176__$1));return G__12176__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12166))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12166),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12166),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12171 = clustermap.formats.number.fnum.call(null,(function (){var G__12177 = self__.site_stats;var G__12177__$1 = (((G__12177 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12177));var G__12177__$2 = (((G__12177__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12177__$1));return G__12177__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12171))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12171),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12171),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12150){var self__ = this;
var _12150__$1 = this;return self__.meta12149;
});
clustermap.components.map_report.t12148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12150,meta12149__$1){var self__ = this;
var _12150__$1 = this;return (new clustermap.components.map_report.t12148(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12147,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12149__$1));
});
clustermap.components.map_report.__GT_t12148 = (function __GT_t12148(pc_count__$1,ic_count__$1,const_count__$1,map__12147__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12149){return (new clustermap.components.map_report.t12148(pc_count__$1,ic_count__$1,const_count__$1,map__12147__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12149));
});
}
return (new clustermap.components.map_report.t12148(pc_count,ic_count,const_count,map__12147__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12203 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12203__$1 = ((cljs.core.seq_QMARK_.call(null,map__12203))?cljs.core.apply.call(null,cljs.core.hash_map,map__12203):map__12203);var const_count = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12204 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12204 = (function (pc_count,ic_count,const_count,map__12203,comm,site_stats,portfolio_company,portfolio_company_report,meta12205){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12203 = map__12203;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12205 = meta12205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12204.cljs$lang$type = true;
clustermap.components.map_report.t12204.cljs$lang$ctorStr = "clustermap.components.map-report/t12204";
clustermap.components.map_report.t12204.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12204");
});
clustermap.components.map_report.t12204.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12204.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12209 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12209))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12209),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12209));
}
})()),React.DOM.ul(null,(function (){var attrs12210 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12210))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12210),(function (){var attrs12211 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12211))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12211),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12211));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12210),(function (){var attrs12212 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12212))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12212),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12212));
}
})());
}
})(),(function (){var attrs12213 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12213))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12213),(function (){var attrs12214 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12214))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12214),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12214));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12213),(function (){var attrs12215 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12215))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12215),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12215));
}
})());
}
})(),(function (){var attrs12216 = clustermap.formats.money.fmoney.call(null,(function (){var G__12226 = self__.site_stats;var G__12226__$1 = (((G__12226 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12226));var G__12226__$2 = (((G__12226__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12226__$1));return G__12226__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12216))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12216),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12216),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12221 = clustermap.formats.number.fnum.call(null,(function (){var G__12227 = self__.site_stats;var G__12227__$1 = (((G__12227 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12227));var G__12227__$2 = (((G__12227__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12227__$1));return G__12227__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12221))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12221),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12221),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12206){var self__ = this;
var _12206__$1 = this;return self__.meta12205;
});
clustermap.components.map_report.t12204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12206,meta12205__$1){var self__ = this;
var _12206__$1 = this;return (new clustermap.components.map_report.t12204(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12203,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12205__$1));
});
clustermap.components.map_report.__GT_t12204 = (function __GT_t12204(pc_count__$1,ic_count__$1,const_count__$1,map__12203__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12205){return (new clustermap.components.map_report.t12204(pc_count__$1,ic_count__$1,const_count__$1,map__12203__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12205));
});
}
return (new clustermap.components.map_report.t12204(pc_count,ic_count,const_count,map__12203__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12253 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12253__$1 = ((cljs.core.seq_QMARK_.call(null,map__12253))?cljs.core.apply.call(null,cljs.core.hash_map,map__12253):map__12253);var const_count = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12254 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12254 = (function (pc_count,ic_count,const_count,map__12253,comm,site_stats,investor_company,investor_company_report,meta12255){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12253 = map__12253;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12255 = meta12255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12254.cljs$lang$type = true;
clustermap.components.map_report.t12254.cljs$lang$ctorStr = "clustermap.components.map-report/t12254";
clustermap.components.map_report.t12254.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12254");
});
clustermap.components.map_report.t12254.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12254.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12259 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12259))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12259),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12259));
}
})()),React.DOM.ul(null,(function (){var attrs12260 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12260))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12260),(function (){var attrs12261 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12261))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12261),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12261));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12260),(function (){var attrs12262 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12262))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12262),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12262));
}
})());
}
})(),(function (){var attrs12263 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12263))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12263),(function (){var attrs12264 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12264))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12264),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12264));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12263),(function (){var attrs12265 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12265))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12265),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12265));
}
})());
}
})(),(function (){var attrs12266 = clustermap.formats.money.fmoney.call(null,(function (){var G__12276 = self__.site_stats;var G__12276__$1 = (((G__12276 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12276));var G__12276__$2 = (((G__12276__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12276__$1));return G__12276__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12266))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12266),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12266),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12271 = clustermap.formats.number.fnum.call(null,(function (){var G__12277 = self__.site_stats;var G__12277__$1 = (((G__12277 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12277));var G__12277__$2 = (((G__12277__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12277__$1));return G__12277__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12271))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12271),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12271),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12256){var self__ = this;
var _12256__$1 = this;return self__.meta12255;
});
clustermap.components.map_report.t12254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12256,meta12255__$1){var self__ = this;
var _12256__$1 = this;return (new clustermap.components.map_report.t12254(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12253,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12255__$1));
});
clustermap.components.map_report.__GT_t12254 = (function __GT_t12254(pc_count__$1,ic_count__$1,const_count__$1,map__12253__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12255){return (new clustermap.components.map_report.t12254(pc_count__$1,ic_count__$1,const_count__$1,map__12253__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12255));
});
}
return (new clustermap.components.map_report.t12254(pc_count,ic_count,const_count,map__12253__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12303 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12303__$1 = ((cljs.core.seq_QMARK_.call(null,map__12303))?cljs.core.apply.call(null,cljs.core.hash_map,map__12303):map__12303);var const_count = cljs.core.get.call(null,map__12303__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12303__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12303__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12304 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12304 = (function (pc_count,ic_count,const_count,map__12303,comm,site_stats,constituency,constituency_report,meta12305){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12303 = map__12303;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12305 = meta12305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12304.cljs$lang$type = true;
clustermap.components.map_report.t12304.cljs$lang$ctorStr = "clustermap.components.map-report/t12304";
clustermap.components.map_report.t12304.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12304");
});
clustermap.components.map_report.t12304.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12304.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12309 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12309))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12309),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12309),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12310 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12310))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12310),(function (){var attrs12311 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12311))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12311),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12311));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12310),(function (){var attrs12312 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12312))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12312),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12312));
}
})());
}
})(),(function (){var attrs12313 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12313))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12313),(function (){var attrs12314 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12314))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12314),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12314));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12313),(function (){var attrs12315 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12315))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12315),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12315));
}
})());
}
})(),(function (){var attrs12316 = clustermap.formats.money.fmoney.call(null,(function (){var G__12326 = self__.site_stats;var G__12326__$1 = (((G__12326 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12326));var G__12326__$2 = (((G__12326__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12326__$1));return G__12326__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12316))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12316),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12316),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12321 = clustermap.formats.number.fnum.call(null,(function (){var G__12327 = self__.site_stats;var G__12327__$1 = (((G__12327 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12327));var G__12327__$2 = (((G__12327__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12327__$1));return G__12327__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12321))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12321),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12321),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12306){var self__ = this;
var _12306__$1 = this;return self__.meta12305;
});
clustermap.components.map_report.t12304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12306,meta12305__$1){var self__ = this;
var _12306__$1 = this;return (new clustermap.components.map_report.t12304(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12303,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12305__$1));
});
clustermap.components.map_report.__GT_t12304 = (function __GT_t12304(pc_count__$1,ic_count__$1,const_count__$1,map__12303__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12305){return (new clustermap.components.map_report.t12304(pc_count__$1,ic_count__$1,const_count__$1,map__12303__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12305));
});
}
return (new clustermap.components.map_report.t12304(pc_count,ic_count,const_count,map__12303__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__12331 = cljs.core._EQ__EQ_;var expr__12332 = type;if(cljs.core.truth_(pred__12331.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12332)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12331.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12332)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12331.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12332)))
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