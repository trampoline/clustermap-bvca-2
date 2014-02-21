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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12133 = site_stats;var G__12133__$1 = (((G__12133 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12133));return G__12133__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12134 = site_stats;var G__12134__$1 = (((G__12134 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12134));return G__12134__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12135 = site_stats;var G__12135__$1 = (((G__12135 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12135));return G__12135__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12167 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12167__$1 = ((cljs.core.seq_QMARK_.call(null,map__12167))?cljs.core.apply.call(null,cljs.core.hash_map,map__12167):map__12167);var const_count = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12168 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12168 = (function (pc_count,ic_count,const_count,map__12167,comm,site_stats,all_portfolio_companies_summary_report,meta12169){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12167 = map__12167;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12169 = meta12169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12168.cljs$lang$type = true;
clustermap.components.map_report.t12168.cljs$lang$ctorStr = "clustermap.components.map-report/t12168";
clustermap.components.map_report.t12168.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12168");
});
clustermap.components.map_report.t12168.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12168.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12173 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12173))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12173),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12173),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12178 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12178))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12178),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12178),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12183 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12183))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12183),(function (){var attrs12184 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12184))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12184),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12184));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12183),(function (){var attrs12185 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12185))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12185),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12185));
}
})());
}
})(),(function (){var attrs12186 = clustermap.formats.money.fmoney.call(null,(function (){var G__12196 = self__.site_stats;var G__12196__$1 = (((G__12196 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12196));var G__12196__$2 = (((G__12196__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12196__$1));return G__12196__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12186))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12186),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12186),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12191 = clustermap.formats.number.fnum.call(null,(function (){var G__12197 = self__.site_stats;var G__12197__$1 = (((G__12197 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12197));var G__12197__$2 = (((G__12197__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12197__$1));return G__12197__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12191))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12191),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12191),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12170){var self__ = this;
var _12170__$1 = this;return self__.meta12169;
});
clustermap.components.map_report.t12168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12170,meta12169__$1){var self__ = this;
var _12170__$1 = this;return (new clustermap.components.map_report.t12168(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12167,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12169__$1));
});
clustermap.components.map_report.__GT_t12168 = (function __GT_t12168(pc_count__$1,ic_count__$1,const_count__$1,map__12167__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12169){return (new clustermap.components.map_report.t12168(pc_count__$1,ic_count__$1,const_count__$1,map__12167__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12169));
});
}
return (new clustermap.components.map_report.t12168(pc_count,ic_count,const_count,map__12167__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12223 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12223__$1 = ((cljs.core.seq_QMARK_.call(null,map__12223))?cljs.core.apply.call(null,cljs.core.hash_map,map__12223):map__12223);var const_count = cljs.core.get.call(null,map__12223__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12223__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12223__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12224 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12224 = (function (pc_count,ic_count,const_count,map__12223,comm,site_stats,portfolio_company,portfolio_company_report,meta12225){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12223 = map__12223;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12225 = meta12225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12224.cljs$lang$type = true;
clustermap.components.map_report.t12224.cljs$lang$ctorStr = "clustermap.components.map-report/t12224";
clustermap.components.map_report.t12224.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12224");
});
clustermap.components.map_report.t12224.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12224.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12229 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12229))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12229),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12229));
}
})()),React.DOM.ul(null,(function (){var attrs12230 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12230))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12230),(function (){var attrs12231 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12231))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12231),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12231));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12230),(function (){var attrs12232 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12232))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12232),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12232));
}
})());
}
})(),(function (){var attrs12233 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12233))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12233),(function (){var attrs12234 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12234))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12234),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12234));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12233),(function (){var attrs12235 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12235))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12235),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12235));
}
})());
}
})(),(function (){var attrs12236 = clustermap.formats.money.fmoney.call(null,(function (){var G__12246 = self__.site_stats;var G__12246__$1 = (((G__12246 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12246));var G__12246__$2 = (((G__12246__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12246__$1));return G__12246__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12236))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12236),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12236),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12241 = clustermap.formats.number.fnum.call(null,(function (){var G__12247 = self__.site_stats;var G__12247__$1 = (((G__12247 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12247));var G__12247__$2 = (((G__12247__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12247__$1));return G__12247__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12241))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12241),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12241),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12226){var self__ = this;
var _12226__$1 = this;return self__.meta12225;
});
clustermap.components.map_report.t12224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12226,meta12225__$1){var self__ = this;
var _12226__$1 = this;return (new clustermap.components.map_report.t12224(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12223,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12225__$1));
});
clustermap.components.map_report.__GT_t12224 = (function __GT_t12224(pc_count__$1,ic_count__$1,const_count__$1,map__12223__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12225){return (new clustermap.components.map_report.t12224(pc_count__$1,ic_count__$1,const_count__$1,map__12223__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12225));
});
}
return (new clustermap.components.map_report.t12224(pc_count,ic_count,const_count,map__12223__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12273 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12273__$1 = ((cljs.core.seq_QMARK_.call(null,map__12273))?cljs.core.apply.call(null,cljs.core.hash_map,map__12273):map__12273);var const_count = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12274 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12274 = (function (pc_count,ic_count,const_count,map__12273,comm,site_stats,investor_company,investor_company_report,meta12275){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12273 = map__12273;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12275 = meta12275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12274.cljs$lang$type = true;
clustermap.components.map_report.t12274.cljs$lang$ctorStr = "clustermap.components.map-report/t12274";
clustermap.components.map_report.t12274.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12274");
});
clustermap.components.map_report.t12274.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12274.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12279 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12279))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12279),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12279));
}
})()),React.DOM.ul(null,(function (){var attrs12280 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12280))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12280),(function (){var attrs12281 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12281))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12281),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12281));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12280),(function (){var attrs12282 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12282))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12282),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12282));
}
})());
}
})(),(function (){var attrs12283 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12283))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12283),(function (){var attrs12284 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12284))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12284),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12284));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12283),(function (){var attrs12285 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12285))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12285),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12285));
}
})());
}
})(),(function (){var attrs12286 = clustermap.formats.money.fmoney.call(null,(function (){var G__12296 = self__.site_stats;var G__12296__$1 = (((G__12296 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12296));var G__12296__$2 = (((G__12296__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12296__$1));return G__12296__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12286))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12286),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12286),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12291 = clustermap.formats.number.fnum.call(null,(function (){var G__12297 = self__.site_stats;var G__12297__$1 = (((G__12297 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12297));var G__12297__$2 = (((G__12297__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12297__$1));return G__12297__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12291))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12291),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12291),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12276){var self__ = this;
var _12276__$1 = this;return self__.meta12275;
});
clustermap.components.map_report.t12274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12276,meta12275__$1){var self__ = this;
var _12276__$1 = this;return (new clustermap.components.map_report.t12274(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12273,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12275__$1));
});
clustermap.components.map_report.__GT_t12274 = (function __GT_t12274(pc_count__$1,ic_count__$1,const_count__$1,map__12273__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12275){return (new clustermap.components.map_report.t12274(pc_count__$1,ic_count__$1,const_count__$1,map__12273__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12275));
});
}
return (new clustermap.components.map_report.t12274(pc_count,ic_count,const_count,map__12273__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12323 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12323__$1 = ((cljs.core.seq_QMARK_.call(null,map__12323))?cljs.core.apply.call(null,cljs.core.hash_map,map__12323):map__12323);var const_count = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12324 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12324 = (function (pc_count,ic_count,const_count,map__12323,comm,site_stats,constituency,constituency_report,meta12325){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12323 = map__12323;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12325 = meta12325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12324.cljs$lang$type = true;
clustermap.components.map_report.t12324.cljs$lang$ctorStr = "clustermap.components.map-report/t12324";
clustermap.components.map_report.t12324.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12324");
});
clustermap.components.map_report.t12324.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12324.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12329 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12329))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12329),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12329),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12330 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12330))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12330),(function (){var attrs12331 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12331))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12331),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12331));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12330),(function (){var attrs12332 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12332))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12332),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12332));
}
})());
}
})(),(function (){var attrs12333 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12333))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12333),(function (){var attrs12334 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12334))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12334),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12334));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12333),(function (){var attrs12335 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12335))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12335),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12335));
}
})());
}
})(),(function (){var attrs12336 = clustermap.formats.money.fmoney.call(null,(function (){var G__12346 = self__.site_stats;var G__12346__$1 = (((G__12346 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12346));var G__12346__$2 = (((G__12346__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12346__$1));return G__12346__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12336))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12336),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12336),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12341 = clustermap.formats.number.fnum.call(null,(function (){var G__12347 = self__.site_stats;var G__12347__$1 = (((G__12347 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12347));var G__12347__$2 = (((G__12347__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12347__$1));return G__12347__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12341))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12341),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12341),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12326){var self__ = this;
var _12326__$1 = this;return self__.meta12325;
});
clustermap.components.map_report.t12324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12326,meta12325__$1){var self__ = this;
var _12326__$1 = this;return (new clustermap.components.map_report.t12324(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12323,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12325__$1));
});
clustermap.components.map_report.__GT_t12324 = (function __GT_t12324(pc_count__$1,ic_count__$1,const_count__$1,map__12323__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12325){return (new clustermap.components.map_report.t12324(pc_count__$1,ic_count__$1,const_count__$1,map__12323__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12325));
});
}
return (new clustermap.components.map_report.t12324(pc_count,ic_count,const_count,map__12323__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__12351 = cljs.core._EQ__EQ_;var expr__12352 = type;if(cljs.core.truth_(pred__12351.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12352)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12351.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12352)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12351.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12352)))
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