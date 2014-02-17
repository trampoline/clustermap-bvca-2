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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__33006 = site_stats;var G__33006__$1 = (((G__33006 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__33006));return G__33006__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__33007 = site_stats;var G__33007__$1 = (((G__33007 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__33007));return G__33007__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__33008 = site_stats;var G__33008__$1 = (((G__33008 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__33008));return G__33008__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__33040 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33040__$1 = ((cljs.core.seq_QMARK_.call(null,map__33040))?cljs.core.apply.call(null,cljs.core.hash_map,map__33040):map__33040);var const_count = cljs.core.get.call(null,map__33040__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33040__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33040__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33041 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33041 = (function (pc_count,ic_count,const_count,map__33040,comm,site_stats,all_portfolio_companies_summary_report,meta33042){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33040 = map__33040;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta33042 = meta33042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33041.cljs$lang$type = true;
clustermap.components.map_report.t33041.cljs$lang$ctorStr = "clustermap.components.map-report/t33041";
clustermap.components.map_report.t33041.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33041");
});
clustermap.components.map_report.t33041.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33041.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs33046 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33046))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33046),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33046),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs33051 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33051))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33051),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33051),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs33056 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33056))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33056),(function (){var attrs33057 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33057))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33057),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33057));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33056),(function (){var attrs33058 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33058))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33058),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33058));
}
})());
}
})(),(function (){var attrs33059 = clustermap.formats.money.fmoney.call(null,(function (){var G__33069 = self__.site_stats;var G__33069__$1 = (((G__33069 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33069));var G__33069__$2 = (((G__33069__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33069__$1));return G__33069__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33059))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33059),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33059),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33064 = clustermap.formats.number.fnum.call(null,(function (){var G__33070 = self__.site_stats;var G__33070__$1 = (((G__33070 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33070));var G__33070__$2 = (((G__33070__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33070__$1));return G__33070__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33064))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33064),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33064),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33043){var self__ = this;
var _33043__$1 = this;return self__.meta33042;
});
clustermap.components.map_report.t33041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33043,meta33042__$1){var self__ = this;
var _33043__$1 = this;return (new clustermap.components.map_report.t33041(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33040,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta33042__$1));
});
clustermap.components.map_report.__GT_t33041 = (function __GT_t33041(pc_count__$1,ic_count__$1,const_count__$1,map__33040__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33042){return (new clustermap.components.map_report.t33041(pc_count__$1,ic_count__$1,const_count__$1,map__33040__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta33042));
});
}
return (new clustermap.components.map_report.t33041(pc_count,ic_count,const_count,map__33040__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33096 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33096__$1 = ((cljs.core.seq_QMARK_.call(null,map__33096))?cljs.core.apply.call(null,cljs.core.hash_map,map__33096):map__33096);var const_count = cljs.core.get.call(null,map__33096__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33096__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33096__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33097 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33097 = (function (pc_count,ic_count,const_count,map__33096,comm,site_stats,portfolio_company,portfolio_company_report,meta33098){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33096 = map__33096;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33098 = meta33098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33097.cljs$lang$type = true;
clustermap.components.map_report.t33097.cljs$lang$ctorStr = "clustermap.components.map-report/t33097";
clustermap.components.map_report.t33097.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33097");
});
clustermap.components.map_report.t33097.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33097.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs33102 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33102))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33102),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33102));
}
})()),React.DOM.ul(null,(function (){var attrs33103 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33103))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33103),(function (){var attrs33104 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33104))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33104),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33104));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33103),(function (){var attrs33105 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33105))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33105),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33105));
}
})());
}
})(),(function (){var attrs33106 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33106))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33106),(function (){var attrs33107 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33107))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33107),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33107));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33106),(function (){var attrs33108 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33108))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33108),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33108));
}
})());
}
})(),(function (){var attrs33109 = clustermap.formats.money.fmoney.call(null,(function (){var G__33119 = self__.site_stats;var G__33119__$1 = (((G__33119 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33119));var G__33119__$2 = (((G__33119__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33119__$1));return G__33119__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33109))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33109),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33109),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33114 = clustermap.formats.number.fnum.call(null,(function (){var G__33120 = self__.site_stats;var G__33120__$1 = (((G__33120 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33120));var G__33120__$2 = (((G__33120__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33120__$1));return G__33120__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33114))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33114),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33114),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33099){var self__ = this;
var _33099__$1 = this;return self__.meta33098;
});
clustermap.components.map_report.t33097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33099,meta33098__$1){var self__ = this;
var _33099__$1 = this;return (new clustermap.components.map_report.t33097(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33096,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33098__$1));
});
clustermap.components.map_report.__GT_t33097 = (function __GT_t33097(pc_count__$1,ic_count__$1,const_count__$1,map__33096__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33098){return (new clustermap.components.map_report.t33097(pc_count__$1,ic_count__$1,const_count__$1,map__33096__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33098));
});
}
return (new clustermap.components.map_report.t33097(pc_count,ic_count,const_count,map__33096__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33146 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33146__$1 = ((cljs.core.seq_QMARK_.call(null,map__33146))?cljs.core.apply.call(null,cljs.core.hash_map,map__33146):map__33146);var const_count = cljs.core.get.call(null,map__33146__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33146__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33146__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33147 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33147 = (function (pc_count,ic_count,const_count,map__33146,comm,site_stats,investor_company,investor_company_report,meta33148){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33146 = map__33146;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33148 = meta33148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33147.cljs$lang$type = true;
clustermap.components.map_report.t33147.cljs$lang$ctorStr = "clustermap.components.map-report/t33147";
clustermap.components.map_report.t33147.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33147");
});
clustermap.components.map_report.t33147.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33147.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs33152 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33152))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33152),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33152));
}
})()),React.DOM.ul(null,(function (){var attrs33153 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33153))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33153),(function (){var attrs33154 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33154))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33154),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33154));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33153),(function (){var attrs33155 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33155))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33155),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33155));
}
})());
}
})(),(function (){var attrs33156 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33156))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33156),(function (){var attrs33157 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33157))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33157),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33157));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33156),(function (){var attrs33158 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33158))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33158),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33158));
}
})());
}
})(),(function (){var attrs33159 = clustermap.formats.money.fmoney.call(null,(function (){var G__33169 = self__.site_stats;var G__33169__$1 = (((G__33169 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33169));var G__33169__$2 = (((G__33169__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33169__$1));return G__33169__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33159))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33159),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33159),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33164 = clustermap.formats.number.fnum.call(null,(function (){var G__33170 = self__.site_stats;var G__33170__$1 = (((G__33170 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33170));var G__33170__$2 = (((G__33170__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33170__$1));return G__33170__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33164))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33164),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33164),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33149){var self__ = this;
var _33149__$1 = this;return self__.meta33148;
});
clustermap.components.map_report.t33147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33149,meta33148__$1){var self__ = this;
var _33149__$1 = this;return (new clustermap.components.map_report.t33147(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33146,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33148__$1));
});
clustermap.components.map_report.__GT_t33147 = (function __GT_t33147(pc_count__$1,ic_count__$1,const_count__$1,map__33146__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33148){return (new clustermap.components.map_report.t33147(pc_count__$1,ic_count__$1,const_count__$1,map__33146__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33148));
});
}
return (new clustermap.components.map_report.t33147(pc_count,ic_count,const_count,map__33146__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33196 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33196__$1 = ((cljs.core.seq_QMARK_.call(null,map__33196))?cljs.core.apply.call(null,cljs.core.hash_map,map__33196):map__33196);var const_count = cljs.core.get.call(null,map__33196__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33196__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33196__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33197 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33197 = (function (pc_count,ic_count,const_count,map__33196,comm,site_stats,constituency,constituency_report,meta33198){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33196 = map__33196;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33198 = meta33198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33197.cljs$lang$type = true;
clustermap.components.map_report.t33197.cljs$lang$ctorStr = "clustermap.components.map-report/t33197";
clustermap.components.map_report.t33197.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33197");
});
clustermap.components.map_report.t33197.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33197.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs33202 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33202))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33202),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33202),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33203 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33203))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33203),(function (){var attrs33204 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33204))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33204),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33204));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33203),(function (){var attrs33205 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33205))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33205),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33205));
}
})());
}
})(),(function (){var attrs33206 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33206))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33206),(function (){var attrs33207 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33207))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33207),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33207));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33206),(function (){var attrs33208 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33208))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33208),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33208));
}
})());
}
})(),(function (){var attrs33209 = clustermap.formats.money.fmoney.call(null,(function (){var G__33219 = self__.site_stats;var G__33219__$1 = (((G__33219 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33219));var G__33219__$2 = (((G__33219__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33219__$1));return G__33219__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33209))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33209),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33209),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33214 = clustermap.formats.number.fnum.call(null,(function (){var G__33220 = self__.site_stats;var G__33220__$1 = (((G__33220 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33220));var G__33220__$2 = (((G__33220__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33220__$1));return G__33220__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33214))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33214),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33214),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33199){var self__ = this;
var _33199__$1 = this;return self__.meta33198;
});
clustermap.components.map_report.t33197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33199,meta33198__$1){var self__ = this;
var _33199__$1 = this;return (new clustermap.components.map_report.t33197(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33196,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33198__$1));
});
clustermap.components.map_report.__GT_t33197 = (function __GT_t33197(pc_count__$1,ic_count__$1,const_count__$1,map__33196__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33198){return (new clustermap.components.map_report.t33197(pc_count__$1,ic_count__$1,const_count__$1,map__33196__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33198));
});
}
return (new clustermap.components.map_report.t33197(pc_count,ic_count,const_count,map__33196__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33224 = cljs.core._EQ__EQ_;var expr__33225 = type;if(cljs.core.truth_(pred__33224.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33225)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33224.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33225)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33224.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33225)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
