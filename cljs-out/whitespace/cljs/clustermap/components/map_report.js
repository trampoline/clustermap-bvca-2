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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__32839 = site_stats;var G__32839__$1 = (((G__32839 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32839));return G__32839__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__32840 = site_stats;var G__32840__$1 = (((G__32840 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32840));return G__32840__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__32841 = site_stats;var G__32841__$1 = (((G__32841 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__32841));return G__32841__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__32873 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__32873__$1 = ((cljs.core.seq_QMARK_.call(null,map__32873))?cljs.core.apply.call(null,cljs.core.hash_map,map__32873):map__32873);var const_count = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t32874 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32874 = (function (pc_count,ic_count,const_count,map__32873,comm,site_stats,all_portfolio_companies_summary_report,meta32875){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__32873 = map__32873;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta32875 = meta32875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32874.cljs$lang$type = true;
clustermap.components.map_report.t32874.cljs$lang$ctorStr = "clustermap.components.map-report/t32874";
clustermap.components.map_report.t32874.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32874");
});
clustermap.components.map_report.t32874.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32874.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs32879 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32879))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32879),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32879),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs32884 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32884))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32884),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32884),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs32889 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32889))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32889),(function (){var attrs32890 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32890))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32890),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32890));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32889),(function (){var attrs32891 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32891))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32891),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32891));
}
})());
}
})(),(function (){var attrs32892 = clustermap.formats.money.fmoney.call(null,(function (){var G__32902 = self__.site_stats;var G__32902__$1 = (((G__32902 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32902));var G__32902__$2 = (((G__32902__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32902__$1));return G__32902__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32892))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32892),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32892),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32897 = clustermap.formats.number.fnum.call(null,(function (){var G__32903 = self__.site_stats;var G__32903__$1 = (((G__32903 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32903));var G__32903__$2 = (((G__32903__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32903__$1));return G__32903__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32897))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32897),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32897),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32876){var self__ = this;
var _32876__$1 = this;return self__.meta32875;
});
clustermap.components.map_report.t32874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32876,meta32875__$1){var self__ = this;
var _32876__$1 = this;return (new clustermap.components.map_report.t32874(self__.pc_count,self__.ic_count,self__.const_count,self__.map__32873,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta32875__$1));
});
clustermap.components.map_report.__GT_t32874 = (function __GT_t32874(pc_count__$1,ic_count__$1,const_count__$1,map__32873__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta32875){return (new clustermap.components.map_report.t32874(pc_count__$1,ic_count__$1,const_count__$1,map__32873__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta32875));
});
}
return (new clustermap.components.map_report.t32874(pc_count,ic_count,const_count,map__32873__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__32927 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__32927__$1 = ((cljs.core.seq_QMARK_.call(null,map__32927))?cljs.core.apply.call(null,cljs.core.hash_map,map__32927):map__32927);var const_count = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t32928 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32928 = (function (pc_count,ic_count,const_count,map__32927,comm,site_stats,portfolio_company,portfolio_company_report,meta32929){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__32927 = map__32927;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta32929 = meta32929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32928.cljs$lang$type = true;
clustermap.components.map_report.t32928.cljs$lang$ctorStr = "clustermap.components.map-report/t32928";
clustermap.components.map_report.t32928.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32928");
});
clustermap.components.map_report.t32928.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32928.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32931 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs32931))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32931),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32931));
}
})()),React.DOM.ul(null,(function (){var attrs32932 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32932))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32932),(function (){var attrs32933 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32933))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32933),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32933));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32932),(function (){var attrs32934 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32934))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32934),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32934));
}
})());
}
})(),(function (){var attrs32935 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32935))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32935),(function (){var attrs32936 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32936))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32936),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32936));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32935),(function (){var attrs32937 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32937))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32937),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32937));
}
})());
}
})(),(function (){var attrs32938 = clustermap.formats.money.fmoney.call(null,(function (){var G__32948 = self__.site_stats;var G__32948__$1 = (((G__32948 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32948));var G__32948__$2 = (((G__32948__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32948__$1));return G__32948__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32938))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32938),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32938),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32943 = clustermap.formats.number.fnum.call(null,(function (){var G__32949 = self__.site_stats;var G__32949__$1 = (((G__32949 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32949));var G__32949__$2 = (((G__32949__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32949__$1));return G__32949__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32943))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32943),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32943),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32930){var self__ = this;
var _32930__$1 = this;return self__.meta32929;
});
clustermap.components.map_report.t32928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32930,meta32929__$1){var self__ = this;
var _32930__$1 = this;return (new clustermap.components.map_report.t32928(self__.pc_count,self__.ic_count,self__.const_count,self__.map__32927,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta32929__$1));
});
clustermap.components.map_report.__GT_t32928 = (function __GT_t32928(pc_count__$1,ic_count__$1,const_count__$1,map__32927__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta32929){return (new clustermap.components.map_report.t32928(pc_count__$1,ic_count__$1,const_count__$1,map__32927__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta32929));
});
}
return (new clustermap.components.map_report.t32928(pc_count,ic_count,const_count,map__32927__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__32973 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__32973__$1 = ((cljs.core.seq_QMARK_.call(null,map__32973))?cljs.core.apply.call(null,cljs.core.hash_map,map__32973):map__32973);var const_count = cljs.core.get.call(null,map__32973__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__32973__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__32973__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t32974 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32974 = (function (pc_count,ic_count,const_count,map__32973,comm,site_stats,investor_company,investor_company_report,meta32975){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__32973 = map__32973;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta32975 = meta32975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32974.cljs$lang$type = true;
clustermap.components.map_report.t32974.cljs$lang$ctorStr = "clustermap.components.map-report/t32974";
clustermap.components.map_report.t32974.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32974");
});
clustermap.components.map_report.t32974.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32974.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32977 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs32977))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32977),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32977));
}
})()),React.DOM.ul(null,(function (){var attrs32978 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32978))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32978),(function (){var attrs32979 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32979))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32979),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32979));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32978),(function (){var attrs32980 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32980))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32980),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32980));
}
})());
}
})(),(function (){var attrs32981 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32981))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32981),(function (){var attrs32982 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32982))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32982),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32982));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32981),(function (){var attrs32983 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32983))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32983),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32983));
}
})());
}
})(),(function (){var attrs32984 = clustermap.formats.money.fmoney.call(null,(function (){var G__32994 = self__.site_stats;var G__32994__$1 = (((G__32994 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32994));var G__32994__$2 = (((G__32994__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32994__$1));return G__32994__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32984))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32984),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32984),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32989 = clustermap.formats.number.fnum.call(null,(function (){var G__32995 = self__.site_stats;var G__32995__$1 = (((G__32995 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32995));var G__32995__$2 = (((G__32995__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32995__$1));return G__32995__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32989))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32989),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32989),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32976){var self__ = this;
var _32976__$1 = this;return self__.meta32975;
});
clustermap.components.map_report.t32974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32976,meta32975__$1){var self__ = this;
var _32976__$1 = this;return (new clustermap.components.map_report.t32974(self__.pc_count,self__.ic_count,self__.const_count,self__.map__32973,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta32975__$1));
});
clustermap.components.map_report.__GT_t32974 = (function __GT_t32974(pc_count__$1,ic_count__$1,const_count__$1,map__32973__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta32975){return (new clustermap.components.map_report.t32974(pc_count__$1,ic_count__$1,const_count__$1,map__32973__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta32975));
});
}
return (new clustermap.components.map_report.t32974(pc_count,ic_count,const_count,map__32973__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33020 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33020__$1 = ((cljs.core.seq_QMARK_.call(null,map__33020))?cljs.core.apply.call(null,cljs.core.hash_map,map__33020):map__33020);var const_count = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33021 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33021 = (function (pc_count,ic_count,const_count,map__33020,comm,site_stats,constituency,constituency_report,meta33022){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33020 = map__33020;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33022 = meta33022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33021.cljs$lang$type = true;
clustermap.components.map_report.t33021.cljs$lang$ctorStr = "clustermap.components.map-report/t33021";
clustermap.components.map_report.t33021.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33021");
});
clustermap.components.map_report.t33021.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33021.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs33024 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33024))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs33024),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs33024));
}
})(),(function (){var attrs33025 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33025))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33025),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33025),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33026 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33026))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33026),(function (){var attrs33027 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33027))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33027),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33027));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33026),(function (){var attrs33028 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33028))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33028),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33028));
}
})());
}
})(),(function (){var attrs33029 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33029))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33029),(function (){var attrs33030 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33030))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33030),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33030));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33029),(function (){var attrs33031 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33031))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33031),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33031));
}
})());
}
})(),(function (){var attrs33032 = clustermap.formats.money.fmoney.call(null,(function (){var G__33042 = self__.site_stats;var G__33042__$1 = (((G__33042 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33042));var G__33042__$2 = (((G__33042__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33042__$1));return G__33042__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33032))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33032),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33032),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33037 = clustermap.formats.number.fnum.call(null,(function (){var G__33043 = self__.site_stats;var G__33043__$1 = (((G__33043 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33043));var G__33043__$2 = (((G__33043__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33043__$1));return G__33043__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33037))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33037),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33037),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33023){var self__ = this;
var _33023__$1 = this;return self__.meta33022;
});
clustermap.components.map_report.t33021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33023,meta33022__$1){var self__ = this;
var _33023__$1 = this;return (new clustermap.components.map_report.t33021(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33020,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33022__$1));
});
clustermap.components.map_report.__GT_t33021 = (function __GT_t33021(pc_count__$1,ic_count__$1,const_count__$1,map__33020__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33022){return (new clustermap.components.map_report.t33021(pc_count__$1,ic_count__$1,const_count__$1,map__33020__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33022));
});
}
return (new clustermap.components.map_report.t33021(pc_count,ic_count,const_count,map__33020__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33047 = cljs.core._EQ__EQ_;var expr__33048 = type;if(cljs.core.truth_(pred__33047.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33048)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33047.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33048)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33047.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33048)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
