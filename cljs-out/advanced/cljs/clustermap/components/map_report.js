// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$394,(function (){var G__22535 = site_stats;var G__22535__$1 = (((G__22535 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22535));return G__22535__$1;
})(),cljs.core.constant$keyword$395,(function (){var G__22536 = site_stats;var G__22536__$1 = (((G__22536 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22536));return G__22536__$1;
})(),cljs.core.constant$keyword$396,(function (){var G__22537 = site_stats;var G__22537__$1 = (((G__22537 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22537));return G__22537__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22569 = clustermap.components.map_report.type_counts(site_stats);var map__22569__$1 = ((cljs.core.seq_QMARK_(map__22569))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22569):map__22569);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22569__$1,cljs.core.constant$keyword$396);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22569__$1,cljs.core.constant$keyword$395);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22569__$1,cljs.core.constant$keyword$394);if(typeof clustermap.components.map_report.t22570 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22570 = (function (pc_count,ic_count,const_count,map__22569,comm,site_stats,all_portfolio_companies_summary_report,meta22571){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22569 = map__22569;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22571 = meta22571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22570.cljs$lang$type = true;
clustermap.components.map_report.t22570.cljs$lang$ctorStr = "clustermap.components.map-report/t22570";
clustermap.components.map_report.t22570.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22570");
});
clustermap.components.map_report.t22570.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22570.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22575 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22575))
{return React.DOM.li(sablono.interpreter.attributes(attrs22575),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22575),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22580 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22580))
{return React.DOM.li(sablono.interpreter.attributes(attrs22580),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22580),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22585 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22585))
{return React.DOM.li(sablono.interpreter.attributes(attrs22585),(function (){var attrs22586 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22586))
{return React.DOM.small(sablono.interpreter.attributes(attrs22586),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22586));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22585),(function (){var attrs22587 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22587))
{return React.DOM.small(sablono.interpreter.attributes(attrs22587),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22587));
}
})());
}
})(),(function (){var attrs22588 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22598 = self__.site_stats;var G__22598__$1 = (((G__22598 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22598));var G__22598__$2 = (((G__22598__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22598__$1));return G__22598__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22598 = self__.site_stats;var G__22598__$1 = (((G__22598 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22598));var G__22598__$2 = (((G__22598__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22598__$1));return G__22598__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22588))
{return React.DOM.li(sablono.interpreter.attributes(attrs22588),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22588),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22593 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22599 = self__.site_stats;var G__22599__$1 = (((G__22599 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22599));var G__22599__$2 = (((G__22599__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22599__$1));return G__22599__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22599 = self__.site_stats;var G__22599__$1 = (((G__22599 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22599));var G__22599__$2 = (((G__22599__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22599__$1));return G__22599__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22593))
{return React.DOM.li(sablono.interpreter.attributes(attrs22593),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22593),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22572){var self__ = this;
var _22572__$1 = this;return self__.meta22571;
});
clustermap.components.map_report.t22570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22572,meta22571__$1){var self__ = this;
var _22572__$1 = this;return (new clustermap.components.map_report.t22570(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22569,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22571__$1));
});
clustermap.components.map_report.__GT_t22570 = (function __GT_t22570(pc_count__$1,ic_count__$1,const_count__$1,map__22569__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22571){return (new clustermap.components.map_report.t22570(pc_count__$1,ic_count__$1,const_count__$1,map__22569__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22571));
});
}
return (new clustermap.components.map_report.t22570(pc_count,ic_count,const_count,map__22569__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22625 = clustermap.components.map_report.type_counts(site_stats);var map__22625__$1 = ((cljs.core.seq_QMARK_(map__22625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22625):map__22625);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22625__$1,cljs.core.constant$keyword$396);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22625__$1,cljs.core.constant$keyword$395);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22625__$1,cljs.core.constant$keyword$394);if(typeof clustermap.components.map_report.t22626 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22626 = (function (pc_count,ic_count,const_count,map__22625,comm,site_stats,portfolio_company,portfolio_company_report,meta22627){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22625 = map__22625;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22627 = meta22627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22626.cljs$lang$type = true;
clustermap.components.map_report.t22626.cljs$lang$ctorStr = "clustermap.components.map-report/t22626";
clustermap.components.map_report.t22626.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22626");
});
clustermap.components.map_report.t22626.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22626.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22631 = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22631))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22631),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22631));
}
})()),React.DOM.ul(null,(function (){var attrs22632 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22632))
{return React.DOM.li(sablono.interpreter.attributes(attrs22632),(function (){var attrs22633 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22633))
{return React.DOM.small(sablono.interpreter.attributes(attrs22633),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22633));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22632),(function (){var attrs22634 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22634))
{return React.DOM.small(sablono.interpreter.attributes(attrs22634),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22634));
}
})());
}
})(),(function (){var attrs22635 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22635))
{return React.DOM.li(sablono.interpreter.attributes(attrs22635),(function (){var attrs22636 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22636))
{return React.DOM.small(sablono.interpreter.attributes(attrs22636),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22636));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22635),(function (){var attrs22637 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22637))
{return React.DOM.small(sablono.interpreter.attributes(attrs22637),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22637));
}
})());
}
})(),(function (){var attrs22638 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22648 = self__.site_stats;var G__22648__$1 = (((G__22648 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22648));var G__22648__$2 = (((G__22648__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22648__$1));return G__22648__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22648 = self__.site_stats;var G__22648__$1 = (((G__22648 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22648));var G__22648__$2 = (((G__22648__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22648__$1));return G__22648__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22638))
{return React.DOM.li(sablono.interpreter.attributes(attrs22638),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22638),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22643 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22649 = self__.site_stats;var G__22649__$1 = (((G__22649 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22649));var G__22649__$2 = (((G__22649__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22649__$1));return G__22649__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22649 = self__.site_stats;var G__22649__$1 = (((G__22649 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22649));var G__22649__$2 = (((G__22649__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22649__$1));return G__22649__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22643))
{return React.DOM.li(sablono.interpreter.attributes(attrs22643),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22643),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22628){var self__ = this;
var _22628__$1 = this;return self__.meta22627;
});
clustermap.components.map_report.t22626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22628,meta22627__$1){var self__ = this;
var _22628__$1 = this;return (new clustermap.components.map_report.t22626(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22625,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22627__$1));
});
clustermap.components.map_report.__GT_t22626 = (function __GT_t22626(pc_count__$1,ic_count__$1,const_count__$1,map__22625__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22627){return (new clustermap.components.map_report.t22626(pc_count__$1,ic_count__$1,const_count__$1,map__22625__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22627));
});
}
return (new clustermap.components.map_report.t22626(pc_count,ic_count,const_count,map__22625__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22675 = clustermap.components.map_report.type_counts(site_stats);var map__22675__$1 = ((cljs.core.seq_QMARK_(map__22675))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22675):map__22675);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22675__$1,cljs.core.constant$keyword$396);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22675__$1,cljs.core.constant$keyword$395);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22675__$1,cljs.core.constant$keyword$394);if(typeof clustermap.components.map_report.t22676 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22676 = (function (pc_count,ic_count,const_count,map__22675,comm,site_stats,investor_company,investor_company_report,meta22677){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22675 = map__22675;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22677 = meta22677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22676.cljs$lang$type = true;
clustermap.components.map_report.t22676.cljs$lang$ctorStr = "clustermap.components.map-report/t22676";
clustermap.components.map_report.t22676.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22676");
});
clustermap.components.map_report.t22676.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22676.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22681 = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22681))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22681),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22681));
}
})()),React.DOM.ul(null,(function (){var attrs22682 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22682))
{return React.DOM.li(sablono.interpreter.attributes(attrs22682),(function (){var attrs22683 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22683))
{return React.DOM.small(sablono.interpreter.attributes(attrs22683),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22683));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22682),(function (){var attrs22684 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22684))
{return React.DOM.small(sablono.interpreter.attributes(attrs22684),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22684));
}
})());
}
})(),(function (){var attrs22685 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22685))
{return React.DOM.li(sablono.interpreter.attributes(attrs22685),(function (){var attrs22686 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22686))
{return React.DOM.small(sablono.interpreter.attributes(attrs22686),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22686));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22685),(function (){var attrs22687 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22687))
{return React.DOM.small(sablono.interpreter.attributes(attrs22687),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22687));
}
})());
}
})(),(function (){var attrs22688 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22698 = self__.site_stats;var G__22698__$1 = (((G__22698 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22698));var G__22698__$2 = (((G__22698__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22698__$1));return G__22698__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22698 = self__.site_stats;var G__22698__$1 = (((G__22698 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22698));var G__22698__$2 = (((G__22698__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22698__$1));return G__22698__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22688))
{return React.DOM.li(sablono.interpreter.attributes(attrs22688),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22688),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22693 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22699 = self__.site_stats;var G__22699__$1 = (((G__22699 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22699));var G__22699__$2 = (((G__22699__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22699__$1));return G__22699__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22699 = self__.site_stats;var G__22699__$1 = (((G__22699 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22699));var G__22699__$2 = (((G__22699__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22699__$1));return G__22699__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22693))
{return React.DOM.li(sablono.interpreter.attributes(attrs22693),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22693),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22678){var self__ = this;
var _22678__$1 = this;return self__.meta22677;
});
clustermap.components.map_report.t22676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22678,meta22677__$1){var self__ = this;
var _22678__$1 = this;return (new clustermap.components.map_report.t22676(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22675,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22677__$1));
});
clustermap.components.map_report.__GT_t22676 = (function __GT_t22676(pc_count__$1,ic_count__$1,const_count__$1,map__22675__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22677){return (new clustermap.components.map_report.t22676(pc_count__$1,ic_count__$1,const_count__$1,map__22675__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22677));
});
}
return (new clustermap.components.map_report.t22676(pc_count,ic_count,const_count,map__22675__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22725 = clustermap.components.map_report.type_counts(site_stats);var map__22725__$1 = ((cljs.core.seq_QMARK_(map__22725))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22725):map__22725);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22725__$1,cljs.core.constant$keyword$396);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22725__$1,cljs.core.constant$keyword$395);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22725__$1,cljs.core.constant$keyword$394);if(typeof clustermap.components.map_report.t22726 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22726 = (function (pc_count,ic_count,const_count,map__22725,comm,site_stats,constituency,constituency_report,meta22727){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22725 = map__22725;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22727 = meta22727;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22726.cljs$lang$type = true;
clustermap.components.map_report.t22726.cljs$lang$ctorStr = "clustermap.components.map-report/t22726";
clustermap.components.map_report.t22726.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22726");
});
clustermap.components.map_report.t22726.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22726.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22731 = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22731))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22731),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$398.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22731),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$398.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22732 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22732))
{return React.DOM.li(sablono.interpreter.attributes(attrs22732),(function (){var attrs22733 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22733))
{return React.DOM.small(sablono.interpreter.attributes(attrs22733),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22733));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22732),(function (){var attrs22734 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22734))
{return React.DOM.small(sablono.interpreter.attributes(attrs22734),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22734));
}
})());
}
})(),(function (){var attrs22735 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22735))
{return React.DOM.li(sablono.interpreter.attributes(attrs22735),(function (){var attrs22736 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22736))
{return React.DOM.small(sablono.interpreter.attributes(attrs22736),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22736));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22735),(function (){var attrs22737 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22737))
{return React.DOM.small(sablono.interpreter.attributes(attrs22737),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22737));
}
})());
}
})(),(function (){var attrs22738 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22748 = self__.site_stats;var G__22748__$1 = (((G__22748 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22748));var G__22748__$2 = (((G__22748__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22748__$1));return G__22748__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22748 = self__.site_stats;var G__22748__$1 = (((G__22748 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22748));var G__22748__$2 = (((G__22748__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22748__$1));return G__22748__$2;
})(),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22738))
{return React.DOM.li(sablono.interpreter.attributes(attrs22738),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22738),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22743 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22749 = self__.site_stats;var G__22749__$1 = (((G__22749 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22749));var G__22749__$2 = (((G__22749__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22749__$1));return G__22749__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22749 = self__.site_stats;var G__22749__$1 = (((G__22749 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22749));var G__22749__$2 = (((G__22749__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22749__$1));return G__22749__$2;
})(),cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22743))
{return React.DOM.li(sablono.interpreter.attributes(attrs22743),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22743),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22728){var self__ = this;
var _22728__$1 = this;return self__.meta22727;
});
clustermap.components.map_report.t22726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22728,meta22727__$1){var self__ = this;
var _22728__$1 = this;return (new clustermap.components.map_report.t22726(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22725,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22727__$1));
});
clustermap.components.map_report.__GT_t22726 = (function __GT_t22726(pc_count__$1,ic_count__$1,const_count__$1,map__22725__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22727){return (new clustermap.components.map_report.t22726(pc_count__$1,ic_count__$1,const_count__$1,map__22725__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22727));
});
}
return (new clustermap.components.map_report.t22726(pc_count,ic_count,const_count,map__22725__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$300);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,cljs.core.constant$keyword$264], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,cljs.core.constant$keyword$229], null));var site_stats = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(data);var pred__22753 = cljs.core._EQ__EQ_;var expr__22754 = type;if(cljs.core.truth_((pred__22753.cljs$core$IFn$_invoke$arity$2 ? pred__22753.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__22754) : pred__22753.call(null,cljs.core.constant$keyword$297,expr__22754))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22753.cljs$core$IFn$_invoke$arity$2 ? pred__22753.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$298,expr__22754) : pred__22753.call(null,cljs.core.constant$keyword$298,expr__22754))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22753.cljs$core$IFn$_invoke$arity$2 ? pred__22753.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$299,expr__22754) : pred__22753.call(null,cljs.core.constant$keyword$299,expr__22754))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
