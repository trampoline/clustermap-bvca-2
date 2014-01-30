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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11672 = apc_stats;var G__11672__$1 = (((G__11672 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11672));return G__11672__$1;
})();var ic_count = (function (){var G__11673 = apc_stats;var G__11673__$1 = (((G__11673 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11673));return G__11673__$1;
})();if(typeof clustermap.components.map_report.t11674 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11674 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11675){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11675 = meta11675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11674.cljs$lang$type = true;
clustermap.components.map_report.t11674.cljs$lang$ctorStr = "clustermap.components.map-report/t11674";
clustermap.components.map_report.t11674.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11674");
});
clustermap.components.map_report.t11674.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11674.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11679 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11679))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11679),(function (){var attrs11680 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11680))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11680),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11680));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11679),(function (){var attrs11681 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11681))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11681),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11681));
}
})());
}
})(),(function (){var attrs11682 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11682))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11682),(function (){var attrs11683 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11683))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11683),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11683));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11682),(function (){var attrs11684 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11684))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11684),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11684));
}
})());
}
})(),(function (){var attrs11685 = clustermap.formats.money.fmoney.call(null,(function (){var G__11695 = self__.apc_stats;var G__11695__$1 = (((G__11695 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11695));var G__11695__$2 = (((G__11695__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11695__$1));return G__11695__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11685))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11685),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11685),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11690 = clustermap.formats.number.fnum.call(null,(function (){var G__11696 = self__.apc_stats;var G__11696__$1 = (((G__11696 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11696));var G__11696__$2 = (((G__11696__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11696__$1));return G__11696__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11690))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11690),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11690),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11676){var self__ = this;
var _11676__$1 = this;return self__.meta11675;
});
clustermap.components.map_report.t11674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11676,meta11675__$1){var self__ = this;
var _11676__$1 = this;return (new clustermap.components.map_report.t11674(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11675__$1));
});
clustermap.components.map_report.__GT_t11674 = (function __GT_t11674(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11675){return (new clustermap.components.map_report.t11674(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11675));
});
}
return (new clustermap.components.map_report.t11674(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11721 = portfolio_company;var G__11721__$1 = (((G__11721 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11721));var G__11721__$2 = (((G__11721__$1 == null))?null:cljs.core.count.call(null,G__11721__$1));return G__11721__$2;
})();var const_count = (function (){var G__11722 = portfolio_company;var G__11722__$1 = (((G__11722 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11722));var G__11722__$2 = (((G__11722__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11722__$1));var G__11722__$3 = (((G__11722__$2 == null))?null:cljs.core.count.call(null,G__11722__$2));return G__11722__$3;
})();if(typeof clustermap.components.map_report.t11723 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11723 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11724){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11724 = meta11724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11723.cljs$lang$type = true;
clustermap.components.map_report.t11723.cljs$lang$ctorStr = "clustermap.components.map-report/t11723";
clustermap.components.map_report.t11723.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11723");
});
clustermap.components.map_report.t11723.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11723.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11726 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11726))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11726),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11726));
}
})()),React.DOM.ul(null,(function (){var attrs11727 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11727))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11727),(function (){var attrs11728 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11728))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11728),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11728));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11727),(function (){var attrs11729 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11729))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11729),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11729));
}
})());
}
})(),(function (){var attrs11730 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11730))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11730),(function (){var attrs11731 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11731))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11731),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11731));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11730),(function (){var attrs11732 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11732))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11732),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11732));
}
})());
}
})(),(function (){var attrs11733 = clustermap.formats.money.fmoney.call(null,(function (){var G__11743 = self__.portfolio_company;var G__11743__$1 = (((G__11743 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11743));return G__11743__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11733))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11733),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11733),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11738 = clustermap.formats.number.fnum.call(null,(function (){var G__11744 = self__.portfolio_company;var G__11744__$1 = (((G__11744 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11744));return G__11744__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11738))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11738),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11738),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11725){var self__ = this;
var _11725__$1 = this;return self__.meta11724;
});
clustermap.components.map_report.t11723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11725,meta11724__$1){var self__ = this;
var _11725__$1 = this;return (new clustermap.components.map_report.t11723(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11724__$1));
});
clustermap.components.map_report.__GT_t11723 = (function __GT_t11723(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11724){return (new clustermap.components.map_report.t11723(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11724));
});
}
return (new clustermap.components.map_report.t11723(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11769 = investor_company;var G__11769__$1 = (((G__11769 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11769));var G__11769__$2 = (((G__11769__$1 == null))?null:cljs.core.count.call(null,G__11769__$1));return G__11769__$2;
})();var const_count = (function (){var G__11770 = investor_company;var G__11770__$1 = (((G__11770 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11770));var G__11770__$2 = (((G__11770__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11770__$1));var G__11770__$3 = (((G__11770__$2 == null))?null:cljs.core.count.call(null,G__11770__$2));return G__11770__$3;
})();if(typeof clustermap.components.map_report.t11771 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11771 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11772){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11772 = meta11772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11771.cljs$lang$type = true;
clustermap.components.map_report.t11771.cljs$lang$ctorStr = "clustermap.components.map-report/t11771";
clustermap.components.map_report.t11771.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11771");
});
clustermap.components.map_report.t11771.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11771.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11774 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11774))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11774),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11774));
}
})()),React.DOM.ul(null,(function (){var attrs11775 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11775))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11775),(function (){var attrs11776 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11776))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11776),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11776));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11775),(function (){var attrs11777 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11777))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11777),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11777));
}
})());
}
})(),(function (){var attrs11778 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11778))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11778),(function (){var attrs11779 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11779))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11779),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11779));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11778),(function (){var attrs11780 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11780))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11780),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11780));
}
})());
}
})(),(function (){var attrs11781 = clustermap.formats.money.fmoney.call(null,(function (){var G__11791 = self__.investor_company;var G__11791__$1 = (((G__11791 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11791));return G__11791__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11781))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11781),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11781),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11786 = clustermap.formats.number.fnum.call(null,(function (){var G__11792 = self__.investor_company;var G__11792__$1 = (((G__11792 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11792));return G__11792__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11786))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11786),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11786),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11773){var self__ = this;
var _11773__$1 = this;return self__.meta11772;
});
clustermap.components.map_report.t11771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11773,meta11772__$1){var self__ = this;
var _11773__$1 = this;return (new clustermap.components.map_report.t11771(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11772__$1));
});
clustermap.components.map_report.__GT_t11771 = (function __GT_t11771(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11772){return (new clustermap.components.map_report.t11771(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11772));
});
}
return (new clustermap.components.map_report.t11771(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11818 = constituency;var G__11818__$1 = (((G__11818 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11818));var G__11818__$2 = (((G__11818__$1 == null))?null:cljs.core.count.call(null,G__11818__$1));return G__11818__$2;
})();var ic_count = (function (){var G__11819 = constituency;var G__11819__$1 = (((G__11819 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11819));var G__11819__$2 = (((G__11819__$1 == null))?null:cljs.core.count.call(null,G__11819__$1));return G__11819__$2;
})();if(typeof clustermap.components.map_report.t11820 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11820 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11821){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11821 = meta11821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11820.cljs$lang$type = true;
clustermap.components.map_report.t11820.cljs$lang$ctorStr = "clustermap.components.map-report/t11820";
clustermap.components.map_report.t11820.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11820");
});
clustermap.components.map_report.t11820.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11820.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11823 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11823))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11823),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11823));
}
})(),(function (){var attrs11824 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11824))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11824),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11824),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11825 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11825))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11825),(function (){var attrs11826 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11826))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11826),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11826));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11825),(function (){var attrs11827 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11827))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11827),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11827));
}
})());
}
})(),(function (){var attrs11828 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11828))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11828),(function (){var attrs11829 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11829))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11829),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11829));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11828),(function (){var attrs11830 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11830))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11830),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11830));
}
})());
}
})(),(function (){var attrs11831 = clustermap.formats.money.fmoney.call(null,(function (){var G__11841 = self__.constituency;var G__11841__$1 = (((G__11841 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11841));return G__11841__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11831))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11831),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11831),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11836 = clustermap.formats.number.fnum.call(null,(function (){var G__11842 = self__.constituency;var G__11842__$1 = (((G__11842 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11842));return G__11842__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11836))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11836),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11836),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11822){var self__ = this;
var _11822__$1 = this;return self__.meta11821;
});
clustermap.components.map_report.t11820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11822,meta11821__$1){var self__ = this;
var _11822__$1 = this;return (new clustermap.components.map_report.t11820(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11821__$1));
});
clustermap.components.map_report.__GT_t11820 = (function __GT_t11820(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11821){return (new clustermap.components.map_report.t11820(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11821));
});
}
return (new clustermap.components.map_report.t11820(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11846 = cljs.core._EQ__EQ_;var expr__11847 = type;if(cljs.core.truth_(pred__11846.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11847)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11846.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11847)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11846.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11847)))
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