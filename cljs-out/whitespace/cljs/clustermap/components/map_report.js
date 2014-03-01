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
goog.require('clustermap.components.reset_selection_button');
goog.require('domina.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__34057 = site_stats;var G__34057__$1 = (((G__34057 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__34057));return G__34057__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__34058 = site_stats;var G__34058__$1 = (((G__34058 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__34058));return G__34058__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__34059 = site_stats;var G__34059__$1 = (((G__34059 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__34059));return G__34059__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__34091 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__34091__$1 = ((cljs.core.seq_QMARK_.call(null,map__34091))?cljs.core.apply.call(null,cljs.core.hash_map,map__34091):map__34091);var const_count = cljs.core.get.call(null,map__34091__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__34091__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__34091__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t34092 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34092 = (function (pc_count,ic_count,const_count,map__34091,comm,site_stats,all_portfolio_companies_summary_report,meta34093){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34091 = map__34091;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34093 = meta34093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34092.cljs$lang$type = true;
clustermap.components.map_report.t34092.cljs$lang$ctorStr = "clustermap.components.map-report/t34092";
clustermap.components.map_report.t34092.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t34092");
});
clustermap.components.map_report.t34092.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34092.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34097 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34097))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34097),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34097),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs34102 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34102))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34102),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34102),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs34107 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34107))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34107),(function (){var attrs34108 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs34108))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34108),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34108));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34107),(function (){var attrs34109 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs34109))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34109),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34109));
}
})());
}
})(),(function (){var attrs34110 = clustermap.formats.money.fmoney.call(null,(function (){var G__34120 = self__.site_stats;var G__34120__$1 = (((G__34120 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__34120));var G__34120__$2 = (((G__34120__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__34120__$1));return G__34120__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34110))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34110),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34110),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34115 = clustermap.formats.number.fnum.call(null,(function (){var G__34121 = self__.site_stats;var G__34121__$1 = (((G__34121 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__34121));var G__34121__$2 = (((G__34121__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__34121__$1));return G__34121__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34115))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34115),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34115),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t34092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34094){var self__ = this;
var _34094__$1 = this;return self__.meta34093;
});
clustermap.components.map_report.t34092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34094,meta34093__$1){var self__ = this;
var _34094__$1 = this;return (new clustermap.components.map_report.t34092(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34091,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34093__$1));
});
clustermap.components.map_report.__GT_t34092 = (function __GT_t34092(pc_count__$1,ic_count__$1,const_count__$1,map__34091__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34093){return (new clustermap.components.map_report.t34092(pc_count__$1,ic_count__$1,const_count__$1,map__34091__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34093));
});
}
return (new clustermap.components.map_report.t34092(pc_count,ic_count,const_count,map__34091__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__34147 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__34147__$1 = ((cljs.core.seq_QMARK_.call(null,map__34147))?cljs.core.apply.call(null,cljs.core.hash_map,map__34147):map__34147);var const_count = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t34148 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34148 = (function (pc_count,ic_count,const_count,map__34147,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta34149){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34147 = map__34147;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta34149 = meta34149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34148.cljs$lang$type = true;
clustermap.components.map_report.t34148.cljs$lang$ctorStr = "clustermap.components.map-report/t34148";
clustermap.components.map_report.t34148.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t34148");
});
clustermap.components.map_report.t34148.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34148.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs34153 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs34153))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs34153),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs34153));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs34154 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs34154))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34154),(function (){var attrs34155 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs34155))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34155),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34155));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34154),(function (){var attrs34156 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs34156))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34156),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34156));
}
})());
}
})(),(function (){var attrs34157 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs34157))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34157),(function (){var attrs34158 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs34158))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34158),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34158));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34157),(function (){var attrs34159 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs34159))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34159),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34159));
}
})());
}
})(),(function (){var attrs34160 = clustermap.formats.money.fmoney.call(null,(function (){var G__34170 = self__.site_stats;var G__34170__$1 = (((G__34170 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__34170));var G__34170__$2 = (((G__34170__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__34170__$1));return G__34170__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34160))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34160),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34160),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34165 = clustermap.formats.number.fnum.call(null,(function (){var G__34171 = self__.site_stats;var G__34171__$1 = (((G__34171 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__34171));var G__34171__$2 = (((G__34171__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__34171__$1));return G__34171__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34165))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34165),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34165),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t34148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34150){var self__ = this;
var _34150__$1 = this;return self__.meta34149;
});
clustermap.components.map_report.t34148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34150,meta34149__$1){var self__ = this;
var _34150__$1 = this;return (new clustermap.components.map_report.t34148(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34147,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta34149__$1));
});
clustermap.components.map_report.__GT_t34148 = (function __GT_t34148(pc_count__$1,ic_count__$1,const_count__$1,map__34147__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34149){return (new clustermap.components.map_report.t34148(pc_count__$1,ic_count__$1,const_count__$1,map__34147__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34149));
});
}
return (new clustermap.components.map_report.t34148(pc_count,ic_count,const_count,map__34147__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__34197 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__34197__$1 = ((cljs.core.seq_QMARK_.call(null,map__34197))?cljs.core.apply.call(null,cljs.core.hash_map,map__34197):map__34197);var const_count = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t34198 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34198 = (function (pc_count,ic_count,const_count,map__34197,path_fn,comm,site_stats,investor_company,investor_company_report,meta34199){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34197 = map__34197;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta34199 = meta34199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34198.cljs$lang$type = true;
clustermap.components.map_report.t34198.cljs$lang$ctorStr = "clustermap.components.map-report/t34198";
clustermap.components.map_report.t34198.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t34198");
});
clustermap.components.map_report.t34198.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34198.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs34203 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs34203))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs34203),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs34203));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs34204 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs34204))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34204),(function (){var attrs34205 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs34205))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34205),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34205));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34204),(function (){var attrs34206 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs34206))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34206),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34206));
}
})());
}
})(),(function (){var attrs34207 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs34207))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34207),(function (){var attrs34208 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs34208))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34208),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34208));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34207),(function (){var attrs34209 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs34209))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34209),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34209));
}
})());
}
})(),(function (){var attrs34210 = clustermap.formats.money.fmoney.call(null,(function (){var G__34220 = self__.site_stats;var G__34220__$1 = (((G__34220 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__34220));var G__34220__$2 = (((G__34220__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__34220__$1));return G__34220__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34210))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34210),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34210),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34215 = clustermap.formats.number.fnum.call(null,(function (){var G__34221 = self__.site_stats;var G__34221__$1 = (((G__34221 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__34221));var G__34221__$2 = (((G__34221__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__34221__$1));return G__34221__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34215))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34215),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34215),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t34198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34200){var self__ = this;
var _34200__$1 = this;return self__.meta34199;
});
clustermap.components.map_report.t34198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34200,meta34199__$1){var self__ = this;
var _34200__$1 = this;return (new clustermap.components.map_report.t34198(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34197,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta34199__$1));
});
clustermap.components.map_report.__GT_t34198 = (function __GT_t34198(pc_count__$1,ic_count__$1,const_count__$1,map__34197__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34199){return (new clustermap.components.map_report.t34198(pc_count__$1,ic_count__$1,const_count__$1,map__34197__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34199));
});
}
return (new clustermap.components.map_report.t34198(pc_count,ic_count,const_count,map__34197__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__34251 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__34251__$1 = ((cljs.core.seq_QMARK_.call(null,map__34251))?cljs.core.apply.call(null,cljs.core.hash_map,map__34251):map__34251);var const_count = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t34252 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34252 = (function (pc_count,ic_count,const_count,map__34251,path_fn,comm,site_stats,constituency,constituency_report,meta34253){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34251 = map__34251;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta34253 = meta34253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34252.cljs$lang$type = true;
clustermap.components.map_report.t34252.cljs$lang$ctorStr = "clustermap.components.map-report/t34252";
clustermap.components.map_report.t34252.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t34252");
});
clustermap.components.map_report.t34252.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34252.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs34257 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs34257))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs34257),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs34257),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs34262 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs34262))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34262),(function (){var attrs34263 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs34263))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34263),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34263));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34262),(function (){var attrs34264 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs34264))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34264),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34264));
}
})());
}
})(),(function (){var attrs34265 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs34265))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34265),(function (){var attrs34266 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs34266))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34266),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34266));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34265),(function (){var attrs34267 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs34267))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs34267),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs34267));
}
})());
}
})(),(function (){var attrs34268 = clustermap.formats.money.fmoney.call(null,(function (){var G__34278 = self__.site_stats;var G__34278__$1 = (((G__34278 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__34278));var G__34278__$2 = (((G__34278__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__34278__$1));return G__34278__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34268))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34268),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34268),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34273 = clustermap.formats.number.fnum.call(null,(function (){var G__34279 = self__.site_stats;var G__34279__$1 = (((G__34279 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__34279));var G__34279__$2 = (((G__34279__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__34279__$1));return G__34279__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs34273))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs34273),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs34273),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t34252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34254){var self__ = this;
var _34254__$1 = this;return self__.meta34253;
});
clustermap.components.map_report.t34252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34254,meta34253__$1){var self__ = this;
var _34254__$1 = this;return (new clustermap.components.map_report.t34252(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34251,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta34253__$1));
});
clustermap.components.map_report.__GT_t34252 = (function __GT_t34252(pc_count__$1,ic_count__$1,const_count__$1,map__34251__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34253){return (new clustermap.components.map_report.t34252(pc_count__$1,ic_count__$1,const_count__$1,map__34251__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34253));
});
}
return (new clustermap.components.map_report.t34252(pc_count,ic_count,const_count,map__34251__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__34284 = om.core.get_shared.call(null,owner);var map__34284__$1 = ((cljs.core.seq_QMARK_.call(null,map__34284))?cljs.core.apply.call(null,cljs.core.hash_map,map__34284):map__34284);var path_fn = cljs.core.get.call(null,map__34284__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__34284__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__34285 = cljs.core._EQ__EQ_;var expr__34286 = type;if(cljs.core.truth_(pred__34285.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__34286)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__34285.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__34286)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__34285.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__34286)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
