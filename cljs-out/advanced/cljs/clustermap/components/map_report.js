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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$414,(function (){var G__22749 = site_stats;var G__22749__$1 = (((G__22749 == null))?null:cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(G__22749));return G__22749__$1;
})(),cljs.core.constant$keyword$415,(function (){var G__22750 = site_stats;var G__22750__$1 = (((G__22750 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__22750));return G__22750__$1;
})(),cljs.core.constant$keyword$416,(function (){var G__22751 = site_stats;var G__22751__$1 = (((G__22751 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__22751));return G__22751__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22783 = clustermap.components.map_report.type_counts(site_stats);var map__22783__$1 = ((cljs.core.seq_QMARK_(map__22783))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22783):map__22783);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22783__$1,cljs.core.constant$keyword$416);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22783__$1,cljs.core.constant$keyword$415);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22783__$1,cljs.core.constant$keyword$414);if(typeof clustermap.components.map_report.t22784 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22784 = (function (pc_count,ic_count,const_count,map__22783,comm,site_stats,all_portfolio_companies_summary_report,meta22785){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22783 = map__22783;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22785 = meta22785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22784.cljs$lang$type = true;
clustermap.components.map_report.t22784.cljs$lang$ctorStr = "clustermap.components.map-report/t22784";
clustermap.components.map_report.t22784.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22784");
});
clustermap.components.map_report.t22784.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22784.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22789 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22789))
{return React.DOM.li(sablono.interpreter.attributes(attrs22789),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22789),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22794 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22794))
{return React.DOM.li(sablono.interpreter.attributes(attrs22794),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22794),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22799 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22799))
{return React.DOM.li(sablono.interpreter.attributes(attrs22799),(function (){var attrs22800 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22800))
{return React.DOM.small(sablono.interpreter.attributes(attrs22800),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22800));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22799),(function (){var attrs22801 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22801))
{return React.DOM.small(sablono.interpreter.attributes(attrs22801),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22801));
}
})());
}
})(),(function (){var attrs22802 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22812 = self__.site_stats;var G__22812__$1 = (((G__22812 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22812));var G__22812__$2 = (((G__22812__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22812__$1));return G__22812__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22812 = self__.site_stats;var G__22812__$1 = (((G__22812 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22812));var G__22812__$2 = (((G__22812__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22812__$1));return G__22812__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22802))
{return React.DOM.li(sablono.interpreter.attributes(attrs22802),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22802),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22807 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22813 = self__.site_stats;var G__22813__$1 = (((G__22813 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22813));var G__22813__$2 = (((G__22813__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22813__$1));return G__22813__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22813 = self__.site_stats;var G__22813__$1 = (((G__22813 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22813));var G__22813__$2 = (((G__22813__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22813__$1));return G__22813__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22807))
{return React.DOM.li(sablono.interpreter.attributes(attrs22807),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22807),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22786){var self__ = this;
var _22786__$1 = this;return self__.meta22785;
});
clustermap.components.map_report.t22784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22786,meta22785__$1){var self__ = this;
var _22786__$1 = this;return (new clustermap.components.map_report.t22784(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22783,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22785__$1));
});
clustermap.components.map_report.__GT_t22784 = (function __GT_t22784(pc_count__$1,ic_count__$1,const_count__$1,map__22783__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22785){return (new clustermap.components.map_report.t22784(pc_count__$1,ic_count__$1,const_count__$1,map__22783__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22785));
});
}
return (new clustermap.components.map_report.t22784(pc_count,ic_count,const_count,map__22783__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22839 = clustermap.components.map_report.type_counts(site_stats);var map__22839__$1 = ((cljs.core.seq_QMARK_(map__22839))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22839):map__22839);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22839__$1,cljs.core.constant$keyword$416);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22839__$1,cljs.core.constant$keyword$415);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22839__$1,cljs.core.constant$keyword$414);if(typeof clustermap.components.map_report.t22840 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22840 = (function (pc_count,ic_count,const_count,map__22839,comm,site_stats,portfolio_company,portfolio_company_report,meta22841){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22839 = map__22839;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22841 = meta22841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22840.cljs$lang$type = true;
clustermap.components.map_report.t22840.cljs$lang$ctorStr = "clustermap.components.map-report/t22840";
clustermap.components.map_report.t22840.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22840");
});
clustermap.components.map_report.t22840.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22840.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22845 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22845))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22845),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22845));
}
})()),React.DOM.ul(null,(function (){var attrs22846 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22846))
{return React.DOM.li(sablono.interpreter.attributes(attrs22846),(function (){var attrs22847 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22847))
{return React.DOM.small(sablono.interpreter.attributes(attrs22847),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22847));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22846),(function (){var attrs22848 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22848))
{return React.DOM.small(sablono.interpreter.attributes(attrs22848),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22848));
}
})());
}
})(),(function (){var attrs22849 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22849))
{return React.DOM.li(sablono.interpreter.attributes(attrs22849),(function (){var attrs22850 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22850))
{return React.DOM.small(sablono.interpreter.attributes(attrs22850),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22850));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22849),(function (){var attrs22851 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22851))
{return React.DOM.small(sablono.interpreter.attributes(attrs22851),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22851));
}
})());
}
})(),(function (){var attrs22852 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22862 = self__.site_stats;var G__22862__$1 = (((G__22862 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22862));var G__22862__$2 = (((G__22862__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22862__$1));return G__22862__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22862 = self__.site_stats;var G__22862__$1 = (((G__22862 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22862));var G__22862__$2 = (((G__22862__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22862__$1));return G__22862__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22852))
{return React.DOM.li(sablono.interpreter.attributes(attrs22852),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22852),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22857 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22863 = self__.site_stats;var G__22863__$1 = (((G__22863 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22863));var G__22863__$2 = (((G__22863__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22863__$1));return G__22863__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22863 = self__.site_stats;var G__22863__$1 = (((G__22863 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22863));var G__22863__$2 = (((G__22863__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22863__$1));return G__22863__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22857))
{return React.DOM.li(sablono.interpreter.attributes(attrs22857),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22857),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22842){var self__ = this;
var _22842__$1 = this;return self__.meta22841;
});
clustermap.components.map_report.t22840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22842,meta22841__$1){var self__ = this;
var _22842__$1 = this;return (new clustermap.components.map_report.t22840(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22839,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22841__$1));
});
clustermap.components.map_report.__GT_t22840 = (function __GT_t22840(pc_count__$1,ic_count__$1,const_count__$1,map__22839__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22841){return (new clustermap.components.map_report.t22840(pc_count__$1,ic_count__$1,const_count__$1,map__22839__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22841));
});
}
return (new clustermap.components.map_report.t22840(pc_count,ic_count,const_count,map__22839__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22889 = clustermap.components.map_report.type_counts(site_stats);var map__22889__$1 = ((cljs.core.seq_QMARK_(map__22889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22889):map__22889);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22889__$1,cljs.core.constant$keyword$416);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22889__$1,cljs.core.constant$keyword$415);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22889__$1,cljs.core.constant$keyword$414);if(typeof clustermap.components.map_report.t22890 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22890 = (function (pc_count,ic_count,const_count,map__22889,comm,site_stats,investor_company,investor_company_report,meta22891){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22889 = map__22889;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22891 = meta22891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22890.cljs$lang$type = true;
clustermap.components.map_report.t22890.cljs$lang$ctorStr = "clustermap.components.map-report/t22890";
clustermap.components.map_report.t22890.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22890");
});
clustermap.components.map_report.t22890.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22890.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22895 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22895))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22895),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22895));
}
})()),React.DOM.ul(null,(function (){var attrs22896 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22896))
{return React.DOM.li(sablono.interpreter.attributes(attrs22896),(function (){var attrs22897 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22897))
{return React.DOM.small(sablono.interpreter.attributes(attrs22897),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22897));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22896),(function (){var attrs22898 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22898))
{return React.DOM.small(sablono.interpreter.attributes(attrs22898),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22898));
}
})());
}
})(),(function (){var attrs22899 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22899))
{return React.DOM.li(sablono.interpreter.attributes(attrs22899),(function (){var attrs22900 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22900))
{return React.DOM.small(sablono.interpreter.attributes(attrs22900),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22900));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22899),(function (){var attrs22901 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22901))
{return React.DOM.small(sablono.interpreter.attributes(attrs22901),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22901));
}
})());
}
})(),(function (){var attrs22902 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22912 = self__.site_stats;var G__22912__$1 = (((G__22912 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22912));var G__22912__$2 = (((G__22912__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22912__$1));return G__22912__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22912 = self__.site_stats;var G__22912__$1 = (((G__22912 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22912));var G__22912__$2 = (((G__22912__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22912__$1));return G__22912__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22902))
{return React.DOM.li(sablono.interpreter.attributes(attrs22902),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22902),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22907 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22913 = self__.site_stats;var G__22913__$1 = (((G__22913 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22913));var G__22913__$2 = (((G__22913__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22913__$1));return G__22913__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22913 = self__.site_stats;var G__22913__$1 = (((G__22913 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22913));var G__22913__$2 = (((G__22913__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22913__$1));return G__22913__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22907))
{return React.DOM.li(sablono.interpreter.attributes(attrs22907),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22907),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22892){var self__ = this;
var _22892__$1 = this;return self__.meta22891;
});
clustermap.components.map_report.t22890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22892,meta22891__$1){var self__ = this;
var _22892__$1 = this;return (new clustermap.components.map_report.t22890(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22889,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22891__$1));
});
clustermap.components.map_report.__GT_t22890 = (function __GT_t22890(pc_count__$1,ic_count__$1,const_count__$1,map__22889__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22891){return (new clustermap.components.map_report.t22890(pc_count__$1,ic_count__$1,const_count__$1,map__22889__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22891));
});
}
return (new clustermap.components.map_report.t22890(pc_count,ic_count,const_count,map__22889__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22943 = clustermap.components.map_report.type_counts(site_stats);var map__22943__$1 = ((cljs.core.seq_QMARK_(map__22943))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22943):map__22943);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,cljs.core.constant$keyword$416);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,cljs.core.constant$keyword$415);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,cljs.core.constant$keyword$414);if(typeof clustermap.components.map_report.t22944 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22944 = (function (pc_count,ic_count,const_count,map__22943,comm,site_stats,constituency,constituency_report,meta22945){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22943 = map__22943;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22945 = meta22945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22944.cljs$lang$type = true;
clustermap.components.map_report.t22944.cljs$lang$ctorStr = "clustermap.components.map-report/t22944";
clustermap.components.map_report.t22944.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22944");
});
clustermap.components.map_report.t22944.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22944.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22949 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22949))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22949),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22949),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22954 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22954))
{return React.DOM.li(sablono.interpreter.attributes(attrs22954),(function (){var attrs22955 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22955))
{return React.DOM.small(sablono.interpreter.attributes(attrs22955),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22955));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22954),(function (){var attrs22956 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22956))
{return React.DOM.small(sablono.interpreter.attributes(attrs22956),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22956));
}
})());
}
})(),(function (){var attrs22957 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22957))
{return React.DOM.li(sablono.interpreter.attributes(attrs22957),(function (){var attrs22958 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22958))
{return React.DOM.small(sablono.interpreter.attributes(attrs22958),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22958));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22957),(function (){var attrs22959 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22959))
{return React.DOM.small(sablono.interpreter.attributes(attrs22959),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22959));
}
})());
}
})(),(function (){var attrs22960 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22970 = self__.site_stats;var G__22970__$1 = (((G__22970 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22970));var G__22970__$2 = (((G__22970__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22970__$1));return G__22970__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22970 = self__.site_stats;var G__22970__$1 = (((G__22970 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22970));var G__22970__$2 = (((G__22970__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22970__$1));return G__22970__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22960))
{return React.DOM.li(sablono.interpreter.attributes(attrs22960),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22960),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22965 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22971 = self__.site_stats;var G__22971__$1 = (((G__22971 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22971));var G__22971__$2 = (((G__22971__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22971__$1));return G__22971__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22971 = self__.site_stats;var G__22971__$1 = (((G__22971 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22971));var G__22971__$2 = (((G__22971__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22971__$1));return G__22971__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22965))
{return React.DOM.li(sablono.interpreter.attributes(attrs22965),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22965),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22946){var self__ = this;
var _22946__$1 = this;return self__.meta22945;
});
clustermap.components.map_report.t22944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22946,meta22945__$1){var self__ = this;
var _22946__$1 = this;return (new clustermap.components.map_report.t22944(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22943,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22945__$1));
});
clustermap.components.map_report.__GT_t22944 = (function __GT_t22944(pc_count__$1,ic_count__$1,const_count__$1,map__22943__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22945){return (new clustermap.components.map_report.t22944(pc_count__$1,ic_count__$1,const_count__$1,map__22943__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22945));
});
}
return (new clustermap.components.map_report.t22944(pc_count,ic_count,const_count,map__22943__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$313);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$277], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$242], null));var site_stats = cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(data);var pred__22975 = cljs.core._EQ__EQ_;var expr__22976 = type;if(cljs.core.truth_((pred__22975.cljs$core$IFn$_invoke$arity$2 ? pred__22975.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,expr__22976) : pred__22975.call(null,cljs.core.constant$keyword$310,expr__22976))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22975.cljs$core$IFn$_invoke$arity$2 ? pred__22975.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$311,expr__22976) : pred__22975.call(null,cljs.core.constant$keyword$311,expr__22976))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22975.cljs$core$IFn$_invoke$arity$2 ? pred__22975.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$312,expr__22976) : pred__22975.call(null,cljs.core.constant$keyword$312,expr__22976))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
