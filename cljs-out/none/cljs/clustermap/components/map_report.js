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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12052 = site_stats;var G__12052__$1 = (((G__12052 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12052));return G__12052__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12053 = site_stats;var G__12053__$1 = (((G__12053 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12053));return G__12053__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12054 = site_stats;var G__12054__$1 = (((G__12054 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12054));return G__12054__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12086 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12086__$1 = ((cljs.core.seq_QMARK_.call(null,map__12086))?cljs.core.apply.call(null,cljs.core.hash_map,map__12086):map__12086);var const_count = cljs.core.get.call(null,map__12086__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12086__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12086__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12087 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12087 = (function (pc_count,ic_count,const_count,map__12086,comm,site_stats,all_portfolio_companies_summary_report,meta12088){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12086 = map__12086;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12088 = meta12088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12087.cljs$lang$type = true;
clustermap.components.map_report.t12087.cljs$lang$ctorStr = "clustermap.components.map-report/t12087";
clustermap.components.map_report.t12087.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12087");
});
clustermap.components.map_report.t12087.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12087.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12092 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12092))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12092),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12092),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12097 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12097))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12097),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12097),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12102 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12102))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12102),(function (){var attrs12103 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12103))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12103),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12103));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12102),(function (){var attrs12104 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12104))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12104),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12104));
}
})());
}
})(),(function (){var attrs12105 = clustermap.formats.money.fmoney.call(null,(function (){var G__12115 = self__.site_stats;var G__12115__$1 = (((G__12115 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12115));var G__12115__$2 = (((G__12115__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12115__$1));return G__12115__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12105))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12105),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12105),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12110 = clustermap.formats.number.fnum.call(null,(function (){var G__12116 = self__.site_stats;var G__12116__$1 = (((G__12116 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12116));var G__12116__$2 = (((G__12116__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12116__$1));return G__12116__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12110))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12110),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12110),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12089){var self__ = this;
var _12089__$1 = this;return self__.meta12088;
});
clustermap.components.map_report.t12087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12089,meta12088__$1){var self__ = this;
var _12089__$1 = this;return (new clustermap.components.map_report.t12087(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12086,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12088__$1));
});
clustermap.components.map_report.__GT_t12087 = (function __GT_t12087(pc_count__$1,ic_count__$1,const_count__$1,map__12086__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12088){return (new clustermap.components.map_report.t12087(pc_count__$1,ic_count__$1,const_count__$1,map__12086__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12088));
});
}
return (new clustermap.components.map_report.t12087(pc_count,ic_count,const_count,map__12086__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12140 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12140__$1 = ((cljs.core.seq_QMARK_.call(null,map__12140))?cljs.core.apply.call(null,cljs.core.hash_map,map__12140):map__12140);var const_count = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12141 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12141 = (function (pc_count,ic_count,const_count,map__12140,comm,site_stats,portfolio_company,portfolio_company_report,meta12142){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12140 = map__12140;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12142 = meta12142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12141.cljs$lang$type = true;
clustermap.components.map_report.t12141.cljs$lang$ctorStr = "clustermap.components.map-report/t12141";
clustermap.components.map_report.t12141.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12141");
});
clustermap.components.map_report.t12141.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12141.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12144 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12144))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs12144),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs12144));
}
})()),React.DOM.ul(null,(function (){var attrs12145 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12145))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12145),(function (){var attrs12146 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12146))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12146),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12146));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12145),(function (){var attrs12147 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12147))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12147),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12147));
}
})());
}
})(),(function (){var attrs12148 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12148))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12148),(function (){var attrs12149 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12149))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12149),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12149));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12148),(function (){var attrs12150 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12150))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12150),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12150));
}
})());
}
})(),(function (){var attrs12151 = clustermap.formats.money.fmoney.call(null,(function (){var G__12161 = self__.site_stats;var G__12161__$1 = (((G__12161 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12161));var G__12161__$2 = (((G__12161__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12161__$1));return G__12161__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12151))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12151),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12151),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12156 = clustermap.formats.number.fnum.call(null,(function (){var G__12162 = self__.site_stats;var G__12162__$1 = (((G__12162 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12162));var G__12162__$2 = (((G__12162__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12162__$1));return G__12162__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12156))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12156),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12156),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12143){var self__ = this;
var _12143__$1 = this;return self__.meta12142;
});
clustermap.components.map_report.t12141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12143,meta12142__$1){var self__ = this;
var _12143__$1 = this;return (new clustermap.components.map_report.t12141(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12140,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12142__$1));
});
clustermap.components.map_report.__GT_t12141 = (function __GT_t12141(pc_count__$1,ic_count__$1,const_count__$1,map__12140__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12142){return (new clustermap.components.map_report.t12141(pc_count__$1,ic_count__$1,const_count__$1,map__12140__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12142));
});
}
return (new clustermap.components.map_report.t12141(pc_count,ic_count,const_count,map__12140__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12186 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12186__$1 = ((cljs.core.seq_QMARK_.call(null,map__12186))?cljs.core.apply.call(null,cljs.core.hash_map,map__12186):map__12186);var const_count = cljs.core.get.call(null,map__12186__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12186__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12186__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12187 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12187 = (function (pc_count,ic_count,const_count,map__12186,comm,site_stats,investor_company,investor_company_report,meta12188){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12186 = map__12186;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12188 = meta12188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12187.cljs$lang$type = true;
clustermap.components.map_report.t12187.cljs$lang$ctorStr = "clustermap.components.map-report/t12187";
clustermap.components.map_report.t12187.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12187");
});
clustermap.components.map_report.t12187.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12187.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12190 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12190))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs12190),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs12190));
}
})()),React.DOM.ul(null,(function (){var attrs12191 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12191))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12191),(function (){var attrs12192 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12192))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12192),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12192));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12191),(function (){var attrs12193 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12193))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12193),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12193));
}
})());
}
})(),(function (){var attrs12194 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12194))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12194),(function (){var attrs12195 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12195))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12195),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12195));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12194),(function (){var attrs12196 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12196))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12196),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12196));
}
})());
}
})(),(function (){var attrs12197 = clustermap.formats.money.fmoney.call(null,(function (){var G__12207 = self__.site_stats;var G__12207__$1 = (((G__12207 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12207));var G__12207__$2 = (((G__12207__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12207__$1));return G__12207__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12197))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12197),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12197),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12202 = clustermap.formats.number.fnum.call(null,(function (){var G__12208 = self__.site_stats;var G__12208__$1 = (((G__12208 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12208));var G__12208__$2 = (((G__12208__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12208__$1));return G__12208__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12202))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12202),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12202),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12189){var self__ = this;
var _12189__$1 = this;return self__.meta12188;
});
clustermap.components.map_report.t12187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12189,meta12188__$1){var self__ = this;
var _12189__$1 = this;return (new clustermap.components.map_report.t12187(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12186,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12188__$1));
});
clustermap.components.map_report.__GT_t12187 = (function __GT_t12187(pc_count__$1,ic_count__$1,const_count__$1,map__12186__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12188){return (new clustermap.components.map_report.t12187(pc_count__$1,ic_count__$1,const_count__$1,map__12186__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12188));
});
}
return (new clustermap.components.map_report.t12187(pc_count,ic_count,const_count,map__12186__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12233 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12233__$1 = ((cljs.core.seq_QMARK_.call(null,map__12233))?cljs.core.apply.call(null,cljs.core.hash_map,map__12233):map__12233);var const_count = cljs.core.get.call(null,map__12233__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12233__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12233__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12234 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12234 = (function (pc_count,ic_count,const_count,map__12233,comm,site_stats,constituency,constituency_report,meta12235){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12233 = map__12233;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12235 = meta12235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12234.cljs$lang$type = true;
clustermap.components.map_report.t12234.cljs$lang$ctorStr = "clustermap.components.map-report/t12234";
clustermap.components.map_report.t12234.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12234");
});
clustermap.components.map_report.t12234.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12234.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12237 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12237))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs12237),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs12237));
}
})(),(function (){var attrs12238 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12238))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12238),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12238),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12239 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12239))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12239),(function (){var attrs12240 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12240))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12240),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12240));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12239),(function (){var attrs12241 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12241))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12241),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12241));
}
})());
}
})(),(function (){var attrs12242 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12242))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12242),(function (){var attrs12243 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12243))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12243),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12243));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12242),(function (){var attrs12244 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12244))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12244),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12244));
}
})());
}
})(),(function (){var attrs12245 = clustermap.formats.money.fmoney.call(null,(function (){var G__12255 = self__.site_stats;var G__12255__$1 = (((G__12255 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12255));var G__12255__$2 = (((G__12255__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12255__$1));return G__12255__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12245))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12245),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12245),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12250 = clustermap.formats.number.fnum.call(null,(function (){var G__12256 = self__.site_stats;var G__12256__$1 = (((G__12256 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12256));var G__12256__$2 = (((G__12256__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12256__$1));return G__12256__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12250))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12250),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12250),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12236){var self__ = this;
var _12236__$1 = this;return self__.meta12235;
});
clustermap.components.map_report.t12234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12236,meta12235__$1){var self__ = this;
var _12236__$1 = this;return (new clustermap.components.map_report.t12234(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12233,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12235__$1));
});
clustermap.components.map_report.__GT_t12234 = (function __GT_t12234(pc_count__$1,ic_count__$1,const_count__$1,map__12233__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12235){return (new clustermap.components.map_report.t12234(pc_count__$1,ic_count__$1,const_count__$1,map__12233__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12235));
});
}
return (new clustermap.components.map_report.t12234(pc_count,ic_count,const_count,map__12233__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__12260 = cljs.core._EQ__EQ_;var expr__12261 = type;if(cljs.core.truth_(pred__12260.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12261)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12260.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12261)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12260.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12261)))
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