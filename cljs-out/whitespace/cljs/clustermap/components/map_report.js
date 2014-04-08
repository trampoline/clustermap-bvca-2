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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__45086 = site_stats;var G__45086__$1 = (((G__45086 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__45086));return G__45086__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__45087 = site_stats;var G__45087__$1 = (((G__45087 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__45087));return G__45087__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__45088 = site_stats;var G__45088__$1 = (((G__45088 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__45088));return G__45088__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__45120 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45120__$1 = ((cljs.core.seq_QMARK_.call(null,map__45120))?cljs.core.apply.call(null,cljs.core.hash_map,map__45120):map__45120);var const_count = cljs.core.get.call(null,map__45120__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45120__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45120__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45121 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45121 = (function (pc_count,ic_count,const_count,map__45120,comm,site_stats,all_portfolio_companies_summary_report,meta45122){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45120 = map__45120;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta45122 = meta45122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45121.cljs$lang$type = true;
clustermap.components.map_report.t45121.cljs$lang$ctorStr = "clustermap.components.map-report/t45121";
clustermap.components.map_report.t45121.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45121");
});
clustermap.components.map_report.t45121.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45121.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs45126 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45126))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45126),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45126),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs45131 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45131))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45131),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45131),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs45136 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45136))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45136),(function (){var attrs45137 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45137))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45137),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45137));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45136),(function (){var attrs45138 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45138))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45138),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45138));
}
})());
}
})(),(function (){var attrs45139 = clustermap.formats.money.fmoney.call(null,(function (){var G__45149 = self__.site_stats;var G__45149__$1 = (((G__45149 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45149));var G__45149__$2 = (((G__45149__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45149__$1));return G__45149__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45139))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45139),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45139),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45144 = clustermap.formats.number.fnum.call(null,(function (){var G__45150 = self__.site_stats;var G__45150__$1 = (((G__45150 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45150));var G__45150__$2 = (((G__45150__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45150__$1));return G__45150__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45144))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45144),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45144),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45123){var self__ = this;
var _45123__$1 = this;return self__.meta45122;
});
clustermap.components.map_report.t45121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45123,meta45122__$1){var self__ = this;
var _45123__$1 = this;return (new clustermap.components.map_report.t45121(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45120,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta45122__$1));
});
clustermap.components.map_report.__GT_t45121 = (function __GT_t45121(pc_count__$1,ic_count__$1,const_count__$1,map__45120__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45122){return (new clustermap.components.map_report.t45121(pc_count__$1,ic_count__$1,const_count__$1,map__45120__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta45122));
});
}
return (new clustermap.components.map_report.t45121(pc_count,ic_count,const_count,map__45120__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__45176 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45176__$1 = ((cljs.core.seq_QMARK_.call(null,map__45176))?cljs.core.apply.call(null,cljs.core.hash_map,map__45176):map__45176);var const_count = cljs.core.get.call(null,map__45176__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45176__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45176__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45177 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45177 = (function (pc_count,ic_count,const_count,map__45176,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta45178){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45176 = map__45176;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta45178 = meta45178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45177.cljs$lang$type = true;
clustermap.components.map_report.t45177.cljs$lang$ctorStr = "clustermap.components.map-report/t45177";
clustermap.components.map_report.t45177.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45177");
});
clustermap.components.map_report.t45177.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45177.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs45182 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs45182))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45182),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45182));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45183 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45183))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45183),(function (){var attrs45184 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45184))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45184),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45184));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45183),(function (){var attrs45185 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45185))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45185),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45185));
}
})());
}
})(),(function (){var attrs45186 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45186))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45186),(function (){var attrs45187 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45187))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45187),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45187));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45186),(function (){var attrs45188 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45188))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45188),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45188));
}
})());
}
})(),(function (){var attrs45189 = clustermap.formats.money.fmoney.call(null,(function (){var G__45199 = self__.site_stats;var G__45199__$1 = (((G__45199 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45199));var G__45199__$2 = (((G__45199__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45199__$1));return G__45199__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45189))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45189),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45189),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45194 = clustermap.formats.number.fnum.call(null,(function (){var G__45200 = self__.site_stats;var G__45200__$1 = (((G__45200 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45200));var G__45200__$2 = (((G__45200__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45200__$1));return G__45200__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45194))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45194),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45194),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45179){var self__ = this;
var _45179__$1 = this;return self__.meta45178;
});
clustermap.components.map_report.t45177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45179,meta45178__$1){var self__ = this;
var _45179__$1 = this;return (new clustermap.components.map_report.t45177(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45176,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta45178__$1));
});
clustermap.components.map_report.__GT_t45177 = (function __GT_t45177(pc_count__$1,ic_count__$1,const_count__$1,map__45176__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45178){return (new clustermap.components.map_report.t45177(pc_count__$1,ic_count__$1,const_count__$1,map__45176__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta45178));
});
}
return (new clustermap.components.map_report.t45177(pc_count,ic_count,const_count,map__45176__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__45226 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45226__$1 = ((cljs.core.seq_QMARK_.call(null,map__45226))?cljs.core.apply.call(null,cljs.core.hash_map,map__45226):map__45226);var const_count = cljs.core.get.call(null,map__45226__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45226__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45226__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45227 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45227 = (function (pc_count,ic_count,const_count,map__45226,path_fn,comm,site_stats,investor_company,investor_company_report,meta45228){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45226 = map__45226;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta45228 = meta45228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45227.cljs$lang$type = true;
clustermap.components.map_report.t45227.cljs$lang$ctorStr = "clustermap.components.map-report/t45227";
clustermap.components.map_report.t45227.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45227");
});
clustermap.components.map_report.t45227.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45227.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs45232 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs45232))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45232),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45232));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45233 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45233))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45233),(function (){var attrs45234 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45234))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45234),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45234));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45233),(function (){var attrs45235 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45235))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45235),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45235));
}
})());
}
})(),(function (){var attrs45236 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs45236))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45236),(function (){var attrs45237 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45237))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45237),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45237));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45236),(function (){var attrs45238 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs45238))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45238),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45238));
}
})());
}
})(),(function (){var attrs45239 = clustermap.formats.money.fmoney.call(null,(function (){var G__45249 = self__.site_stats;var G__45249__$1 = (((G__45249 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45249));var G__45249__$2 = (((G__45249__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45249__$1));return G__45249__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45239))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45239),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45239),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45244 = clustermap.formats.number.fnum.call(null,(function (){var G__45250 = self__.site_stats;var G__45250__$1 = (((G__45250 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45250));var G__45250__$2 = (((G__45250__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45250__$1));return G__45250__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45244))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45244),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45244),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45229){var self__ = this;
var _45229__$1 = this;return self__.meta45228;
});
clustermap.components.map_report.t45227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45229,meta45228__$1){var self__ = this;
var _45229__$1 = this;return (new clustermap.components.map_report.t45227(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45226,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta45228__$1));
});
clustermap.components.map_report.__GT_t45227 = (function __GT_t45227(pc_count__$1,ic_count__$1,const_count__$1,map__45226__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45228){return (new clustermap.components.map_report.t45227(pc_count__$1,ic_count__$1,const_count__$1,map__45226__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta45228));
});
}
return (new clustermap.components.map_report.t45227(pc_count,ic_count,const_count,map__45226__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__45280 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__45280__$1 = ((cljs.core.seq_QMARK_.call(null,map__45280))?cljs.core.apply.call(null,cljs.core.hash_map,map__45280):map__45280);var const_count = cljs.core.get.call(null,map__45280__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__45280__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__45280__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t45281 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t45281 = (function (pc_count,ic_count,const_count,map__45280,path_fn,comm,site_stats,constituency,constituency_report,meta45282){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__45280 = map__45280;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta45282 = meta45282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t45281.cljs$lang$type = true;
clustermap.components.map_report.t45281.cljs$lang$ctorStr = "clustermap.components.map-report/t45281";
clustermap.components.map_report.t45281.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t45281");
});
clustermap.components.map_report.t45281.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t45281.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs45286 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs45286))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45286),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45286),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs45291 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs45291))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45291),(function (){var attrs45292 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45292))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45292),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45292));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45291),(function (){var attrs45293 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs45293))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45293),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45293));
}
})());
}
})(),(function (){var attrs45294 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs45294))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45294),(function (){var attrs45295 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45295))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45295),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45295));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45294),(function (){var attrs45296 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs45296))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs45296),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs45296));
}
})());
}
})(),(function (){var attrs45297 = clustermap.formats.money.fmoney.call(null,(function (){var G__45307 = self__.site_stats;var G__45307__$1 = (((G__45307 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__45307));var G__45307__$2 = (((G__45307__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45307__$1));return G__45307__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45297))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45297),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45297),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs45302 = clustermap.formats.number.fnum.call(null,(function (){var G__45308 = self__.site_stats;var G__45308__$1 = (((G__45308 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__45308));var G__45308__$2 = (((G__45308__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__45308__$1));return G__45308__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs45302))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs45302),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs45302),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t45281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45283){var self__ = this;
var _45283__$1 = this;return self__.meta45282;
});
clustermap.components.map_report.t45281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45283,meta45282__$1){var self__ = this;
var _45283__$1 = this;return (new clustermap.components.map_report.t45281(self__.pc_count,self__.ic_count,self__.const_count,self__.map__45280,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta45282__$1));
});
clustermap.components.map_report.__GT_t45281 = (function __GT_t45281(pc_count__$1,ic_count__$1,const_count__$1,map__45280__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45282){return (new clustermap.components.map_report.t45281(pc_count__$1,ic_count__$1,const_count__$1,map__45280__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta45282));
});
}
return (new clustermap.components.map_report.t45281(pc_count,ic_count,const_count,map__45280__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__45313 = om.core.get_shared.call(null,owner);var map__45313__$1 = ((cljs.core.seq_QMARK_.call(null,map__45313))?cljs.core.apply.call(null,cljs.core.hash_map,map__45313):map__45313);var path_fn = cljs.core.get.call(null,map__45313__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45313__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__45314 = cljs.core._EQ__EQ_;var expr__45315 = type;if(cljs.core.truth_(pred__45314.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__45315)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__45314.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__45315)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__45314.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__45315)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
