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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__32867 = site_stats;var G__32867__$1 = (((G__32867 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32867));return G__32867__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__32868 = site_stats;var G__32868__$1 = (((G__32868 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32868));return G__32868__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__32869 = site_stats;var G__32869__$1 = (((G__32869 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__32869));return G__32869__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__32901 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__32901__$1 = ((cljs.core.seq_QMARK_.call(null,map__32901))?cljs.core.apply.call(null,cljs.core.hash_map,map__32901):map__32901);var const_count = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t32902 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32902 = (function (pc_count,ic_count,const_count,map__32901,comm,site_stats,all_portfolio_companies_summary_report,meta32903){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__32901 = map__32901;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta32903 = meta32903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32902.cljs$lang$type = true;
clustermap.components.map_report.t32902.cljs$lang$ctorStr = "clustermap.components.map-report/t32902";
clustermap.components.map_report.t32902.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32902");
});
clustermap.components.map_report.t32902.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32902.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs32907 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32907))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32907),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32907),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs32912 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32912))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32912),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32912),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs32917 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32917))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32917),(function (){var attrs32918 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32918))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32918),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32918));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32917),(function (){var attrs32919 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32919))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32919),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32919));
}
})());
}
})(),(function (){var attrs32920 = clustermap.formats.money.fmoney.call(null,(function (){var G__32930 = self__.site_stats;var G__32930__$1 = (((G__32930 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32930));var G__32930__$2 = (((G__32930__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32930__$1));return G__32930__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32920))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32920),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32920),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32925 = clustermap.formats.number.fnum.call(null,(function (){var G__32931 = self__.site_stats;var G__32931__$1 = (((G__32931 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32931));var G__32931__$2 = (((G__32931__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32931__$1));return G__32931__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32925))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32925),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32925),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32904){var self__ = this;
var _32904__$1 = this;return self__.meta32903;
});
clustermap.components.map_report.t32902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32904,meta32903__$1){var self__ = this;
var _32904__$1 = this;return (new clustermap.components.map_report.t32902(self__.pc_count,self__.ic_count,self__.const_count,self__.map__32901,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta32903__$1));
});
clustermap.components.map_report.__GT_t32902 = (function __GT_t32902(pc_count__$1,ic_count__$1,const_count__$1,map__32901__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta32903){return (new clustermap.components.map_report.t32902(pc_count__$1,ic_count__$1,const_count__$1,map__32901__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta32903));
});
}
return (new clustermap.components.map_report.t32902(pc_count,ic_count,const_count,map__32901__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__32955 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__32955__$1 = ((cljs.core.seq_QMARK_.call(null,map__32955))?cljs.core.apply.call(null,cljs.core.hash_map,map__32955):map__32955);var const_count = cljs.core.get.call(null,map__32955__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__32955__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__32955__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t32956 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32956 = (function (pc_count,ic_count,const_count,map__32955,comm,site_stats,portfolio_company,portfolio_company_report,meta32957){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__32955 = map__32955;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta32957 = meta32957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32956.cljs$lang$type = true;
clustermap.components.map_report.t32956.cljs$lang$ctorStr = "clustermap.components.map-report/t32956";
clustermap.components.map_report.t32956.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32956");
});
clustermap.components.map_report.t32956.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32956.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32959 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs32959))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32959),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32959));
}
})()),React.DOM.ul(null,(function (){var attrs32960 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32960))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32960),(function (){var attrs32961 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32961))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32961),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32961));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32960),(function (){var attrs32962 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32962))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32962),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32962));
}
})());
}
})(),(function (){var attrs32963 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32963))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32963),(function (){var attrs32964 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32964))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32964),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32964));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32963),(function (){var attrs32965 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32965))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32965),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32965));
}
})());
}
})(),(function (){var attrs32966 = clustermap.formats.money.fmoney.call(null,(function (){var G__32976 = self__.site_stats;var G__32976__$1 = (((G__32976 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32976));var G__32976__$2 = (((G__32976__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32976__$1));return G__32976__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32966))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32966),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32966),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32971 = clustermap.formats.number.fnum.call(null,(function (){var G__32977 = self__.site_stats;var G__32977__$1 = (((G__32977 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32977));var G__32977__$2 = (((G__32977__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32977__$1));return G__32977__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32971))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32971),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32971),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32958){var self__ = this;
var _32958__$1 = this;return self__.meta32957;
});
clustermap.components.map_report.t32956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32958,meta32957__$1){var self__ = this;
var _32958__$1 = this;return (new clustermap.components.map_report.t32956(self__.pc_count,self__.ic_count,self__.const_count,self__.map__32955,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta32957__$1));
});
clustermap.components.map_report.__GT_t32956 = (function __GT_t32956(pc_count__$1,ic_count__$1,const_count__$1,map__32955__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta32957){return (new clustermap.components.map_report.t32956(pc_count__$1,ic_count__$1,const_count__$1,map__32955__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta32957));
});
}
return (new clustermap.components.map_report.t32956(pc_count,ic_count,const_count,map__32955__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33001 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33001__$1 = ((cljs.core.seq_QMARK_.call(null,map__33001))?cljs.core.apply.call(null,cljs.core.hash_map,map__33001):map__33001);var const_count = cljs.core.get.call(null,map__33001__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33001__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33001__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33002 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33002 = (function (pc_count,ic_count,const_count,map__33001,comm,site_stats,investor_company,investor_company_report,meta33003){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33001 = map__33001;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33003 = meta33003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33002.cljs$lang$type = true;
clustermap.components.map_report.t33002.cljs$lang$ctorStr = "clustermap.components.map-report/t33002";
clustermap.components.map_report.t33002.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33002");
});
clustermap.components.map_report.t33002.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33002.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs33005 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33005))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs33005),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs33005));
}
})()),React.DOM.ul(null,(function (){var attrs33006 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33006))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33006),(function (){var attrs33007 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33007))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33007),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33007));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33006),(function (){var attrs33008 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33008))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33008),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33008));
}
})());
}
})(),(function (){var attrs33009 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33009))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33009),(function (){var attrs33010 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33010))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33010),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33010));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33009),(function (){var attrs33011 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33011))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33011),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33011));
}
})());
}
})(),(function (){var attrs33012 = clustermap.formats.money.fmoney.call(null,(function (){var G__33022 = self__.site_stats;var G__33022__$1 = (((G__33022 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33022));var G__33022__$2 = (((G__33022__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33022__$1));return G__33022__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33012))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33012),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33012),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33017 = clustermap.formats.number.fnum.call(null,(function (){var G__33023 = self__.site_stats;var G__33023__$1 = (((G__33023 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33023));var G__33023__$2 = (((G__33023__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33023__$1));return G__33023__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33017))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33017),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33017),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33004){var self__ = this;
var _33004__$1 = this;return self__.meta33003;
});
clustermap.components.map_report.t33002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33004,meta33003__$1){var self__ = this;
var _33004__$1 = this;return (new clustermap.components.map_report.t33002(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33001,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33003__$1));
});
clustermap.components.map_report.__GT_t33002 = (function __GT_t33002(pc_count__$1,ic_count__$1,const_count__$1,map__33001__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33003){return (new clustermap.components.map_report.t33002(pc_count__$1,ic_count__$1,const_count__$1,map__33001__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33003));
});
}
return (new clustermap.components.map_report.t33002(pc_count,ic_count,const_count,map__33001__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33048 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33048__$1 = ((cljs.core.seq_QMARK_.call(null,map__33048))?cljs.core.apply.call(null,cljs.core.hash_map,map__33048):map__33048);var const_count = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33049 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33049 = (function (pc_count,ic_count,const_count,map__33048,comm,site_stats,constituency,constituency_report,meta33050){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33048 = map__33048;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33050 = meta33050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33049.cljs$lang$type = true;
clustermap.components.map_report.t33049.cljs$lang$ctorStr = "clustermap.components.map-report/t33049";
clustermap.components.map_report.t33049.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33049");
});
clustermap.components.map_report.t33049.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33049.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs33052 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33052))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs33052),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs33052));
}
})(),(function (){var attrs33053 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33053))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33053),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33053),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33054 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33054))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33054),(function (){var attrs33055 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33055))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33055),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33055));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33054),(function (){var attrs33056 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33056))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33056),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33056));
}
})());
}
})(),(function (){var attrs33057 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33057))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33057),(function (){var attrs33058 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33058))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33058),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33058));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33057),(function (){var attrs33059 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33059))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33059),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33059));
}
})());
}
})(),(function (){var attrs33060 = clustermap.formats.money.fmoney.call(null,(function (){var G__33070 = self__.site_stats;var G__33070__$1 = (((G__33070 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33070));var G__33070__$2 = (((G__33070__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33070__$1));return G__33070__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33060))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33060),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33060),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33065 = clustermap.formats.number.fnum.call(null,(function (){var G__33071 = self__.site_stats;var G__33071__$1 = (((G__33071 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33071));var G__33071__$2 = (((G__33071__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33071__$1));return G__33071__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33065))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33065),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33065),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33051){var self__ = this;
var _33051__$1 = this;return self__.meta33050;
});
clustermap.components.map_report.t33049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33051,meta33050__$1){var self__ = this;
var _33051__$1 = this;return (new clustermap.components.map_report.t33049(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33048,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33050__$1));
});
clustermap.components.map_report.__GT_t33049 = (function __GT_t33049(pc_count__$1,ic_count__$1,const_count__$1,map__33048__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33050){return (new clustermap.components.map_report.t33049(pc_count__$1,ic_count__$1,const_count__$1,map__33048__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33050));
});
}
return (new clustermap.components.map_report.t33049(pc_count,ic_count,const_count,map__33048__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33075 = cljs.core._EQ__EQ_;var expr__33076 = type;if(cljs.core.truth_(pred__33075.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33076)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33075.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33076)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33075.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33076)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
