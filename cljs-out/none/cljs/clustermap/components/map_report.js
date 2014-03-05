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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__23432 = site_stats;var G__23432__$1 = (((G__23432 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23432));return G__23432__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__23433 = site_stats;var G__23433__$1 = (((G__23433 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23433));return G__23433__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__23434 = site_stats;var G__23434__$1 = (((G__23434 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23434));return G__23434__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__23466 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23466__$1 = ((cljs.core.seq_QMARK_.call(null,map__23466))?cljs.core.apply.call(null,cljs.core.hash_map,map__23466):map__23466);var const_count = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23467 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23467 = (function (pc_count,ic_count,const_count,map__23466,comm,site_stats,all_portfolio_companies_summary_report,meta23468){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23466 = map__23466;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23468 = meta23468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23467.cljs$lang$type = true;
clustermap.components.map_report.t23467.cljs$lang$ctorStr = "clustermap.components.map-report/t23467";
clustermap.components.map_report.t23467.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23467");
});
clustermap.components.map_report.t23467.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23467.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23472 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23472))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23472),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23472),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs23477 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23477))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23477),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23477),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs23482 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23482))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23482),(function (){var attrs23483 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23483))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23483),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23483));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23482),(function (){var attrs23484 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23484))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23484),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23484));
}
})());
}
})(),(function (){var attrs23485 = clustermap.formats.money.fmoney.call(null,(function (){var G__23495 = self__.site_stats;var G__23495__$1 = (((G__23495 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23495));var G__23495__$2 = (((G__23495__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23495__$1));return G__23495__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23485))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23485),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23485),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23490 = clustermap.formats.number.fnum.call(null,(function (){var G__23496 = self__.site_stats;var G__23496__$1 = (((G__23496 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23496));var G__23496__$2 = (((G__23496__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23496__$1));return G__23496__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23490))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23490),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23490),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23469){var self__ = this;
var _23469__$1 = this;return self__.meta23468;
});
clustermap.components.map_report.t23467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23469,meta23468__$1){var self__ = this;
var _23469__$1 = this;return (new clustermap.components.map_report.t23467(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23466,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23468__$1));
});
clustermap.components.map_report.__GT_t23467 = (function __GT_t23467(pc_count__$1,ic_count__$1,const_count__$1,map__23466__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23468){return (new clustermap.components.map_report.t23467(pc_count__$1,ic_count__$1,const_count__$1,map__23466__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23468));
});
}
return (new clustermap.components.map_report.t23467(pc_count,ic_count,const_count,map__23466__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__23522 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23522__$1 = ((cljs.core.seq_QMARK_.call(null,map__23522))?cljs.core.apply.call(null,cljs.core.hash_map,map__23522):map__23522);var const_count = cljs.core.get.call(null,map__23522__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23522__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23522__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23523 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23523 = (function (pc_count,ic_count,const_count,map__23522,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta23524){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23522 = map__23522;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta23524 = meta23524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23523.cljs$lang$type = true;
clustermap.components.map_report.t23523.cljs$lang$ctorStr = "clustermap.components.map-report/t23523";
clustermap.components.map_report.t23523.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23523");
});
clustermap.components.map_report.t23523.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23523.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs23528 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs23528))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23528),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23528));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23529 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23529))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23529),(function (){var attrs23530 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23530))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23530),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23530));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23529),(function (){var attrs23531 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23531))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23531),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23531));
}
})());
}
})(),(function (){var attrs23532 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23532))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23532),(function (){var attrs23533 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23533))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23533),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23533));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23532),(function (){var attrs23534 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23534))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23534),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23534));
}
})());
}
})(),(function (){var attrs23535 = clustermap.formats.money.fmoney.call(null,(function (){var G__23545 = self__.site_stats;var G__23545__$1 = (((G__23545 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23545));var G__23545__$2 = (((G__23545__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23545__$1));return G__23545__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23535))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23535),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23535),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23540 = clustermap.formats.number.fnum.call(null,(function (){var G__23546 = self__.site_stats;var G__23546__$1 = (((G__23546 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23546));var G__23546__$2 = (((G__23546__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23546__$1));return G__23546__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23540))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23540),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23540),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23525){var self__ = this;
var _23525__$1 = this;return self__.meta23524;
});
clustermap.components.map_report.t23523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23525,meta23524__$1){var self__ = this;
var _23525__$1 = this;return (new clustermap.components.map_report.t23523(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23522,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta23524__$1));
});
clustermap.components.map_report.__GT_t23523 = (function __GT_t23523(pc_count__$1,ic_count__$1,const_count__$1,map__23522__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23524){return (new clustermap.components.map_report.t23523(pc_count__$1,ic_count__$1,const_count__$1,map__23522__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23524));
});
}
return (new clustermap.components.map_report.t23523(pc_count,ic_count,const_count,map__23522__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__23572 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23572__$1 = ((cljs.core.seq_QMARK_.call(null,map__23572))?cljs.core.apply.call(null,cljs.core.hash_map,map__23572):map__23572);var const_count = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23573 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23573 = (function (pc_count,ic_count,const_count,map__23572,path_fn,comm,site_stats,investor_company,investor_company_report,meta23574){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23572 = map__23572;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta23574 = meta23574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23573.cljs$lang$type = true;
clustermap.components.map_report.t23573.cljs$lang$ctorStr = "clustermap.components.map-report/t23573";
clustermap.components.map_report.t23573.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23573");
});
clustermap.components.map_report.t23573.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23573.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23578 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs23578))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23578),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23578));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23579 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23579))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23579),(function (){var attrs23580 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs23580))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23580),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23580));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23579),(function (){var attrs23581 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs23581))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23581),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23581));
}
})());
}
})(),(function (){var attrs23582 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23582))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23582),(function (){var attrs23583 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23583))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23583),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23583));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23582),(function (){var attrs23584 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23584))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23584),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23584));
}
})());
}
})(),(function (){var attrs23585 = clustermap.formats.money.fmoney.call(null,(function (){var G__23595 = self__.site_stats;var G__23595__$1 = (((G__23595 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23595));var G__23595__$2 = (((G__23595__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23595__$1));return G__23595__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23585))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23585),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23585),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23590 = clustermap.formats.number.fnum.call(null,(function (){var G__23596 = self__.site_stats;var G__23596__$1 = (((G__23596 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23596));var G__23596__$2 = (((G__23596__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23596__$1));return G__23596__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23590))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23590),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23590),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23575){var self__ = this;
var _23575__$1 = this;return self__.meta23574;
});
clustermap.components.map_report.t23573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23575,meta23574__$1){var self__ = this;
var _23575__$1 = this;return (new clustermap.components.map_report.t23573(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23572,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta23574__$1));
});
clustermap.components.map_report.__GT_t23573 = (function __GT_t23573(pc_count__$1,ic_count__$1,const_count__$1,map__23572__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23574){return (new clustermap.components.map_report.t23573(pc_count__$1,ic_count__$1,const_count__$1,map__23572__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23574));
});
}
return (new clustermap.components.map_report.t23573(pc_count,ic_count,const_count,map__23572__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__23626 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23626__$1 = ((cljs.core.seq_QMARK_.call(null,map__23626))?cljs.core.apply.call(null,cljs.core.hash_map,map__23626):map__23626);var const_count = cljs.core.get.call(null,map__23626__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23626__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23626__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23627 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23627 = (function (pc_count,ic_count,const_count,map__23626,path_fn,comm,site_stats,constituency,constituency_report,meta23628){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23626 = map__23626;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta23628 = meta23628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23627.cljs$lang$type = true;
clustermap.components.map_report.t23627.cljs$lang$ctorStr = "clustermap.components.map-report/t23627";
clustermap.components.map_report.t23627.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23627");
});
clustermap.components.map_report.t23627.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23627.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23632 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs23632))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23632),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23632),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23637 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23637))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23637),(function (){var attrs23638 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs23638))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23638),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23638));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23637),(function (){var attrs23639 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs23639))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23639),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23639));
}
})());
}
})(),(function (){var attrs23640 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23640))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23640),(function (){var attrs23641 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23641))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23641),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23641));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23640),(function (){var attrs23642 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23642))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23642),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23642));
}
})());
}
})(),(function (){var attrs23643 = clustermap.formats.money.fmoney.call(null,(function (){var G__23653 = self__.site_stats;var G__23653__$1 = (((G__23653 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23653));var G__23653__$2 = (((G__23653__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23653__$1));return G__23653__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23643))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23643),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23643),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23648 = clustermap.formats.number.fnum.call(null,(function (){var G__23654 = self__.site_stats;var G__23654__$1 = (((G__23654 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23654));var G__23654__$2 = (((G__23654__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23654__$1));return G__23654__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23648))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23648),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23648),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23629){var self__ = this;
var _23629__$1 = this;return self__.meta23628;
});
clustermap.components.map_report.t23627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23629,meta23628__$1){var self__ = this;
var _23629__$1 = this;return (new clustermap.components.map_report.t23627(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23626,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta23628__$1));
});
clustermap.components.map_report.__GT_t23627 = (function __GT_t23627(pc_count__$1,ic_count__$1,const_count__$1,map__23626__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23628){return (new clustermap.components.map_report.t23627(pc_count__$1,ic_count__$1,const_count__$1,map__23626__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23628));
});
}
return (new clustermap.components.map_report.t23627(pc_count,ic_count,const_count,map__23626__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23659 = om.core.get_shared.call(null,owner);var map__23659__$1 = ((cljs.core.seq_QMARK_.call(null,map__23659))?cljs.core.apply.call(null,cljs.core.hash_map,map__23659):map__23659);var path_fn = cljs.core.get.call(null,map__23659__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23659__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__23660 = cljs.core._EQ__EQ_;var expr__23661 = type;if(cljs.core.truth_(pred__23660.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23661)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__23660.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23661)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__23660.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23661)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map