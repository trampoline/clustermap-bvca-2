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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$405,(function (){var G__22705 = site_stats;var G__22705__$1 = (((G__22705 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22705));return G__22705__$1;
})(),cljs.core.constant$keyword$406,(function (){var G__22706 = site_stats;var G__22706__$1 = (((G__22706 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22706));return G__22706__$1;
})(),cljs.core.constant$keyword$407,(function (){var G__22707 = site_stats;var G__22707__$1 = (((G__22707 == null))?null:cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(G__22707));return G__22707__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22739 = clustermap.components.map_report.type_counts(site_stats);var map__22739__$1 = ((cljs.core.seq_QMARK_(map__22739))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22739):map__22739);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739__$1,cljs.core.constant$keyword$407);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739__$1,cljs.core.constant$keyword$406);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739__$1,cljs.core.constant$keyword$405);if(typeof clustermap.components.map_report.t22740 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22740 = (function (pc_count,ic_count,const_count,map__22739,comm,site_stats,all_portfolio_companies_summary_report,meta22741){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22739 = map__22739;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22741 = meta22741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22740.cljs$lang$type = true;
clustermap.components.map_report.t22740.cljs$lang$ctorStr = "clustermap.components.map-report/t22740";
clustermap.components.map_report.t22740.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22740");
});
clustermap.components.map_report.t22740.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22740.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22745 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$233,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22745))
{return React.DOM.li(sablono.interpreter.attributes(attrs22745),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22745),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22750 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$233,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22750))
{return React.DOM.li(sablono.interpreter.attributes(attrs22750),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22750),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22755 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$233,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22755))
{return React.DOM.li(sablono.interpreter.attributes(attrs22755),(function (){var attrs22756 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22756))
{return React.DOM.small(sablono.interpreter.attributes(attrs22756),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22756));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22755),(function (){var attrs22757 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22757))
{return React.DOM.small(sablono.interpreter.attributes(attrs22757),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22757));
}
})());
}
})(),(function (){var attrs22758 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22768 = self__.site_stats;var G__22768__$1 = (((G__22768 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22768));var G__22768__$2 = (((G__22768__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22768__$1));return G__22768__$2;
})(),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22768 = self__.site_stats;var G__22768__$1 = (((G__22768 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22768));var G__22768__$2 = (((G__22768__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22768__$1));return G__22768__$2;
})(),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22758))
{return React.DOM.li(sablono.interpreter.attributes(attrs22758),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22758),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22763 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22769 = self__.site_stats;var G__22769__$1 = (((G__22769 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22769));var G__22769__$2 = (((G__22769__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22769__$1));return G__22769__$2;
})(),cljs.core.constant$keyword$303,0,cljs.core.constant$keyword$233,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22769 = self__.site_stats;var G__22769__$1 = (((G__22769 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22769));var G__22769__$2 = (((G__22769__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22769__$1));return G__22769__$2;
})(),cljs.core.constant$keyword$303,0,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22763))
{return React.DOM.li(sablono.interpreter.attributes(attrs22763),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22763),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22742){var self__ = this;
var _22742__$1 = this;return self__.meta22741;
});
clustermap.components.map_report.t22740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22742,meta22741__$1){var self__ = this;
var _22742__$1 = this;return (new clustermap.components.map_report.t22740(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22739,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22741__$1));
});
clustermap.components.map_report.__GT_t22740 = (function __GT_t22740(pc_count__$1,ic_count__$1,const_count__$1,map__22739__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22741){return (new clustermap.components.map_report.t22740(pc_count__$1,ic_count__$1,const_count__$1,map__22739__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22741));
});
}
return (new clustermap.components.map_report.t22740(pc_count,ic_count,const_count,map__22739__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22795 = clustermap.components.map_report.type_counts(site_stats);var map__22795__$1 = ((cljs.core.seq_QMARK_(map__22795))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22795):map__22795);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22795__$1,cljs.core.constant$keyword$407);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22795__$1,cljs.core.constant$keyword$406);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22795__$1,cljs.core.constant$keyword$405);if(typeof clustermap.components.map_report.t22796 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22796 = (function (pc_count,ic_count,const_count,map__22795,comm,site_stats,portfolio_company,portfolio_company_report,meta22797){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22795 = map__22795;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22797 = meta22797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22796.cljs$lang$type = true;
clustermap.components.map_report.t22796.cljs$lang$ctorStr = "clustermap.components.map-report/t22796";
clustermap.components.map_report.t22796.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22796");
});
clustermap.components.map_report.t22796.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22796.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22801 = cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22801))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22801),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22801));
}
})()),React.DOM.ul(null,(function (){var attrs22802 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22802))
{return React.DOM.li(sablono.interpreter.attributes(attrs22802),(function (){var attrs22803 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22803))
{return React.DOM.small(sablono.interpreter.attributes(attrs22803),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22803));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22802),(function (){var attrs22804 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22804))
{return React.DOM.small(sablono.interpreter.attributes(attrs22804),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22804));
}
})());
}
})(),(function (){var attrs22805 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22805))
{return React.DOM.li(sablono.interpreter.attributes(attrs22805),(function (){var attrs22806 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22806))
{return React.DOM.small(sablono.interpreter.attributes(attrs22806),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22806));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22805),(function (){var attrs22807 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22807))
{return React.DOM.small(sablono.interpreter.attributes(attrs22807),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22807));
}
})());
}
})(),(function (){var attrs22808 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22818 = self__.site_stats;var G__22818__$1 = (((G__22818 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22818));var G__22818__$2 = (((G__22818__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22818__$1));return G__22818__$2;
})(),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22818 = self__.site_stats;var G__22818__$1 = (((G__22818 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22818));var G__22818__$2 = (((G__22818__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22818__$1));return G__22818__$2;
})(),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22808))
{return React.DOM.li(sablono.interpreter.attributes(attrs22808),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22808),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22813 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22819 = self__.site_stats;var G__22819__$1 = (((G__22819 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22819));var G__22819__$2 = (((G__22819__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22819__$1));return G__22819__$2;
})(),cljs.core.constant$keyword$303,0,cljs.core.constant$keyword$233,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22819 = self__.site_stats;var G__22819__$1 = (((G__22819 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22819));var G__22819__$2 = (((G__22819__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22819__$1));return G__22819__$2;
})(),cljs.core.constant$keyword$303,0,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22813))
{return React.DOM.li(sablono.interpreter.attributes(attrs22813),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22813),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22798){var self__ = this;
var _22798__$1 = this;return self__.meta22797;
});
clustermap.components.map_report.t22796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22798,meta22797__$1){var self__ = this;
var _22798__$1 = this;return (new clustermap.components.map_report.t22796(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22795,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22797__$1));
});
clustermap.components.map_report.__GT_t22796 = (function __GT_t22796(pc_count__$1,ic_count__$1,const_count__$1,map__22795__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22797){return (new clustermap.components.map_report.t22796(pc_count__$1,ic_count__$1,const_count__$1,map__22795__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22797));
});
}
return (new clustermap.components.map_report.t22796(pc_count,ic_count,const_count,map__22795__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22845 = clustermap.components.map_report.type_counts(site_stats);var map__22845__$1 = ((cljs.core.seq_QMARK_(map__22845))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22845):map__22845);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22845__$1,cljs.core.constant$keyword$407);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22845__$1,cljs.core.constant$keyword$406);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22845__$1,cljs.core.constant$keyword$405);if(typeof clustermap.components.map_report.t22846 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22846 = (function (pc_count,ic_count,const_count,map__22845,comm,site_stats,investor_company,investor_company_report,meta22847){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22845 = map__22845;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22847 = meta22847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22846.cljs$lang$type = true;
clustermap.components.map_report.t22846.cljs$lang$ctorStr = "clustermap.components.map-report/t22846";
clustermap.components.map_report.t22846.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22846");
});
clustermap.components.map_report.t22846.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22846.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22851 = cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22851))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22851),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22851));
}
})()),React.DOM.ul(null,(function (){var attrs22852 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22852))
{return React.DOM.li(sablono.interpreter.attributes(attrs22852),(function (){var attrs22853 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22853))
{return React.DOM.small(sablono.interpreter.attributes(attrs22853),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22853));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22852),(function (){var attrs22854 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22854))
{return React.DOM.small(sablono.interpreter.attributes(attrs22854),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22854));
}
})());
}
})(),(function (){var attrs22855 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22855))
{return React.DOM.li(sablono.interpreter.attributes(attrs22855),(function (){var attrs22856 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22856))
{return React.DOM.small(sablono.interpreter.attributes(attrs22856),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22856));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22855),(function (){var attrs22857 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22857))
{return React.DOM.small(sablono.interpreter.attributes(attrs22857),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22857));
}
})());
}
})(),(function (){var attrs22858 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22868 = self__.site_stats;var G__22868__$1 = (((G__22868 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22868));var G__22868__$2 = (((G__22868__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22868__$1));return G__22868__$2;
})(),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22868 = self__.site_stats;var G__22868__$1 = (((G__22868 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22868));var G__22868__$2 = (((G__22868__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22868__$1));return G__22868__$2;
})(),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22858))
{return React.DOM.li(sablono.interpreter.attributes(attrs22858),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22858),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22863 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22869 = self__.site_stats;var G__22869__$1 = (((G__22869 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22869));var G__22869__$2 = (((G__22869__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22869__$1));return G__22869__$2;
})(),cljs.core.constant$keyword$303,0,cljs.core.constant$keyword$233,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22869 = self__.site_stats;var G__22869__$1 = (((G__22869 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22869));var G__22869__$2 = (((G__22869__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22869__$1));return G__22869__$2;
})(),cljs.core.constant$keyword$303,0,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22863))
{return React.DOM.li(sablono.interpreter.attributes(attrs22863),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22863),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22848){var self__ = this;
var _22848__$1 = this;return self__.meta22847;
});
clustermap.components.map_report.t22846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22848,meta22847__$1){var self__ = this;
var _22848__$1 = this;return (new clustermap.components.map_report.t22846(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22845,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22847__$1));
});
clustermap.components.map_report.__GT_t22846 = (function __GT_t22846(pc_count__$1,ic_count__$1,const_count__$1,map__22845__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22847){return (new clustermap.components.map_report.t22846(pc_count__$1,ic_count__$1,const_count__$1,map__22845__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22847));
});
}
return (new clustermap.components.map_report.t22846(pc_count,ic_count,const_count,map__22845__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22895 = clustermap.components.map_report.type_counts(site_stats);var map__22895__$1 = ((cljs.core.seq_QMARK_(map__22895))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22895):map__22895);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895__$1,cljs.core.constant$keyword$407);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895__$1,cljs.core.constant$keyword$406);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895__$1,cljs.core.constant$keyword$405);if(typeof clustermap.components.map_report.t22896 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22896 = (function (pc_count,ic_count,const_count,map__22895,comm,site_stats,constituency,constituency_report,meta22897){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22895 = map__22895;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22897 = meta22897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22896.cljs$lang$type = true;
clustermap.components.map_report.t22896.cljs$lang$ctorStr = "clustermap.components.map-report/t22896";
clustermap.components.map_report.t22896.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22896");
});
clustermap.components.map_report.t22896.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22896.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22901 = cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22901))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22901),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$408.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22901),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$408.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22902 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22902))
{return React.DOM.li(sablono.interpreter.attributes(attrs22902),(function (){var attrs22903 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22903))
{return React.DOM.small(sablono.interpreter.attributes(attrs22903),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22903));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22902),(function (){var attrs22904 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22904))
{return React.DOM.small(sablono.interpreter.attributes(attrs22904),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22904));
}
})());
}
})(),(function (){var attrs22905 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22905))
{return React.DOM.li(sablono.interpreter.attributes(attrs22905),(function (){var attrs22906 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22906))
{return React.DOM.small(sablono.interpreter.attributes(attrs22906),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22906));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22905),(function (){var attrs22907 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22907))
{return React.DOM.small(sablono.interpreter.attributes(attrs22907),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22907));
}
})());
}
})(),(function (){var attrs22908 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22918 = self__.site_stats;var G__22918__$1 = (((G__22918 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22918));var G__22918__$2 = (((G__22918__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22918__$1));return G__22918__$2;
})(),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22918 = self__.site_stats;var G__22918__$1 = (((G__22918 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22918));var G__22918__$2 = (((G__22918__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22918__$1));return G__22918__$2;
})(),cljs.core.constant$keyword$301,2,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22908))
{return React.DOM.li(sablono.interpreter.attributes(attrs22908),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22908),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22913 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22919 = self__.site_stats;var G__22919__$1 = (((G__22919 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22919));var G__22919__$2 = (((G__22919__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22919__$1));return G__22919__$2;
})(),cljs.core.constant$keyword$303,0,cljs.core.constant$keyword$233,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22919 = self__.site_stats;var G__22919__$1 = (((G__22919 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22919));var G__22919__$2 = (((G__22919__$1 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22919__$1));return G__22919__$2;
})(),cljs.core.constant$keyword$303,0,cljs.core.constant$keyword$233,"-"));if(cljs.core.map_QMARK_(attrs22913))
{return React.DOM.li(sablono.interpreter.attributes(attrs22913),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22913),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22898){var self__ = this;
var _22898__$1 = this;return self__.meta22897;
});
clustermap.components.map_report.t22896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22898,meta22897__$1){var self__ = this;
var _22898__$1 = this;return (new clustermap.components.map_report.t22896(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22895,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22897__$1));
});
clustermap.components.map_report.__GT_t22896 = (function __GT_t22896(pc_count__$1,ic_count__$1,const_count__$1,map__22895__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22897){return (new clustermap.components.map_report.t22896(pc_count__$1,ic_count__$1,const_count__$1,map__22895__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22897));
});
}
return (new clustermap.components.map_report.t22896(pc_count,ic_count,const_count,map__22895__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$308);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,cljs.core.constant$keyword$272], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,cljs.core.constant$keyword$237], null));var site_stats = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(data);var pred__22923 = cljs.core._EQ__EQ_;var expr__22924 = type;if(cljs.core.truth_((pred__22923.cljs$core$IFn$_invoke$arity$2 ? pred__22923.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,expr__22924) : pred__22923.call(null,cljs.core.constant$keyword$305,expr__22924))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22923.cljs$core$IFn$_invoke$arity$2 ? pred__22923.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$306,expr__22924) : pred__22923.call(null,cljs.core.constant$keyword$306,expr__22924))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22923.cljs$core$IFn$_invoke$arity$2 ? pred__22923.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$307,expr__22924) : pred__22923.call(null,cljs.core.constant$keyword$307,expr__22924))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
