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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__23424 = site_stats;var G__23424__$1 = (((G__23424 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23424));return G__23424__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__23425 = site_stats;var G__23425__$1 = (((G__23425 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23425));return G__23425__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__23426 = site_stats;var G__23426__$1 = (((G__23426 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23426));return G__23426__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__23458 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23458__$1 = ((cljs.core.seq_QMARK_.call(null,map__23458))?cljs.core.apply.call(null,cljs.core.hash_map,map__23458):map__23458);var const_count = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23459 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23459 = (function (pc_count,ic_count,const_count,map__23458,comm,site_stats,all_portfolio_companies_summary_report,meta23460){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23458 = map__23458;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23460 = meta23460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23459.cljs$lang$type = true;
clustermap.components.map_report.t23459.cljs$lang$ctorStr = "clustermap.components.map-report/t23459";
clustermap.components.map_report.t23459.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23459");
});
clustermap.components.map_report.t23459.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23459.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23464 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23464))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23464),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23464),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs23469 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23469))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23469),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23469),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs23474 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23474))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23474),(function (){var attrs23475 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23475))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23475),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23475));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23474),(function (){var attrs23476 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23476))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23476),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23476));
}
})());
}
})(),(function (){var attrs23477 = clustermap.formats.money.fmoney.call(null,(function (){var G__23487 = self__.site_stats;var G__23487__$1 = (((G__23487 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23487));var G__23487__$2 = (((G__23487__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23487__$1));return G__23487__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23477))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23477),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23477),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23482 = clustermap.formats.number.fnum.call(null,(function (){var G__23488 = self__.site_stats;var G__23488__$1 = (((G__23488 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23488));var G__23488__$2 = (((G__23488__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23488__$1));return G__23488__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23482))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23482),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23482),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23461){var self__ = this;
var _23461__$1 = this;return self__.meta23460;
});
clustermap.components.map_report.t23459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23461,meta23460__$1){var self__ = this;
var _23461__$1 = this;return (new clustermap.components.map_report.t23459(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23458,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23460__$1));
});
clustermap.components.map_report.__GT_t23459 = (function __GT_t23459(pc_count__$1,ic_count__$1,const_count__$1,map__23458__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23460){return (new clustermap.components.map_report.t23459(pc_count__$1,ic_count__$1,const_count__$1,map__23458__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23460));
});
}
return (new clustermap.components.map_report.t23459(pc_count,ic_count,const_count,map__23458__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__23514 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23514__$1 = ((cljs.core.seq_QMARK_.call(null,map__23514))?cljs.core.apply.call(null,cljs.core.hash_map,map__23514):map__23514);var const_count = cljs.core.get.call(null,map__23514__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23514__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23514__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23515 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23515 = (function (pc_count,ic_count,const_count,map__23514,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta23516){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23514 = map__23514;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta23516 = meta23516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23515.cljs$lang$type = true;
clustermap.components.map_report.t23515.cljs$lang$ctorStr = "clustermap.components.map-report/t23515";
clustermap.components.map_report.t23515.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23515");
});
clustermap.components.map_report.t23515.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23515.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs23520 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs23520))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23520),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23520));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23521 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23521))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23521),(function (){var attrs23522 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23522))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23522),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23522));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23521),(function (){var attrs23523 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23523))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23523),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23523));
}
})());
}
})(),(function (){var attrs23524 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23524))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23524),(function (){var attrs23525 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23525))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23525),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23525));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23524),(function (){var attrs23526 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23526))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23526),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23526));
}
})());
}
})(),(function (){var attrs23527 = clustermap.formats.money.fmoney.call(null,(function (){var G__23537 = self__.site_stats;var G__23537__$1 = (((G__23537 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23537));var G__23537__$2 = (((G__23537__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23537__$1));return G__23537__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23527))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23527),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23527),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23532 = clustermap.formats.number.fnum.call(null,(function (){var G__23538 = self__.site_stats;var G__23538__$1 = (((G__23538 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23538));var G__23538__$2 = (((G__23538__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23538__$1));return G__23538__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23532))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23532),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23532),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23517){var self__ = this;
var _23517__$1 = this;return self__.meta23516;
});
clustermap.components.map_report.t23515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23517,meta23516__$1){var self__ = this;
var _23517__$1 = this;return (new clustermap.components.map_report.t23515(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23514,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta23516__$1));
});
clustermap.components.map_report.__GT_t23515 = (function __GT_t23515(pc_count__$1,ic_count__$1,const_count__$1,map__23514__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23516){return (new clustermap.components.map_report.t23515(pc_count__$1,ic_count__$1,const_count__$1,map__23514__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23516));
});
}
return (new clustermap.components.map_report.t23515(pc_count,ic_count,const_count,map__23514__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__23564 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23564__$1 = ((cljs.core.seq_QMARK_.call(null,map__23564))?cljs.core.apply.call(null,cljs.core.hash_map,map__23564):map__23564);var const_count = cljs.core.get.call(null,map__23564__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23564__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23564__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23565 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23565 = (function (pc_count,ic_count,const_count,map__23564,path_fn,comm,site_stats,investor_company,investor_company_report,meta23566){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23564 = map__23564;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta23566 = meta23566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23565.cljs$lang$type = true;
clustermap.components.map_report.t23565.cljs$lang$ctorStr = "clustermap.components.map-report/t23565";
clustermap.components.map_report.t23565.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23565");
});
clustermap.components.map_report.t23565.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23565.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23570 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs23570))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23570),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23570));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23571 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23571))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23571),(function (){var attrs23572 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs23572))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23572),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23572));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23571),(function (){var attrs23573 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs23573))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23573),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23573));
}
})());
}
})(),(function (){var attrs23574 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs23574))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23574),(function (){var attrs23575 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23575))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23575),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23575));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23574),(function (){var attrs23576 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs23576))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23576),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23576));
}
})());
}
})(),(function (){var attrs23577 = clustermap.formats.money.fmoney.call(null,(function (){var G__23587 = self__.site_stats;var G__23587__$1 = (((G__23587 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23587));var G__23587__$2 = (((G__23587__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23587__$1));return G__23587__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23577))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23577),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23577),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23582 = clustermap.formats.number.fnum.call(null,(function (){var G__23588 = self__.site_stats;var G__23588__$1 = (((G__23588 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23588));var G__23588__$2 = (((G__23588__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23588__$1));return G__23588__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23582))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23582),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23582),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23567){var self__ = this;
var _23567__$1 = this;return self__.meta23566;
});
clustermap.components.map_report.t23565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23567,meta23566__$1){var self__ = this;
var _23567__$1 = this;return (new clustermap.components.map_report.t23565(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23564,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta23566__$1));
});
clustermap.components.map_report.__GT_t23565 = (function __GT_t23565(pc_count__$1,ic_count__$1,const_count__$1,map__23564__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23566){return (new clustermap.components.map_report.t23565(pc_count__$1,ic_count__$1,const_count__$1,map__23564__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23566));
});
}
return (new clustermap.components.map_report.t23565(pc_count,ic_count,const_count,map__23564__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__23618 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23618__$1 = ((cljs.core.seq_QMARK_.call(null,map__23618))?cljs.core.apply.call(null,cljs.core.hash_map,map__23618):map__23618);var const_count = cljs.core.get.call(null,map__23618__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23618__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23618__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23619 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23619 = (function (pc_count,ic_count,const_count,map__23618,path_fn,comm,site_stats,constituency,constituency_report,meta23620){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23618 = map__23618;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta23620 = meta23620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23619.cljs$lang$type = true;
clustermap.components.map_report.t23619.cljs$lang$ctorStr = "clustermap.components.map-report/t23619";
clustermap.components.map_report.t23619.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map-report/t23619");
});
clustermap.components.map_report.t23619.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23619.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23624 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs23624))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23624),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23624),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23629 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs23629))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23629),(function (){var attrs23630 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs23630))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23630),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23630));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23629),(function (){var attrs23631 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs23631))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23631),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23631));
}
})());
}
})(),(function (){var attrs23632 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs23632))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23632),(function (){var attrs23633 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23633))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23633),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23633));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23632),(function (){var attrs23634 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs23634))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs23634),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs23634));
}
})());
}
})(),(function (){var attrs23635 = clustermap.formats.money.fmoney.call(null,(function (){var G__23645 = self__.site_stats;var G__23645__$1 = (((G__23645 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23645));var G__23645__$2 = (((G__23645__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23645__$1));return G__23645__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23635))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23635),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23635),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23640 = clustermap.formats.number.fnum.call(null,(function (){var G__23646 = self__.site_stats;var G__23646__$1 = (((G__23646 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23646));var G__23646__$2 = (((G__23646__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23646__$1));return G__23646__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs23640))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs23640),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs23640),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t23619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23621){var self__ = this;
var _23621__$1 = this;return self__.meta23620;
});
clustermap.components.map_report.t23619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23621,meta23620__$1){var self__ = this;
var _23621__$1 = this;return (new clustermap.components.map_report.t23619(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23618,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta23620__$1));
});
clustermap.components.map_report.__GT_t23619 = (function __GT_t23619(pc_count__$1,ic_count__$1,const_count__$1,map__23618__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23620){return (new clustermap.components.map_report.t23619(pc_count__$1,ic_count__$1,const_count__$1,map__23618__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23620));
});
}
return (new clustermap.components.map_report.t23619(pc_count,ic_count,const_count,map__23618__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23651 = om.core.get_shared.call(null,owner);var map__23651__$1 = ((cljs.core.seq_QMARK_.call(null,map__23651))?cljs.core.apply.call(null,cljs.core.hash_map,map__23651):map__23651);var path_fn = cljs.core.get.call(null,map__23651__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23651__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__23652 = cljs.core._EQ__EQ_;var expr__23653 = type;if(cljs.core.truth_(pred__23652.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23653)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__23652.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23653)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_(pred__23652.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23653)))
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