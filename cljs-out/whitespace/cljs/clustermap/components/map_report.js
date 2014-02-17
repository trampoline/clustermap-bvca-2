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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__33011 = site_stats;var G__33011__$1 = (((G__33011 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33011));return G__33011__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__33012 = site_stats;var G__33012__$1 = (((G__33012 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33012));return G__33012__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__33013 = site_stats;var G__33013__$1 = (((G__33013 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33013));return G__33013__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__33045 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33045__$1 = ((cljs.core.seq_QMARK_.call(null,map__33045))?cljs.core.apply.call(null,cljs.core.hash_map,map__33045):map__33045);var const_count = cljs.core.get.call(null,map__33045__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33045__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33045__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33046 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33046 = (function (pc_count,ic_count,const_count,map__33045,comm,site_stats,all_portfolio_companies_summary_report,meta33047){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33045 = map__33045;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta33047 = meta33047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33046.cljs$lang$type = true;
clustermap.components.map_report.t33046.cljs$lang$ctorStr = "clustermap.components.map-report/t33046";
clustermap.components.map_report.t33046.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33046");
});
clustermap.components.map_report.t33046.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33046.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs33051 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33051))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33051),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33051),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs33056 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33056))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33056),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33056),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs33061 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33061))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33061),(function (){var attrs33062 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33062))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33062),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33062));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33061),(function (){var attrs33063 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33063))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33063),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33063));
}
})());
}
})(),(function (){var attrs33064 = clustermap.formats.money.fmoney.call(null,(function (){var G__33074 = self__.site_stats;var G__33074__$1 = (((G__33074 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33074));var G__33074__$2 = (((G__33074__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33074__$1));return G__33074__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33064))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33064),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33064),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33069 = clustermap.formats.number.fnum.call(null,(function (){var G__33075 = self__.site_stats;var G__33075__$1 = (((G__33075 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33075));var G__33075__$2 = (((G__33075__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33075__$1));return G__33075__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33069))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33069),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33069),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33048){var self__ = this;
var _33048__$1 = this;return self__.meta33047;
});
clustermap.components.map_report.t33046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33048,meta33047__$1){var self__ = this;
var _33048__$1 = this;return (new clustermap.components.map_report.t33046(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33045,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta33047__$1));
});
clustermap.components.map_report.__GT_t33046 = (function __GT_t33046(pc_count__$1,ic_count__$1,const_count__$1,map__33045__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33047){return (new clustermap.components.map_report.t33046(pc_count__$1,ic_count__$1,const_count__$1,map__33045__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33047));
});
}
return (new clustermap.components.map_report.t33046(pc_count,ic_count,const_count,map__33045__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33101 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33101__$1 = ((cljs.core.seq_QMARK_.call(null,map__33101))?cljs.core.apply.call(null,cljs.core.hash_map,map__33101):map__33101);var const_count = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33102 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33102 = (function (pc_count,ic_count,const_count,map__33101,comm,site_stats,portfolio_company,portfolio_company_report,meta33103){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33101 = map__33101;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33103 = meta33103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33102.cljs$lang$type = true;
clustermap.components.map_report.t33102.cljs$lang$ctorStr = "clustermap.components.map-report/t33102";
clustermap.components.map_report.t33102.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33102");
});
clustermap.components.map_report.t33102.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33102.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs33107 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33107))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33107),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33107));
}
})()),React.DOM.ul(null,(function (){var attrs33108 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33108))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33108),(function (){var attrs33109 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33109))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33109),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33109));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33108),(function (){var attrs33110 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33110))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33110),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33110));
}
})());
}
})(),(function (){var attrs33111 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33111))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33111),(function (){var attrs33112 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33112))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33112),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33112));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33111),(function (){var attrs33113 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33113))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33113),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33113));
}
})());
}
})(),(function (){var attrs33114 = clustermap.formats.money.fmoney.call(null,(function (){var G__33124 = self__.site_stats;var G__33124__$1 = (((G__33124 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33124));var G__33124__$2 = (((G__33124__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33124__$1));return G__33124__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33114))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33114),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33114),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33119 = clustermap.formats.number.fnum.call(null,(function (){var G__33125 = self__.site_stats;var G__33125__$1 = (((G__33125 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33125));var G__33125__$2 = (((G__33125__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33125__$1));return G__33125__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33119))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33119),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33119),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33104){var self__ = this;
var _33104__$1 = this;return self__.meta33103;
});
clustermap.components.map_report.t33102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33104,meta33103__$1){var self__ = this;
var _33104__$1 = this;return (new clustermap.components.map_report.t33102(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33101,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33103__$1));
});
clustermap.components.map_report.__GT_t33102 = (function __GT_t33102(pc_count__$1,ic_count__$1,const_count__$1,map__33101__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33103){return (new clustermap.components.map_report.t33102(pc_count__$1,ic_count__$1,const_count__$1,map__33101__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33103));
});
}
return (new clustermap.components.map_report.t33102(pc_count,ic_count,const_count,map__33101__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33151 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33151__$1 = ((cljs.core.seq_QMARK_.call(null,map__33151))?cljs.core.apply.call(null,cljs.core.hash_map,map__33151):map__33151);var const_count = cljs.core.get.call(null,map__33151__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33151__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33151__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33152 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33152 = (function (pc_count,ic_count,const_count,map__33151,comm,site_stats,investor_company,investor_company_report,meta33153){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33151 = map__33151;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33153 = meta33153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33152.cljs$lang$type = true;
clustermap.components.map_report.t33152.cljs$lang$ctorStr = "clustermap.components.map-report/t33152";
clustermap.components.map_report.t33152.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33152");
});
clustermap.components.map_report.t33152.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33152.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs33157 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33157))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33157),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33157));
}
})()),React.DOM.ul(null,(function (){var attrs33158 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33158))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33158),(function (){var attrs33159 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33159))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33159),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33159));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33158),(function (){var attrs33160 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33160))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33160),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33160));
}
})());
}
})(),(function (){var attrs33161 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33161))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33161),(function (){var attrs33162 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33162))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33162),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33162));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33161),(function (){var attrs33163 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33163))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33163),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33163));
}
})());
}
})(),(function (){var attrs33164 = clustermap.formats.money.fmoney.call(null,(function (){var G__33174 = self__.site_stats;var G__33174__$1 = (((G__33174 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33174));var G__33174__$2 = (((G__33174__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33174__$1));return G__33174__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33164))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33164),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33164),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33169 = clustermap.formats.number.fnum.call(null,(function (){var G__33175 = self__.site_stats;var G__33175__$1 = (((G__33175 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33175));var G__33175__$2 = (((G__33175__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33175__$1));return G__33175__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33169))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33169),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33169),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33154){var self__ = this;
var _33154__$1 = this;return self__.meta33153;
});
clustermap.components.map_report.t33152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33154,meta33153__$1){var self__ = this;
var _33154__$1 = this;return (new clustermap.components.map_report.t33152(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33151,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33153__$1));
});
clustermap.components.map_report.__GT_t33152 = (function __GT_t33152(pc_count__$1,ic_count__$1,const_count__$1,map__33151__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33153){return (new clustermap.components.map_report.t33152(pc_count__$1,ic_count__$1,const_count__$1,map__33151__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33153));
});
}
return (new clustermap.components.map_report.t33152(pc_count,ic_count,const_count,map__33151__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33201 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33201__$1 = ((cljs.core.seq_QMARK_.call(null,map__33201))?cljs.core.apply.call(null,cljs.core.hash_map,map__33201):map__33201);var const_count = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33202 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33202 = (function (pc_count,ic_count,const_count,map__33201,comm,site_stats,constituency,constituency_report,meta33203){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33201 = map__33201;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33203 = meta33203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33202.cljs$lang$type = true;
clustermap.components.map_report.t33202.cljs$lang$ctorStr = "clustermap.components.map-report/t33202";
clustermap.components.map_report.t33202.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33202");
});
clustermap.components.map_report.t33202.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33202.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs33207 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33207))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33207),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33207),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33208 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33208))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33208),(function (){var attrs33209 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33209))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33209),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33209));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33208),(function (){var attrs33210 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33210))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33210),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33210));
}
})());
}
})(),(function (){var attrs33211 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33211))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33211),(function (){var attrs33212 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33212))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33212),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33212));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33211),(function (){var attrs33213 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33213))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33213),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33213));
}
})());
}
})(),(function (){var attrs33214 = clustermap.formats.money.fmoney.call(null,(function (){var G__33224 = self__.site_stats;var G__33224__$1 = (((G__33224 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33224));var G__33224__$2 = (((G__33224__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33224__$1));return G__33224__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33214))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33214),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33214),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33219 = clustermap.formats.number.fnum.call(null,(function (){var G__33225 = self__.site_stats;var G__33225__$1 = (((G__33225 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33225));var G__33225__$2 = (((G__33225__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33225__$1));return G__33225__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33219))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33219),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33219),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33204){var self__ = this;
var _33204__$1 = this;return self__.meta33203;
});
clustermap.components.map_report.t33202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33204,meta33203__$1){var self__ = this;
var _33204__$1 = this;return (new clustermap.components.map_report.t33202(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33201,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33203__$1));
});
clustermap.components.map_report.__GT_t33202 = (function __GT_t33202(pc_count__$1,ic_count__$1,const_count__$1,map__33201__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33203){return (new clustermap.components.map_report.t33202(pc_count__$1,ic_count__$1,const_count__$1,map__33201__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33203));
});
}
return (new clustermap.components.map_report.t33202(pc_count,ic_count,const_count,map__33201__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33229 = cljs.core._EQ__EQ_;var expr__33230 = type;if(cljs.core.truth_(pred__33229.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33230)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33229.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33230)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33229.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33230)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
