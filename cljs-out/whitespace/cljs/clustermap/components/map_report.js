// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
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
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__30589 = apc_stats;var G__30589__$1 = (((G__30589 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__30589));return G__30589__$1;
})();var ic_count = (function (){var G__30590 = apc_stats;var G__30590__$1 = (((G__30590 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__30590));return G__30590__$1;
})();if(typeof clustermap.components.map_report.t30591 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30591 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta30592){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta30592 = meta30592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30591.cljs$lang$type = true;
clustermap.components.map_report.t30591.cljs$lang$ctorStr = "clustermap.components.map-report/t30591";
clustermap.components.map_report.t30591.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30591");
});
clustermap.components.map_report.t30591.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30591.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs30596 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30596))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30596),(function (){var attrs30597 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30597))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30597),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30597));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30596),(function (){var attrs30598 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30598))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30598),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30598));
}
})());
}
})(),(function (){var attrs30599 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30599))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30599),(function (){var attrs30600 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30600))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30600),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30600));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30599),(function (){var attrs30601 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30601))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30601),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30601));
}
})());
}
})(),(function (){var attrs30602 = clustermap.formats.money.fmoney.call(null,(function (){var G__30612 = self__.apc_stats;var G__30612__$1 = (((G__30612 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__30612));var G__30612__$2 = (((G__30612__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30612__$1));return G__30612__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30602))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30602),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30602),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30607 = clustermap.formats.number.fnum.call(null,(function (){var G__30613 = self__.apc_stats;var G__30613__$1 = (((G__30613 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__30613));var G__30613__$2 = (((G__30613__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30613__$1));return G__30613__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30607))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30607),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30607),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30593){var self__ = this;
var _30593__$1 = this;return self__.meta30592;
});
clustermap.components.map_report.t30591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30593,meta30592__$1){var self__ = this;
var _30593__$1 = this;return (new clustermap.components.map_report.t30591(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta30592__$1));
});
clustermap.components.map_report.__GT_t30591 = (function __GT_t30591(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta30592){return (new clustermap.components.map_report.t30591(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta30592));
});
}
return (new clustermap.components.map_report.t30591(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__30638 = portfolio_company;var G__30638__$1 = (((G__30638 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__30638));var G__30638__$2 = (((G__30638__$1 == null))?null:cljs.core.count.call(null,G__30638__$1));return G__30638__$2;
})();var const_count = (function (){var G__30639 = portfolio_company;var G__30639__$1 = (((G__30639 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__30639));var G__30639__$2 = (((G__30639__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__30639__$1));var G__30639__$3 = (((G__30639__$2 == null))?null:cljs.core.count.call(null,G__30639__$2));return G__30639__$3;
})();if(typeof clustermap.components.map_report.t30640 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30640 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta30641){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta30641 = meta30641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30640.cljs$lang$type = true;
clustermap.components.map_report.t30640.cljs$lang$ctorStr = "clustermap.components.map-report/t30640";
clustermap.components.map_report.t30640.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30640");
});
clustermap.components.map_report.t30640.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30640.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30643 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs30643))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30643),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30643));
}
})()),React.DOM.ul(null,(function (){var attrs30644 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs30644))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30644),(function (){var attrs30645 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30645))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30645),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30645));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30644),(function (){var attrs30646 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30646))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30646),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30646));
}
})());
}
})(),(function (){var attrs30647 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs30647))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30647),(function (){var attrs30648 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30648))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30648),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30648));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30647),(function (){var attrs30649 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30649))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30649),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30649));
}
})());
}
})(),(function (){var attrs30650 = clustermap.formats.money.fmoney.call(null,(function (){var G__30660 = self__.portfolio_company;var G__30660__$1 = (((G__30660 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__30660));return G__30660__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30650))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30650),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30650),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs30655 = clustermap.formats.number.fnum.call(null,(function (){var G__30661 = self__.portfolio_company;var G__30661__$1 = (((G__30661 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__30661));return G__30661__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30655))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30655),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30655),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t30640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30642){var self__ = this;
var _30642__$1 = this;return self__.meta30641;
});
clustermap.components.map_report.t30640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30642,meta30641__$1){var self__ = this;
var _30642__$1 = this;return (new clustermap.components.map_report.t30640(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta30641__$1));
});
clustermap.components.map_report.__GT_t30640 = (function __GT_t30640(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta30641){return (new clustermap.components.map_report.t30640(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta30641));
});
}
return (new clustermap.components.map_report.t30640(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__30686 = investor_company;var G__30686__$1 = (((G__30686 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__30686));var G__30686__$2 = (((G__30686__$1 == null))?null:cljs.core.count.call(null,G__30686__$1));return G__30686__$2;
})();var const_count = (function (){var G__30687 = investor_company;var G__30687__$1 = (((G__30687 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__30687));var G__30687__$2 = (((G__30687__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__30687__$1));var G__30687__$3 = (((G__30687__$2 == null))?null:cljs.core.count.call(null,G__30687__$2));return G__30687__$3;
})();if(typeof clustermap.components.map_report.t30688 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30688 = (function (const_count,pc_count,investor_company,investor_company_report,meta30689){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta30689 = meta30689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30688.cljs$lang$type = true;
clustermap.components.map_report.t30688.cljs$lang$ctorStr = "clustermap.components.map-report/t30688";
clustermap.components.map_report.t30688.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30688");
});
clustermap.components.map_report.t30688.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30688.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30691 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs30691))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30691),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30691));
}
})()),React.DOM.ul(null,(function (){var attrs30692 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs30692))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30692),(function (){var attrs30693 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30693))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30693),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30693));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30692),(function (){var attrs30694 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30694))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30694),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30694));
}
})());
}
})(),(function (){var attrs30695 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs30695))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30695),(function (){var attrs30696 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30696))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30696),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30696));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30695),(function (){var attrs30697 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30697))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30697),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30697));
}
})());
}
})(),(function (){var attrs30698 = clustermap.formats.money.fmoney.call(null,(function (){var G__30708 = self__.investor_company;var G__30708__$1 = (((G__30708 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__30708));return G__30708__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30698))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30698),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30698),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30703 = clustermap.formats.number.fnum.call(null,(function (){var G__30709 = self__.investor_company;var G__30709__$1 = (((G__30709 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__30709));return G__30709__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30703))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30703),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30703),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30690){var self__ = this;
var _30690__$1 = this;return self__.meta30689;
});
clustermap.components.map_report.t30688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30690,meta30689__$1){var self__ = this;
var _30690__$1 = this;return (new clustermap.components.map_report.t30688(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta30689__$1));
});
clustermap.components.map_report.__GT_t30688 = (function __GT_t30688(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta30689){return (new clustermap.components.map_report.t30688(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta30689));
});
}
return (new clustermap.components.map_report.t30688(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__30735 = constituency;var G__30735__$1 = (((G__30735 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__30735));var G__30735__$2 = (((G__30735__$1 == null))?null:cljs.core.count.call(null,G__30735__$1));return G__30735__$2;
})();var ic_count = (function (){var G__30736 = constituency;var G__30736__$1 = (((G__30736 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__30736));var G__30736__$2 = (((G__30736__$1 == null))?null:cljs.core.count.call(null,G__30736__$1));return G__30736__$2;
})();if(typeof clustermap.components.map_report.t30737 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30737 = (function (ic_count,pc_count,constituency,constituency_report,meta30738){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta30738 = meta30738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30737.cljs$lang$type = true;
clustermap.components.map_report.t30737.cljs$lang$ctorStr = "clustermap.components.map-report/t30737";
clustermap.components.map_report.t30737.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30737");
});
clustermap.components.map_report.t30737.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30737.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30740 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs30740))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30740),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30740));
}
})(),(function (){var attrs30741 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs30741))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs30741),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs30741),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs30742 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs30742))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30742),(function (){var attrs30743 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30743))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30743),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30743));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30742),(function (){var attrs30744 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30744))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30744),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30744));
}
})());
}
})(),(function (){var attrs30745 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs30745))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30745),(function (){var attrs30746 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30746))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30746),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30746));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30745),(function (){var attrs30747 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30747))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30747),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30747));
}
})());
}
})(),(function (){var attrs30748 = clustermap.formats.money.fmoney.call(null,(function (){var G__30758 = self__.constituency;var G__30758__$1 = (((G__30758 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__30758));return G__30758__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30748))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30748),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30748),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30753 = clustermap.formats.number.fnum.call(null,(function (){var G__30759 = self__.constituency;var G__30759__$1 = (((G__30759 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__30759));return G__30759__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30753))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30753),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30753),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30739){var self__ = this;
var _30739__$1 = this;return self__.meta30738;
});
clustermap.components.map_report.t30737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30739,meta30738__$1){var self__ = this;
var _30739__$1 = this;return (new clustermap.components.map_report.t30737(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta30738__$1));
});
clustermap.components.map_report.__GT_t30737 = (function __GT_t30737(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta30738){return (new clustermap.components.map_report.t30737(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta30738));
});
}
return (new clustermap.components.map_report.t30737(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__30763 = cljs.core._EQ__EQ_;var expr__30764 = type;if(cljs.core.truth_(pred__30763.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30764)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__30763.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30764)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__30763.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30764)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
