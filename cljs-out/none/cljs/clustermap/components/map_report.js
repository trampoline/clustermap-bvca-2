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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11662 = apc_stats;var G__11662__$1 = (((G__11662 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11662));return G__11662__$1;
})();var ic_count = (function (){var G__11663 = apc_stats;var G__11663__$1 = (((G__11663 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11663));return G__11663__$1;
})();if(typeof clustermap.components.map_report.t11664 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11664 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11665){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11665 = meta11665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11664.cljs$lang$type = true;
clustermap.components.map_report.t11664.cljs$lang$ctorStr = "clustermap.components.map-report/t11664";
clustermap.components.map_report.t11664.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11664");
});
clustermap.components.map_report.t11664.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11664.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11669 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11669))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11669),(function (){var attrs11670 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11670))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11670),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11670));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11669),(function (){var attrs11671 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11671))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11671),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11671));
}
})());
}
})(),(function (){var attrs11672 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11672))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11672),(function (){var attrs11673 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11673))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11673),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11673));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11672),(function (){var attrs11674 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11674))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11674),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11674));
}
})());
}
})(),(function (){var attrs11675 = clustermap.formats.money.fmoney.call(null,(function (){var G__11685 = self__.apc_stats;var G__11685__$1 = (((G__11685 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11685));var G__11685__$2 = (((G__11685__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11685__$1));return G__11685__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11675))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11675),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11675),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11680 = clustermap.formats.number.fnum.call(null,(function (){var G__11686 = self__.apc_stats;var G__11686__$1 = (((G__11686 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11686));var G__11686__$2 = (((G__11686__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11686__$1));return G__11686__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11680))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11680),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11680),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11666){var self__ = this;
var _11666__$1 = this;return self__.meta11665;
});
clustermap.components.map_report.t11664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11666,meta11665__$1){var self__ = this;
var _11666__$1 = this;return (new clustermap.components.map_report.t11664(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11665__$1));
});
clustermap.components.map_report.__GT_t11664 = (function __GT_t11664(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11665){return (new clustermap.components.map_report.t11664(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11665));
});
}
return (new clustermap.components.map_report.t11664(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11711 = portfolio_company;var G__11711__$1 = (((G__11711 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11711));var G__11711__$2 = (((G__11711__$1 == null))?null:cljs.core.count.call(null,G__11711__$1));return G__11711__$2;
})();var const_count = (function (){var G__11712 = portfolio_company;var G__11712__$1 = (((G__11712 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11712));var G__11712__$2 = (((G__11712__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11712__$1));var G__11712__$3 = (((G__11712__$2 == null))?null:cljs.core.count.call(null,G__11712__$2));return G__11712__$3;
})();if(typeof clustermap.components.map_report.t11713 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11713 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11714){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11714 = meta11714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11713.cljs$lang$type = true;
clustermap.components.map_report.t11713.cljs$lang$ctorStr = "clustermap.components.map-report/t11713";
clustermap.components.map_report.t11713.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11713");
});
clustermap.components.map_report.t11713.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11713.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11716 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11716))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11716),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11716));
}
})()),React.DOM.ul(null,(function (){var attrs11717 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11717))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11717),(function (){var attrs11718 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11718))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11718),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11718));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11717),(function (){var attrs11719 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11719))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11719),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11719));
}
})());
}
})(),(function (){var attrs11720 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11720))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11720),(function (){var attrs11721 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11721))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11721),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11721));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11720),(function (){var attrs11722 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11722))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11722),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11722));
}
})());
}
})(),(function (){var attrs11723 = clustermap.formats.money.fmoney.call(null,(function (){var G__11733 = self__.portfolio_company;var G__11733__$1 = (((G__11733 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11733));return G__11733__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11723))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11723),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11723),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11728 = clustermap.formats.number.fnum.call(null,(function (){var G__11734 = self__.portfolio_company;var G__11734__$1 = (((G__11734 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11734));return G__11734__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11728))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11728),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11728),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11715){var self__ = this;
var _11715__$1 = this;return self__.meta11714;
});
clustermap.components.map_report.t11713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11715,meta11714__$1){var self__ = this;
var _11715__$1 = this;return (new clustermap.components.map_report.t11713(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11714__$1));
});
clustermap.components.map_report.__GT_t11713 = (function __GT_t11713(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11714){return (new clustermap.components.map_report.t11713(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11714));
});
}
return (new clustermap.components.map_report.t11713(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11759 = investor_company;var G__11759__$1 = (((G__11759 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11759));var G__11759__$2 = (((G__11759__$1 == null))?null:cljs.core.count.call(null,G__11759__$1));return G__11759__$2;
})();var const_count = (function (){var G__11760 = investor_company;var G__11760__$1 = (((G__11760 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11760));var G__11760__$2 = (((G__11760__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11760__$1));var G__11760__$3 = (((G__11760__$2 == null))?null:cljs.core.count.call(null,G__11760__$2));return G__11760__$3;
})();if(typeof clustermap.components.map_report.t11761 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11761 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11762){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11762 = meta11762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11761.cljs$lang$type = true;
clustermap.components.map_report.t11761.cljs$lang$ctorStr = "clustermap.components.map-report/t11761";
clustermap.components.map_report.t11761.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11761");
});
clustermap.components.map_report.t11761.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11761.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11764 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11764))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11764),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11764));
}
})()),React.DOM.ul(null,(function (){var attrs11765 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11765))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11765),(function (){var attrs11766 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11766))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11766),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11766));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11765),(function (){var attrs11767 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11767))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11767),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11767));
}
})());
}
})(),(function (){var attrs11768 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11768))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11768),(function (){var attrs11769 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11769))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11769),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11769));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11768),(function (){var attrs11770 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11770))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11770),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11770));
}
})());
}
})(),(function (){var attrs11771 = clustermap.formats.money.fmoney.call(null,(function (){var G__11781 = self__.investor_company;var G__11781__$1 = (((G__11781 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11781));return G__11781__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11771))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11771),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11771),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11776 = clustermap.formats.number.fnum.call(null,(function (){var G__11782 = self__.investor_company;var G__11782__$1 = (((G__11782 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11782));return G__11782__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11776))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11776),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11776),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11763){var self__ = this;
var _11763__$1 = this;return self__.meta11762;
});
clustermap.components.map_report.t11761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11763,meta11762__$1){var self__ = this;
var _11763__$1 = this;return (new clustermap.components.map_report.t11761(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11762__$1));
});
clustermap.components.map_report.__GT_t11761 = (function __GT_t11761(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11762){return (new clustermap.components.map_report.t11761(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11762));
});
}
return (new clustermap.components.map_report.t11761(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11808 = constituency;var G__11808__$1 = (((G__11808 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11808));var G__11808__$2 = (((G__11808__$1 == null))?null:cljs.core.count.call(null,G__11808__$1));return G__11808__$2;
})();var ic_count = (function (){var G__11809 = constituency;var G__11809__$1 = (((G__11809 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11809));var G__11809__$2 = (((G__11809__$1 == null))?null:cljs.core.count.call(null,G__11809__$1));return G__11809__$2;
})();if(typeof clustermap.components.map_report.t11810 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11810 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11811){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11811 = meta11811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11810.cljs$lang$type = true;
clustermap.components.map_report.t11810.cljs$lang$ctorStr = "clustermap.components.map-report/t11810";
clustermap.components.map_report.t11810.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11810");
});
clustermap.components.map_report.t11810.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11810.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11813 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11813))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11813),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11813));
}
})(),(function (){var attrs11814 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11814))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11814),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11814),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11815 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11815))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11815),(function (){var attrs11816 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11816))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11816),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11816));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11815),(function (){var attrs11817 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11817))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11817),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11817));
}
})());
}
})(),(function (){var attrs11818 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11818))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11818),(function (){var attrs11819 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11819))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11819),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11819));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11818),(function (){var attrs11820 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11820))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11820),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11820));
}
})());
}
})(),(function (){var attrs11821 = clustermap.formats.money.fmoney.call(null,(function (){var G__11831 = self__.constituency;var G__11831__$1 = (((G__11831 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11831));return G__11831__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11821))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11821),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11821),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11826 = clustermap.formats.number.fnum.call(null,(function (){var G__11832 = self__.constituency;var G__11832__$1 = (((G__11832 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11832));return G__11832__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11826))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11826),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11826),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11812){var self__ = this;
var _11812__$1 = this;return self__.meta11811;
});
clustermap.components.map_report.t11810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11812,meta11811__$1){var self__ = this;
var _11812__$1 = this;return (new clustermap.components.map_report.t11810(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11811__$1));
});
clustermap.components.map_report.__GT_t11810 = (function __GT_t11810(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11811){return (new clustermap.components.map_report.t11810(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11811));
});
}
return (new clustermap.components.map_report.t11810(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11836 = cljs.core._EQ__EQ_;var expr__11837 = type;if(cljs.core.truth_(pred__11836.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11837)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11836.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11837)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11836.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11837)))
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