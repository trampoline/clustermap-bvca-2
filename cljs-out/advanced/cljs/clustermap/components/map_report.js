// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('domina.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$751,(function (){var G__34413 = site_stats;var G__34413__$1 = (((G__34413 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34413));return G__34413__$1;
})(),cljs.core.constant$keyword$752,(function (){var G__34414 = site_stats;var G__34414__$1 = (((G__34414 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34414));return G__34414__$1;
})(),cljs.core.constant$keyword$753,(function (){var G__34415 = site_stats;var G__34415__$1 = (((G__34415 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34415));return G__34415__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__34447 = clustermap.components.map_report.type_counts(site_stats);var map__34447__$1 = ((cljs.core.seq_QMARK_(map__34447))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34447):map__34447);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34447__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34447__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34447__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34448 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34448 = (function (pc_count,ic_count,const_count,map__34447,comm,site_stats,all_portfolio_companies_summary_report,meta34449){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34447 = map__34447;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34449 = meta34449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34448.cljs$lang$type = true;
clustermap.components.map_report.t34448.cljs$lang$ctorStr = "clustermap.components.map-report/t34448";
clustermap.components.map_report.t34448.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34448");
});
clustermap.components.map_report.t34448.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34448.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34453 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34453))
{return React.DOM.li(sablono.interpreter.attributes(attrs34453),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34453),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs34458 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34458))
{return React.DOM.li(sablono.interpreter.attributes(attrs34458),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34458),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs34463 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34463))
{return React.DOM.li(sablono.interpreter.attributes(attrs34463),(function (){var attrs34464 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34464))
{return React.DOM.small(sablono.interpreter.attributes(attrs34464),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34464));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34463),(function (){var attrs34465 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34465))
{return React.DOM.small(sablono.interpreter.attributes(attrs34465),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34465));
}
})());
}
})(),(function (){var attrs34466 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34476 = self__.site_stats;var G__34476__$1 = (((G__34476 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34476));var G__34476__$2 = (((G__34476__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34476__$1));return G__34476__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34476 = self__.site_stats;var G__34476__$1 = (((G__34476 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34476));var G__34476__$2 = (((G__34476__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34476__$1));return G__34476__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34466))
{return React.DOM.li(sablono.interpreter.attributes(attrs34466),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34466),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34471 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34477 = self__.site_stats;var G__34477__$1 = (((G__34477 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34477));var G__34477__$2 = (((G__34477__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34477__$1));return G__34477__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34477 = self__.site_stats;var G__34477__$1 = (((G__34477 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34477));var G__34477__$2 = (((G__34477__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34477__$1));return G__34477__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34471))
{return React.DOM.li(sablono.interpreter.attributes(attrs34471),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34471),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34450){var self__ = this;
var _34450__$1 = this;return self__.meta34449;
});
clustermap.components.map_report.t34448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34450,meta34449__$1){var self__ = this;
var _34450__$1 = this;return (new clustermap.components.map_report.t34448(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34447,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34449__$1));
});
clustermap.components.map_report.__GT_t34448 = (function __GT_t34448(pc_count__$1,ic_count__$1,const_count__$1,map__34447__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34449){return (new clustermap.components.map_report.t34448(pc_count__$1,ic_count__$1,const_count__$1,map__34447__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34449));
});
}
return (new clustermap.components.map_report.t34448(pc_count,ic_count,const_count,map__34447__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__34503 = clustermap.components.map_report.type_counts(site_stats);var map__34503__$1 = ((cljs.core.seq_QMARK_(map__34503))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34503):map__34503);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34503__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34503__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34503__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34504 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34504 = (function (pc_count,ic_count,const_count,map__34503,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta34505){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34503 = map__34503;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta34505 = meta34505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34504.cljs$lang$type = true;
clustermap.components.map_report.t34504.cljs$lang$ctorStr = "clustermap.components.map-report/t34504";
clustermap.components.map_report.t34504.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34504");
});
clustermap.components.map_report.t34504.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34504.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs34509 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs34509))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34509),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34509));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34510 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34510))
{return React.DOM.li(sablono.interpreter.attributes(attrs34510),(function (){var attrs34511 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34511))
{return React.DOM.small(sablono.interpreter.attributes(attrs34511),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34511));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34510),(function (){var attrs34512 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34512))
{return React.DOM.small(sablono.interpreter.attributes(attrs34512),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34512));
}
})());
}
})(),(function (){var attrs34513 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34513))
{return React.DOM.li(sablono.interpreter.attributes(attrs34513),(function (){var attrs34514 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34514))
{return React.DOM.small(sablono.interpreter.attributes(attrs34514),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34514));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34513),(function (){var attrs34515 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34515))
{return React.DOM.small(sablono.interpreter.attributes(attrs34515),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34515));
}
})());
}
})(),(function (){var attrs34516 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34526 = self__.site_stats;var G__34526__$1 = (((G__34526 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34526));var G__34526__$2 = (((G__34526__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34526__$1));return G__34526__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34526 = self__.site_stats;var G__34526__$1 = (((G__34526 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34526));var G__34526__$2 = (((G__34526__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34526__$1));return G__34526__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34516))
{return React.DOM.li(sablono.interpreter.attributes(attrs34516),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34516),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34521 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34527 = self__.site_stats;var G__34527__$1 = (((G__34527 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34527));var G__34527__$2 = (((G__34527__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34527__$1));return G__34527__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34527 = self__.site_stats;var G__34527__$1 = (((G__34527 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34527));var G__34527__$2 = (((G__34527__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34527__$1));return G__34527__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34521))
{return React.DOM.li(sablono.interpreter.attributes(attrs34521),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34521),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34506){var self__ = this;
var _34506__$1 = this;return self__.meta34505;
});
clustermap.components.map_report.t34504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34506,meta34505__$1){var self__ = this;
var _34506__$1 = this;return (new clustermap.components.map_report.t34504(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34503,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta34505__$1));
});
clustermap.components.map_report.__GT_t34504 = (function __GT_t34504(pc_count__$1,ic_count__$1,const_count__$1,map__34503__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34505){return (new clustermap.components.map_report.t34504(pc_count__$1,ic_count__$1,const_count__$1,map__34503__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34505));
});
}
return (new clustermap.components.map_report.t34504(pc_count,ic_count,const_count,map__34503__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__34553 = clustermap.components.map_report.type_counts(site_stats);var map__34553__$1 = ((cljs.core.seq_QMARK_(map__34553))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34553):map__34553);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34553__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34553__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34553__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34554 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34554 = (function (pc_count,ic_count,const_count,map__34553,path_fn,comm,site_stats,investor_company,investor_company_report,meta34555){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34553 = map__34553;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta34555 = meta34555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34554.cljs$lang$type = true;
clustermap.components.map_report.t34554.cljs$lang$ctorStr = "clustermap.components.map-report/t34554";
clustermap.components.map_report.t34554.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34554");
});
clustermap.components.map_report.t34554.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34554.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs34559 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs34559))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34559),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34559));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34560 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34560))
{return React.DOM.li(sablono.interpreter.attributes(attrs34560),(function (){var attrs34561 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs34561))
{return React.DOM.small(sablono.interpreter.attributes(attrs34561),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34561));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34560),(function (){var attrs34562 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs34562))
{return React.DOM.small(sablono.interpreter.attributes(attrs34562),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34562));
}
})());
}
})(),(function (){var attrs34563 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34563))
{return React.DOM.li(sablono.interpreter.attributes(attrs34563),(function (){var attrs34564 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34564))
{return React.DOM.small(sablono.interpreter.attributes(attrs34564),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34564));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34563),(function (){var attrs34565 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34565))
{return React.DOM.small(sablono.interpreter.attributes(attrs34565),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34565));
}
})());
}
})(),(function (){var attrs34566 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34576 = self__.site_stats;var G__34576__$1 = (((G__34576 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34576));var G__34576__$2 = (((G__34576__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34576__$1));return G__34576__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34576 = self__.site_stats;var G__34576__$1 = (((G__34576 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34576));var G__34576__$2 = (((G__34576__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34576__$1));return G__34576__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34566))
{return React.DOM.li(sablono.interpreter.attributes(attrs34566),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34566),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34571 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34577 = self__.site_stats;var G__34577__$1 = (((G__34577 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34577));var G__34577__$2 = (((G__34577__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34577__$1));return G__34577__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34577 = self__.site_stats;var G__34577__$1 = (((G__34577 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34577));var G__34577__$2 = (((G__34577__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34577__$1));return G__34577__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34571))
{return React.DOM.li(sablono.interpreter.attributes(attrs34571),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34571),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34556){var self__ = this;
var _34556__$1 = this;return self__.meta34555;
});
clustermap.components.map_report.t34554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34556,meta34555__$1){var self__ = this;
var _34556__$1 = this;return (new clustermap.components.map_report.t34554(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34553,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta34555__$1));
});
clustermap.components.map_report.__GT_t34554 = (function __GT_t34554(pc_count__$1,ic_count__$1,const_count__$1,map__34553__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34555){return (new clustermap.components.map_report.t34554(pc_count__$1,ic_count__$1,const_count__$1,map__34553__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34555));
});
}
return (new clustermap.components.map_report.t34554(pc_count,ic_count,const_count,map__34553__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__34607 = clustermap.components.map_report.type_counts(site_stats);var map__34607__$1 = ((cljs.core.seq_QMARK_(map__34607))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34607):map__34607);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34608 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34608 = (function (pc_count,ic_count,const_count,map__34607,path_fn,comm,site_stats,constituency,constituency_report,meta34609){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34607 = map__34607;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta34609 = meta34609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34608.cljs$lang$type = true;
clustermap.components.map_report.t34608.cljs$lang$ctorStr = "clustermap.components.map-report/t34608";
clustermap.components.map_report.t34608.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34608");
});
clustermap.components.map_report.t34608.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34608.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs34613 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs34613))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34613),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34613),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34618 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34618))
{return React.DOM.li(sablono.interpreter.attributes(attrs34618),(function (){var attrs34619 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs34619))
{return React.DOM.small(sablono.interpreter.attributes(attrs34619),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34619));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34618),(function (){var attrs34620 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs34620))
{return React.DOM.small(sablono.interpreter.attributes(attrs34620),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34620));
}
})());
}
})(),(function (){var attrs34621 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34621))
{return React.DOM.li(sablono.interpreter.attributes(attrs34621),(function (){var attrs34622 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34622))
{return React.DOM.small(sablono.interpreter.attributes(attrs34622),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34622));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34621),(function (){var attrs34623 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34623))
{return React.DOM.small(sablono.interpreter.attributes(attrs34623),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34623));
}
})());
}
})(),(function (){var attrs34624 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34634 = self__.site_stats;var G__34634__$1 = (((G__34634 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34634));var G__34634__$2 = (((G__34634__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34634__$1));return G__34634__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34634 = self__.site_stats;var G__34634__$1 = (((G__34634 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34634));var G__34634__$2 = (((G__34634__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34634__$1));return G__34634__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34624))
{return React.DOM.li(sablono.interpreter.attributes(attrs34624),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34624),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34629 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34635 = self__.site_stats;var G__34635__$1 = (((G__34635 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34635));var G__34635__$2 = (((G__34635__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34635__$1));return G__34635__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34635 = self__.site_stats;var G__34635__$1 = (((G__34635 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34635));var G__34635__$2 = (((G__34635__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34635__$1));return G__34635__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34629))
{return React.DOM.li(sablono.interpreter.attributes(attrs34629),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34629),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34610){var self__ = this;
var _34610__$1 = this;return self__.meta34609;
});
clustermap.components.map_report.t34608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34610,meta34609__$1){var self__ = this;
var _34610__$1 = this;return (new clustermap.components.map_report.t34608(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34607,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta34609__$1));
});
clustermap.components.map_report.__GT_t34608 = (function __GT_t34608(pc_count__$1,ic_count__$1,const_count__$1,map__34607__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34609){return (new clustermap.components.map_report.t34608(pc_count__$1,ic_count__$1,const_count__$1,map__34607__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34609));
});
}
return (new clustermap.components.map_report.t34608(pc_count,ic_count,const_count,map__34607__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__34640 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34640__$1 = ((cljs.core.seq_QMARK_(map__34640))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34640):map__34640);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34640__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34640__$1,cljs.core.constant$keyword$633);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,cljs.core.constant$keyword$584], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,cljs.core.constant$keyword$545], null));var site_stats = cljs.core.constant$keyword$667.cljs$core$IFn$_invoke$arity$1(data);var pred__34641 = cljs.core._EQ__EQ_;var expr__34642 = type;if(cljs.core.truth_((pred__34641.cljs$core$IFn$_invoke$arity$2 ? pred__34641.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34642) : pred__34641.call(null,cljs.core.constant$keyword$629,expr__34642))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__34641.cljs$core$IFn$_invoke$arity$2 ? pred__34641.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34642) : pred__34641.call(null,cljs.core.constant$keyword$630,expr__34642))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__34641.cljs$core$IFn$_invoke$arity$2 ? pred__34641.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34642) : pred__34641.call(null,cljs.core.constant$keyword$631,expr__34642))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
