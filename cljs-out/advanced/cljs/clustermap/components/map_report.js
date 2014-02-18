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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$401,(function (){var G__22702 = site_stats;var G__22702__$1 = (((G__22702 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22702));return G__22702__$1;
})(),cljs.core.constant$keyword$402,(function (){var G__22703 = site_stats;var G__22703__$1 = (((G__22703 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22703));return G__22703__$1;
})(),cljs.core.constant$keyword$403,(function (){var G__22704 = site_stats;var G__22704__$1 = (((G__22704 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22704));return G__22704__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22736 = clustermap.components.map_report.type_counts(site_stats);var map__22736__$1 = ((cljs.core.seq_QMARK_(map__22736))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22736):map__22736);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,cljs.core.constant$keyword$403);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,cljs.core.constant$keyword$402);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,cljs.core.constant$keyword$401);if(typeof clustermap.components.map_report.t22737 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22737 = (function (pc_count,ic_count,const_count,map__22736,comm,site_stats,all_portfolio_companies_summary_report,meta22738){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22736 = map__22736;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22738 = meta22738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22737.cljs$lang$type = true;
clustermap.components.map_report.t22737.cljs$lang$ctorStr = "clustermap.components.map-report/t22737";
clustermap.components.map_report.t22737.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22737");
});
clustermap.components.map_report.t22737.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22737.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22742 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22742))
{return React.DOM.li(sablono.interpreter.attributes(attrs22742),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22742),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22747 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22747))
{return React.DOM.li(sablono.interpreter.attributes(attrs22747),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22747),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22752 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22752))
{return React.DOM.li(sablono.interpreter.attributes(attrs22752),(function (){var attrs22753 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22753))
{return React.DOM.small(sablono.interpreter.attributes(attrs22753),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22753));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22752),(function (){var attrs22754 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22754))
{return React.DOM.small(sablono.interpreter.attributes(attrs22754),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22754));
}
})());
}
})(),(function (){var attrs22755 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22765 = self__.site_stats;var G__22765__$1 = (((G__22765 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22765));var G__22765__$2 = (((G__22765__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22765__$1));return G__22765__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22765 = self__.site_stats;var G__22765__$1 = (((G__22765 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22765));var G__22765__$2 = (((G__22765__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22765__$1));return G__22765__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22755))
{return React.DOM.li(sablono.interpreter.attributes(attrs22755),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22755),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22760 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22766 = self__.site_stats;var G__22766__$1 = (((G__22766 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22766));var G__22766__$2 = (((G__22766__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22766__$1));return G__22766__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22766 = self__.site_stats;var G__22766__$1 = (((G__22766 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22766));var G__22766__$2 = (((G__22766__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22766__$1));return G__22766__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22760))
{return React.DOM.li(sablono.interpreter.attributes(attrs22760),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22760),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22739){var self__ = this;
var _22739__$1 = this;return self__.meta22738;
});
clustermap.components.map_report.t22737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22739,meta22738__$1){var self__ = this;
var _22739__$1 = this;return (new clustermap.components.map_report.t22737(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22736,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22738__$1));
});
clustermap.components.map_report.__GT_t22737 = (function __GT_t22737(pc_count__$1,ic_count__$1,const_count__$1,map__22736__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22738){return (new clustermap.components.map_report.t22737(pc_count__$1,ic_count__$1,const_count__$1,map__22736__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22738));
});
}
return (new clustermap.components.map_report.t22737(pc_count,ic_count,const_count,map__22736__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22792 = clustermap.components.map_report.type_counts(site_stats);var map__22792__$1 = ((cljs.core.seq_QMARK_(map__22792))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22792):map__22792);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.constant$keyword$403);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.constant$keyword$402);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.constant$keyword$401);if(typeof clustermap.components.map_report.t22793 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22793 = (function (pc_count,ic_count,const_count,map__22792,comm,site_stats,portfolio_company,portfolio_company_report,meta22794){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22792 = map__22792;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22794 = meta22794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22793.cljs$lang$type = true;
clustermap.components.map_report.t22793.cljs$lang$ctorStr = "clustermap.components.map-report/t22793";
clustermap.components.map_report.t22793.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22793");
});
clustermap.components.map_report.t22793.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22793.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22798 = cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22798))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22798),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22798));
}
})()),React.DOM.ul(null,(function (){var attrs22799 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22799))
{return React.DOM.li(sablono.interpreter.attributes(attrs22799),(function (){var attrs22800 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22800))
{return React.DOM.small(sablono.interpreter.attributes(attrs22800),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22800));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22799),(function (){var attrs22801 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22801))
{return React.DOM.small(sablono.interpreter.attributes(attrs22801),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22801));
}
})());
}
})(),(function (){var attrs22802 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22802))
{return React.DOM.li(sablono.interpreter.attributes(attrs22802),(function (){var attrs22803 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22803))
{return React.DOM.small(sablono.interpreter.attributes(attrs22803),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22803));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22802),(function (){var attrs22804 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22804))
{return React.DOM.small(sablono.interpreter.attributes(attrs22804),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22804));
}
})());
}
})(),(function (){var attrs22805 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22815 = self__.site_stats;var G__22815__$1 = (((G__22815 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22815));var G__22815__$2 = (((G__22815__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22815__$1));return G__22815__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22815 = self__.site_stats;var G__22815__$1 = (((G__22815 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22815));var G__22815__$2 = (((G__22815__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22815__$1));return G__22815__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22805))
{return React.DOM.li(sablono.interpreter.attributes(attrs22805),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22805),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22810 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22816 = self__.site_stats;var G__22816__$1 = (((G__22816 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22816));var G__22816__$2 = (((G__22816__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22816__$1));return G__22816__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22816 = self__.site_stats;var G__22816__$1 = (((G__22816 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22816));var G__22816__$2 = (((G__22816__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22816__$1));return G__22816__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22810))
{return React.DOM.li(sablono.interpreter.attributes(attrs22810),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22810),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22795){var self__ = this;
var _22795__$1 = this;return self__.meta22794;
});
clustermap.components.map_report.t22793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22795,meta22794__$1){var self__ = this;
var _22795__$1 = this;return (new clustermap.components.map_report.t22793(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22792,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22794__$1));
});
clustermap.components.map_report.__GT_t22793 = (function __GT_t22793(pc_count__$1,ic_count__$1,const_count__$1,map__22792__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22794){return (new clustermap.components.map_report.t22793(pc_count__$1,ic_count__$1,const_count__$1,map__22792__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22794));
});
}
return (new clustermap.components.map_report.t22793(pc_count,ic_count,const_count,map__22792__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22842 = clustermap.components.map_report.type_counts(site_stats);var map__22842__$1 = ((cljs.core.seq_QMARK_(map__22842))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22842):map__22842);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22842__$1,cljs.core.constant$keyword$403);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22842__$1,cljs.core.constant$keyword$402);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22842__$1,cljs.core.constant$keyword$401);if(typeof clustermap.components.map_report.t22843 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22843 = (function (pc_count,ic_count,const_count,map__22842,comm,site_stats,investor_company,investor_company_report,meta22844){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22842 = map__22842;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22844 = meta22844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22843.cljs$lang$type = true;
clustermap.components.map_report.t22843.cljs$lang$ctorStr = "clustermap.components.map-report/t22843";
clustermap.components.map_report.t22843.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22843");
});
clustermap.components.map_report.t22843.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22843.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22848 = cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22848))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22848),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22848));
}
})()),React.DOM.ul(null,(function (){var attrs22849 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22849))
{return React.DOM.li(sablono.interpreter.attributes(attrs22849),(function (){var attrs22850 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22850))
{return React.DOM.small(sablono.interpreter.attributes(attrs22850),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22850));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22849),(function (){var attrs22851 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22851))
{return React.DOM.small(sablono.interpreter.attributes(attrs22851),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22851));
}
})());
}
})(),(function (){var attrs22852 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22852))
{return React.DOM.li(sablono.interpreter.attributes(attrs22852),(function (){var attrs22853 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22853))
{return React.DOM.small(sablono.interpreter.attributes(attrs22853),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22853));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22852),(function (){var attrs22854 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22854))
{return React.DOM.small(sablono.interpreter.attributes(attrs22854),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22854));
}
})());
}
})(),(function (){var attrs22855 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22865 = self__.site_stats;var G__22865__$1 = (((G__22865 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22865));var G__22865__$2 = (((G__22865__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22865__$1));return G__22865__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22865 = self__.site_stats;var G__22865__$1 = (((G__22865 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22865));var G__22865__$2 = (((G__22865__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22865__$1));return G__22865__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22855))
{return React.DOM.li(sablono.interpreter.attributes(attrs22855),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22855),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22860 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22866 = self__.site_stats;var G__22866__$1 = (((G__22866 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22866));var G__22866__$2 = (((G__22866__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22866__$1));return G__22866__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22866 = self__.site_stats;var G__22866__$1 = (((G__22866 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22866));var G__22866__$2 = (((G__22866__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22866__$1));return G__22866__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22860))
{return React.DOM.li(sablono.interpreter.attributes(attrs22860),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22860),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22845){var self__ = this;
var _22845__$1 = this;return self__.meta22844;
});
clustermap.components.map_report.t22843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22845,meta22844__$1){var self__ = this;
var _22845__$1 = this;return (new clustermap.components.map_report.t22843(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22842,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22844__$1));
});
clustermap.components.map_report.__GT_t22843 = (function __GT_t22843(pc_count__$1,ic_count__$1,const_count__$1,map__22842__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22844){return (new clustermap.components.map_report.t22843(pc_count__$1,ic_count__$1,const_count__$1,map__22842__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22844));
});
}
return (new clustermap.components.map_report.t22843(pc_count,ic_count,const_count,map__22842__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22892 = clustermap.components.map_report.type_counts(site_stats);var map__22892__$1 = ((cljs.core.seq_QMARK_(map__22892))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22892):map__22892);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22892__$1,cljs.core.constant$keyword$403);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22892__$1,cljs.core.constant$keyword$402);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22892__$1,cljs.core.constant$keyword$401);if(typeof clustermap.components.map_report.t22893 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22893 = (function (pc_count,ic_count,const_count,map__22892,comm,site_stats,constituency,constituency_report,meta22894){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22892 = map__22892;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22894 = meta22894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22893.cljs$lang$type = true;
clustermap.components.map_report.t22893.cljs$lang$ctorStr = "clustermap.components.map-report/t22893";
clustermap.components.map_report.t22893.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22893");
});
clustermap.components.map_report.t22893.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22893.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22898 = cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22898))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22898),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$404.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$405.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22898),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$404.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$405.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22899 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22899))
{return React.DOM.li(sablono.interpreter.attributes(attrs22899),(function (){var attrs22900 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22900))
{return React.DOM.small(sablono.interpreter.attributes(attrs22900),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22900));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22899),(function (){var attrs22901 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22901))
{return React.DOM.small(sablono.interpreter.attributes(attrs22901),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22901));
}
})());
}
})(),(function (){var attrs22902 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22902))
{return React.DOM.li(sablono.interpreter.attributes(attrs22902),(function (){var attrs22903 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22903))
{return React.DOM.small(sablono.interpreter.attributes(attrs22903),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22903));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22902),(function (){var attrs22904 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22904))
{return React.DOM.small(sablono.interpreter.attributes(attrs22904),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22904));
}
})());
}
})(),(function (){var attrs22905 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22915 = self__.site_stats;var G__22915__$1 = (((G__22915 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22915));var G__22915__$2 = (((G__22915__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22915__$1));return G__22915__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22915 = self__.site_stats;var G__22915__$1 = (((G__22915 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22915));var G__22915__$2 = (((G__22915__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22915__$1));return G__22915__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22905))
{return React.DOM.li(sablono.interpreter.attributes(attrs22905),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22905),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22910 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22916 = self__.site_stats;var G__22916__$1 = (((G__22916 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22916));var G__22916__$2 = (((G__22916__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22916__$1));return G__22916__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22916 = self__.site_stats;var G__22916__$1 = (((G__22916 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22916));var G__22916__$2 = (((G__22916__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22916__$1));return G__22916__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-"));if(cljs.core.map_QMARK_(attrs22910))
{return React.DOM.li(sablono.interpreter.attributes(attrs22910),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22910),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22895){var self__ = this;
var _22895__$1 = this;return self__.meta22894;
});
clustermap.components.map_report.t22893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22895,meta22894__$1){var self__ = this;
var _22895__$1 = this;return (new clustermap.components.map_report.t22893(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22892,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22894__$1));
});
clustermap.components.map_report.__GT_t22893 = (function __GT_t22893(pc_count__$1,ic_count__$1,const_count__$1,map__22892__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22894){return (new clustermap.components.map_report.t22893(pc_count__$1,ic_count__$1,const_count__$1,map__22892__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22894));
});
}
return (new clustermap.components.map_report.t22893(pc_count,ic_count,const_count,map__22892__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$305);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,cljs.core.constant$keyword$269], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,cljs.core.constant$keyword$234], null));var site_stats = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(data);var pred__22920 = cljs.core._EQ__EQ_;var expr__22921 = type;if(cljs.core.truth_((pred__22920.cljs$core$IFn$_invoke$arity$2 ? pred__22920.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$302,expr__22921) : pred__22920.call(null,cljs.core.constant$keyword$302,expr__22921))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22920.cljs$core$IFn$_invoke$arity$2 ? pred__22920.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,expr__22921) : pred__22920.call(null,cljs.core.constant$keyword$303,expr__22921))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22920.cljs$core$IFn$_invoke$arity$2 ? pred__22920.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$304,expr__22921) : pred__22920.call(null,cljs.core.constant$keyword$304,expr__22921))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
