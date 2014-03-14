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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12413 = site_stats;var G__12413__$1 = (((G__12413 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12413));return G__12413__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12414 = site_stats;var G__12414__$1 = (((G__12414 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12414));return G__12414__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12415 = site_stats;var G__12415__$1 = (((G__12415 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12415));return G__12415__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12447 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12447__$1 = ((cljs.core.seq_QMARK_.call(null,map__12447))?cljs.core.apply.call(null,cljs.core.hash_map,map__12447):map__12447);var const_count = cljs.core.get.call(null,map__12447__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12447__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12447__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12448 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12448 = (function (pc_count,ic_count,const_count,map__12447,comm,site_stats,all_portfolio_companies_summary_report,meta12449){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12447 = map__12447;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12449 = meta12449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12448.cljs$lang$type = true;
clustermap.components.map_report.t12448.cljs$lang$ctorStr = "clustermap.components.map-report/t12448";
clustermap.components.map_report.t12448.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12448");
});
clustermap.components.map_report.t12448.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12448.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12453 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12453))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12453),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12453),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs12458 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12458))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12458),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12458),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs12463 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12463))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12463),(function (){var attrs12464 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12464))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12464),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12464));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12463),(function (){var attrs12465 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12465))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12465),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12465));
}
})());
}
})(),(function (){var attrs12466 = clustermap.formats.money.fmoney.call(null,(function (){var G__12476 = self__.site_stats;var G__12476__$1 = (((G__12476 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12476));var G__12476__$2 = (((G__12476__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12476__$1));return G__12476__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12466))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12466),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12466),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12471 = clustermap.formats.number.fnum.call(null,(function (){var G__12477 = self__.site_stats;var G__12477__$1 = (((G__12477 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12477));var G__12477__$2 = (((G__12477__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12477__$1));return G__12477__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12471))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12471),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12471),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12450){var self__ = this;
var _12450__$1 = this;return self__.meta12449;
});
clustermap.components.map_report.t12448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12450,meta12449__$1){var self__ = this;
var _12450__$1 = this;return (new clustermap.components.map_report.t12448(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12447,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12449__$1));
});
clustermap.components.map_report.__GT_t12448 = (function __GT_t12448(pc_count__$1,ic_count__$1,const_count__$1,map__12447__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12449){return (new clustermap.components.map_report.t12448(pc_count__$1,ic_count__$1,const_count__$1,map__12447__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12449));
});
}
return (new clustermap.components.map_report.t12448(pc_count,ic_count,const_count,map__12447__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__12503 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12503__$1 = ((cljs.core.seq_QMARK_.call(null,map__12503))?cljs.core.apply.call(null,cljs.core.hash_map,map__12503):map__12503);var const_count = cljs.core.get.call(null,map__12503__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12503__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12503__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12504 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12504 = (function (pc_count,ic_count,const_count,map__12503,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta12505){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12503 = map__12503;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12505 = meta12505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12504.cljs$lang$type = true;
clustermap.components.map_report.t12504.cljs$lang$ctorStr = "clustermap.components.map-report/t12504";
clustermap.components.map_report.t12504.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12504");
});
clustermap.components.map_report.t12504.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12504.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs12509 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12509))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12509),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12509));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12510 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12510))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12510),(function (){var attrs12511 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12511))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12511),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12511));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12510),(function (){var attrs12512 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12512))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12512),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12512));
}
})());
}
})(),(function (){var attrs12513 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12513))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12513),(function (){var attrs12514 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12514))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12514),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12514));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12513),(function (){var attrs12515 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12515))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12515),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12515));
}
})());
}
})(),(function (){var attrs12516 = clustermap.formats.money.fmoney.call(null,(function (){var G__12526 = self__.site_stats;var G__12526__$1 = (((G__12526 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12526));var G__12526__$2 = (((G__12526__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12526__$1));return G__12526__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12516))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12516),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12516),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12521 = clustermap.formats.number.fnum.call(null,(function (){var G__12527 = self__.site_stats;var G__12527__$1 = (((G__12527 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12527));var G__12527__$2 = (((G__12527__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12527__$1));return G__12527__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12521))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12521),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12521),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12506){var self__ = this;
var _12506__$1 = this;return self__.meta12505;
});
clustermap.components.map_report.t12504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12506,meta12505__$1){var self__ = this;
var _12506__$1 = this;return (new clustermap.components.map_report.t12504(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12503,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12505__$1));
});
clustermap.components.map_report.__GT_t12504 = (function __GT_t12504(pc_count__$1,ic_count__$1,const_count__$1,map__12503__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12505){return (new clustermap.components.map_report.t12504(pc_count__$1,ic_count__$1,const_count__$1,map__12503__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12505));
});
}
return (new clustermap.components.map_report.t12504(pc_count,ic_count,const_count,map__12503__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__12553 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12553__$1 = ((cljs.core.seq_QMARK_.call(null,map__12553))?cljs.core.apply.call(null,cljs.core.hash_map,map__12553):map__12553);var const_count = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12554 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12554 = (function (pc_count,ic_count,const_count,map__12553,path_fn,comm,site_stats,investor_company,investor_company_report,meta12555){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12553 = map__12553;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12555 = meta12555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12554.cljs$lang$type = true;
clustermap.components.map_report.t12554.cljs$lang$ctorStr = "clustermap.components.map-report/t12554";
clustermap.components.map_report.t12554.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12554");
});
clustermap.components.map_report.t12554.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12554.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12559 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12559))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12559),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12559));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12560 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12560))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12560),(function (){var attrs12561 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12561))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12561),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12561));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12560),(function (){var attrs12562 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12562))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12562),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12562));
}
})());
}
})(),(function (){var attrs12563 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12563))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12563),(function (){var attrs12564 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12564))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12564),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12564));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12563),(function (){var attrs12565 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12565))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12565),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12565));
}
})());
}
})(),(function (){var attrs12566 = clustermap.formats.money.fmoney.call(null,(function (){var G__12576 = self__.site_stats;var G__12576__$1 = (((G__12576 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12576));var G__12576__$2 = (((G__12576__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12576__$1));return G__12576__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12566))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12566),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12566),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12571 = clustermap.formats.number.fnum.call(null,(function (){var G__12577 = self__.site_stats;var G__12577__$1 = (((G__12577 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12577));var G__12577__$2 = (((G__12577__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12577__$1));return G__12577__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12571))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12571),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12571),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12556){var self__ = this;
var _12556__$1 = this;return self__.meta12555;
});
clustermap.components.map_report.t12554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12556,meta12555__$1){var self__ = this;
var _12556__$1 = this;return (new clustermap.components.map_report.t12554(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12553,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12555__$1));
});
clustermap.components.map_report.__GT_t12554 = (function __GT_t12554(pc_count__$1,ic_count__$1,const_count__$1,map__12553__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12555){return (new clustermap.components.map_report.t12554(pc_count__$1,ic_count__$1,const_count__$1,map__12553__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12555));
});
}
return (new clustermap.components.map_report.t12554(pc_count,ic_count,const_count,map__12553__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__12607 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12607__$1 = ((cljs.core.seq_QMARK_.call(null,map__12607))?cljs.core.apply.call(null,cljs.core.hash_map,map__12607):map__12607);var const_count = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12608 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12608 = (function (pc_count,ic_count,const_count,map__12607,path_fn,comm,site_stats,constituency,constituency_report,meta12609){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12607 = map__12607;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12609 = meta12609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12608.cljs$lang$type = true;
clustermap.components.map_report.t12608.cljs$lang$ctorStr = "clustermap.components.map-report/t12608";
clustermap.components.map_report.t12608.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t12608");
});
clustermap.components.map_report.t12608.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12608.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12613 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12613))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12613),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12613),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12618 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12618))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12618),(function (){var attrs12619 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12619))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12619),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12619));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12618),(function (){var attrs12620 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");if(cljs.core.map_QMARK_.call(null,attrs12620))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12620),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12620));
}
})());
}
})(),(function (){var attrs12621 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12621))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12621),(function (){var attrs12622 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12622))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12622),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12622));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12621),(function (){var attrs12623 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12623))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12623),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12623));
}
})());
}
})(),(function (){var attrs12624 = clustermap.formats.money.fmoney.call(null,(function (){var G__12634 = self__.site_stats;var G__12634__$1 = (((G__12634 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12634));var G__12634__$2 = (((G__12634__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12634__$1));return G__12634__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12624))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12624),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12624),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs12629 = clustermap.formats.number.fnum.call(null,(function (){var G__12635 = self__.site_stats;var G__12635__$1 = (((G__12635 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12635));var G__12635__$2 = (((G__12635__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12635__$1));return G__12635__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12629))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12629),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12629),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12610){var self__ = this;
var _12610__$1 = this;return self__.meta12609;
});
clustermap.components.map_report.t12608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12610,meta12609__$1){var self__ = this;
var _12610__$1 = this;return (new clustermap.components.map_report.t12608(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12607,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12609__$1));
});
clustermap.components.map_report.__GT_t12608 = (function __GT_t12608(pc_count__$1,ic_count__$1,const_count__$1,map__12607__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12609){return (new clustermap.components.map_report.t12608(pc_count__$1,ic_count__$1,const_count__$1,map__12607__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12609));
});
}
return (new clustermap.components.map_report.t12608(pc_count,ic_count,const_count,map__12607__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__12640 = om.core.get_shared.call(null,owner);var map__12640__$1 = ((cljs.core.seq_QMARK_.call(null,map__12640))?cljs.core.apply.call(null,cljs.core.hash_map,map__12640):map__12640);var path_fn = cljs.core.get.call(null,map__12640__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12640__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12641 = cljs.core._EQ__EQ_;var expr__12642 = type;if(cljs.core.truth_(pred__12641.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12642)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__12641.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12642)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__12641.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12642)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
