// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11678 = apc_stats;var G__11678__$1 = (((G__11678 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11678));return G__11678__$1;
})();var ic_count = (function (){var G__11679 = apc_stats;var G__11679__$1 = (((G__11679 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11679));return G__11679__$1;
})();if(typeof clustermap.components.map_report.t11680 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11680 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11681){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11681 = meta11681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11680.cljs$lang$type = true;
clustermap.components.map_report.t11680.cljs$lang$ctorStr = "clustermap.components.map-report/t11680";
clustermap.components.map_report.t11680.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11680");
});
clustermap.components.map_report.t11680.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11680.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11685 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11685))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11685),(function (){var attrs11686 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11686))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11686),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11686));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11685),(function (){var attrs11687 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11687))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11687),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11687));
}
})());
}
})(),(function (){var attrs11688 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11688))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11688),(function (){var attrs11689 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11689))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11689),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11689));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11688),(function (){var attrs11690 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11690))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11690),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11690));
}
})());
}
})(),(function (){var attrs11691 = clustermap.formats.money.fmoney.call(null,(function (){var G__11701 = self__.apc_stats;var G__11701__$1 = (((G__11701 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11701));var G__11701__$2 = (((G__11701__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11701__$1));return G__11701__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11691))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11691),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11691),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11696 = clustermap.formats.number.fnum.call(null,(function (){var G__11702 = self__.apc_stats;var G__11702__$1 = (((G__11702 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11702));var G__11702__$2 = (((G__11702__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11702__$1));return G__11702__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11696))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11696),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11696),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11682){var self__ = this;
var _11682__$1 = this;return self__.meta11681;
});
clustermap.components.map_report.t11680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11682,meta11681__$1){var self__ = this;
var _11682__$1 = this;return (new clustermap.components.map_report.t11680(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11681__$1));
});
clustermap.components.map_report.__GT_t11680 = (function __GT_t11680(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11681){return (new clustermap.components.map_report.t11680(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11681));
});
}
return (new clustermap.components.map_report.t11680(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11727 = portfolio_company;var G__11727__$1 = (((G__11727 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11727));var G__11727__$2 = (((G__11727__$1 == null))?null:cljs.core.count.call(null,G__11727__$1));return G__11727__$2;
})();var const_count = (function (){var G__11728 = portfolio_company;var G__11728__$1 = (((G__11728 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11728));var G__11728__$2 = (((G__11728__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11728__$1));var G__11728__$3 = (((G__11728__$2 == null))?null:cljs.core.count.call(null,G__11728__$2));return G__11728__$3;
})();if(typeof clustermap.components.map_report.t11729 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11729 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11730){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11730 = meta11730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11729.cljs$lang$type = true;
clustermap.components.map_report.t11729.cljs$lang$ctorStr = "clustermap.components.map-report/t11729";
clustermap.components.map_report.t11729.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11729");
});
clustermap.components.map_report.t11729.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11729.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11732 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11732))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11732),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11732));
}
})()),React.DOM.ul(null,(function (){var attrs11733 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11733))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11733),(function (){var attrs11734 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11734))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11734),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11734));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11733),(function (){var attrs11735 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11735))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11735),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11735));
}
})());
}
})(),(function (){var attrs11736 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11736))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11736),(function (){var attrs11737 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11737))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11737),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11737));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11736),(function (){var attrs11738 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11738))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11738),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11738));
}
})());
}
})(),(function (){var attrs11739 = clustermap.formats.money.fmoney.call(null,(function (){var G__11749 = self__.portfolio_company;var G__11749__$1 = (((G__11749 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11749));return G__11749__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11739))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11739),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11739),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11744 = clustermap.formats.number.fnum.call(null,(function (){var G__11750 = self__.portfolio_company;var G__11750__$1 = (((G__11750 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11750));return G__11750__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11744))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11744),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11744),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11731){var self__ = this;
var _11731__$1 = this;return self__.meta11730;
});
clustermap.components.map_report.t11729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11731,meta11730__$1){var self__ = this;
var _11731__$1 = this;return (new clustermap.components.map_report.t11729(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11730__$1));
});
clustermap.components.map_report.__GT_t11729 = (function __GT_t11729(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11730){return (new clustermap.components.map_report.t11729(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11730));
});
}
return (new clustermap.components.map_report.t11729(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11775 = investor_company;var G__11775__$1 = (((G__11775 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11775));var G__11775__$2 = (((G__11775__$1 == null))?null:cljs.core.count.call(null,G__11775__$1));return G__11775__$2;
})();var const_count = (function (){var G__11776 = investor_company;var G__11776__$1 = (((G__11776 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11776));var G__11776__$2 = (((G__11776__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11776__$1));var G__11776__$3 = (((G__11776__$2 == null))?null:cljs.core.count.call(null,G__11776__$2));return G__11776__$3;
})();if(typeof clustermap.components.map_report.t11777 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11777 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11778){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11778 = meta11778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11777.cljs$lang$type = true;
clustermap.components.map_report.t11777.cljs$lang$ctorStr = "clustermap.components.map-report/t11777";
clustermap.components.map_report.t11777.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11777");
});
clustermap.components.map_report.t11777.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11777.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11780 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11780))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11780),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11780));
}
})()),React.DOM.ul(null,(function (){var attrs11781 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11781))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11781),(function (){var attrs11782 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11782))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11782),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11782));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11781),(function (){var attrs11783 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11783))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11783),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11783));
}
})());
}
})(),(function (){var attrs11784 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11784))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11784),(function (){var attrs11785 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11785))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11785),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11785));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11784),(function (){var attrs11786 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11786))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11786),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11786));
}
})());
}
})(),(function (){var attrs11787 = clustermap.formats.money.fmoney.call(null,(function (){var G__11797 = self__.investor_company;var G__11797__$1 = (((G__11797 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11797));return G__11797__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11787))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11787),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11787),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11792 = clustermap.formats.number.fnum.call(null,(function (){var G__11798 = self__.investor_company;var G__11798__$1 = (((G__11798 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11798));return G__11798__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11792))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11792),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11792),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11779){var self__ = this;
var _11779__$1 = this;return self__.meta11778;
});
clustermap.components.map_report.t11777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11779,meta11778__$1){var self__ = this;
var _11779__$1 = this;return (new clustermap.components.map_report.t11777(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11778__$1));
});
clustermap.components.map_report.__GT_t11777 = (function __GT_t11777(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11778){return (new clustermap.components.map_report.t11777(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11778));
});
}
return (new clustermap.components.map_report.t11777(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11824 = constituency;var G__11824__$1 = (((G__11824 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11824));var G__11824__$2 = (((G__11824__$1 == null))?null:cljs.core.count.call(null,G__11824__$1));return G__11824__$2;
})();var ic_count = (function (){var G__11825 = constituency;var G__11825__$1 = (((G__11825 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11825));var G__11825__$2 = (((G__11825__$1 == null))?null:cljs.core.count.call(null,G__11825__$1));return G__11825__$2;
})();if(typeof clustermap.components.map_report.t11826 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11826 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11827){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11827 = meta11827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11826.cljs$lang$type = true;
clustermap.components.map_report.t11826.cljs$lang$ctorStr = "clustermap.components.map-report/t11826";
clustermap.components.map_report.t11826.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11826");
});
clustermap.components.map_report.t11826.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11826.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11829 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11829))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11829),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11829));
}
})(),(function (){var attrs11830 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11830))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11830),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11830),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11831 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11831))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11831),(function (){var attrs11832 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11832))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11832),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11832));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11831),(function (){var attrs11833 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11833))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11833),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11833));
}
})());
}
})(),(function (){var attrs11834 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11834))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11834),(function (){var attrs11835 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11835))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11835),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11835));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11834),(function (){var attrs11836 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11836))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11836),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11836));
}
})());
}
})(),(function (){var attrs11837 = clustermap.formats.money.fmoney.call(null,(function (){var G__11847 = self__.constituency;var G__11847__$1 = (((G__11847 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11847));return G__11847__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11837))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11837),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11837),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11842 = clustermap.formats.number.fnum.call(null,(function (){var G__11848 = self__.constituency;var G__11848__$1 = (((G__11848 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11848));return G__11848__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11842))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11842),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11842),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11828){var self__ = this;
var _11828__$1 = this;return self__.meta11827;
});
clustermap.components.map_report.t11826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11828,meta11827__$1){var self__ = this;
var _11828__$1 = this;return (new clustermap.components.map_report.t11826(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11827__$1));
});
clustermap.components.map_report.__GT_t11826 = (function __GT_t11826(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11827){return (new clustermap.components.map_report.t11826(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11827));
});
}
return (new clustermap.components.map_report.t11826(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11852 = cljs.core._EQ__EQ_;var expr__11853 = type;if(cljs.core.truth_(pred__11852.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11853)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11852.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11853)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11852.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11853)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map