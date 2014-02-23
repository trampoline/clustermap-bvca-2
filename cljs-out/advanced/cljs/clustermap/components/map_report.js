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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$415,(function (){var G__22741 = site_stats;var G__22741__$1 = (((G__22741 == null))?null:cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(G__22741));return G__22741__$1;
})(),cljs.core.constant$keyword$416,(function (){var G__22742 = site_stats;var G__22742__$1 = (((G__22742 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__22742));return G__22742__$1;
})(),cljs.core.constant$keyword$417,(function (){var G__22743 = site_stats;var G__22743__$1 = (((G__22743 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__22743));return G__22743__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22775 = clustermap.components.map_report.type_counts(site_stats);var map__22775__$1 = ((cljs.core.seq_QMARK_(map__22775))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22775):map__22775);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22775__$1,cljs.core.constant$keyword$417);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22775__$1,cljs.core.constant$keyword$416);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22775__$1,cljs.core.constant$keyword$415);if(typeof clustermap.components.map_report.t22776 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22776 = (function (pc_count,ic_count,const_count,map__22775,comm,site_stats,all_portfolio_companies_summary_report,meta22777){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22775 = map__22775;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22777 = meta22777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22776.cljs$lang$type = true;
clustermap.components.map_report.t22776.cljs$lang$ctorStr = "clustermap.components.map-report/t22776";
clustermap.components.map_report.t22776.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22776");
});
clustermap.components.map_report.t22776.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22776.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22781 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22781))
{return React.DOM.li(sablono.interpreter.attributes(attrs22781),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22781),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22786 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22786))
{return React.DOM.li(sablono.interpreter.attributes(attrs22786),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22786),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22791 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22791))
{return React.DOM.li(sablono.interpreter.attributes(attrs22791),(function (){var attrs22792 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22792))
{return React.DOM.small(sablono.interpreter.attributes(attrs22792),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22792));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22791),(function (){var attrs22793 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22793))
{return React.DOM.small(sablono.interpreter.attributes(attrs22793),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22793));
}
})());
}
})(),(function (){var attrs22794 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22804 = self__.site_stats;var G__22804__$1 = (((G__22804 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22804));var G__22804__$2 = (((G__22804__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22804__$1));return G__22804__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22804 = self__.site_stats;var G__22804__$1 = (((G__22804 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22804));var G__22804__$2 = (((G__22804__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22804__$1));return G__22804__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22794))
{return React.DOM.li(sablono.interpreter.attributes(attrs22794),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22794),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22799 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22805 = self__.site_stats;var G__22805__$1 = (((G__22805 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22805));var G__22805__$2 = (((G__22805__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22805__$1));return G__22805__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22805 = self__.site_stats;var G__22805__$1 = (((G__22805 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22805));var G__22805__$2 = (((G__22805__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22805__$1));return G__22805__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22799))
{return React.DOM.li(sablono.interpreter.attributes(attrs22799),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22799),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22778){var self__ = this;
var _22778__$1 = this;return self__.meta22777;
});
clustermap.components.map_report.t22776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22778,meta22777__$1){var self__ = this;
var _22778__$1 = this;return (new clustermap.components.map_report.t22776(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22775,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22777__$1));
});
clustermap.components.map_report.__GT_t22776 = (function __GT_t22776(pc_count__$1,ic_count__$1,const_count__$1,map__22775__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22777){return (new clustermap.components.map_report.t22776(pc_count__$1,ic_count__$1,const_count__$1,map__22775__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22777));
});
}
return (new clustermap.components.map_report.t22776(pc_count,ic_count,const_count,map__22775__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22831 = clustermap.components.map_report.type_counts(site_stats);var map__22831__$1 = ((cljs.core.seq_QMARK_(map__22831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22831):map__22831);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22831__$1,cljs.core.constant$keyword$417);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22831__$1,cljs.core.constant$keyword$416);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22831__$1,cljs.core.constant$keyword$415);if(typeof clustermap.components.map_report.t22832 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22832 = (function (pc_count,ic_count,const_count,map__22831,comm,site_stats,portfolio_company,portfolio_company_report,meta22833){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22831 = map__22831;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22833 = meta22833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22832.cljs$lang$type = true;
clustermap.components.map_report.t22832.cljs$lang$ctorStr = "clustermap.components.map-report/t22832";
clustermap.components.map_report.t22832.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22832");
});
clustermap.components.map_report.t22832.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22832.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22837 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22837))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22837),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22837));
}
})()),React.DOM.ul(null,(function (){var attrs22838 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22838))
{return React.DOM.li(sablono.interpreter.attributes(attrs22838),(function (){var attrs22839 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22839))
{return React.DOM.small(sablono.interpreter.attributes(attrs22839),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22839));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22838),(function (){var attrs22840 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22840))
{return React.DOM.small(sablono.interpreter.attributes(attrs22840),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22840));
}
})());
}
})(),(function (){var attrs22841 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22841))
{return React.DOM.li(sablono.interpreter.attributes(attrs22841),(function (){var attrs22842 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22842))
{return React.DOM.small(sablono.interpreter.attributes(attrs22842),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22842));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22841),(function (){var attrs22843 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22843))
{return React.DOM.small(sablono.interpreter.attributes(attrs22843),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22843));
}
})());
}
})(),(function (){var attrs22844 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22854 = self__.site_stats;var G__22854__$1 = (((G__22854 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22854));var G__22854__$2 = (((G__22854__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22854__$1));return G__22854__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22854 = self__.site_stats;var G__22854__$1 = (((G__22854 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22854));var G__22854__$2 = (((G__22854__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22854__$1));return G__22854__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22844))
{return React.DOM.li(sablono.interpreter.attributes(attrs22844),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22844),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22849 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22855 = self__.site_stats;var G__22855__$1 = (((G__22855 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22855));var G__22855__$2 = (((G__22855__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22855__$1));return G__22855__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22855 = self__.site_stats;var G__22855__$1 = (((G__22855 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22855));var G__22855__$2 = (((G__22855__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22855__$1));return G__22855__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22849))
{return React.DOM.li(sablono.interpreter.attributes(attrs22849),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22849),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22834){var self__ = this;
var _22834__$1 = this;return self__.meta22833;
});
clustermap.components.map_report.t22832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22834,meta22833__$1){var self__ = this;
var _22834__$1 = this;return (new clustermap.components.map_report.t22832(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22831,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22833__$1));
});
clustermap.components.map_report.__GT_t22832 = (function __GT_t22832(pc_count__$1,ic_count__$1,const_count__$1,map__22831__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22833){return (new clustermap.components.map_report.t22832(pc_count__$1,ic_count__$1,const_count__$1,map__22831__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22833));
});
}
return (new clustermap.components.map_report.t22832(pc_count,ic_count,const_count,map__22831__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22881 = clustermap.components.map_report.type_counts(site_stats);var map__22881__$1 = ((cljs.core.seq_QMARK_(map__22881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22881):map__22881);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.constant$keyword$417);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.constant$keyword$416);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.constant$keyword$415);if(typeof clustermap.components.map_report.t22882 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22882 = (function (pc_count,ic_count,const_count,map__22881,comm,site_stats,investor_company,investor_company_report,meta22883){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22881 = map__22881;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22883 = meta22883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22882.cljs$lang$type = true;
clustermap.components.map_report.t22882.cljs$lang$ctorStr = "clustermap.components.map-report/t22882";
clustermap.components.map_report.t22882.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22882");
});
clustermap.components.map_report.t22882.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22882.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22887 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22887))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22887),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22887));
}
})()),React.DOM.ul(null,(function (){var attrs22888 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22888))
{return React.DOM.li(sablono.interpreter.attributes(attrs22888),(function (){var attrs22889 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22889))
{return React.DOM.small(sablono.interpreter.attributes(attrs22889),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22889));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22888),(function (){var attrs22890 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22890))
{return React.DOM.small(sablono.interpreter.attributes(attrs22890),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22890));
}
})());
}
})(),(function (){var attrs22891 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22891))
{return React.DOM.li(sablono.interpreter.attributes(attrs22891),(function (){var attrs22892 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22892))
{return React.DOM.small(sablono.interpreter.attributes(attrs22892),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22892));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22891),(function (){var attrs22893 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22893))
{return React.DOM.small(sablono.interpreter.attributes(attrs22893),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22893));
}
})());
}
})(),(function (){var attrs22894 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22904 = self__.site_stats;var G__22904__$1 = (((G__22904 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22904));var G__22904__$2 = (((G__22904__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22904__$1));return G__22904__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22904 = self__.site_stats;var G__22904__$1 = (((G__22904 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22904));var G__22904__$2 = (((G__22904__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22904__$1));return G__22904__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22894))
{return React.DOM.li(sablono.interpreter.attributes(attrs22894),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22894),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22899 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22905 = self__.site_stats;var G__22905__$1 = (((G__22905 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22905));var G__22905__$2 = (((G__22905__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22905__$1));return G__22905__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22905 = self__.site_stats;var G__22905__$1 = (((G__22905 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22905));var G__22905__$2 = (((G__22905__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22905__$1));return G__22905__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22899))
{return React.DOM.li(sablono.interpreter.attributes(attrs22899),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22899),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22884){var self__ = this;
var _22884__$1 = this;return self__.meta22883;
});
clustermap.components.map_report.t22882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22884,meta22883__$1){var self__ = this;
var _22884__$1 = this;return (new clustermap.components.map_report.t22882(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22881,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22883__$1));
});
clustermap.components.map_report.__GT_t22882 = (function __GT_t22882(pc_count__$1,ic_count__$1,const_count__$1,map__22881__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22883){return (new clustermap.components.map_report.t22882(pc_count__$1,ic_count__$1,const_count__$1,map__22881__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22883));
});
}
return (new clustermap.components.map_report.t22882(pc_count,ic_count,const_count,map__22881__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22935 = clustermap.components.map_report.type_counts(site_stats);var map__22935__$1 = ((cljs.core.seq_QMARK_(map__22935))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22935):map__22935);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,cljs.core.constant$keyword$417);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,cljs.core.constant$keyword$416);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,cljs.core.constant$keyword$415);if(typeof clustermap.components.map_report.t22936 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22936 = (function (pc_count,ic_count,const_count,map__22935,comm,site_stats,constituency,constituency_report,meta22937){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22935 = map__22935;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22937 = meta22937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22936.cljs$lang$type = true;
clustermap.components.map_report.t22936.cljs$lang$ctorStr = "clustermap.components.map-report/t22936";
clustermap.components.map_report.t22936.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22936");
});
clustermap.components.map_report.t22936.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22936.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22941 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22941))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22941),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22941),React.DOM.br(null),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22946 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22946))
{return React.DOM.li(sablono.interpreter.attributes(attrs22946),(function (){var attrs22947 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22947))
{return React.DOM.small(sablono.interpreter.attributes(attrs22947),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22947));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22946),(function (){var attrs22948 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22948))
{return React.DOM.small(sablono.interpreter.attributes(attrs22948),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22948));
}
})());
}
})(),(function (){var attrs22949 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22949))
{return React.DOM.li(sablono.interpreter.attributes(attrs22949),(function (){var attrs22950 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22950))
{return React.DOM.small(sablono.interpreter.attributes(attrs22950),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22950));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22949),(function (){var attrs22951 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22951))
{return React.DOM.small(sablono.interpreter.attributes(attrs22951),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22951));
}
})());
}
})(),(function (){var attrs22952 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22962 = self__.site_stats;var G__22962__$1 = (((G__22962 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22962));var G__22962__$2 = (((G__22962__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22962__$1));return G__22962__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22962 = self__.site_stats;var G__22962__$1 = (((G__22962 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22962));var G__22962__$2 = (((G__22962__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22962__$1));return G__22962__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22952))
{return React.DOM.li(sablono.interpreter.attributes(attrs22952),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22952),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22957 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22963 = self__.site_stats;var G__22963__$1 = (((G__22963 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22963));var G__22963__$2 = (((G__22963__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22963__$1));return G__22963__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22963 = self__.site_stats;var G__22963__$1 = (((G__22963 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22963));var G__22963__$2 = (((G__22963__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22963__$1));return G__22963__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22957))
{return React.DOM.li(sablono.interpreter.attributes(attrs22957),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22957),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22938){var self__ = this;
var _22938__$1 = this;return self__.meta22937;
});
clustermap.components.map_report.t22936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22938,meta22937__$1){var self__ = this;
var _22938__$1 = this;return (new clustermap.components.map_report.t22936(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22935,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22937__$1));
});
clustermap.components.map_report.__GT_t22936 = (function __GT_t22936(pc_count__$1,ic_count__$1,const_count__$1,map__22935__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22937){return (new clustermap.components.map_report.t22936(pc_count__$1,ic_count__$1,const_count__$1,map__22935__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22937));
});
}
return (new clustermap.components.map_report.t22936(pc_count,ic_count,const_count,map__22935__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$313);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$277], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$242], null));var site_stats = cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(data);var pred__22967 = cljs.core._EQ__EQ_;var expr__22968 = type;if(cljs.core.truth_((pred__22967.cljs$core$IFn$_invoke$arity$2 ? pred__22967.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,expr__22968) : pred__22967.call(null,cljs.core.constant$keyword$310,expr__22968))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22967.cljs$core$IFn$_invoke$arity$2 ? pred__22967.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$311,expr__22968) : pred__22967.call(null,cljs.core.constant$keyword$311,expr__22968))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22967.cljs$core$IFn$_invoke$arity$2 ? pred__22967.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$312,expr__22968) : pred__22967.call(null,cljs.core.constant$keyword$312,expr__22968))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
