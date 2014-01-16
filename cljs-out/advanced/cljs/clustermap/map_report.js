// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.map_report');
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
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(data);var ic_summ = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t20423 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t20423 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta20424){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta20424 = meta20424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t20423.cljs$lang$type = true;
clustermap.map_report.t20423.cljs$lang$ctorStr = "clustermap.map-report/t20423";
clustermap.map_report.t20423.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t20423");
});
clustermap.map_report.t20423.prototype.om$core$IRender$ = true;
clustermap.map_report.t20423.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs20428 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20448 = self__.pc_summ;var G__20448__$1 = (((G__20448 == null))?null:(G__20448["count"]));return G__20448__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20448 = self__.pc_summ;var G__20448__$1 = (((G__20448 == null))?null:(G__20448["count"]));return G__20448__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20428))
{return React.DOM.li(sablono.interpreter.attributes(attrs20428),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20428),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs20433 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20449 = self__.ic_summ;var G__20449__$1 = (((G__20449 == null))?null:(G__20449["count"]));return G__20449__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20449 = self__.ic_summ;var G__20449__$1 = (((G__20449 == null))?null:(G__20449["count"]));return G__20449__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20433))
{return React.DOM.li(sablono.interpreter.attributes(attrs20433),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20433),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs20438 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20450 = self__.pc_summ;var G__20450__$1 = (((G__20450 == null))?null:(G__20450["latest_turnover_stats"]["total"]));return G__20450__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20450 = self__.pc_summ;var G__20450__$1 = (((G__20450 == null))?null:(G__20450["latest_turnover_stats"]["total"]));return G__20450__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20438))
{return React.DOM.li(sablono.interpreter.attributes(attrs20438),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20438),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs20443 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20451 = self__.pc_summ;var G__20451__$1 = (((G__20451 == null))?null:(G__20451["latest_employee_count_stats"]["total"]));return G__20451__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20451 = self__.pc_summ;var G__20451__$1 = (((G__20451 == null))?null:(G__20451["latest_employee_count_stats"]["total"]));return G__20451__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20443))
{return React.DOM.li(sablono.interpreter.attributes(attrs20443),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20443),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t20423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20425){var self__ = this;
var _20425__$1 = this;return self__.meta20424;
});
clustermap.map_report.t20423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20425,meta20424__$1){var self__ = this;
var _20425__$1 = this;return (new clustermap.map_report.t20423(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta20424__$1));
});
clustermap.map_report.__GT_t20423 = (function __GT_t20423(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20424){return (new clustermap.map_report.t20423(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20424));
});
}
return (new clustermap.map_report.t20423(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.portfolio_company_report = (function portfolio_company_report(data){if(typeof clustermap.map_report.t20480 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t20480 = (function (data,portfolio_company_report,meta20481){
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta20481 = meta20481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t20480.cljs$lang$type = true;
clustermap.map_report.t20480.cljs$lang$ctorStr = "clustermap.map-report/t20480";
clustermap.map_report.t20480.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t20480");
});
clustermap.map_report.t20480.prototype.om$core$IRender$ = true;
clustermap.map_report.t20480.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20483 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20483))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20483),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20483));
}
})()),React.DOM.ul(null,(function (){var attrs20484 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20504 = self__.data;var G__20504__$1 = (((G__20504 == null))?null:(G__20504["sites"]));var G__20504__$2 = (((G__20504__$1 == null))?null:cljs.core.count(G__20504__$1));return G__20504__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20504 = self__.data;var G__20504__$1 = (((G__20504 == null))?null:(G__20504["sites"]));var G__20504__$2 = (((G__20504__$1 == null))?null:cljs.core.count(G__20504__$1));return G__20504__$2;
})()));if(cljs.core.map_QMARK_(attrs20484))
{return React.DOM.li(sablono.interpreter.attributes(attrs20484),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20484),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs20489 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20505 = self__.data;var G__20505__$1 = (((G__20505 == null))?null:(G__20505["boundarylinecolls"]["uk_constituencies"]));var G__20505__$2 = (((G__20505__$1 == null))?null:cljs.core.count(G__20505__$1));return G__20505__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20505 = self__.data;var G__20505__$1 = (((G__20505 == null))?null:(G__20505["boundarylinecolls"]["uk_constituencies"]));var G__20505__$2 = (((G__20505__$1 == null))?null:cljs.core.count(G__20505__$1));return G__20505__$2;
})()));if(cljs.core.map_QMARK_(attrs20489))
{return React.DOM.li(sablono.interpreter.attributes(attrs20489),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20489),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs20494 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20506 = self__.data;var G__20506__$1 = (((G__20506 == null))?null:(G__20506["latest_turnover"]));return G__20506__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20506 = self__.data;var G__20506__$1 = (((G__20506 == null))?null:(G__20506["latest_turnover"]));return G__20506__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20494))
{return React.DOM.li(sablono.interpreter.attributes(attrs20494),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20494),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs20499 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20507 = self__.data;var G__20507__$1 = (((G__20507 == null))?null:(G__20507["latest_employee_count"]));return G__20507__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20507 = self__.data;var G__20507__$1 = (((G__20507 == null))?null:(G__20507["latest_employee_count"]));return G__20507__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20499))
{return React.DOM.li(sablono.interpreter.attributes(attrs20499),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20499),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t20480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20482){var self__ = this;
var _20482__$1 = this;return self__.meta20481;
});
clustermap.map_report.t20480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20482,meta20481__$1){var self__ = this;
var _20482__$1 = this;return (new clustermap.map_report.t20480(self__.data,self__.portfolio_company_report,meta20481__$1));
});
clustermap.map_report.__GT_t20480 = (function __GT_t20480(data__$1,portfolio_company_report__$1,meta20481){return (new clustermap.map_report.t20480(data__$1,portfolio_company_report__$1,meta20481));
});
}
return (new clustermap.map_report.t20480(data,portfolio_company_report,null));
});
clustermap.map_report.investor_company_report = (function investor_company_report(data){if(typeof clustermap.map_report.t20536 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t20536 = (function (data,investor_company_report,meta20537){
this.data = data;
this.investor_company_report = investor_company_report;
this.meta20537 = meta20537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t20536.cljs$lang$type = true;
clustermap.map_report.t20536.cljs$lang$ctorStr = "clustermap.map-report/t20536";
clustermap.map_report.t20536.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t20536");
});
clustermap.map_report.t20536.prototype.om$core$IRender$ = true;
clustermap.map_report.t20536.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20539 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20539))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20539),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20539));
}
})()),React.DOM.ul(null,(function (){var attrs20540 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20560 = self__.data;var G__20560__$1 = (((G__20560 == null))?null:(G__20560["portfolio_companies"]));var G__20560__$2 = (((G__20560__$1 == null))?null:cljs.core.count(G__20560__$1));return G__20560__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20560 = self__.data;var G__20560__$1 = (((G__20560 == null))?null:(G__20560["portfolio_companies"]));var G__20560__$2 = (((G__20560__$1 == null))?null:cljs.core.count(G__20560__$1));return G__20560__$2;
})()));if(cljs.core.map_QMARK_(attrs20540))
{return React.DOM.li(sablono.interpreter.attributes(attrs20540),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20540),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs20545 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20561 = self__.data;var G__20561__$1 = (((G__20561 == null))?null:(G__20561["boundarylinecolls"]["uk_constituencies"]));var G__20561__$2 = (((G__20561__$1 == null))?null:cljs.core.count(G__20561__$1));return G__20561__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20561 = self__.data;var G__20561__$1 = (((G__20561 == null))?null:(G__20561["boundarylinecolls"]["uk_constituencies"]));var G__20561__$2 = (((G__20561__$1 == null))?null:cljs.core.count(G__20561__$1));return G__20561__$2;
})()));if(cljs.core.map_QMARK_(attrs20545))
{return React.DOM.li(sablono.interpreter.attributes(attrs20545),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20545),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs20550 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20562 = self__.data;var G__20562__$1 = (((G__20562 == null))?null:(G__20562["total_turnover"]));return G__20562__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20562 = self__.data;var G__20562__$1 = (((G__20562 == null))?null:(G__20562["total_turnover"]));return G__20562__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20550))
{return React.DOM.li(sablono.interpreter.attributes(attrs20550),React.DOM.small(null,"Total Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20550),React.DOM.small(null,"Total Company Turnover"));
}
})(),(function (){var attrs20555 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20563 = self__.data;var G__20563__$1 = (((G__20563 == null))?null:(G__20563["total_employee_count"]));return G__20563__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20563 = self__.data;var G__20563__$1 = (((G__20563 == null))?null:(G__20563["total_employee_count"]));return G__20563__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20555))
{return React.DOM.li(sablono.interpreter.attributes(attrs20555),React.DOM.small(null,"Total Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20555),React.DOM.small(null,"Total Company Employees"));
}
})()));
});
clustermap.map_report.t20536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20538){var self__ = this;
var _20538__$1 = this;return self__.meta20537;
});
clustermap.map_report.t20536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20538,meta20537__$1){var self__ = this;
var _20538__$1 = this;return (new clustermap.map_report.t20536(self__.data,self__.investor_company_report,meta20537__$1));
});
clustermap.map_report.__GT_t20536 = (function __GT_t20536(data__$1,investor_company_report__$1,meta20537){return (new clustermap.map_report.t20536(data__$1,investor_company_report__$1,meta20537));
});
}
return (new clustermap.map_report.t20536(data,investor_company_report,null));
});
clustermap.map_report.constituency_report = (function constituency_report(data){if(typeof clustermap.map_report.t20593 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t20593 = (function (data,constituency_report,meta20594){
this.data = data;
this.constituency_report = constituency_report;
this.meta20594 = meta20594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t20593.cljs$lang$type = true;
clustermap.map_report.t20593.cljs$lang$ctorStr = "clustermap.map-report/t20593";
clustermap.map_report.t20593.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t20593");
});
clustermap.map_report.t20593.prototype.om$core$IRender$ = true;
clustermap.map_report.t20593.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20596 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20596))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20596),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20596));
}
})(),(function (){var attrs20597 = (self__.data["mp"]);if(cljs.core.map_QMARK_(attrs20597))
{return React.DOM.h3(sablono.interpreter.attributes(attrs20597),React.DOM.small(null,"(",sablono.interpreter.interpret((self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs20597),React.DOM.small(null,"(",sablono.interpreter.interpret((self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs20598 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20618 = self__.data;var G__20618__$1 = (((G__20618 == null))?null:(G__20618["investor_companies"]));var G__20618__$2 = (((G__20618__$1 == null))?null:cljs.core.count(G__20618__$1));return G__20618__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20618 = self__.data;var G__20618__$1 = (((G__20618 == null))?null:(G__20618["investor_companies"]));var G__20618__$2 = (((G__20618__$1 == null))?null:cljs.core.count(G__20618__$1));return G__20618__$2;
})()));if(cljs.core.map_QMARK_(attrs20598))
{return React.DOM.li(sablono.interpreter.attributes(attrs20598),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20598),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs20603 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1((function (){var G__20619 = self__.data;var G__20619__$1 = (((G__20619 == null))?null:(G__20619["portfolio_companies"]));var G__20619__$2 = (((G__20619__$1 == null))?null:cljs.core.count(G__20619__$1));return G__20619__$2;
})()) : clustermap.formats.number.fnum.call(null,(function (){var G__20619 = self__.data;var G__20619__$1 = (((G__20619 == null))?null:(G__20619["portfolio_companies"]));var G__20619__$2 = (((G__20619__$1 == null))?null:cljs.core.count(G__20619__$1));return G__20619__$2;
})()));if(cljs.core.map_QMARK_(attrs20603))
{return React.DOM.li(sablono.interpreter.attributes(attrs20603),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20603),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs20608 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20620 = self__.data;var G__20620__$1 = (((G__20620 == null))?null:(G__20620["total_turnover"]));return G__20620__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20620 = self__.data;var G__20620__$1 = (((G__20620 == null))?null:(G__20620["total_turnover"]));return G__20620__$1;
})(),cljs.core.constant$keyword$195,2,cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20608))
{return React.DOM.li(sablono.interpreter.attributes(attrs20608),React.DOM.small(null,"Total Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20608),React.DOM.small(null,"Total Turnover"));
}
})(),(function (){var attrs20613 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20621 = self__.data;var G__20621__$1 = (((G__20621 == null))?null:(G__20621["total_employee_count"]));return G__20621__$1;
})(),cljs.core.constant$keyword$116,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20621 = self__.data;var G__20621__$1 = (((G__20621 == null))?null:(G__20621["total_employee_count"]));return G__20621__$1;
})(),cljs.core.constant$keyword$116,"-"));if(cljs.core.map_QMARK_(attrs20613))
{return React.DOM.li(sablono.interpreter.attributes(attrs20613),React.DOM.small(null,"Total Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20613),React.DOM.small(null,"Total Employees"));
}
})()));
});
clustermap.map_report.t20593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20595){var self__ = this;
var _20595__$1 = this;return self__.meta20594;
});
clustermap.map_report.t20593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20595,meta20594__$1){var self__ = this;
var _20595__$1 = this;return (new clustermap.map_report.t20593(self__.data,self__.constituency_report,meta20594__$1));
});
clustermap.map_report.__GT_t20593 = (function __GT_t20593(data__$1,constituency_report__$1,meta20594){return (new clustermap.map_report.t20593(data__$1,constituency_report__$1,meta20594));
});
}
return (new clustermap.map_report.t20593(data,constituency_report,null));
});
clustermap.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,cljs.core.constant$keyword$153], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,cljs.core.constant$keyword$120], null));var pred__20625 = cljs.core._EQ__EQ_;var expr__20626 = type;if(cljs.core.truth_((pred__20625.cljs$core$IFn$_invoke$arity$2 ? pred__20625.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$163,expr__20626) : pred__20625.call(null,cljs.core.constant$keyword$163,expr__20626))))
{return clustermap.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__20625.cljs$core$IFn$_invoke$arity$2 ? pred__20625.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$164,expr__20626) : pred__20625.call(null,cljs.core.constant$keyword$164,expr__20626))))
{return clustermap.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__20625.cljs$core$IFn$_invoke$arity$2 ? pred__20625.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$162,expr__20626) : pred__20625.call(null,cljs.core.constant$keyword$162,expr__20626))))
{return clustermap.map_report.constituency_report(value);
} else
{return clustermap.map_report.all_portfolio_companies_summary_report(data);
}
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root(app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});
