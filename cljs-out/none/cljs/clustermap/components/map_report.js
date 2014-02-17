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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12065 = site_stats;var G__12065__$1 = (((G__12065 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12065));return G__12065__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12066 = site_stats;var G__12066__$1 = (((G__12066 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12066));return G__12066__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12067 = site_stats;var G__12067__$1 = (((G__12067 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12067));return G__12067__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12099 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12099__$1 = ((cljs.core.seq_QMARK_.call(null,map__12099))?cljs.core.apply.call(null,cljs.core.hash_map,map__12099):map__12099);var const_count = cljs.core.get.call(null,map__12099__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12099__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12099__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12100 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12100 = (function (pc_count,ic_count,const_count,map__12099,comm,site_stats,all_portfolio_companies_summary_report,meta12101){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12099 = map__12099;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12101 = meta12101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12100.cljs$lang$type = true;
clustermap.components.map_report.t12100.cljs$lang$ctorStr = "clustermap.components.map-report/t12100";
clustermap.components.map_report.t12100.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12100");
});
clustermap.components.map_report.t12100.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12100.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12105 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12105))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12105),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12105),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12110 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12110))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12110),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12110),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12115 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12115))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12115),(function (){var attrs12116 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12116))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12116),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12116));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12115),(function (){var attrs12117 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12117))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12117),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12117));
}
})());
}
})(),(function (){var attrs12118 = clustermap.formats.money.fmoney.call(null,(function (){var G__12128 = self__.site_stats;var G__12128__$1 = (((G__12128 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12128));var G__12128__$2 = (((G__12128__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12128__$1));return G__12128__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12118))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12118),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12118),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12123 = clustermap.formats.number.fnum.call(null,(function (){var G__12129 = self__.site_stats;var G__12129__$1 = (((G__12129 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12129));var G__12129__$2 = (((G__12129__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12129__$1));return G__12129__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12123))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12123),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12123),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12102){var self__ = this;
var _12102__$1 = this;return self__.meta12101;
});
clustermap.components.map_report.t12100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12102,meta12101__$1){var self__ = this;
var _12102__$1 = this;return (new clustermap.components.map_report.t12100(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12099,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12101__$1));
});
clustermap.components.map_report.__GT_t12100 = (function __GT_t12100(pc_count__$1,ic_count__$1,const_count__$1,map__12099__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12101){return (new clustermap.components.map_report.t12100(pc_count__$1,ic_count__$1,const_count__$1,map__12099__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12101));
});
}
return (new clustermap.components.map_report.t12100(pc_count,ic_count,const_count,map__12099__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12155 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12155__$1 = ((cljs.core.seq_QMARK_.call(null,map__12155))?cljs.core.apply.call(null,cljs.core.hash_map,map__12155):map__12155);var const_count = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12156 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12156 = (function (pc_count,ic_count,const_count,map__12155,comm,site_stats,portfolio_company,portfolio_company_report,meta12157){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12155 = map__12155;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12157 = meta12157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12156.cljs$lang$type = true;
clustermap.components.map_report.t12156.cljs$lang$ctorStr = "clustermap.components.map-report/t12156";
clustermap.components.map_report.t12156.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12156");
});
clustermap.components.map_report.t12156.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12156.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12161 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12161))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12161),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12161));
}
})()),React.DOM.ul(null,(function (){var attrs12162 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12162))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12162),(function (){var attrs12163 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12163))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12163),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12163));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12162),(function (){var attrs12164 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12164))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12164),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12164));
}
})());
}
})(),(function (){var attrs12165 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12165))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12165),(function (){var attrs12166 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12166))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12166),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12166));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12165),(function (){var attrs12167 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12167))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12167),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12167));
}
})());
}
})(),(function (){var attrs12168 = clustermap.formats.money.fmoney.call(null,(function (){var G__12178 = self__.site_stats;var G__12178__$1 = (((G__12178 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12178));var G__12178__$2 = (((G__12178__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12178__$1));return G__12178__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12168))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12168),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12168),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12173 = clustermap.formats.number.fnum.call(null,(function (){var G__12179 = self__.site_stats;var G__12179__$1 = (((G__12179 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12179));var G__12179__$2 = (((G__12179__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12179__$1));return G__12179__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12173))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12173),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12173),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12158){var self__ = this;
var _12158__$1 = this;return self__.meta12157;
});
clustermap.components.map_report.t12156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12158,meta12157__$1){var self__ = this;
var _12158__$1 = this;return (new clustermap.components.map_report.t12156(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12155,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12157__$1));
});
clustermap.components.map_report.__GT_t12156 = (function __GT_t12156(pc_count__$1,ic_count__$1,const_count__$1,map__12155__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12157){return (new clustermap.components.map_report.t12156(pc_count__$1,ic_count__$1,const_count__$1,map__12155__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12157));
});
}
return (new clustermap.components.map_report.t12156(pc_count,ic_count,const_count,map__12155__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12205 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12205__$1 = ((cljs.core.seq_QMARK_.call(null,map__12205))?cljs.core.apply.call(null,cljs.core.hash_map,map__12205):map__12205);var const_count = cljs.core.get.call(null,map__12205__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12205__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12205__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12206 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12206 = (function (pc_count,ic_count,const_count,map__12205,comm,site_stats,investor_company,investor_company_report,meta12207){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12205 = map__12205;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12207 = meta12207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12206.cljs$lang$type = true;
clustermap.components.map_report.t12206.cljs$lang$ctorStr = "clustermap.components.map-report/t12206";
clustermap.components.map_report.t12206.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12206");
});
clustermap.components.map_report.t12206.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12206.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12211 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12211))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12211),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12211));
}
})()),React.DOM.ul(null,(function (){var attrs12212 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12212))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12212),(function (){var attrs12213 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12213))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12213),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12213));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12212),(function (){var attrs12214 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12214))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12214),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12214));
}
})());
}
})(),(function (){var attrs12215 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12215))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12215),(function (){var attrs12216 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12216))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12216),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12216));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12215),(function (){var attrs12217 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12217))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12217),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12217));
}
})());
}
})(),(function (){var attrs12218 = clustermap.formats.money.fmoney.call(null,(function (){var G__12228 = self__.site_stats;var G__12228__$1 = (((G__12228 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12228));var G__12228__$2 = (((G__12228__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12228__$1));return G__12228__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12218))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12218),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12218),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12223 = clustermap.formats.number.fnum.call(null,(function (){var G__12229 = self__.site_stats;var G__12229__$1 = (((G__12229 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12229));var G__12229__$2 = (((G__12229__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12229__$1));return G__12229__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12223))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12223),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12223),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12208){var self__ = this;
var _12208__$1 = this;return self__.meta12207;
});
clustermap.components.map_report.t12206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12208,meta12207__$1){var self__ = this;
var _12208__$1 = this;return (new clustermap.components.map_report.t12206(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12205,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12207__$1));
});
clustermap.components.map_report.__GT_t12206 = (function __GT_t12206(pc_count__$1,ic_count__$1,const_count__$1,map__12205__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12207){return (new clustermap.components.map_report.t12206(pc_count__$1,ic_count__$1,const_count__$1,map__12205__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12207));
});
}
return (new clustermap.components.map_report.t12206(pc_count,ic_count,const_count,map__12205__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12255 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12255__$1 = ((cljs.core.seq_QMARK_.call(null,map__12255))?cljs.core.apply.call(null,cljs.core.hash_map,map__12255):map__12255);var const_count = cljs.core.get.call(null,map__12255__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12255__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12255__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12256 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12256 = (function (pc_count,ic_count,const_count,map__12255,comm,site_stats,constituency,constituency_report,meta12257){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12255 = map__12255;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12257 = meta12257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12256.cljs$lang$type = true;
clustermap.components.map_report.t12256.cljs$lang$ctorStr = "clustermap.components.map-report/t12256";
clustermap.components.map_report.t12256.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12256");
});
clustermap.components.map_report.t12256.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12256.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12261 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12261))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12261),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12261),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12262 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12262))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12262),(function (){var attrs12263 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12263))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12263),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12263));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12262),(function (){var attrs12264 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12264))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12264),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12264));
}
})());
}
})(),(function (){var attrs12265 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12265))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12265),(function (){var attrs12266 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12266))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12266),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12266));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12265),(function (){var attrs12267 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12267))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12267),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12267));
}
})());
}
})(),(function (){var attrs12268 = clustermap.formats.money.fmoney.call(null,(function (){var G__12278 = self__.site_stats;var G__12278__$1 = (((G__12278 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12278));var G__12278__$2 = (((G__12278__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12278__$1));return G__12278__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12268))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12268),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12268),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12273 = clustermap.formats.number.fnum.call(null,(function (){var G__12279 = self__.site_stats;var G__12279__$1 = (((G__12279 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12279));var G__12279__$2 = (((G__12279__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12279__$1));return G__12279__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12273))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12273),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12273),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12258){var self__ = this;
var _12258__$1 = this;return self__.meta12257;
});
clustermap.components.map_report.t12256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12258,meta12257__$1){var self__ = this;
var _12258__$1 = this;return (new clustermap.components.map_report.t12256(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12255,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12257__$1));
});
clustermap.components.map_report.__GT_t12256 = (function __GT_t12256(pc_count__$1,ic_count__$1,const_count__$1,map__12255__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12257){return (new clustermap.components.map_report.t12256(pc_count__$1,ic_count__$1,const_count__$1,map__12255__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12257));
});
}
return (new clustermap.components.map_report.t12256(pc_count,ic_count,const_count,map__12255__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__12283 = cljs.core._EQ__EQ_;var expr__12284 = type;if(cljs.core.truth_(pred__12283.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12284)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12283.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12284)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12283.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12284)))
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