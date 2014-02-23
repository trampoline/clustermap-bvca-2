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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12142 = site_stats;var G__12142__$1 = (((G__12142 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12142));return G__12142__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12143 = site_stats;var G__12143__$1 = (((G__12143 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12143));return G__12143__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12144 = site_stats;var G__12144__$1 = (((G__12144 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12144));return G__12144__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12176 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12176__$1 = ((cljs.core.seq_QMARK_.call(null,map__12176))?cljs.core.apply.call(null,cljs.core.hash_map,map__12176):map__12176);var const_count = cljs.core.get.call(null,map__12176__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12176__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12176__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12177 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12177 = (function (pc_count,ic_count,const_count,map__12176,comm,site_stats,all_portfolio_companies_summary_report,meta12178){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12176 = map__12176;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12178 = meta12178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12177.cljs$lang$type = true;
clustermap.components.map_report.t12177.cljs$lang$ctorStr = "clustermap.components.map-report/t12177";
clustermap.components.map_report.t12177.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12177");
});
clustermap.components.map_report.t12177.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12177.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12182 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12182))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12182),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12182),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12187 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12187))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12187),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12187),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12192 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12192))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12192),(function (){var attrs12193 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12193))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12193),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12193));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12192),(function (){var attrs12194 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12194))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12194),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12194));
}
})());
}
})(),(function (){var attrs12195 = clustermap.formats.money.fmoney.call(null,(function (){var G__12205 = self__.site_stats;var G__12205__$1 = (((G__12205 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12205));var G__12205__$2 = (((G__12205__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12205__$1));return G__12205__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12195))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12195),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12195),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12200 = clustermap.formats.number.fnum.call(null,(function (){var G__12206 = self__.site_stats;var G__12206__$1 = (((G__12206 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12206));var G__12206__$2 = (((G__12206__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12206__$1));return G__12206__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12200))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12200),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12200),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12179){var self__ = this;
var _12179__$1 = this;return self__.meta12178;
});
clustermap.components.map_report.t12177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12179,meta12178__$1){var self__ = this;
var _12179__$1 = this;return (new clustermap.components.map_report.t12177(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12176,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12178__$1));
});
clustermap.components.map_report.__GT_t12177 = (function __GT_t12177(pc_count__$1,ic_count__$1,const_count__$1,map__12176__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12178){return (new clustermap.components.map_report.t12177(pc_count__$1,ic_count__$1,const_count__$1,map__12176__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12178));
});
}
return (new clustermap.components.map_report.t12177(pc_count,ic_count,const_count,map__12176__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12232 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12232__$1 = ((cljs.core.seq_QMARK_.call(null,map__12232))?cljs.core.apply.call(null,cljs.core.hash_map,map__12232):map__12232);var const_count = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12233 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12233 = (function (pc_count,ic_count,const_count,map__12232,comm,site_stats,portfolio_company,portfolio_company_report,meta12234){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12232 = map__12232;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12234 = meta12234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12233.cljs$lang$type = true;
clustermap.components.map_report.t12233.cljs$lang$ctorStr = "clustermap.components.map-report/t12233";
clustermap.components.map_report.t12233.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12233");
});
clustermap.components.map_report.t12233.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12233.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12238 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12238))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12238),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12238));
}
})()),React.DOM.ul(null,(function (){var attrs12239 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12239))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12239),(function (){var attrs12240 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12240))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12240),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12240));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12239),(function (){var attrs12241 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12241))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12241),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12241));
}
})());
}
})(),(function (){var attrs12242 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12242))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12242),(function (){var attrs12243 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12243))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12243),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12243));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12242),(function (){var attrs12244 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12244))
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
clustermap.components.map_report.t12233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12235){var self__ = this;
var _12235__$1 = this;return self__.meta12234;
});
clustermap.components.map_report.t12233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12235,meta12234__$1){var self__ = this;
var _12235__$1 = this;return (new clustermap.components.map_report.t12233(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12232,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12234__$1));
});
clustermap.components.map_report.__GT_t12233 = (function __GT_t12233(pc_count__$1,ic_count__$1,const_count__$1,map__12232__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12234){return (new clustermap.components.map_report.t12233(pc_count__$1,ic_count__$1,const_count__$1,map__12232__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12234));
});
}
return (new clustermap.components.map_report.t12233(pc_count,ic_count,const_count,map__12232__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12282 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12282__$1 = ((cljs.core.seq_QMARK_.call(null,map__12282))?cljs.core.apply.call(null,cljs.core.hash_map,map__12282):map__12282);var const_count = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12283 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12283 = (function (pc_count,ic_count,const_count,map__12282,comm,site_stats,investor_company,investor_company_report,meta12284){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12282 = map__12282;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12284 = meta12284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12283.cljs$lang$type = true;
clustermap.components.map_report.t12283.cljs$lang$ctorStr = "clustermap.components.map-report/t12283";
clustermap.components.map_report.t12283.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12283");
});
clustermap.components.map_report.t12283.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12283.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12288 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12288))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12288),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12288));
}
})()),React.DOM.ul(null,(function (){var attrs12289 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12289))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12289),(function (){var attrs12290 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12290))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12290),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12290));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12289),(function (){var attrs12291 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12291))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12291),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12291));
}
})());
}
})(),(function (){var attrs12292 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12292))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12292),(function (){var attrs12293 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12293))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12293),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12293));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12292),(function (){var attrs12294 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12294))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12294),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12294));
}
})());
}
})(),(function (){var attrs12295 = clustermap.formats.money.fmoney.call(null,(function (){var G__12305 = self__.site_stats;var G__12305__$1 = (((G__12305 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12305));var G__12305__$2 = (((G__12305__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12305__$1));return G__12305__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12295))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12295),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12295),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12300 = clustermap.formats.number.fnum.call(null,(function (){var G__12306 = self__.site_stats;var G__12306__$1 = (((G__12306 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12306));var G__12306__$2 = (((G__12306__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12306__$1));return G__12306__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12300))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12300),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12300),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12285){var self__ = this;
var _12285__$1 = this;return self__.meta12284;
});
clustermap.components.map_report.t12283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12285,meta12284__$1){var self__ = this;
var _12285__$1 = this;return (new clustermap.components.map_report.t12283(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12282,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12284__$1));
});
clustermap.components.map_report.__GT_t12283 = (function __GT_t12283(pc_count__$1,ic_count__$1,const_count__$1,map__12282__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12284){return (new clustermap.components.map_report.t12283(pc_count__$1,ic_count__$1,const_count__$1,map__12282__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12284));
});
}
return (new clustermap.components.map_report.t12283(pc_count,ic_count,const_count,map__12282__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12336 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12336__$1 = ((cljs.core.seq_QMARK_.call(null,map__12336))?cljs.core.apply.call(null,cljs.core.hash_map,map__12336):map__12336);var const_count = cljs.core.get.call(null,map__12336__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12336__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12336__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12337 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12337 = (function (pc_count,ic_count,const_count,map__12336,comm,site_stats,constituency,constituency_report,meta12338){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12336 = map__12336;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12338 = meta12338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12337.cljs$lang$type = true;
clustermap.components.map_report.t12337.cljs$lang$ctorStr = "clustermap.components.map-report/t12337";
clustermap.components.map_report.t12337.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12337");
});
clustermap.components.map_report.t12337.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12337.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12342 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12342))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12342),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12342),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12347 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12347))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12347),(function (){var attrs12348 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12348))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12348),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12348));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12347),(function (){var attrs12349 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12349))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12349),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12349));
}
})());
}
})(),(function (){var attrs12350 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12350))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12350),(function (){var attrs12351 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12351))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12351),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12351));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12350),(function (){var attrs12352 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12352))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12352),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12352));
}
})());
}
})(),(function (){var attrs12353 = clustermap.formats.money.fmoney.call(null,(function (){var G__12363 = self__.site_stats;var G__12363__$1 = (((G__12363 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12363));var G__12363__$2 = (((G__12363__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12363__$1));return G__12363__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12353))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12353),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12353),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12358 = clustermap.formats.number.fnum.call(null,(function (){var G__12364 = self__.site_stats;var G__12364__$1 = (((G__12364 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12364));var G__12364__$2 = (((G__12364__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12364__$1));return G__12364__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12358))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12358),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12358),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12339){var self__ = this;
var _12339__$1 = this;return self__.meta12338;
});
clustermap.components.map_report.t12337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12339,meta12338__$1){var self__ = this;
var _12339__$1 = this;return (new clustermap.components.map_report.t12337(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12336,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12338__$1));
});
clustermap.components.map_report.__GT_t12337 = (function __GT_t12337(pc_count__$1,ic_count__$1,const_count__$1,map__12336__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12338){return (new clustermap.components.map_report.t12337(pc_count__$1,ic_count__$1,const_count__$1,map__12336__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12338));
});
}
return (new clustermap.components.map_report.t12337(pc_count,ic_count,const_count,map__12336__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__12368 = cljs.core._EQ__EQ_;var expr__12369 = type;if(cljs.core.truth_(pred__12368.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12369)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12368.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12369)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12368.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12369)))
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