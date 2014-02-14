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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__27484 = site_stats;var G__27484__$1 = (((G__27484 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__27484));return G__27484__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__27485 = site_stats;var G__27485__$1 = (((G__27485 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__27485));return G__27485__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__27486 = site_stats;var G__27486__$1 = (((G__27486 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__27486));return G__27486__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__27518 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__27518__$1 = ((cljs.core.seq_QMARK_.call(null,map__27518))?cljs.core.apply.call(null,cljs.core.hash_map,map__27518):map__27518);var const_count = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t27519 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t27519 = (function (pc_count,ic_count,const_count,map__27518,comm,site_stats,all_portfolio_companies_summary_report,meta27520){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__27518 = map__27518;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta27520 = meta27520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t27519.cljs$lang$type = true;
clustermap.components.map_report.t27519.cljs$lang$ctorStr = "clustermap.components.map-report/t27519";
clustermap.components.map_report.t27519.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t27519");
});
clustermap.components.map_report.t27519.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t27519.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs27524 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27524))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27524),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27524),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs27529 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27529))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27529),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27529),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs27534 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27534))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27534),(function (){var attrs27535 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs27535))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27535),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27535));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27534),(function (){var attrs27536 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs27536))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27536),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27536));
}
})());
}
})(),(function (){var attrs27537 = clustermap.formats.money.fmoney.call(null,(function (){var G__27547 = self__.site_stats;var G__27547__$1 = (((G__27547 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__27547));var G__27547__$2 = (((G__27547__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__27547__$1));return G__27547__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27537))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27537),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27537),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs27542 = clustermap.formats.number.fnum.call(null,(function (){var G__27548 = self__.site_stats;var G__27548__$1 = (((G__27548 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__27548));var G__27548__$2 = (((G__27548__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__27548__$1));return G__27548__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27542))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27542),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27542),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t27519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27521){var self__ = this;
var _27521__$1 = this;return self__.meta27520;
});
clustermap.components.map_report.t27519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27521,meta27520__$1){var self__ = this;
var _27521__$1 = this;return (new clustermap.components.map_report.t27519(self__.pc_count,self__.ic_count,self__.const_count,self__.map__27518,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta27520__$1));
});
clustermap.components.map_report.__GT_t27519 = (function __GT_t27519(pc_count__$1,ic_count__$1,const_count__$1,map__27518__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta27520){return (new clustermap.components.map_report.t27519(pc_count__$1,ic_count__$1,const_count__$1,map__27518__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta27520));
});
}
return (new clustermap.components.map_report.t27519(pc_count,ic_count,const_count,map__27518__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__27572 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__27572__$1 = ((cljs.core.seq_QMARK_.call(null,map__27572))?cljs.core.apply.call(null,cljs.core.hash_map,map__27572):map__27572);var const_count = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t27573 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t27573 = (function (pc_count,ic_count,const_count,map__27572,comm,site_stats,portfolio_company,portfolio_company_report,meta27574){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__27572 = map__27572;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta27574 = meta27574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t27573.cljs$lang$type = true;
clustermap.components.map_report.t27573.cljs$lang$ctorStr = "clustermap.components.map-report/t27573";
clustermap.components.map_report.t27573.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t27573");
});
clustermap.components.map_report.t27573.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t27573.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs27576 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs27576))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs27576),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs27576));
}
})()),React.DOM.ul(null,(function (){var attrs27577 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs27577))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27577),(function (){var attrs27578 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs27578))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27578),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27578));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27577),(function (){var attrs27579 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs27579))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27579),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27579));
}
})());
}
})(),(function (){var attrs27580 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs27580))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27580),(function (){var attrs27581 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs27581))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27581),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27581));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27580),(function (){var attrs27582 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs27582))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27582),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27582));
}
})());
}
})(),(function (){var attrs27583 = clustermap.formats.money.fmoney.call(null,(function (){var G__27593 = self__.site_stats;var G__27593__$1 = (((G__27593 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__27593));var G__27593__$2 = (((G__27593__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__27593__$1));return G__27593__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27583))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27583),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27583),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs27588 = clustermap.formats.number.fnum.call(null,(function (){var G__27594 = self__.site_stats;var G__27594__$1 = (((G__27594 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__27594));var G__27594__$2 = (((G__27594__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__27594__$1));return G__27594__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27588))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27588),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27588),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t27573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27575){var self__ = this;
var _27575__$1 = this;return self__.meta27574;
});
clustermap.components.map_report.t27573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27575,meta27574__$1){var self__ = this;
var _27575__$1 = this;return (new clustermap.components.map_report.t27573(self__.pc_count,self__.ic_count,self__.const_count,self__.map__27572,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta27574__$1));
});
clustermap.components.map_report.__GT_t27573 = (function __GT_t27573(pc_count__$1,ic_count__$1,const_count__$1,map__27572__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta27574){return (new clustermap.components.map_report.t27573(pc_count__$1,ic_count__$1,const_count__$1,map__27572__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta27574));
});
}
return (new clustermap.components.map_report.t27573(pc_count,ic_count,const_count,map__27572__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__27618 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__27618__$1 = ((cljs.core.seq_QMARK_.call(null,map__27618))?cljs.core.apply.call(null,cljs.core.hash_map,map__27618):map__27618);var const_count = cljs.core.get.call(null,map__27618__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__27618__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__27618__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t27619 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t27619 = (function (pc_count,ic_count,const_count,map__27618,comm,site_stats,investor_company,investor_company_report,meta27620){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__27618 = map__27618;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta27620 = meta27620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t27619.cljs$lang$type = true;
clustermap.components.map_report.t27619.cljs$lang$ctorStr = "clustermap.components.map-report/t27619";
clustermap.components.map_report.t27619.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t27619");
});
clustermap.components.map_report.t27619.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t27619.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs27622 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs27622))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs27622),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs27622));
}
})()),React.DOM.ul(null,(function (){var attrs27623 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs27623))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27623),(function (){var attrs27624 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs27624))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27624),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27624));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27623),(function (){var attrs27625 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs27625))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27625),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27625));
}
})());
}
})(),(function (){var attrs27626 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs27626))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27626),(function (){var attrs27627 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs27627))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27627),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27627));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27626),(function (){var attrs27628 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs27628))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27628),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27628));
}
})());
}
})(),(function (){var attrs27629 = clustermap.formats.money.fmoney.call(null,(function (){var G__27639 = self__.site_stats;var G__27639__$1 = (((G__27639 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__27639));var G__27639__$2 = (((G__27639__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__27639__$1));return G__27639__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27629))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27629),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27629),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs27634 = clustermap.formats.number.fnum.call(null,(function (){var G__27640 = self__.site_stats;var G__27640__$1 = (((G__27640 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__27640));var G__27640__$2 = (((G__27640__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__27640__$1));return G__27640__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27634))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27634),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27634),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t27619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27621){var self__ = this;
var _27621__$1 = this;return self__.meta27620;
});
clustermap.components.map_report.t27619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27621,meta27620__$1){var self__ = this;
var _27621__$1 = this;return (new clustermap.components.map_report.t27619(self__.pc_count,self__.ic_count,self__.const_count,self__.map__27618,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta27620__$1));
});
clustermap.components.map_report.__GT_t27619 = (function __GT_t27619(pc_count__$1,ic_count__$1,const_count__$1,map__27618__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta27620){return (new clustermap.components.map_report.t27619(pc_count__$1,ic_count__$1,const_count__$1,map__27618__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta27620));
});
}
return (new clustermap.components.map_report.t27619(pc_count,ic_count,const_count,map__27618__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__27665 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__27665__$1 = ((cljs.core.seq_QMARK_.call(null,map__27665))?cljs.core.apply.call(null,cljs.core.hash_map,map__27665):map__27665);var const_count = cljs.core.get.call(null,map__27665__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__27665__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__27665__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t27666 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t27666 = (function (pc_count,ic_count,const_count,map__27665,comm,site_stats,constituency,constituency_report,meta27667){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__27665 = map__27665;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta27667 = meta27667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t27666.cljs$lang$type = true;
clustermap.components.map_report.t27666.cljs$lang$ctorStr = "clustermap.components.map-report/t27666";
clustermap.components.map_report.t27666.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t27666");
});
clustermap.components.map_report.t27666.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t27666.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs27669 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs27669))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs27669),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs27669));
}
})(),(function (){var attrs27670 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs27670))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs27670),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs27670),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs27671 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs27671))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27671),(function (){var attrs27672 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs27672))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27672),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27672));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27671),(function (){var attrs27673 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs27673))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27673),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27673));
}
})());
}
})(),(function (){var attrs27674 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs27674))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27674),(function (){var attrs27675 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs27675))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27675),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27675));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27674),(function (){var attrs27676 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs27676))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs27676),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs27676));
}
})());
}
})(),(function (){var attrs27677 = clustermap.formats.money.fmoney.call(null,(function (){var G__27687 = self__.site_stats;var G__27687__$1 = (((G__27687 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__27687));var G__27687__$2 = (((G__27687__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__27687__$1));return G__27687__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27677))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27677),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27677),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs27682 = clustermap.formats.number.fnum.call(null,(function (){var G__27688 = self__.site_stats;var G__27688__$1 = (((G__27688 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__27688));var G__27688__$2 = (((G__27688__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__27688__$1));return G__27688__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs27682))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs27682),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs27682),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t27666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27668){var self__ = this;
var _27668__$1 = this;return self__.meta27667;
});
clustermap.components.map_report.t27666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27668,meta27667__$1){var self__ = this;
var _27668__$1 = this;return (new clustermap.components.map_report.t27666(self__.pc_count,self__.ic_count,self__.const_count,self__.map__27665,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta27667__$1));
});
clustermap.components.map_report.__GT_t27666 = (function __GT_t27666(pc_count__$1,ic_count__$1,const_count__$1,map__27665__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta27667){return (new clustermap.components.map_report.t27666(pc_count__$1,ic_count__$1,const_count__$1,map__27665__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta27667));
});
}
return (new clustermap.components.map_report.t27666(pc_count,ic_count,const_count,map__27665__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__27692 = cljs.core._EQ__EQ_;var expr__27693 = type;if(cljs.core.truth_(pred__27692.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__27693)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__27692.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__27693)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__27692.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__27693)))
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