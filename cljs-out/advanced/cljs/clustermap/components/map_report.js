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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$402,(function (){var G__22710 = site_stats;var G__22710__$1 = (((G__22710 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22710));return G__22710__$1;
})(),cljs.core.constant$keyword$403,(function (){var G__22711 = site_stats;var G__22711__$1 = (((G__22711 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22711));return G__22711__$1;
})(),cljs.core.constant$keyword$404,(function (){var G__22712 = site_stats;var G__22712__$1 = (((G__22712 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22712));return G__22712__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22744 = clustermap.components.map_report.type_counts(site_stats);var map__22744__$1 = ((cljs.core.seq_QMARK_(map__22744))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22744):map__22744);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22744__$1,cljs.core.constant$keyword$404);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22744__$1,cljs.core.constant$keyword$403);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22744__$1,cljs.core.constant$keyword$402);if(typeof clustermap.components.map_report.t22745 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22745 = (function (pc_count,ic_count,const_count,map__22744,comm,site_stats,all_portfolio_companies_summary_report,meta22746){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22744 = map__22744;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22746 = meta22746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22745.cljs$lang$type = true;
clustermap.components.map_report.t22745.cljs$lang$ctorStr = "clustermap.components.map-report/t22745";
clustermap.components.map_report.t22745.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22745");
});
clustermap.components.map_report.t22745.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22745.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22750 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22750))
{return React.DOM.li(sablono.interpreter.attributes(attrs22750),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22750),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22755 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22755))
{return React.DOM.li(sablono.interpreter.attributes(attrs22755),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22755),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22760 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22760))
{return React.DOM.li(sablono.interpreter.attributes(attrs22760),(function (){var attrs22761 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22761))
{return React.DOM.small(sablono.interpreter.attributes(attrs22761),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22761));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22760),(function (){var attrs22762 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22762))
{return React.DOM.small(sablono.interpreter.attributes(attrs22762),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22762));
}
})());
}
})(),(function (){var attrs22763 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22773 = self__.site_stats;var G__22773__$1 = (((G__22773 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22773));var G__22773__$2 = (((G__22773__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22773__$1));return G__22773__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22773 = self__.site_stats;var G__22773__$1 = (((G__22773 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22773));var G__22773__$2 = (((G__22773__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22773__$1));return G__22773__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22763))
{return React.DOM.li(sablono.interpreter.attributes(attrs22763),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22763),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22768 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22774 = self__.site_stats;var G__22774__$1 = (((G__22774 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22774));var G__22774__$2 = (((G__22774__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22774__$1));return G__22774__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22774 = self__.site_stats;var G__22774__$1 = (((G__22774 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22774));var G__22774__$2 = (((G__22774__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22774__$1));return G__22774__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22768))
{return React.DOM.li(sablono.interpreter.attributes(attrs22768),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22768),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22747){var self__ = this;
var _22747__$1 = this;return self__.meta22746;
});
clustermap.components.map_report.t22745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22747,meta22746__$1){var self__ = this;
var _22747__$1 = this;return (new clustermap.components.map_report.t22745(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22744,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22746__$1));
});
clustermap.components.map_report.__GT_t22745 = (function __GT_t22745(pc_count__$1,ic_count__$1,const_count__$1,map__22744__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22746){return (new clustermap.components.map_report.t22745(pc_count__$1,ic_count__$1,const_count__$1,map__22744__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22746));
});
}
return (new clustermap.components.map_report.t22745(pc_count,ic_count,const_count,map__22744__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22800 = clustermap.components.map_report.type_counts(site_stats);var map__22800__$1 = ((cljs.core.seq_QMARK_(map__22800))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22800):map__22800);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22800__$1,cljs.core.constant$keyword$404);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22800__$1,cljs.core.constant$keyword$403);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22800__$1,cljs.core.constant$keyword$402);if(typeof clustermap.components.map_report.t22801 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22801 = (function (pc_count,ic_count,const_count,map__22800,comm,site_stats,portfolio_company,portfolio_company_report,meta22802){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22800 = map__22800;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22802 = meta22802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22801.cljs$lang$type = true;
clustermap.components.map_report.t22801.cljs$lang$ctorStr = "clustermap.components.map-report/t22801";
clustermap.components.map_report.t22801.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22801");
});
clustermap.components.map_report.t22801.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22801.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22806 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22806))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22806),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22806));
}
})()),React.DOM.ul(null,(function (){var attrs22807 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22807))
{return React.DOM.li(sablono.interpreter.attributes(attrs22807),(function (){var attrs22808 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22808))
{return React.DOM.small(sablono.interpreter.attributes(attrs22808),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22808));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22807),(function (){var attrs22809 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22809))
{return React.DOM.small(sablono.interpreter.attributes(attrs22809),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22809));
}
})());
}
})(),(function (){var attrs22810 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22810))
{return React.DOM.li(sablono.interpreter.attributes(attrs22810),(function (){var attrs22811 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22811))
{return React.DOM.small(sablono.interpreter.attributes(attrs22811),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22811));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22810),(function (){var attrs22812 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22812))
{return React.DOM.small(sablono.interpreter.attributes(attrs22812),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22812));
}
})());
}
})(),(function (){var attrs22813 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22823 = self__.site_stats;var G__22823__$1 = (((G__22823 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22823));var G__22823__$2 = (((G__22823__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22823__$1));return G__22823__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22823 = self__.site_stats;var G__22823__$1 = (((G__22823 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22823));var G__22823__$2 = (((G__22823__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22823__$1));return G__22823__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22813))
{return React.DOM.li(sablono.interpreter.attributes(attrs22813),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22813),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22818 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22824 = self__.site_stats;var G__22824__$1 = (((G__22824 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22824));var G__22824__$2 = (((G__22824__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22824__$1));return G__22824__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22824 = self__.site_stats;var G__22824__$1 = (((G__22824 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22824));var G__22824__$2 = (((G__22824__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22824__$1));return G__22824__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22818))
{return React.DOM.li(sablono.interpreter.attributes(attrs22818),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22818),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22803){var self__ = this;
var _22803__$1 = this;return self__.meta22802;
});
clustermap.components.map_report.t22801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22803,meta22802__$1){var self__ = this;
var _22803__$1 = this;return (new clustermap.components.map_report.t22801(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22800,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22802__$1));
});
clustermap.components.map_report.__GT_t22801 = (function __GT_t22801(pc_count__$1,ic_count__$1,const_count__$1,map__22800__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22802){return (new clustermap.components.map_report.t22801(pc_count__$1,ic_count__$1,const_count__$1,map__22800__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22802));
});
}
return (new clustermap.components.map_report.t22801(pc_count,ic_count,const_count,map__22800__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22850 = clustermap.components.map_report.type_counts(site_stats);var map__22850__$1 = ((cljs.core.seq_QMARK_(map__22850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22850):map__22850);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22850__$1,cljs.core.constant$keyword$404);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22850__$1,cljs.core.constant$keyword$403);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22850__$1,cljs.core.constant$keyword$402);if(typeof clustermap.components.map_report.t22851 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22851 = (function (pc_count,ic_count,const_count,map__22850,comm,site_stats,investor_company,investor_company_report,meta22852){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22850 = map__22850;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22852 = meta22852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22851.cljs$lang$type = true;
clustermap.components.map_report.t22851.cljs$lang$ctorStr = "clustermap.components.map-report/t22851";
clustermap.components.map_report.t22851.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22851");
});
clustermap.components.map_report.t22851.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22851.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22856 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22856))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22856),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22856));
}
})()),React.DOM.ul(null,(function (){var attrs22857 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22857))
{return React.DOM.li(sablono.interpreter.attributes(attrs22857),(function (){var attrs22858 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22858))
{return React.DOM.small(sablono.interpreter.attributes(attrs22858),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22858));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22857),(function (){var attrs22859 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22859))
{return React.DOM.small(sablono.interpreter.attributes(attrs22859),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22859));
}
})());
}
})(),(function (){var attrs22860 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22860))
{return React.DOM.li(sablono.interpreter.attributes(attrs22860),(function (){var attrs22861 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22861))
{return React.DOM.small(sablono.interpreter.attributes(attrs22861),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22861));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22860),(function (){var attrs22862 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22862))
{return React.DOM.small(sablono.interpreter.attributes(attrs22862),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22862));
}
})());
}
})(),(function (){var attrs22863 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22873 = self__.site_stats;var G__22873__$1 = (((G__22873 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22873));var G__22873__$2 = (((G__22873__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22873__$1));return G__22873__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22873 = self__.site_stats;var G__22873__$1 = (((G__22873 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22873));var G__22873__$2 = (((G__22873__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22873__$1));return G__22873__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22863))
{return React.DOM.li(sablono.interpreter.attributes(attrs22863),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22863),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22868 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22874 = self__.site_stats;var G__22874__$1 = (((G__22874 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22874));var G__22874__$2 = (((G__22874__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22874__$1));return G__22874__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22874 = self__.site_stats;var G__22874__$1 = (((G__22874 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22874));var G__22874__$2 = (((G__22874__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22874__$1));return G__22874__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22868))
{return React.DOM.li(sablono.interpreter.attributes(attrs22868),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22868),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22853){var self__ = this;
var _22853__$1 = this;return self__.meta22852;
});
clustermap.components.map_report.t22851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22853,meta22852__$1){var self__ = this;
var _22853__$1 = this;return (new clustermap.components.map_report.t22851(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22850,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22852__$1));
});
clustermap.components.map_report.__GT_t22851 = (function __GT_t22851(pc_count__$1,ic_count__$1,const_count__$1,map__22850__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22852){return (new clustermap.components.map_report.t22851(pc_count__$1,ic_count__$1,const_count__$1,map__22850__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22852));
});
}
return (new clustermap.components.map_report.t22851(pc_count,ic_count,const_count,map__22850__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22900 = clustermap.components.map_report.type_counts(site_stats);var map__22900__$1 = ((cljs.core.seq_QMARK_(map__22900))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22900):map__22900);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22900__$1,cljs.core.constant$keyword$404);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22900__$1,cljs.core.constant$keyword$403);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22900__$1,cljs.core.constant$keyword$402);if(typeof clustermap.components.map_report.t22901 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22901 = (function (pc_count,ic_count,const_count,map__22900,comm,site_stats,constituency,constituency_report,meta22902){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22900 = map__22900;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22902 = meta22902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22901.cljs$lang$type = true;
clustermap.components.map_report.t22901.cljs$lang$ctorStr = "clustermap.components.map-report/t22901";
clustermap.components.map_report.t22901.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22901");
});
clustermap.components.map_report.t22901.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22901.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22906 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22906))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22906),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$405.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$406.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22906),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$405.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$406.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22907 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22907))
{return React.DOM.li(sablono.interpreter.attributes(attrs22907),(function (){var attrs22908 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22908))
{return React.DOM.small(sablono.interpreter.attributes(attrs22908),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22908));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22907),(function (){var attrs22909 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22909))
{return React.DOM.small(sablono.interpreter.attributes(attrs22909),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22909));
}
})());
}
})(),(function (){var attrs22910 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22910))
{return React.DOM.li(sablono.interpreter.attributes(attrs22910),(function (){var attrs22911 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22911))
{return React.DOM.small(sablono.interpreter.attributes(attrs22911),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22911));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22910),(function (){var attrs22912 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22912))
{return React.DOM.small(sablono.interpreter.attributes(attrs22912),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22912));
}
})());
}
})(),(function (){var attrs22913 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22923 = self__.site_stats;var G__22923__$1 = (((G__22923 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22923));var G__22923__$2 = (((G__22923__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22923__$1));return G__22923__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22923 = self__.site_stats;var G__22923__$1 = (((G__22923 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22923));var G__22923__$2 = (((G__22923__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22923__$1));return G__22923__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22913))
{return React.DOM.li(sablono.interpreter.attributes(attrs22913),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22913),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22918 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22924 = self__.site_stats;var G__22924__$1 = (((G__22924 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22924));var G__22924__$2 = (((G__22924__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22924__$1));return G__22924__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22924 = self__.site_stats;var G__22924__$1 = (((G__22924 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22924));var G__22924__$2 = (((G__22924__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22924__$1));return G__22924__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22918))
{return React.DOM.li(sablono.interpreter.attributes(attrs22918),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22918),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22903){var self__ = this;
var _22903__$1 = this;return self__.meta22902;
});
clustermap.components.map_report.t22901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22903,meta22902__$1){var self__ = this;
var _22903__$1 = this;return (new clustermap.components.map_report.t22901(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22900,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22902__$1));
});
clustermap.components.map_report.__GT_t22901 = (function __GT_t22901(pc_count__$1,ic_count__$1,const_count__$1,map__22900__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22902){return (new clustermap.components.map_report.t22901(pc_count__$1,ic_count__$1,const_count__$1,map__22900__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22902));
});
}
return (new clustermap.components.map_report.t22901(pc_count,ic_count,const_count,map__22900__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$306);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,cljs.core.constant$keyword$270], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,cljs.core.constant$keyword$235], null));var site_stats = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(data);var pred__22928 = cljs.core._EQ__EQ_;var expr__22929 = type;if(cljs.core.truth_((pred__22928.cljs$core$IFn$_invoke$arity$2 ? pred__22928.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,expr__22929) : pred__22928.call(null,cljs.core.constant$keyword$303,expr__22929))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22928.cljs$core$IFn$_invoke$arity$2 ? pred__22928.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$304,expr__22929) : pred__22928.call(null,cljs.core.constant$keyword$304,expr__22929))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22928.cljs$core$IFn$_invoke$arity$2 ? pred__22928.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,expr__22929) : pred__22928.call(null,cljs.core.constant$keyword$305,expr__22929))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
