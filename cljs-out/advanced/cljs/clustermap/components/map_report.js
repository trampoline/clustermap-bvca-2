// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(data);var ic_summ = cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.components.map_report.t20573 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20573 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta20574){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta20574 = meta20574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20573.cljs$lang$type = true;
clustermap.components.map_report.t20573.cljs$lang$ctorStr = "clustermap.components.map-report/t20573";
clustermap.components.map_report.t20573.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20573");
});
clustermap.components.map_report.t20573.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20573.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs20578 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20598 = self__.pc_summ;var G__20598__$1 = (((G__20598 == null))?null:(G__20598["count"]));return G__20598__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20598 = self__.pc_summ;var G__20598__$1 = (((G__20598 == null))?null:(G__20598["count"]));return G__20598__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20578))
{return React.DOM.li(sablono.interpreter.attributes(attrs20578),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20578),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs20583 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20599 = self__.ic_summ;var G__20599__$1 = (((G__20599 == null))?null:(G__20599["count"]));return G__20599__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20599 = self__.ic_summ;var G__20599__$1 = (((G__20599 == null))?null:(G__20599["count"]));return G__20599__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20583))
{return React.DOM.li(sablono.interpreter.attributes(attrs20583),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20583),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs20588 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20600 = self__.pc_summ;var G__20600__$1 = (((G__20600 == null))?null:(G__20600["latest_turnover_stats"]["total"]));return G__20600__$1;
})(),cljs.core.constant$keyword$178,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20600 = self__.pc_summ;var G__20600__$1 = (((G__20600 == null))?null:(G__20600["latest_turnover_stats"]["total"]));return G__20600__$1;
})(),cljs.core.constant$keyword$178,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20588))
{return React.DOM.li(sablono.interpreter.attributes(attrs20588),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20588),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs20593 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20601 = self__.pc_summ;var G__20601__$1 = (((G__20601 == null))?null:(G__20601["latest_employee_count_stats"]["total"]));return G__20601__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20601 = self__.pc_summ;var G__20601__$1 = (((G__20601 == null))?null:(G__20601["latest_employee_count_stats"]["total"]));return G__20601__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20593))
{return React.DOM.li(sablono.interpreter.attributes(attrs20593),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20593),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t20573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20575){var self__ = this;
var _20575__$1 = this;return self__.meta20574;
});
clustermap.components.map_report.t20573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20575,meta20574__$1){var self__ = this;
var _20575__$1 = this;return (new clustermap.components.map_report.t20573(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta20574__$1));
});
clustermap.components.map_report.__GT_t20573 = (function __GT_t20573(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20574){return (new clustermap.components.map_report.t20573(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20574));
});
}
return (new clustermap.components.map_report.t20573(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(data){if(typeof clustermap.components.map_report.t20630 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20630 = (function (data,portfolio_company_report,meta20631){
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta20631 = meta20631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20630.cljs$lang$type = true;
clustermap.components.map_report.t20630.cljs$lang$ctorStr = "clustermap.components.map-report/t20630";
clustermap.components.map_report.t20630.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20630");
});
clustermap.components.map_report.t20630.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20630.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20633 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20633))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20633),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20633));
}
})()),React.DOM.ul(null,(function (){var attrs20634 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20654 = self__.data;var G__20654__$1 = (((G__20654 == null))?null:(G__20654["sites"]));var G__20654__$2 = (((G__20654__$1 == null))?null:cljs.core.count(G__20654__$1));return G__20654__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20654 = self__.data;var G__20654__$1 = (((G__20654 == null))?null:(G__20654["sites"]));var G__20654__$2 = (((G__20654__$1 == null))?null:cljs.core.count(G__20654__$1));return G__20654__$2;
})()));if(cljs.core.map_QMARK_(attrs20634))
{return React.DOM.li(sablono.interpreter.attributes(attrs20634),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20634),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs20639 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20655 = self__.data;var G__20655__$1 = (((G__20655 == null))?null:(G__20655["boundarylinecolls"]["uk_constituencies"]));var G__20655__$2 = (((G__20655__$1 == null))?null:cljs.core.count(G__20655__$1));return G__20655__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20655 = self__.data;var G__20655__$1 = (((G__20655 == null))?null:(G__20655["boundarylinecolls"]["uk_constituencies"]));var G__20655__$2 = (((G__20655__$1 == null))?null:cljs.core.count(G__20655__$1));return G__20655__$2;
})()));if(cljs.core.map_QMARK_(attrs20639))
{return React.DOM.li(sablono.interpreter.attributes(attrs20639),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20639),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs20644 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20656 = self__.data;var G__20656__$1 = (((G__20656 == null))?null:(G__20656["latest_turnover"]));return G__20656__$1;
})(),cljs.core.constant$keyword$178,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20656 = self__.data;var G__20656__$1 = (((G__20656 == null))?null:(G__20656["latest_turnover"]));return G__20656__$1;
})(),cljs.core.constant$keyword$178,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20644))
{return React.DOM.li(sablono.interpreter.attributes(attrs20644),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20644),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs20649 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20657 = self__.data;var G__20657__$1 = (((G__20657 == null))?null:(G__20657["latest_employee_count"]));return G__20657__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20657 = self__.data;var G__20657__$1 = (((G__20657 == null))?null:(G__20657["latest_employee_count"]));return G__20657__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20649))
{return React.DOM.li(sablono.interpreter.attributes(attrs20649),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20649),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t20630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20632){var self__ = this;
var _20632__$1 = this;return self__.meta20631;
});
clustermap.components.map_report.t20630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20632,meta20631__$1){var self__ = this;
var _20632__$1 = this;return (new clustermap.components.map_report.t20630(self__.data,self__.portfolio_company_report,meta20631__$1));
});
clustermap.components.map_report.__GT_t20630 = (function __GT_t20630(data__$1,portfolio_company_report__$1,meta20631){return (new clustermap.components.map_report.t20630(data__$1,portfolio_company_report__$1,meta20631));
});
}
return (new clustermap.components.map_report.t20630(data,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(data){if(typeof clustermap.components.map_report.t20686 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20686 = (function (data,investor_company_report,meta20687){
this.data = data;
this.investor_company_report = investor_company_report;
this.meta20687 = meta20687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20686.cljs$lang$type = true;
clustermap.components.map_report.t20686.cljs$lang$ctorStr = "clustermap.components.map-report/t20686";
clustermap.components.map_report.t20686.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20686");
});
clustermap.components.map_report.t20686.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20686.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20689 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20689))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20689),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20689));
}
})()),React.DOM.ul(null,(function (){var attrs20690 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20710 = self__.data;var G__20710__$1 = (((G__20710 == null))?null:(G__20710["portfolio_companies"]));var G__20710__$2 = (((G__20710__$1 == null))?null:cljs.core.count(G__20710__$1));return G__20710__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20710 = self__.data;var G__20710__$1 = (((G__20710 == null))?null:(G__20710["portfolio_companies"]));var G__20710__$2 = (((G__20710__$1 == null))?null:cljs.core.count(G__20710__$1));return G__20710__$2;
})()));if(cljs.core.map_QMARK_(attrs20690))
{return React.DOM.li(sablono.interpreter.attributes(attrs20690),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20690),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs20695 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20711 = self__.data;var G__20711__$1 = (((G__20711 == null))?null:(G__20711["boundarylinecolls"]["uk_constituencies"]));var G__20711__$2 = (((G__20711__$1 == null))?null:cljs.core.count(G__20711__$1));return G__20711__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20711 = self__.data;var G__20711__$1 = (((G__20711 == null))?null:(G__20711["boundarylinecolls"]["uk_constituencies"]));var G__20711__$2 = (((G__20711__$1 == null))?null:cljs.core.count(G__20711__$1));return G__20711__$2;
})()));if(cljs.core.map_QMARK_(attrs20695))
{return React.DOM.li(sablono.interpreter.attributes(attrs20695),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20695),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs20700 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20712 = self__.data;var G__20712__$1 = (((G__20712 == null))?null:(G__20712["total_turnover"]));return G__20712__$1;
})(),cljs.core.constant$keyword$178,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20712 = self__.data;var G__20712__$1 = (((G__20712 == null))?null:(G__20712["total_turnover"]));return G__20712__$1;
})(),cljs.core.constant$keyword$178,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20700))
{return React.DOM.li(sablono.interpreter.attributes(attrs20700),React.DOM.small(null,"Total Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20700),React.DOM.small(null,"Total Company Turnover"));
}
})(),(function (){var attrs20705 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20713 = self__.data;var G__20713__$1 = (((G__20713 == null))?null:(G__20713["total_employee_count"]));return G__20713__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20713 = self__.data;var G__20713__$1 = (((G__20713 == null))?null:(G__20713["total_employee_count"]));return G__20713__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20705))
{return React.DOM.li(sablono.interpreter.attributes(attrs20705),React.DOM.small(null,"Total Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20705),React.DOM.small(null,"Total Company Employees"));
}
})()));
});
clustermap.components.map_report.t20686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20688){var self__ = this;
var _20688__$1 = this;return self__.meta20687;
});
clustermap.components.map_report.t20686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20688,meta20687__$1){var self__ = this;
var _20688__$1 = this;return (new clustermap.components.map_report.t20686(self__.data,self__.investor_company_report,meta20687__$1));
});
clustermap.components.map_report.__GT_t20686 = (function __GT_t20686(data__$1,investor_company_report__$1,meta20687){return (new clustermap.components.map_report.t20686(data__$1,investor_company_report__$1,meta20687));
});
}
return (new clustermap.components.map_report.t20686(data,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(data){if(typeof clustermap.components.map_report.t20743 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20743 = (function (data,constituency_report,meta20744){
this.data = data;
this.constituency_report = constituency_report;
this.meta20744 = meta20744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20743.cljs$lang$type = true;
clustermap.components.map_report.t20743.cljs$lang$ctorStr = "clustermap.components.map-report/t20743";
clustermap.components.map_report.t20743.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20743");
});
clustermap.components.map_report.t20743.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20743.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20746 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20746))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20746),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20746));
}
})(),(function (){var attrs20747 = (self__.data["mp"]);if(cljs.core.map_QMARK_(attrs20747))
{return React.DOM.h3(sablono.interpreter.attributes(attrs20747),React.DOM.small(null,"(",sablono.interpreter.interpret((self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs20747),React.DOM.small(null,"(",sablono.interpreter.interpret((self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs20748 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20768 = self__.data;var G__20768__$1 = (((G__20768 == null))?null:(G__20768["investor_companies"]));var G__20768__$2 = (((G__20768__$1 == null))?null:cljs.core.count(G__20768__$1));return G__20768__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20768 = self__.data;var G__20768__$1 = (((G__20768 == null))?null:(G__20768["investor_companies"]));var G__20768__$2 = (((G__20768__$1 == null))?null:cljs.core.count(G__20768__$1));return G__20768__$2;
})()));if(cljs.core.map_QMARK_(attrs20748))
{return React.DOM.li(sablono.interpreter.attributes(attrs20748),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20748),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs20753 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20769 = self__.data;var G__20769__$1 = (((G__20769 == null))?null:(G__20769["portfolio_companies"]));var G__20769__$2 = (((G__20769__$1 == null))?null:cljs.core.count(G__20769__$1));return G__20769__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20769 = self__.data;var G__20769__$1 = (((G__20769 == null))?null:(G__20769["portfolio_companies"]));var G__20769__$2 = (((G__20769__$1 == null))?null:cljs.core.count(G__20769__$1));return G__20769__$2;
})()));if(cljs.core.map_QMARK_(attrs20753))
{return React.DOM.li(sablono.interpreter.attributes(attrs20753),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20753),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs20758 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20770 = self__.data;var G__20770__$1 = (((G__20770 == null))?null:(G__20770["total_turnover"]));return G__20770__$1;
})(),cljs.core.constant$keyword$178,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20770 = self__.data;var G__20770__$1 = (((G__20770 == null))?null:(G__20770["total_turnover"]));return G__20770__$1;
})(),cljs.core.constant$keyword$178,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20758))
{return React.DOM.li(sablono.interpreter.attributes(attrs20758),React.DOM.small(null,"Total Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20758),React.DOM.small(null,"Total Turnover"));
}
})(),(function (){var attrs20763 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20771 = self__.data;var G__20771__$1 = (((G__20771 == null))?null:(G__20771["total_employee_count"]));return G__20771__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20771 = self__.data;var G__20771__$1 = (((G__20771 == null))?null:(G__20771["total_employee_count"]));return G__20771__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20763))
{return React.DOM.li(sablono.interpreter.attributes(attrs20763),React.DOM.small(null,"Total Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20763),React.DOM.small(null,"Total Employees"));
}
})()));
});
clustermap.components.map_report.t20743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20745){var self__ = this;
var _20745__$1 = this;return self__.meta20744;
});
clustermap.components.map_report.t20743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20745,meta20744__$1){var self__ = this;
var _20745__$1 = this;return (new clustermap.components.map_report.t20743(self__.data,self__.constituency_report,meta20744__$1));
});
clustermap.components.map_report.__GT_t20743 = (function __GT_t20743(data__$1,constituency_report__$1,meta20744){return (new clustermap.components.map_report.t20743(data__$1,constituency_report__$1,meta20744));
});
}
return (new clustermap.components.map_report.t20743(data,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,cljs.core.constant$keyword$148], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,cljs.core.constant$keyword$120], null));var pred__20775 = cljs.core._EQ__EQ_;var expr__20776 = type;if(cljs.core.truth_((pred__20775.cljs$core$IFn$_invoke$arity$2 ? pred__20775.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$201,expr__20776) : pred__20775.call(null,cljs.core.constant$keyword$201,expr__20776))))
{return clustermap.components.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__20775.cljs$core$IFn$_invoke$arity$2 ? pred__20775.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$202,expr__20776) : pred__20775.call(null,cljs.core.constant$keyword$202,expr__20776))))
{return clustermap.components.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__20775.cljs$core$IFn$_invoke$arity$2 ? pred__20775.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$200,expr__20776) : pred__20775.call(null,cljs.core.constant$keyword$200,expr__20776))))
{return clustermap.components.map_report.constituency_report(value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(data);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root(app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
