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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11659 = apc_stats;var G__11659__$1 = (((G__11659 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11659));return G__11659__$1;
})();var ic_count = (function (){var G__11660 = apc_stats;var G__11660__$1 = (((G__11660 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11660));return G__11660__$1;
})();if(typeof clustermap.components.map_report.t11661 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11661 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11662){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11662 = meta11662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11661.cljs$lang$type = true;
clustermap.components.map_report.t11661.cljs$lang$ctorStr = "clustermap.components.map-report/t11661";
clustermap.components.map_report.t11661.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11661");
});
clustermap.components.map_report.t11661.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11661.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11666 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11666))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11666),(function (){var attrs11667 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11667))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11667),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11667));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11666),(function (){var attrs11668 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11668))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11668),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11668));
}
})());
}
})(),(function (){var attrs11669 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11669))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11669),(function (){var attrs11670 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11670))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11670),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11670));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11669),(function (){var attrs11671 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11671))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11671),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11671));
}
})());
}
})(),(function (){var attrs11672 = clustermap.formats.money.fmoney.call(null,(function (){var G__11682 = self__.apc_stats;var G__11682__$1 = (((G__11682 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11682));var G__11682__$2 = (((G__11682__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11682__$1));return G__11682__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11672))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11672),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11672),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11677 = clustermap.formats.number.fnum.call(null,(function (){var G__11683 = self__.apc_stats;var G__11683__$1 = (((G__11683 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11683));var G__11683__$2 = (((G__11683__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11683__$1));return G__11683__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11677))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11677),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11677),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11663){var self__ = this;
var _11663__$1 = this;return self__.meta11662;
});
clustermap.components.map_report.t11661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11663,meta11662__$1){var self__ = this;
var _11663__$1 = this;return (new clustermap.components.map_report.t11661(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11662__$1));
});
clustermap.components.map_report.__GT_t11661 = (function __GT_t11661(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11662){return (new clustermap.components.map_report.t11661(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11662));
});
}
return (new clustermap.components.map_report.t11661(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11708 = portfolio_company;var G__11708__$1 = (((G__11708 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11708));var G__11708__$2 = (((G__11708__$1 == null))?null:cljs.core.count.call(null,G__11708__$1));return G__11708__$2;
})();var const_count = (function (){var G__11709 = portfolio_company;var G__11709__$1 = (((G__11709 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11709));var G__11709__$2 = (((G__11709__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11709__$1));var G__11709__$3 = (((G__11709__$2 == null))?null:cljs.core.count.call(null,G__11709__$2));return G__11709__$3;
})();if(typeof clustermap.components.map_report.t11710 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11710 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11711){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11711 = meta11711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11710.cljs$lang$type = true;
clustermap.components.map_report.t11710.cljs$lang$ctorStr = "clustermap.components.map-report/t11710";
clustermap.components.map_report.t11710.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11710");
});
clustermap.components.map_report.t11710.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11710.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11713 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11713))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11713),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11713));
}
})()),React.DOM.ul(null,(function (){var attrs11714 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11714))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11714),(function (){var attrs11715 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11715))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11715),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11715));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11714),(function (){var attrs11716 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11716))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11716),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11716));
}
})());
}
})(),(function (){var attrs11717 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11717))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11717),(function (){var attrs11718 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11718))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11718),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11718));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11717),(function (){var attrs11719 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11719))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11719),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11719));
}
})());
}
})(),(function (){var attrs11720 = clustermap.formats.money.fmoney.call(null,(function (){var G__11730 = self__.portfolio_company;var G__11730__$1 = (((G__11730 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11730));return G__11730__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11720))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11720),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11720),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11725 = clustermap.formats.number.fnum.call(null,(function (){var G__11731 = self__.portfolio_company;var G__11731__$1 = (((G__11731 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11731));return G__11731__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11725))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11725),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11725),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11712){var self__ = this;
var _11712__$1 = this;return self__.meta11711;
});
clustermap.components.map_report.t11710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11712,meta11711__$1){var self__ = this;
var _11712__$1 = this;return (new clustermap.components.map_report.t11710(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11711__$1));
});
clustermap.components.map_report.__GT_t11710 = (function __GT_t11710(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11711){return (new clustermap.components.map_report.t11710(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11711));
});
}
return (new clustermap.components.map_report.t11710(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11756 = investor_company;var G__11756__$1 = (((G__11756 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11756));var G__11756__$2 = (((G__11756__$1 == null))?null:cljs.core.count.call(null,G__11756__$1));return G__11756__$2;
})();var const_count = (function (){var G__11757 = investor_company;var G__11757__$1 = (((G__11757 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11757));var G__11757__$2 = (((G__11757__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11757__$1));var G__11757__$3 = (((G__11757__$2 == null))?null:cljs.core.count.call(null,G__11757__$2));return G__11757__$3;
})();if(typeof clustermap.components.map_report.t11758 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11758 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11759){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11759 = meta11759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11758.cljs$lang$type = true;
clustermap.components.map_report.t11758.cljs$lang$ctorStr = "clustermap.components.map-report/t11758";
clustermap.components.map_report.t11758.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11758");
});
clustermap.components.map_report.t11758.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11758.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11761 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11761))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11761),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11761));
}
})()),React.DOM.ul(null,(function (){var attrs11762 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11762))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11762),(function (){var attrs11763 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11763))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11763),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11763));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11762),(function (){var attrs11764 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11764))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11764),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11764));
}
})());
}
})(),(function (){var attrs11765 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11765))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11765),(function (){var attrs11766 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11766))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11766),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11766));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11765),(function (){var attrs11767 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11767))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11767),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11767));
}
})());
}
})(),(function (){var attrs11768 = clustermap.formats.money.fmoney.call(null,(function (){var G__11778 = self__.investor_company;var G__11778__$1 = (((G__11778 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11778));return G__11778__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11768))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11768),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11768),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11773 = clustermap.formats.number.fnum.call(null,(function (){var G__11779 = self__.investor_company;var G__11779__$1 = (((G__11779 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11779));return G__11779__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11773))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11773),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11773),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11760){var self__ = this;
var _11760__$1 = this;return self__.meta11759;
});
clustermap.components.map_report.t11758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11760,meta11759__$1){var self__ = this;
var _11760__$1 = this;return (new clustermap.components.map_report.t11758(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11759__$1));
});
clustermap.components.map_report.__GT_t11758 = (function __GT_t11758(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11759){return (new clustermap.components.map_report.t11758(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11759));
});
}
return (new clustermap.components.map_report.t11758(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11805 = constituency;var G__11805__$1 = (((G__11805 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11805));var G__11805__$2 = (((G__11805__$1 == null))?null:cljs.core.count.call(null,G__11805__$1));return G__11805__$2;
})();var ic_count = (function (){var G__11806 = constituency;var G__11806__$1 = (((G__11806 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11806));var G__11806__$2 = (((G__11806__$1 == null))?null:cljs.core.count.call(null,G__11806__$1));return G__11806__$2;
})();if(typeof clustermap.components.map_report.t11807 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11807 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11808){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11808 = meta11808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11807.cljs$lang$type = true;
clustermap.components.map_report.t11807.cljs$lang$ctorStr = "clustermap.components.map-report/t11807";
clustermap.components.map_report.t11807.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11807");
});
clustermap.components.map_report.t11807.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11807.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11810 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11810))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11810),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11810));
}
})(),(function (){var attrs11811 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11811))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11811),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11811),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11812 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11812))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11812),(function (){var attrs11813 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11813))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11813),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11813));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11812),(function (){var attrs11814 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11814))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11814),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11814));
}
})());
}
})(),(function (){var attrs11815 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11815))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11815),(function (){var attrs11816 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11816))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11816),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11816));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11815),(function (){var attrs11817 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11817))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11817),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11817));
}
})());
}
})(),(function (){var attrs11818 = clustermap.formats.money.fmoney.call(null,(function (){var G__11828 = self__.constituency;var G__11828__$1 = (((G__11828 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11828));return G__11828__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11818))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11818),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11818),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11823 = clustermap.formats.number.fnum.call(null,(function (){var G__11829 = self__.constituency;var G__11829__$1 = (((G__11829 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11829));return G__11829__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11823))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11823),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11823),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11809){var self__ = this;
var _11809__$1 = this;return self__.meta11808;
});
clustermap.components.map_report.t11807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11809,meta11808__$1){var self__ = this;
var _11809__$1 = this;return (new clustermap.components.map_report.t11807(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11808__$1));
});
clustermap.components.map_report.__GT_t11807 = (function __GT_t11807(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11808){return (new clustermap.components.map_report.t11807(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11808));
});
}
return (new clustermap.components.map_report.t11807(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11833 = cljs.core._EQ__EQ_;var expr__11834 = type;if(cljs.core.truth_(pred__11833.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11834)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11833.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11834)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11833.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11834)))
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