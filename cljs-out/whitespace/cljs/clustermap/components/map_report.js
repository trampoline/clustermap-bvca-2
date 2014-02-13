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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__32061 = apc_stats;var G__32061__$1 = (((G__32061 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32061));return G__32061__$1;
})();var ic_count = (function (){var G__32062 = apc_stats;var G__32062__$1 = (((G__32062 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32062));return G__32062__$1;
})();if(typeof clustermap.components.map_report.t32063 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32063 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta32064){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta32064 = meta32064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32063.cljs$lang$type = true;
clustermap.components.map_report.t32063.cljs$lang$ctorStr = "clustermap.components.map-report/t32063";
clustermap.components.map_report.t32063.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32063");
});
clustermap.components.map_report.t32063.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32063.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs32068 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32068))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32068),(function (){var attrs32069 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32069))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32069),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32069));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32068),(function (){var attrs32070 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32070))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32070),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32070));
}
})());
}
})(),(function (){var attrs32071 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32071))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32071),(function (){var attrs32072 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32072))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32072),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32072));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32071),(function (){var attrs32073 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32073))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32073),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32073));
}
})());
}
})(),(function (){var attrs32074 = clustermap.formats.money.fmoney.call(null,(function (){var G__32084 = self__.apc_stats;var G__32084__$1 = (((G__32084 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32084));var G__32084__$2 = (((G__32084__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32084__$1));return G__32084__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32074))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32074),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32074),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32079 = clustermap.formats.number.fnum.call(null,(function (){var G__32085 = self__.apc_stats;var G__32085__$1 = (((G__32085 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32085));var G__32085__$2 = (((G__32085__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32085__$1));return G__32085__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32079))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32079),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32079),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32065){var self__ = this;
var _32065__$1 = this;return self__.meta32064;
});
clustermap.components.map_report.t32063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32065,meta32064__$1){var self__ = this;
var _32065__$1 = this;return (new clustermap.components.map_report.t32063(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta32064__$1));
});
clustermap.components.map_report.__GT_t32063 = (function __GT_t32063(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta32064){return (new clustermap.components.map_report.t32063(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta32064));
});
}
return (new clustermap.components.map_report.t32063(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__32110 = portfolio_company;var G__32110__$1 = (((G__32110 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32110));var G__32110__$2 = (((G__32110__$1 == null))?null:cljs.core.count.call(null,G__32110__$1));return G__32110__$2;
})();var const_count = (function (){var G__32111 = portfolio_company;var G__32111__$1 = (((G__32111 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32111));var G__32111__$2 = (((G__32111__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32111__$1));var G__32111__$3 = (((G__32111__$2 == null))?null:cljs.core.count.call(null,G__32111__$2));return G__32111__$3;
})();if(typeof clustermap.components.map_report.t32112 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32112 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta32113){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta32113 = meta32113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32112.cljs$lang$type = true;
clustermap.components.map_report.t32112.cljs$lang$ctorStr = "clustermap.components.map-report/t32112";
clustermap.components.map_report.t32112.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32112");
});
clustermap.components.map_report.t32112.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32112.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32115 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs32115))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32115),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32115));
}
})()),React.DOM.ul(null,(function (){var attrs32116 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32116))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32116),(function (){var attrs32117 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32117))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32117),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32117));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32116),(function (){var attrs32118 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32118))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32118),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32118));
}
})());
}
})(),(function (){var attrs32119 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32119))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32119),(function (){var attrs32120 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32120))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32120),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32120));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32119),(function (){var attrs32121 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32121))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32121),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32121));
}
})());
}
})(),(function (){var attrs32122 = clustermap.formats.money.fmoney.call(null,(function (){var G__32132 = self__.portfolio_company;var G__32132__$1 = (((G__32132 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__32132));return G__32132__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32122))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32122),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32122),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs32127 = clustermap.formats.number.fnum.call(null,(function (){var G__32133 = self__.portfolio_company;var G__32133__$1 = (((G__32133 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__32133));return G__32133__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32127))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32127),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32127),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32114){var self__ = this;
var _32114__$1 = this;return self__.meta32113;
});
clustermap.components.map_report.t32112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32114,meta32113__$1){var self__ = this;
var _32114__$1 = this;return (new clustermap.components.map_report.t32112(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta32113__$1));
});
clustermap.components.map_report.__GT_t32112 = (function __GT_t32112(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta32113){return (new clustermap.components.map_report.t32112(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta32113));
});
}
return (new clustermap.components.map_report.t32112(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__32158 = investor_company;var G__32158__$1 = (((G__32158 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32158));var G__32158__$2 = (((G__32158__$1 == null))?null:cljs.core.count.call(null,G__32158__$1));return G__32158__$2;
})();var const_count = (function (){var G__32159 = investor_company;var G__32159__$1 = (((G__32159 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32159));var G__32159__$2 = (((G__32159__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32159__$1));var G__32159__$3 = (((G__32159__$2 == null))?null:cljs.core.count.call(null,G__32159__$2));return G__32159__$3;
})();if(typeof clustermap.components.map_report.t32160 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32160 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta32161){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta32161 = meta32161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32160.cljs$lang$type = true;
clustermap.components.map_report.t32160.cljs$lang$ctorStr = "clustermap.components.map-report/t32160";
clustermap.components.map_report.t32160.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32160");
});
clustermap.components.map_report.t32160.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32160.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32163 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs32163))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32163),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32163));
}
})()),React.DOM.ul(null,(function (){var attrs32164 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32164))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32164),(function (){var attrs32165 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32165))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32165),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32165));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32164),(function (){var attrs32166 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32166))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32166),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32166));
}
})());
}
})(),(function (){var attrs32167 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32167))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32167),(function (){var attrs32168 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32168))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32168),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32168));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32167),(function (){var attrs32169 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32169))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32169),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32169));
}
})());
}
})(),(function (){var attrs32170 = clustermap.formats.money.fmoney.call(null,(function (){var G__32180 = self__.investor_company;var G__32180__$1 = (((G__32180 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32180));return G__32180__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32170))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32170),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32170),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32175 = clustermap.formats.number.fnum.call(null,(function (){var G__32181 = self__.investor_company;var G__32181__$1 = (((G__32181 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32181));return G__32181__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32175))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32175),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32175),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32162){var self__ = this;
var _32162__$1 = this;return self__.meta32161;
});
clustermap.components.map_report.t32160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32162,meta32161__$1){var self__ = this;
var _32162__$1 = this;return (new clustermap.components.map_report.t32160(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta32161__$1));
});
clustermap.components.map_report.__GT_t32160 = (function __GT_t32160(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32161){return (new clustermap.components.map_report.t32160(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32161));
});
}
return (new clustermap.components.map_report.t32160(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__32207 = constituency;var G__32207__$1 = (((G__32207 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32207));var G__32207__$2 = (((G__32207__$1 == null))?null:cljs.core.count.call(null,G__32207__$1));return G__32207__$2;
})();var ic_count = (function (){var G__32208 = constituency;var G__32208__$1 = (((G__32208 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32208));var G__32208__$2 = (((G__32208__$1 == null))?null:cljs.core.count.call(null,G__32208__$1));return G__32208__$2;
})();if(typeof clustermap.components.map_report.t32209 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32209 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta32210){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta32210 = meta32210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32209.cljs$lang$type = true;
clustermap.components.map_report.t32209.cljs$lang$ctorStr = "clustermap.components.map-report/t32209";
clustermap.components.map_report.t32209.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32209");
});
clustermap.components.map_report.t32209.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32209.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32212 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32212))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32212),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32212));
}
})(),(function (){var attrs32213 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32213))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs32213),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs32213),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs32214 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32214))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32214),(function (){var attrs32215 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32215))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32215),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32215));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32214),(function (){var attrs32216 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32216))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32216),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32216));
}
})());
}
})(),(function (){var attrs32217 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32217))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32217),(function (){var attrs32218 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32218))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32218),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32218));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32217),(function (){var attrs32219 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32219))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32219),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32219));
}
})());
}
})(),(function (){var attrs32220 = clustermap.formats.money.fmoney.call(null,(function (){var G__32230 = self__.constituency;var G__32230__$1 = (((G__32230 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32230));return G__32230__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32220))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32220),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32220),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32225 = clustermap.formats.number.fnum.call(null,(function (){var G__32231 = self__.constituency;var G__32231__$1 = (((G__32231 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32231));return G__32231__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32225))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32225),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32225),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32211){var self__ = this;
var _32211__$1 = this;return self__.meta32210;
});
clustermap.components.map_report.t32209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32211,meta32210__$1){var self__ = this;
var _32211__$1 = this;return (new clustermap.components.map_report.t32209(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta32210__$1));
});
clustermap.components.map_report.__GT_t32209 = (function __GT_t32209(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32210){return (new clustermap.components.map_report.t32209(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32210));
});
}
return (new clustermap.components.map_report.t32209(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__32235 = cljs.core._EQ__EQ_;var expr__32236 = type;if(cljs.core.truth_(pred__32235.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32236)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32235.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32236)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32235.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32236)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
