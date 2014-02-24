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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12122 = site_stats;var G__12122__$1 = (((G__12122 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12122));return G__12122__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12123 = site_stats;var G__12123__$1 = (((G__12123 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12123));return G__12123__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12124 = site_stats;var G__12124__$1 = (((G__12124 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12124));return G__12124__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12156 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12156__$1 = ((cljs.core.seq_QMARK_.call(null,map__12156))?cljs.core.apply.call(null,cljs.core.hash_map,map__12156):map__12156);var const_count = cljs.core.get.call(null,map__12156__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12156__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12156__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12157 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12157 = (function (pc_count,ic_count,const_count,map__12156,comm,site_stats,all_portfolio_companies_summary_report,meta12158){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12156 = map__12156;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12158 = meta12158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12157.cljs$lang$type = true;
clustermap.components.map_report.t12157.cljs$lang$ctorStr = "clustermap.components.map-report/t12157";
clustermap.components.map_report.t12157.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12157");
});
clustermap.components.map_report.t12157.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12157.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12162 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12162))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12162),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12162),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12167 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12167))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12167),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12167),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12172 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12172))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12172),(function (){var attrs12173 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12173))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12173),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12173));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12172),(function (){var attrs12174 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12174))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12174),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12174));
}
})());
}
})(),(function (){var attrs12175 = clustermap.formats.money.fmoney.call(null,(function (){var G__12185 = self__.site_stats;var G__12185__$1 = (((G__12185 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12185));var G__12185__$2 = (((G__12185__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12185__$1));return G__12185__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12175))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12175),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12175),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12180 = clustermap.formats.number.fnum.call(null,(function (){var G__12186 = self__.site_stats;var G__12186__$1 = (((G__12186 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12186));var G__12186__$2 = (((G__12186__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12186__$1));return G__12186__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12180))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12180),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12180),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12159){var self__ = this;
var _12159__$1 = this;return self__.meta12158;
});
clustermap.components.map_report.t12157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12159,meta12158__$1){var self__ = this;
var _12159__$1 = this;return (new clustermap.components.map_report.t12157(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12156,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12158__$1));
});
clustermap.components.map_report.__GT_t12157 = (function __GT_t12157(pc_count__$1,ic_count__$1,const_count__$1,map__12156__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12158){return (new clustermap.components.map_report.t12157(pc_count__$1,ic_count__$1,const_count__$1,map__12156__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12158));
});
}
return (new clustermap.components.map_report.t12157(pc_count,ic_count,const_count,map__12156__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12212 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12212__$1 = ((cljs.core.seq_QMARK_.call(null,map__12212))?cljs.core.apply.call(null,cljs.core.hash_map,map__12212):map__12212);var const_count = cljs.core.get.call(null,map__12212__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12212__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12212__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12213 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12213 = (function (pc_count,ic_count,const_count,map__12212,comm,site_stats,portfolio_company,portfolio_company_report,meta12214){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12212 = map__12212;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12214 = meta12214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12213.cljs$lang$type = true;
clustermap.components.map_report.t12213.cljs$lang$ctorStr = "clustermap.components.map-report/t12213";
clustermap.components.map_report.t12213.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12213");
});
clustermap.components.map_report.t12213.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12213.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12218 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12218))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12218),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12218));
}
})()),React.DOM.ul(null,(function (){var attrs12219 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12219))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12219),(function (){var attrs12220 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12220))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12220),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12220));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12219),(function (){var attrs12221 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12221))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12221),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12221));
}
})());
}
})(),(function (){var attrs12222 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12222))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12222),(function (){var attrs12223 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12223))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12223),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12223));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12222),(function (){var attrs12224 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12224))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12224),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12224));
}
})());
}
})(),(function (){var attrs12225 = clustermap.formats.money.fmoney.call(null,(function (){var G__12235 = self__.site_stats;var G__12235__$1 = (((G__12235 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12235));var G__12235__$2 = (((G__12235__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12235__$1));return G__12235__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12225))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12225),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12225),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12230 = clustermap.formats.number.fnum.call(null,(function (){var G__12236 = self__.site_stats;var G__12236__$1 = (((G__12236 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12236));var G__12236__$2 = (((G__12236__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12236__$1));return G__12236__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12230))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12230),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12230),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12215){var self__ = this;
var _12215__$1 = this;return self__.meta12214;
});
clustermap.components.map_report.t12213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12215,meta12214__$1){var self__ = this;
var _12215__$1 = this;return (new clustermap.components.map_report.t12213(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12212,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12214__$1));
});
clustermap.components.map_report.__GT_t12213 = (function __GT_t12213(pc_count__$1,ic_count__$1,const_count__$1,map__12212__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12214){return (new clustermap.components.map_report.t12213(pc_count__$1,ic_count__$1,const_count__$1,map__12212__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12214));
});
}
return (new clustermap.components.map_report.t12213(pc_count,ic_count,const_count,map__12212__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12262 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12262__$1 = ((cljs.core.seq_QMARK_.call(null,map__12262))?cljs.core.apply.call(null,cljs.core.hash_map,map__12262):map__12262);var const_count = cljs.core.get.call(null,map__12262__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12262__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12262__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12263 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12263 = (function (pc_count,ic_count,const_count,map__12262,comm,site_stats,investor_company,investor_company_report,meta12264){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12262 = map__12262;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12264 = meta12264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12263.cljs$lang$type = true;
clustermap.components.map_report.t12263.cljs$lang$ctorStr = "clustermap.components.map-report/t12263";
clustermap.components.map_report.t12263.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12263");
});
clustermap.components.map_report.t12263.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12263.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12268 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12268))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12268),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12268));
}
})()),React.DOM.ul(null,(function (){var attrs12269 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12269))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12269),(function (){var attrs12270 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12270))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12270),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12270));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12269),(function (){var attrs12271 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12271))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12271),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12271));
}
})());
}
})(),(function (){var attrs12272 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12272))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12272),(function (){var attrs12273 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12273))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12273),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12273));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12272),(function (){var attrs12274 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12274))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12274),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12274));
}
})());
}
})(),(function (){var attrs12275 = clustermap.formats.money.fmoney.call(null,(function (){var G__12285 = self__.site_stats;var G__12285__$1 = (((G__12285 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12285));var G__12285__$2 = (((G__12285__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12285__$1));return G__12285__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12275))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12275),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12275),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12280 = clustermap.formats.number.fnum.call(null,(function (){var G__12286 = self__.site_stats;var G__12286__$1 = (((G__12286 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12286));var G__12286__$2 = (((G__12286__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12286__$1));return G__12286__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12280))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12280),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12280),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12265){var self__ = this;
var _12265__$1 = this;return self__.meta12264;
});
clustermap.components.map_report.t12263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12265,meta12264__$1){var self__ = this;
var _12265__$1 = this;return (new clustermap.components.map_report.t12263(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12262,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12264__$1));
});
clustermap.components.map_report.__GT_t12263 = (function __GT_t12263(pc_count__$1,ic_count__$1,const_count__$1,map__12262__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12264){return (new clustermap.components.map_report.t12263(pc_count__$1,ic_count__$1,const_count__$1,map__12262__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12264));
});
}
return (new clustermap.components.map_report.t12263(pc_count,ic_count,const_count,map__12262__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12316 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12316__$1 = ((cljs.core.seq_QMARK_.call(null,map__12316))?cljs.core.apply.call(null,cljs.core.hash_map,map__12316):map__12316);var const_count = cljs.core.get.call(null,map__12316__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12316__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12316__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12317 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12317 = (function (pc_count,ic_count,const_count,map__12316,comm,site_stats,constituency,constituency_report,meta12318){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12316 = map__12316;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12318 = meta12318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12317.cljs$lang$type = true;
clustermap.components.map_report.t12317.cljs$lang$ctorStr = "clustermap.components.map-report/t12317";
clustermap.components.map_report.t12317.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12317");
});
clustermap.components.map_report.t12317.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12317.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12322 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12322))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12322),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12322),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})()),React.DOM.ul(null,(function (){var attrs12327 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12327))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12327),(function (){var attrs12328 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12328))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12328),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12328));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12327),(function (){var attrs12329 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12329))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12329),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12329));
}
})());
}
})(),(function (){var attrs12330 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12330))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12330),(function (){var attrs12331 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12331))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12331),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12331));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12330),(function (){var attrs12332 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12332))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12332),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12332));
}
})());
}
})(),(function (){var attrs12333 = clustermap.formats.money.fmoney.call(null,(function (){var G__12343 = self__.site_stats;var G__12343__$1 = (((G__12343 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12343));var G__12343__$2 = (((G__12343__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12343__$1));return G__12343__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12333))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12333),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12333),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12338 = clustermap.formats.number.fnum.call(null,(function (){var G__12344 = self__.site_stats;var G__12344__$1 = (((G__12344 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12344));var G__12344__$2 = (((G__12344__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12344__$1));return G__12344__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12338))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12338),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12338),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12319){var self__ = this;
var _12319__$1 = this;return self__.meta12318;
});
clustermap.components.map_report.t12317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12319,meta12318__$1){var self__ = this;
var _12319__$1 = this;return (new clustermap.components.map_report.t12317(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12316,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12318__$1));
});
clustermap.components.map_report.__GT_t12317 = (function __GT_t12317(pc_count__$1,ic_count__$1,const_count__$1,map__12316__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12318){return (new clustermap.components.map_report.t12317(pc_count__$1,ic_count__$1,const_count__$1,map__12316__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12318));
});
}
return (new clustermap.components.map_report.t12317(pc_count,ic_count,const_count,map__12316__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__12348 = cljs.core._EQ__EQ_;var expr__12349 = type;if(cljs.core.truth_(pred__12348.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12349)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12348.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12349)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12348.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12349)))
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