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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11674 = apc_stats;var G__11674__$1 = (((G__11674 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11674));return G__11674__$1;
})();var ic_count = (function (){var G__11675 = apc_stats;var G__11675__$1 = (((G__11675 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11675));return G__11675__$1;
})();if(typeof clustermap.components.map_report.t11676 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11676 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11677){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11677 = meta11677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11676.cljs$lang$type = true;
clustermap.components.map_report.t11676.cljs$lang$ctorStr = "clustermap.components.map-report/t11676";
clustermap.components.map_report.t11676.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11676");
});
clustermap.components.map_report.t11676.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11676.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11681 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11681))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11681),(function (){var attrs11682 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11682))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11682),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11682));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11681),(function (){var attrs11683 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11683))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11683),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11683));
}
})());
}
})(),(function (){var attrs11684 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11684))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11684),(function (){var attrs11685 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11685))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11685),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11685));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11684),(function (){var attrs11686 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11686))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11686),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11686));
}
})());
}
})(),(function (){var attrs11687 = clustermap.formats.money.fmoney.call(null,(function (){var G__11697 = self__.apc_stats;var G__11697__$1 = (((G__11697 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11697));var G__11697__$2 = (((G__11697__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11697__$1));return G__11697__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11687))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11687),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11687),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11692 = clustermap.formats.number.fnum.call(null,(function (){var G__11698 = self__.apc_stats;var G__11698__$1 = (((G__11698 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11698));var G__11698__$2 = (((G__11698__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11698__$1));return G__11698__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11692))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11692),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11692),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11678){var self__ = this;
var _11678__$1 = this;return self__.meta11677;
});
clustermap.components.map_report.t11676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11678,meta11677__$1){var self__ = this;
var _11678__$1 = this;return (new clustermap.components.map_report.t11676(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11677__$1));
});
clustermap.components.map_report.__GT_t11676 = (function __GT_t11676(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11677){return (new clustermap.components.map_report.t11676(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11677));
});
}
return (new clustermap.components.map_report.t11676(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11723 = portfolio_company;var G__11723__$1 = (((G__11723 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11723));var G__11723__$2 = (((G__11723__$1 == null))?null:cljs.core.count.call(null,G__11723__$1));return G__11723__$2;
})();var const_count = (function (){var G__11724 = portfolio_company;var G__11724__$1 = (((G__11724 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11724));var G__11724__$2 = (((G__11724__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11724__$1));var G__11724__$3 = (((G__11724__$2 == null))?null:cljs.core.count.call(null,G__11724__$2));return G__11724__$3;
})();if(typeof clustermap.components.map_report.t11725 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11725 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11726){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11726 = meta11726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11725.cljs$lang$type = true;
clustermap.components.map_report.t11725.cljs$lang$ctorStr = "clustermap.components.map-report/t11725";
clustermap.components.map_report.t11725.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11725");
});
clustermap.components.map_report.t11725.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11725.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11728 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11728))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11728),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11728));
}
})()),React.DOM.ul(null,(function (){var attrs11729 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11729))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11729),(function (){var attrs11730 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11730))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11730),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11730));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11729),(function (){var attrs11731 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11731))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11731),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11731));
}
})());
}
})(),(function (){var attrs11732 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11732))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11732),(function (){var attrs11733 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11733))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11733),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11733));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11732),(function (){var attrs11734 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11734))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11734),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11734));
}
})());
}
})(),(function (){var attrs11735 = clustermap.formats.money.fmoney.call(null,(function (){var G__11745 = self__.portfolio_company;var G__11745__$1 = (((G__11745 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11745));return G__11745__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11735))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11735),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11735),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11740 = clustermap.formats.number.fnum.call(null,(function (){var G__11746 = self__.portfolio_company;var G__11746__$1 = (((G__11746 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11746));return G__11746__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11740))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11740),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11740),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11727){var self__ = this;
var _11727__$1 = this;return self__.meta11726;
});
clustermap.components.map_report.t11725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11727,meta11726__$1){var self__ = this;
var _11727__$1 = this;return (new clustermap.components.map_report.t11725(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11726__$1));
});
clustermap.components.map_report.__GT_t11725 = (function __GT_t11725(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11726){return (new clustermap.components.map_report.t11725(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11726));
});
}
return (new clustermap.components.map_report.t11725(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11771 = investor_company;var G__11771__$1 = (((G__11771 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11771));var G__11771__$2 = (((G__11771__$1 == null))?null:cljs.core.count.call(null,G__11771__$1));return G__11771__$2;
})();var const_count = (function (){var G__11772 = investor_company;var G__11772__$1 = (((G__11772 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11772));var G__11772__$2 = (((G__11772__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11772__$1));var G__11772__$3 = (((G__11772__$2 == null))?null:cljs.core.count.call(null,G__11772__$2));return G__11772__$3;
})();if(typeof clustermap.components.map_report.t11773 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11773 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11774){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11774 = meta11774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11773.cljs$lang$type = true;
clustermap.components.map_report.t11773.cljs$lang$ctorStr = "clustermap.components.map-report/t11773";
clustermap.components.map_report.t11773.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11773");
});
clustermap.components.map_report.t11773.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11773.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11776 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11776))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11776),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11776));
}
})()),React.DOM.ul(null,(function (){var attrs11777 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11777))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11777),(function (){var attrs11778 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11778))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11778),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11778));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11777),(function (){var attrs11779 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11779))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11779),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11779));
}
})());
}
})(),(function (){var attrs11780 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11780))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11780),(function (){var attrs11781 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11781))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11781),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11781));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11780),(function (){var attrs11782 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11782))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11782),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11782));
}
})());
}
})(),(function (){var attrs11783 = clustermap.formats.money.fmoney.call(null,(function (){var G__11793 = self__.investor_company;var G__11793__$1 = (((G__11793 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11793));return G__11793__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11783))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11783),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11783),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11788 = clustermap.formats.number.fnum.call(null,(function (){var G__11794 = self__.investor_company;var G__11794__$1 = (((G__11794 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11794));return G__11794__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11788))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11788),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11788),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11775){var self__ = this;
var _11775__$1 = this;return self__.meta11774;
});
clustermap.components.map_report.t11773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11775,meta11774__$1){var self__ = this;
var _11775__$1 = this;return (new clustermap.components.map_report.t11773(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11774__$1));
});
clustermap.components.map_report.__GT_t11773 = (function __GT_t11773(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11774){return (new clustermap.components.map_report.t11773(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11774));
});
}
return (new clustermap.components.map_report.t11773(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11820 = constituency;var G__11820__$1 = (((G__11820 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11820));var G__11820__$2 = (((G__11820__$1 == null))?null:cljs.core.count.call(null,G__11820__$1));return G__11820__$2;
})();var ic_count = (function (){var G__11821 = constituency;var G__11821__$1 = (((G__11821 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11821));var G__11821__$2 = (((G__11821__$1 == null))?null:cljs.core.count.call(null,G__11821__$1));return G__11821__$2;
})();if(typeof clustermap.components.map_report.t11822 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11822 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11823){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11823 = meta11823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11822.cljs$lang$type = true;
clustermap.components.map_report.t11822.cljs$lang$ctorStr = "clustermap.components.map-report/t11822";
clustermap.components.map_report.t11822.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11822");
});
clustermap.components.map_report.t11822.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11822.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11825 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11825))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11825),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11825));
}
})(),(function (){var attrs11826 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11826))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11826),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11826),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11827 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11827))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11827),(function (){var attrs11828 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11828))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11828),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11828));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11827),(function (){var attrs11829 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11829))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11829),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11829));
}
})());
}
})(),(function (){var attrs11830 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11830))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11830),(function (){var attrs11831 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11831))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11831),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11831));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11830),(function (){var attrs11832 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11832))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11832),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11832));
}
})());
}
})(),(function (){var attrs11833 = clustermap.formats.money.fmoney.call(null,(function (){var G__11843 = self__.constituency;var G__11843__$1 = (((G__11843 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11843));return G__11843__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11833))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11833),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11833),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11838 = clustermap.formats.number.fnum.call(null,(function (){var G__11844 = self__.constituency;var G__11844__$1 = (((G__11844 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11844));return G__11844__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11838))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11838),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11838),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11824){var self__ = this;
var _11824__$1 = this;return self__.meta11823;
});
clustermap.components.map_report.t11822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11824,meta11823__$1){var self__ = this;
var _11824__$1 = this;return (new clustermap.components.map_report.t11822(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11823__$1));
});
clustermap.components.map_report.__GT_t11822 = (function __GT_t11822(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11823){return (new clustermap.components.map_report.t11822(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11823));
});
}
return (new clustermap.components.map_report.t11822(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11848 = cljs.core._EQ__EQ_;var expr__11849 = type;if(cljs.core.truth_(pred__11848.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11849)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11848.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11849)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11848.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11849)))
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