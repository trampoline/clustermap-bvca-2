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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11745 = apc_stats;var G__11745__$1 = (((G__11745 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11745));return G__11745__$1;
})();var ic_count = (function (){var G__11746 = apc_stats;var G__11746__$1 = (((G__11746 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11746));return G__11746__$1;
})();if(typeof clustermap.components.map_report.t11747 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11747 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11748){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11748 = meta11748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11747.cljs$lang$type = true;
clustermap.components.map_report.t11747.cljs$lang$ctorStr = "clustermap.components.map-report/t11747";
clustermap.components.map_report.t11747.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11747");
});
clustermap.components.map_report.t11747.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11747.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11752 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11752))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11752),(function (){var attrs11753 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11753))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11753),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11753));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11752),(function (){var attrs11754 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11754))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11754),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11754));
}
})());
}
})(),(function (){var attrs11755 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11755))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11755),(function (){var attrs11756 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11756))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11756),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11756));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11755),(function (){var attrs11757 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11757))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11757),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11757));
}
})());
}
})(),(function (){var attrs11758 = clustermap.formats.money.fmoney.call(null,(function (){var G__11768 = self__.apc_stats;var G__11768__$1 = (((G__11768 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11768));var G__11768__$2 = (((G__11768__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11768__$1));return G__11768__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11758))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11758),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11758),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11763 = clustermap.formats.number.fnum.call(null,(function (){var G__11769 = self__.apc_stats;var G__11769__$1 = (((G__11769 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11769));var G__11769__$2 = (((G__11769__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11769__$1));return G__11769__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11763))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11763),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11763),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11749){var self__ = this;
var _11749__$1 = this;return self__.meta11748;
});
clustermap.components.map_report.t11747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11749,meta11748__$1){var self__ = this;
var _11749__$1 = this;return (new clustermap.components.map_report.t11747(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11748__$1));
});
clustermap.components.map_report.__GT_t11747 = (function __GT_t11747(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11748){return (new clustermap.components.map_report.t11747(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11748));
});
}
return (new clustermap.components.map_report.t11747(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11794 = portfolio_company;var G__11794__$1 = (((G__11794 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11794));var G__11794__$2 = (((G__11794__$1 == null))?null:cljs.core.count.call(null,G__11794__$1));return G__11794__$2;
})();var const_count = (function (){var G__11795 = portfolio_company;var G__11795__$1 = (((G__11795 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11795));var G__11795__$2 = (((G__11795__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11795__$1));var G__11795__$3 = (((G__11795__$2 == null))?null:cljs.core.count.call(null,G__11795__$2));return G__11795__$3;
})();if(typeof clustermap.components.map_report.t11796 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11796 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11797){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11797 = meta11797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11796.cljs$lang$type = true;
clustermap.components.map_report.t11796.cljs$lang$ctorStr = "clustermap.components.map-report/t11796";
clustermap.components.map_report.t11796.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11796");
});
clustermap.components.map_report.t11796.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11796.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11799 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11799))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11799),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11799));
}
})()),React.DOM.ul(null,(function (){var attrs11800 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11800))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11800),(function (){var attrs11801 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11801))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11801),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11801));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11800),(function (){var attrs11802 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11802))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11802),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11802));
}
})());
}
})(),(function (){var attrs11803 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11803))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11803),(function (){var attrs11804 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11804))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11804),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11804));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11803),(function (){var attrs11805 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11805))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11805),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11805));
}
})());
}
})(),(function (){var attrs11806 = clustermap.formats.money.fmoney.call(null,(function (){var G__11816 = self__.portfolio_company;var G__11816__$1 = (((G__11816 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11816));return G__11816__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11806))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11806),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11806),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11811 = clustermap.formats.number.fnum.call(null,(function (){var G__11817 = self__.portfolio_company;var G__11817__$1 = (((G__11817 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11817));return G__11817__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11811))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11811),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11811),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11798){var self__ = this;
var _11798__$1 = this;return self__.meta11797;
});
clustermap.components.map_report.t11796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11798,meta11797__$1){var self__ = this;
var _11798__$1 = this;return (new clustermap.components.map_report.t11796(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11797__$1));
});
clustermap.components.map_report.__GT_t11796 = (function __GT_t11796(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11797){return (new clustermap.components.map_report.t11796(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11797));
});
}
return (new clustermap.components.map_report.t11796(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11842 = investor_company;var G__11842__$1 = (((G__11842 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11842));var G__11842__$2 = (((G__11842__$1 == null))?null:cljs.core.count.call(null,G__11842__$1));return G__11842__$2;
})();var const_count = (function (){var G__11843 = investor_company;var G__11843__$1 = (((G__11843 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11843));var G__11843__$2 = (((G__11843__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11843__$1));var G__11843__$3 = (((G__11843__$2 == null))?null:cljs.core.count.call(null,G__11843__$2));return G__11843__$3;
})();if(typeof clustermap.components.map_report.t11844 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11844 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11845){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11845 = meta11845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11844.cljs$lang$type = true;
clustermap.components.map_report.t11844.cljs$lang$ctorStr = "clustermap.components.map-report/t11844";
clustermap.components.map_report.t11844.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11844");
});
clustermap.components.map_report.t11844.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11844.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11847 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11847))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11847),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11847));
}
})()),React.DOM.ul(null,(function (){var attrs11848 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11848))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11848),(function (){var attrs11849 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11849))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11849),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11849));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11848),(function (){var attrs11850 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11850))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11850),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11850));
}
})());
}
})(),(function (){var attrs11851 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11851))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11851),(function (){var attrs11852 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11852))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11852),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11852));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11851),(function (){var attrs11853 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11853))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11853),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11853));
}
})());
}
})(),(function (){var attrs11854 = clustermap.formats.money.fmoney.call(null,(function (){var G__11864 = self__.investor_company;var G__11864__$1 = (((G__11864 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11864));return G__11864__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11854))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11854),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11854),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11859 = clustermap.formats.number.fnum.call(null,(function (){var G__11865 = self__.investor_company;var G__11865__$1 = (((G__11865 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11865));return G__11865__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11859))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11859),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11859),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11846){var self__ = this;
var _11846__$1 = this;return self__.meta11845;
});
clustermap.components.map_report.t11844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11846,meta11845__$1){var self__ = this;
var _11846__$1 = this;return (new clustermap.components.map_report.t11844(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11845__$1));
});
clustermap.components.map_report.__GT_t11844 = (function __GT_t11844(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11845){return (new clustermap.components.map_report.t11844(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11845));
});
}
return (new clustermap.components.map_report.t11844(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11891 = constituency;var G__11891__$1 = (((G__11891 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11891));var G__11891__$2 = (((G__11891__$1 == null))?null:cljs.core.count.call(null,G__11891__$1));return G__11891__$2;
})();var ic_count = (function (){var G__11892 = constituency;var G__11892__$1 = (((G__11892 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11892));var G__11892__$2 = (((G__11892__$1 == null))?null:cljs.core.count.call(null,G__11892__$1));return G__11892__$2;
})();if(typeof clustermap.components.map_report.t11893 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11893 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11894){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11894 = meta11894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11893.cljs$lang$type = true;
clustermap.components.map_report.t11893.cljs$lang$ctorStr = "clustermap.components.map-report/t11893";
clustermap.components.map_report.t11893.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11893");
});
clustermap.components.map_report.t11893.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11893.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11896 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11896))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11896),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11896));
}
})(),(function (){var attrs11897 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11897))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11897),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11897),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11898 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11898))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11898),(function (){var attrs11899 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11899))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11899),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11899));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11898),(function (){var attrs11900 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11900))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11900),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11900));
}
})());
}
})(),(function (){var attrs11901 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11901))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11901),(function (){var attrs11902 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11902))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11902),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11902));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11901),(function (){var attrs11903 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11903))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11903),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11903));
}
})());
}
})(),(function (){var attrs11904 = clustermap.formats.money.fmoney.call(null,(function (){var G__11914 = self__.constituency;var G__11914__$1 = (((G__11914 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11914));return G__11914__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11904))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11904),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11904),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11909 = clustermap.formats.number.fnum.call(null,(function (){var G__11915 = self__.constituency;var G__11915__$1 = (((G__11915 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11915));return G__11915__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11909))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11909),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11909),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11895){var self__ = this;
var _11895__$1 = this;return self__.meta11894;
});
clustermap.components.map_report.t11893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11895,meta11894__$1){var self__ = this;
var _11895__$1 = this;return (new clustermap.components.map_report.t11893(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11894__$1));
});
clustermap.components.map_report.__GT_t11893 = (function __GT_t11893(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11894){return (new clustermap.components.map_report.t11893(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11894));
});
}
return (new clustermap.components.map_report.t11893(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11919 = cljs.core._EQ__EQ_;var expr__11920 = type;if(cljs.core.truth_(pred__11919.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11920)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11919.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11920)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11919.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11920)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map