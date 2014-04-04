// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__45054 = site_stats;var G__45054__$1 = (((G__45054 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__45054));return G__45054__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__45055 = site_stats;var G__45055__$1 = (((G__45055 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__45055));return G__45055__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__45056 = site_stats;var G__45056__$1 = (((G__45056 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__45056));return G__45056__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__45088 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45088__$1 = ((cljs.core.seq_QMARK_.call(null,map__45088))?cljs.core.apply.call(null,cljs.core.hash_map,map__45088):map__45088);var const_count = cljs.core.get.call(null,map__45088__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45088__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45088__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45089 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45089 = (function (pc_count,ic_count,const_count,map__45088,comm,site_stats,all_portfolio_companies_summary_report,meta45090){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45088 = map__45088;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta45090 = meta45090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45089.cljs$lang$type = true;
clustermap.components.map_report.t45089.cljs$lang$ctorStr = "clustermap.components.map-report/t45089";
clustermap.components.map_report.t45089.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45089");
});
clustermap.components.map_report.t45089.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45089.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs45094 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45094))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45094),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45094),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs45099 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45099))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45099),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45099),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs45104 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45104))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45104),(function (){var attrs45105 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45105))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45105),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45105));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45104),(function (){var attrs45106 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45106))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45106),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45106));
}
})());
}
})(),(function (){var attrs45107 = clustermap.formats.money.fmoney.call(null,(function (){var G__45117 = self__.site_stats;var G__45117__$1 = (((G__45117 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45117));var G__45117__$2 = (((G__45117__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45117__$1));return G__45117__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45107))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45107),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45107),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45112 = clustermap.formats.number.fnum.call(null,(function (){var G__45118 = self__.site_stats;var G__45118__$1 = (((G__45118 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45118));var G__45118__$2 = (((G__45118__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45118__$1));return G__45118__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45112))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45112),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45112),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45091){var self__ = this;
var _45091__$1 = this;return self__.meta45090;
});
clustermap.components.map_report.t45089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45091,meta45090__$1){var self__ = this;
var _45091__$1 = this;return (new clustermap.components.map_report.t45089(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45088,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta45090__$1));
});
clustermap.components.map_report.__GT_t45089 = (function __GT_t45089(pc_count__$1,ic_count__$1,const_count__$1,map__45088__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45090){return (new clustermap.components.map_report.t45089(pc_count__$1,ic_count__$1,const_count__$1,map__45088__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45090));
});
}
return (new clustermap.components.map_report.t45089(pc_count,ic_count,const_count,map__45088__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__45144 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45144__$1 = ((cljs.core.seq_QMARK_.call(null,map__45144))?cljs.core.apply.call(null,cljs.core.hash_map,map__45144):map__45144);var const_count = cljs.core.get.call(null,map__45144__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45144__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45144__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45145 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45145 = (function (pc_count,ic_count,const_count,map__45144,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta45146){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45144 = map__45144;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta45146 = meta45146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45145.cljs$lang$type = true;
clustermap.components.map_report.t45145.cljs$lang$ctorStr = "clustermap.components.map-report/t45145";
clustermap.components.map_report.t45145.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45145");
});
clustermap.components.map_report.t45145.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45145.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs45150 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs45150))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45150),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45150));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45151 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45151))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45151),(function (){var attrs45152 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45152))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45152),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45152));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45151),(function (){var attrs45153 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45153))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45153),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45153));
}
})());
}
})(),(function (){var attrs45154 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45154))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45154),(function (){var attrs45155 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45155))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45155),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45155));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45154),(function (){var attrs45156 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45156))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45156),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45156));
}
})());
}
})(),(function (){var attrs45157 = clustermap.formats.money.fmoney.call(null,(function (){var G__45167 = self__.site_stats;var G__45167__$1 = (((G__45167 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45167));var G__45167__$2 = (((G__45167__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45167__$1));return G__45167__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45157))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45157),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45157),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45162 = clustermap.formats.number.fnum.call(null,(function (){var G__45168 = self__.site_stats;var G__45168__$1 = (((G__45168 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45168));var G__45168__$2 = (((G__45168__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45168__$1));return G__45168__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45162))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45162),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45162),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45147){var self__ = this;
var _45147__$1 = this;return self__.meta45146;
});
clustermap.components.map_report.t45145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45147,meta45146__$1){var self__ = this;
var _45147__$1 = this;return (new clustermap.components.map_report.t45145(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45144,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta45146__$1));
});
clustermap.components.map_report.__GT_t45145 = (function __GT_t45145(pc_count__$1,ic_count__$1,const_count__$1,map__45144__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45146){return (new clustermap.components.map_report.t45145(pc_count__$1,ic_count__$1,const_count__$1,map__45144__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45146));
});
}
return (new clustermap.components.map_report.t45145(pc_count,ic_count,const_count,map__45144__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__45194 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45194__$1 = ((cljs.core.seq_QMARK_.call(null,map__45194))?cljs.core.apply.call(null,cljs.core.hash_map,map__45194):map__45194);var const_count = cljs.core.get.call(null,map__45194__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45194__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45194__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45195 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45195 = (function (pc_count,ic_count,const_count,map__45194,path_fn,comm,site_stats,investor_company,investor_company_report,meta45196){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45194 = map__45194;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta45196 = meta45196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45195.cljs$lang$type = true;
clustermap.components.map_report.t45195.cljs$lang$ctorStr = "clustermap.components.map-report/t45195";
clustermap.components.map_report.t45195.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45195");
});
clustermap.components.map_report.t45195.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45195.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs45200 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs45200))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45200),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45200));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45201 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45201))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45201),(function (){var attrs45202 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45202))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45202),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45202));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45201),(function (){var attrs45203 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45203))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45203),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45203));
}
})());
}
})(),(function (){var attrs45204 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45204))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45204),(function (){var attrs45205 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45205))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45205),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45205));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45204),(function (){var attrs45206 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45206))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45206),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45206));
}
})());
}
})(),(function (){var attrs45207 = clustermap.formats.money.fmoney.call(null,(function (){var G__45217 = self__.site_stats;var G__45217__$1 = (((G__45217 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45217));var G__45217__$2 = (((G__45217__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45217__$1));return G__45217__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45207))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45207),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45207),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45212 = clustermap.formats.number.fnum.call(null,(function (){var G__45218 = self__.site_stats;var G__45218__$1 = (((G__45218 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45218));var G__45218__$2 = (((G__45218__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45218__$1));return G__45218__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45212))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45212),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45212),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45197){var self__ = this;
var _45197__$1 = this;return self__.meta45196;
});
clustermap.components.map_report.t45195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45197,meta45196__$1){var self__ = this;
var _45197__$1 = this;return (new clustermap.components.map_report.t45195(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45194,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta45196__$1));
});
clustermap.components.map_report.__GT_t45195 = (function __GT_t45195(pc_count__$1,ic_count__$1,const_count__$1,map__45194__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45196){return (new clustermap.components.map_report.t45195(pc_count__$1,ic_count__$1,const_count__$1,map__45194__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45196));
});
}
return (new clustermap.components.map_report.t45195(pc_count,ic_count,const_count,map__45194__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__45248 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45248__$1 = ((cljs.core.seq_QMARK_.call(null,map__45248))?cljs.core.apply.call(null,cljs.core.hash_map,map__45248):map__45248);var const_count = cljs.core.get.call(null,map__45248__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45248__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45248__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45249 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45249 = (function (pc_count,ic_count,const_count,map__45248,path_fn,comm,site_stats,constituency,constituency_report,meta45250){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45248 = map__45248;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta45250 = meta45250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45249.cljs$lang$type = true;
clustermap.components.map_report.t45249.cljs$lang$ctorStr = "clustermap.components.map-report/t45249";
clustermap.components.map_report.t45249.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45249");
});
clustermap.components.map_report.t45249.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45249.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs45254 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs45254))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45254),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45254),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45259 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45259))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45259),(function (){var attrs45260 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45260))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45260),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45260));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45259),(function (){var attrs45261 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45261))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45261),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45261));
}
})());
}
})(),(function (){var attrs45262 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45262))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45262),(function (){var attrs45263 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45263))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45263),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45263));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45262),(function (){var attrs45264 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45264))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45264),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45264));
}
})());
}
})(),(function (){var attrs45265 = clustermap.formats.money.fmoney.call(null,(function (){var G__45275 = self__.site_stats;var G__45275__$1 = (((G__45275 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45275));var G__45275__$2 = (((G__45275__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45275__$1));return G__45275__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45265))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45265),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45265),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45270 = clustermap.formats.number.fnum.call(null,(function (){var G__45276 = self__.site_stats;var G__45276__$1 = (((G__45276 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45276));var G__45276__$2 = (((G__45276__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45276__$1));return G__45276__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45270))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45270),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45270),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45251){var self__ = this;
var _45251__$1 = this;return self__.meta45250;
});
clustermap.components.map_report.t45249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45251,meta45250__$1){var self__ = this;
var _45251__$1 = this;return (new clustermap.components.map_report.t45249(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45248,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta45250__$1));
});
clustermap.components.map_report.__GT_t45249 = (function __GT_t45249(pc_count__$1,ic_count__$1,const_count__$1,map__45248__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45250){return (new clustermap.components.map_report.t45249(pc_count__$1,ic_count__$1,const_count__$1,map__45248__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45250));
});
}
return (new clustermap.components.map_report.t45249(pc_count,ic_count,const_count,map__45248__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__45281 = om.core.get_shared.call(null,owner);var map__45281__$1 = ((cljs.core.seq_QMARK_.call(null,map__45281))?cljs.core.apply.call(null,cljs.core.hash_map,map__45281):map__45281);var path_fn = cljs.core.get.call(null,map__45281__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45281__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__45282 = cljs.core._EQ__EQ_;var expr__45283 = type;if(cljs.core.truth_(pred__45282.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__45283)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__45282.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__45283)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__45282.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__45283)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
