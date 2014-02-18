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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$403,(function (){var G__22671 = site_stats;var G__22671__$1 = (((G__22671 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22671));return G__22671__$1;
})(),cljs.core.constant$keyword$404,(function (){var G__22672 = site_stats;var G__22672__$1 = (((G__22672 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22672));return G__22672__$1;
})(),cljs.core.constant$keyword$405,(function (){var G__22673 = site_stats;var G__22673__$1 = (((G__22673 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22673));return G__22673__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22705 = clustermap.components.map_report.type_counts(site_stats);var map__22705__$1 = ((cljs.core.seq_QMARK_(map__22705))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22705):map__22705);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22705__$1,cljs.core.constant$keyword$405);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22705__$1,cljs.core.constant$keyword$404);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22705__$1,cljs.core.constant$keyword$403);if(typeof clustermap.components.map_report.t22706 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22706 = (function (pc_count,ic_count,const_count,map__22705,comm,site_stats,all_portfolio_companies_summary_report,meta22707){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22705 = map__22705;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22707 = meta22707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22706.cljs$lang$type = true;
clustermap.components.map_report.t22706.cljs$lang$ctorStr = "clustermap.components.map-report/t22706";
clustermap.components.map_report.t22706.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22706");
});
clustermap.components.map_report.t22706.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22706.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22711 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22711))
{return React.DOM.li(sablono.interpreter.attributes(attrs22711),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22711),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22716 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22716))
{return React.DOM.li(sablono.interpreter.attributes(attrs22716),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22716),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22721 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22721))
{return React.DOM.li(sablono.interpreter.attributes(attrs22721),(function (){var attrs22722 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22722))
{return React.DOM.small(sablono.interpreter.attributes(attrs22722),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22722));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22721),(function (){var attrs22723 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22723))
{return React.DOM.small(sablono.interpreter.attributes(attrs22723),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22723));
}
})());
}
})(),(function (){var attrs22724 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22734 = self__.site_stats;var G__22734__$1 = (((G__22734 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22734));var G__22734__$2 = (((G__22734__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22734__$1));return G__22734__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22734 = self__.site_stats;var G__22734__$1 = (((G__22734 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22734));var G__22734__$2 = (((G__22734__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22734__$1));return G__22734__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22724))
{return React.DOM.li(sablono.interpreter.attributes(attrs22724),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22724),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22729 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22735 = self__.site_stats;var G__22735__$1 = (((G__22735 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22735));var G__22735__$2 = (((G__22735__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22735__$1));return G__22735__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22735 = self__.site_stats;var G__22735__$1 = (((G__22735 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22735));var G__22735__$2 = (((G__22735__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22735__$1));return G__22735__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22729))
{return React.DOM.li(sablono.interpreter.attributes(attrs22729),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22729),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22708){var self__ = this;
var _22708__$1 = this;return self__.meta22707;
});
clustermap.components.map_report.t22706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22708,meta22707__$1){var self__ = this;
var _22708__$1 = this;return (new clustermap.components.map_report.t22706(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22705,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22707__$1));
});
clustermap.components.map_report.__GT_t22706 = (function __GT_t22706(pc_count__$1,ic_count__$1,const_count__$1,map__22705__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22707){return (new clustermap.components.map_report.t22706(pc_count__$1,ic_count__$1,const_count__$1,map__22705__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22707));
});
}
return (new clustermap.components.map_report.t22706(pc_count,ic_count,const_count,map__22705__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22761 = clustermap.components.map_report.type_counts(site_stats);var map__22761__$1 = ((cljs.core.seq_QMARK_(map__22761))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22761):map__22761);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22761__$1,cljs.core.constant$keyword$405);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22761__$1,cljs.core.constant$keyword$404);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22761__$1,cljs.core.constant$keyword$403);if(typeof clustermap.components.map_report.t22762 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22762 = (function (pc_count,ic_count,const_count,map__22761,comm,site_stats,portfolio_company,portfolio_company_report,meta22763){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22761 = map__22761;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22763 = meta22763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22762.cljs$lang$type = true;
clustermap.components.map_report.t22762.cljs$lang$ctorStr = "clustermap.components.map-report/t22762";
clustermap.components.map_report.t22762.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22762");
});
clustermap.components.map_report.t22762.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22762.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22767 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22767))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22767),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22767));
}
})()),React.DOM.ul(null,(function (){var attrs22768 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22768))
{return React.DOM.li(sablono.interpreter.attributes(attrs22768),(function (){var attrs22769 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22769))
{return React.DOM.small(sablono.interpreter.attributes(attrs22769),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22769));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22768),(function (){var attrs22770 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22770))
{return React.DOM.small(sablono.interpreter.attributes(attrs22770),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22770));
}
})());
}
})(),(function (){var attrs22771 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22771))
{return React.DOM.li(sablono.interpreter.attributes(attrs22771),(function (){var attrs22772 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22772))
{return React.DOM.small(sablono.interpreter.attributes(attrs22772),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22772));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22771),(function (){var attrs22773 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22773))
{return React.DOM.small(sablono.interpreter.attributes(attrs22773),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22773));
}
})());
}
})(),(function (){var attrs22774 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22784 = self__.site_stats;var G__22784__$1 = (((G__22784 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22784));var G__22784__$2 = (((G__22784__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22784__$1));return G__22784__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22784 = self__.site_stats;var G__22784__$1 = (((G__22784 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22784));var G__22784__$2 = (((G__22784__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22784__$1));return G__22784__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22774))
{return React.DOM.li(sablono.interpreter.attributes(attrs22774),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22774),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22779 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22785 = self__.site_stats;var G__22785__$1 = (((G__22785 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22785));var G__22785__$2 = (((G__22785__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22785__$1));return G__22785__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22785 = self__.site_stats;var G__22785__$1 = (((G__22785 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22785));var G__22785__$2 = (((G__22785__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22785__$1));return G__22785__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22779))
{return React.DOM.li(sablono.interpreter.attributes(attrs22779),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22779),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22764){var self__ = this;
var _22764__$1 = this;return self__.meta22763;
});
clustermap.components.map_report.t22762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22764,meta22763__$1){var self__ = this;
var _22764__$1 = this;return (new clustermap.components.map_report.t22762(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22761,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22763__$1));
});
clustermap.components.map_report.__GT_t22762 = (function __GT_t22762(pc_count__$1,ic_count__$1,const_count__$1,map__22761__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22763){return (new clustermap.components.map_report.t22762(pc_count__$1,ic_count__$1,const_count__$1,map__22761__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22763));
});
}
return (new clustermap.components.map_report.t22762(pc_count,ic_count,const_count,map__22761__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22811 = clustermap.components.map_report.type_counts(site_stats);var map__22811__$1 = ((cljs.core.seq_QMARK_(map__22811))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22811):map__22811);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22811__$1,cljs.core.constant$keyword$405);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22811__$1,cljs.core.constant$keyword$404);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22811__$1,cljs.core.constant$keyword$403);if(typeof clustermap.components.map_report.t22812 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22812 = (function (pc_count,ic_count,const_count,map__22811,comm,site_stats,investor_company,investor_company_report,meta22813){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22811 = map__22811;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22813 = meta22813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22812.cljs$lang$type = true;
clustermap.components.map_report.t22812.cljs$lang$ctorStr = "clustermap.components.map-report/t22812";
clustermap.components.map_report.t22812.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22812");
});
clustermap.components.map_report.t22812.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22812.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22817 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22817))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22817),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22817));
}
})()),React.DOM.ul(null,(function (){var attrs22818 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22818))
{return React.DOM.li(sablono.interpreter.attributes(attrs22818),(function (){var attrs22819 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22819))
{return React.DOM.small(sablono.interpreter.attributes(attrs22819),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22819));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22818),(function (){var attrs22820 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22820))
{return React.DOM.small(sablono.interpreter.attributes(attrs22820),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22820));
}
})());
}
})(),(function (){var attrs22821 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22821))
{return React.DOM.li(sablono.interpreter.attributes(attrs22821),(function (){var attrs22822 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22822))
{return React.DOM.small(sablono.interpreter.attributes(attrs22822),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22822));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22821),(function (){var attrs22823 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22823))
{return React.DOM.small(sablono.interpreter.attributes(attrs22823),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22823));
}
})());
}
})(),(function (){var attrs22824 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22834 = self__.site_stats;var G__22834__$1 = (((G__22834 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22834));var G__22834__$2 = (((G__22834__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22834__$1));return G__22834__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22834 = self__.site_stats;var G__22834__$1 = (((G__22834 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22834));var G__22834__$2 = (((G__22834__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22834__$1));return G__22834__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22824))
{return React.DOM.li(sablono.interpreter.attributes(attrs22824),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22824),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22829 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22835 = self__.site_stats;var G__22835__$1 = (((G__22835 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22835));var G__22835__$2 = (((G__22835__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22835__$1));return G__22835__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22835 = self__.site_stats;var G__22835__$1 = (((G__22835 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22835));var G__22835__$2 = (((G__22835__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22835__$1));return G__22835__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22829))
{return React.DOM.li(sablono.interpreter.attributes(attrs22829),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22829),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22814){var self__ = this;
var _22814__$1 = this;return self__.meta22813;
});
clustermap.components.map_report.t22812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22814,meta22813__$1){var self__ = this;
var _22814__$1 = this;return (new clustermap.components.map_report.t22812(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22811,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22813__$1));
});
clustermap.components.map_report.__GT_t22812 = (function __GT_t22812(pc_count__$1,ic_count__$1,const_count__$1,map__22811__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22813){return (new clustermap.components.map_report.t22812(pc_count__$1,ic_count__$1,const_count__$1,map__22811__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22813));
});
}
return (new clustermap.components.map_report.t22812(pc_count,ic_count,const_count,map__22811__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22861 = clustermap.components.map_report.type_counts(site_stats);var map__22861__$1 = ((cljs.core.seq_QMARK_(map__22861))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22861):map__22861);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22861__$1,cljs.core.constant$keyword$405);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22861__$1,cljs.core.constant$keyword$404);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22861__$1,cljs.core.constant$keyword$403);if(typeof clustermap.components.map_report.t22862 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22862 = (function (pc_count,ic_count,const_count,map__22861,comm,site_stats,constituency,constituency_report,meta22863){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22861 = map__22861;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22863 = meta22863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22862.cljs$lang$type = true;
clustermap.components.map_report.t22862.cljs$lang$ctorStr = "clustermap.components.map-report/t22862";
clustermap.components.map_report.t22862.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22862");
});
clustermap.components.map_report.t22862.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22862.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22867 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22867))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22867),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$406.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$407.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22867),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$406.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$407.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22868 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22868))
{return React.DOM.li(sablono.interpreter.attributes(attrs22868),(function (){var attrs22869 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22869))
{return React.DOM.small(sablono.interpreter.attributes(attrs22869),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22869));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22868),(function (){var attrs22870 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22870))
{return React.DOM.small(sablono.interpreter.attributes(attrs22870),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22870));
}
})());
}
})(),(function (){var attrs22871 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22871))
{return React.DOM.li(sablono.interpreter.attributes(attrs22871),(function (){var attrs22872 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22872))
{return React.DOM.small(sablono.interpreter.attributes(attrs22872),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22872));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22871),(function (){var attrs22873 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22873))
{return React.DOM.small(sablono.interpreter.attributes(attrs22873),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22873));
}
})());
}
})(),(function (){var attrs22874 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22884 = self__.site_stats;var G__22884__$1 = (((G__22884 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22884));var G__22884__$2 = (((G__22884__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22884__$1));return G__22884__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22884 = self__.site_stats;var G__22884__$1 = (((G__22884 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22884));var G__22884__$2 = (((G__22884__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22884__$1));return G__22884__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22874))
{return React.DOM.li(sablono.interpreter.attributes(attrs22874),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22874),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22879 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22885 = self__.site_stats;var G__22885__$1 = (((G__22885 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22885));var G__22885__$2 = (((G__22885__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22885__$1));return G__22885__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22885 = self__.site_stats;var G__22885__$1 = (((G__22885 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22885));var G__22885__$2 = (((G__22885__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22885__$1));return G__22885__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-"));if(cljs.core.map_QMARK_(attrs22879))
{return React.DOM.li(sablono.interpreter.attributes(attrs22879),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22879),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22864){var self__ = this;
var _22864__$1 = this;return self__.meta22863;
});
clustermap.components.map_report.t22862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22864,meta22863__$1){var self__ = this;
var _22864__$1 = this;return (new clustermap.components.map_report.t22862(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22861,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22863__$1));
});
clustermap.components.map_report.__GT_t22862 = (function __GT_t22862(pc_count__$1,ic_count__$1,const_count__$1,map__22861__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22863){return (new clustermap.components.map_report.t22862(pc_count__$1,ic_count__$1,const_count__$1,map__22861__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22863));
});
}
return (new clustermap.components.map_report.t22862(pc_count,ic_count,const_count,map__22861__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$306);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,cljs.core.constant$keyword$270], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,cljs.core.constant$keyword$235], null));var site_stats = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(data);var pred__22889 = cljs.core._EQ__EQ_;var expr__22890 = type;if(cljs.core.truth_((pred__22889.cljs$core$IFn$_invoke$arity$2 ? pred__22889.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,expr__22890) : pred__22889.call(null,cljs.core.constant$keyword$303,expr__22890))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22889.cljs$core$IFn$_invoke$arity$2 ? pred__22889.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$304,expr__22890) : pred__22889.call(null,cljs.core.constant$keyword$304,expr__22890))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22889.cljs$core$IFn$_invoke$arity$2 ? pred__22889.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,expr__22890) : pred__22889.call(null,cljs.core.constant$keyword$305,expr__22890))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
