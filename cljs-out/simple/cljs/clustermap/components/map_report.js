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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12439 = site_stats;var G__12439__$1 = (((G__12439 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12439));return G__12439__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12440 = site_stats;var G__12440__$1 = (((G__12440 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12440));return G__12440__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12441 = site_stats;var G__12441__$1 = (((G__12441 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12441));return G__12441__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12473 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12473__$1 = ((cljs.core.seq_QMARK_.call(null,map__12473))?cljs.core.apply.call(null,cljs.core.hash_map,map__12473):map__12473);var const_count = cljs.core.get.call(null,map__12473__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12473__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12473__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12474 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12474 = (function (pc_count,ic_count,const_count,map__12473,comm,site_stats,all_portfolio_companies_summary_report,meta12475){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12473 = map__12473;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12475 = meta12475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12474.cljs$lang$type = true;
clustermap.components.map_report.t12474.cljs$lang$ctorStr = "clustermap.components.map-report/t12474";
clustermap.components.map_report.t12474.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12474");
});
clustermap.components.map_report.t12474.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12474.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12479 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12479))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12479),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12479),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12484 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12484))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12484),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12484),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12489 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12489))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12489),(function (){var attrs12490 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12490))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12490),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12490));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12489),(function (){var attrs12491 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12491))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12491),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12491));
}
})());
}
})(),(function (){var attrs12492 = clustermap.formats.money.fmoney.call(null,(function (){var G__12502 = self__.site_stats;var G__12502__$1 = (((G__12502 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12502));var G__12502__$2 = (((G__12502__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12502__$1));return G__12502__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12492))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12492),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12492),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12497 = clustermap.formats.number.fnum.call(null,(function (){var G__12503 = self__.site_stats;var G__12503__$1 = (((G__12503 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12503));var G__12503__$2 = (((G__12503__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12503__$1));return G__12503__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12497))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12497),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12497),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12476){var self__ = this;
var _12476__$1 = this;return self__.meta12475;
});
clustermap.components.map_report.t12474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12476,meta12475__$1){var self__ = this;
var _12476__$1 = this;return (new clustermap.components.map_report.t12474(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12473,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12475__$1));
});
clustermap.components.map_report.__GT_t12474 = (function __GT_t12474(pc_count__$1,ic_count__$1,const_count__$1,map__12473__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12475){return (new clustermap.components.map_report.t12474(pc_count__$1,ic_count__$1,const_count__$1,map__12473__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12475));
});
}
return (new clustermap.components.map_report.t12474(pc_count,ic_count,const_count,map__12473__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__12529 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12529__$1 = ((cljs.core.seq_QMARK_.call(null,map__12529))?cljs.core.apply.call(null,cljs.core.hash_map,map__12529):map__12529);var const_count = cljs.core.get.call(null,map__12529__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12529__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12529__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12530 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12530 = (function (pc_count,ic_count,const_count,map__12529,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta12531){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12529 = map__12529;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12531 = meta12531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12530.cljs$lang$type = true;
clustermap.components.map_report.t12530.cljs$lang$ctorStr = "clustermap.components.map-report/t12530";
clustermap.components.map_report.t12530.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12530");
});
clustermap.components.map_report.t12530.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12530.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs12535 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12535))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12535),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12535));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12536 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12536))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12536),(function (){var attrs12537 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12537))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12537),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12537));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12536),(function (){var attrs12538 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12538))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12538),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12538));
}
})());
}
})(),(function (){var attrs12539 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12539))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12539),(function (){var attrs12540 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12540))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12540),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12540));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12539),(function (){var attrs12541 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12541))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12541),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12541));
}
})());
}
})(),(function (){var attrs12542 = clustermap.formats.money.fmoney.call(null,(function (){var G__12552 = self__.site_stats;var G__12552__$1 = (((G__12552 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12552));var G__12552__$2 = (((G__12552__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12552__$1));return G__12552__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12542))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12542),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12542),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12547 = clustermap.formats.number.fnum.call(null,(function (){var G__12553 = self__.site_stats;var G__12553__$1 = (((G__12553 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12553));var G__12553__$2 = (((G__12553__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12553__$1));return G__12553__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12547))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12547),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12547),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12532){var self__ = this;
var _12532__$1 = this;return self__.meta12531;
});
clustermap.components.map_report.t12530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12532,meta12531__$1){var self__ = this;
var _12532__$1 = this;return (new clustermap.components.map_report.t12530(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12529,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12531__$1));
});
clustermap.components.map_report.__GT_t12530 = (function __GT_t12530(pc_count__$1,ic_count__$1,const_count__$1,map__12529__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12531){return (new clustermap.components.map_report.t12530(pc_count__$1,ic_count__$1,const_count__$1,map__12529__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12531));
});
}
return (new clustermap.components.map_report.t12530(pc_count,ic_count,const_count,map__12529__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__12579 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12579__$1 = ((cljs.core.seq_QMARK_.call(null,map__12579))?cljs.core.apply.call(null,cljs.core.hash_map,map__12579):map__12579);var const_count = cljs.core.get.call(null,map__12579__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12579__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12579__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12580 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12580 = (function (pc_count,ic_count,const_count,map__12579,path_fn,comm,site_stats,investor_company,investor_company_report,meta12581){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12579 = map__12579;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12581 = meta12581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12580.cljs$lang$type = true;
clustermap.components.map_report.t12580.cljs$lang$ctorStr = "clustermap.components.map-report/t12580";
clustermap.components.map_report.t12580.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12580");
});
clustermap.components.map_report.t12580.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12580.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12585 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12585))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12585),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12585));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12586 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12586))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12586),(function (){var attrs12587 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12587))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12587),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12587));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12586),(function (){var attrs12588 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12588))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12588),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12588));
}
})());
}
})(),(function (){var attrs12589 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12589))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12589),(function (){var attrs12590 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12590))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12590),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12590));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12589),(function (){var attrs12591 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12591))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12591),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12591));
}
})());
}
})(),(function (){var attrs12592 = clustermap.formats.money.fmoney.call(null,(function (){var G__12602 = self__.site_stats;var G__12602__$1 = (((G__12602 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12602));var G__12602__$2 = (((G__12602__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12602__$1));return G__12602__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12592))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12592),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12592),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12597 = clustermap.formats.number.fnum.call(null,(function (){var G__12603 = self__.site_stats;var G__12603__$1 = (((G__12603 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12603));var G__12603__$2 = (((G__12603__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12603__$1));return G__12603__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12597))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12597),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12597),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12582){var self__ = this;
var _12582__$1 = this;return self__.meta12581;
});
clustermap.components.map_report.t12580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12582,meta12581__$1){var self__ = this;
var _12582__$1 = this;return (new clustermap.components.map_report.t12580(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12579,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12581__$1));
});
clustermap.components.map_report.__GT_t12580 = (function __GT_t12580(pc_count__$1,ic_count__$1,const_count__$1,map__12579__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12581){return (new clustermap.components.map_report.t12580(pc_count__$1,ic_count__$1,const_count__$1,map__12579__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12581));
});
}
return (new clustermap.components.map_report.t12580(pc_count,ic_count,const_count,map__12579__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__12633 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12633__$1 = ((cljs.core.seq_QMARK_.call(null,map__12633))?cljs.core.apply.call(null,cljs.core.hash_map,map__12633):map__12633);var const_count = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12634 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12634 = (function (pc_count,ic_count,const_count,map__12633,path_fn,comm,site_stats,constituency,constituency_report,meta12635){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12633 = map__12633;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12635 = meta12635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12634.cljs$lang$type = true;
clustermap.components.map_report.t12634.cljs$lang$ctorStr = "clustermap.components.map-report/t12634";
clustermap.components.map_report.t12634.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12634");
});
clustermap.components.map_report.t12634.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12634.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12639 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12639))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12639),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12639),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12644 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12644))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12644),(function (){var attrs12645 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12645))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12645),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12645));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12644),(function (){var attrs12646 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12646))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12646),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12646));
}
})());
}
})(),(function (){var attrs12647 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12647))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12647),(function (){var attrs12648 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12648))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12648),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12648));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12647),(function (){var attrs12649 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12649))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12649),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12649));
}
})());
}
})(),(function (){var attrs12650 = clustermap.formats.money.fmoney.call(null,(function (){var G__12660 = self__.site_stats;var G__12660__$1 = (((G__12660 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12660));var G__12660__$2 = (((G__12660__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12660__$1));return G__12660__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12650))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12650),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12650),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12655 = clustermap.formats.number.fnum.call(null,(function (){var G__12661 = self__.site_stats;var G__12661__$1 = (((G__12661 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12661));var G__12661__$2 = (((G__12661__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12661__$1));return G__12661__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12655))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12655),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12655),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12636){var self__ = this;
var _12636__$1 = this;return self__.meta12635;
});
clustermap.components.map_report.t12634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12636,meta12635__$1){var self__ = this;
var _12636__$1 = this;return (new clustermap.components.map_report.t12634(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12633,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12635__$1));
});
clustermap.components.map_report.__GT_t12634 = (function __GT_t12634(pc_count__$1,ic_count__$1,const_count__$1,map__12633__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12635){return (new clustermap.components.map_report.t12634(pc_count__$1,ic_count__$1,const_count__$1,map__12633__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12635));
});
}
return (new clustermap.components.map_report.t12634(pc_count,ic_count,const_count,map__12633__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__12666 = om.core.get_shared.call(null,owner);var map__12666__$1 = ((cljs.core.seq_QMARK_.call(null,map__12666))?cljs.core.apply.call(null,cljs.core.hash_map,map__12666):map__12666);var path_fn = cljs.core.get.call(null,map__12666__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12666__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12667 = cljs.core._EQ__EQ_;var expr__12668 = type;if(cljs.core.truth_(pred__12667.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12668)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__12667.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12668)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__12667.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12668)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
