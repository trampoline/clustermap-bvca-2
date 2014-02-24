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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$415,(function (){var G__22701 = site_stats;var G__22701__$1 = (((G__22701 == null))?null:cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(G__22701));return G__22701__$1;
})(),cljs.core.constant$keyword$416,(function (){var G__22702 = site_stats;var G__22702__$1 = (((G__22702 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__22702));return G__22702__$1;
})(),cljs.core.constant$keyword$417,(function (){var G__22703 = site_stats;var G__22703__$1 = (((G__22703 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__22703));return G__22703__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22735 = clustermap.components.map_report.type_counts(site_stats);var map__22735__$1 = ((cljs.core.seq_QMARK_(map__22735))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22735):map__22735);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$417);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$416);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$415);if(typeof clustermap.components.map_report.t22736 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22736 = (function (pc_count,ic_count,const_count,map__22735,comm,site_stats,all_portfolio_companies_summary_report,meta22737){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22735 = map__22735;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22737 = meta22737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22736.cljs$lang$type = true;
clustermap.components.map_report.t22736.cljs$lang$ctorStr = "clustermap.components.map-report/t22736";
clustermap.components.map_report.t22736.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22736");
});
clustermap.components.map_report.t22736.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22736.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22741 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22741))
{return React.DOM.li(sablono.interpreter.attributes(attrs22741),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22741),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22746 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22746))
{return React.DOM.li(sablono.interpreter.attributes(attrs22746),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22746),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22751 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22751))
{return React.DOM.li(sablono.interpreter.attributes(attrs22751),(function (){var attrs22752 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22752))
{return React.DOM.small(sablono.interpreter.attributes(attrs22752),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22752));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22751),(function (){var attrs22753 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22753))
{return React.DOM.small(sablono.interpreter.attributes(attrs22753),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22753));
}
})());
}
})(),(function (){var attrs22754 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22764 = self__.site_stats;var G__22764__$1 = (((G__22764 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22764));var G__22764__$2 = (((G__22764__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22764__$1));return G__22764__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22764 = self__.site_stats;var G__22764__$1 = (((G__22764 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22764));var G__22764__$2 = (((G__22764__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22764__$1));return G__22764__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22754))
{return React.DOM.li(sablono.interpreter.attributes(attrs22754),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22754),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22759 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22765 = self__.site_stats;var G__22765__$1 = (((G__22765 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22765));var G__22765__$2 = (((G__22765__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22765__$1));return G__22765__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22765 = self__.site_stats;var G__22765__$1 = (((G__22765 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22765));var G__22765__$2 = (((G__22765__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22765__$1));return G__22765__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22759))
{return React.DOM.li(sablono.interpreter.attributes(attrs22759),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22759),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22738){var self__ = this;
var _22738__$1 = this;return self__.meta22737;
});
clustermap.components.map_report.t22736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22738,meta22737__$1){var self__ = this;
var _22738__$1 = this;return (new clustermap.components.map_report.t22736(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22735,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22737__$1));
});
clustermap.components.map_report.__GT_t22736 = (function __GT_t22736(pc_count__$1,ic_count__$1,const_count__$1,map__22735__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22737){return (new clustermap.components.map_report.t22736(pc_count__$1,ic_count__$1,const_count__$1,map__22735__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22737));
});
}
return (new clustermap.components.map_report.t22736(pc_count,ic_count,const_count,map__22735__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22791 = clustermap.components.map_report.type_counts(site_stats);var map__22791__$1 = ((cljs.core.seq_QMARK_(map__22791))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22791):map__22791);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22791__$1,cljs.core.constant$keyword$417);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22791__$1,cljs.core.constant$keyword$416);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22791__$1,cljs.core.constant$keyword$415);if(typeof clustermap.components.map_report.t22792 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22792 = (function (pc_count,ic_count,const_count,map__22791,comm,site_stats,portfolio_company,portfolio_company_report,meta22793){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22791 = map__22791;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22793 = meta22793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22792.cljs$lang$type = true;
clustermap.components.map_report.t22792.cljs$lang$ctorStr = "clustermap.components.map-report/t22792";
clustermap.components.map_report.t22792.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22792");
});
clustermap.components.map_report.t22792.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22792.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22797 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22797))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22797),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22797));
}
})()),React.DOM.ul(null,(function (){var attrs22798 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22798))
{return React.DOM.li(sablono.interpreter.attributes(attrs22798),(function (){var attrs22799 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22799))
{return React.DOM.small(sablono.interpreter.attributes(attrs22799),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22799));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22798),(function (){var attrs22800 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22800))
{return React.DOM.small(sablono.interpreter.attributes(attrs22800),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22800));
}
})());
}
})(),(function (){var attrs22801 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22801))
{return React.DOM.li(sablono.interpreter.attributes(attrs22801),(function (){var attrs22802 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22802))
{return React.DOM.small(sablono.interpreter.attributes(attrs22802),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22802));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22801),(function (){var attrs22803 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22803))
{return React.DOM.small(sablono.interpreter.attributes(attrs22803),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22803));
}
})());
}
})(),(function (){var attrs22804 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22814 = self__.site_stats;var G__22814__$1 = (((G__22814 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22814));var G__22814__$2 = (((G__22814__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22814__$1));return G__22814__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22814 = self__.site_stats;var G__22814__$1 = (((G__22814 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22814));var G__22814__$2 = (((G__22814__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22814__$1));return G__22814__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22804))
{return React.DOM.li(sablono.interpreter.attributes(attrs22804),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22804),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22809 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22815 = self__.site_stats;var G__22815__$1 = (((G__22815 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22815));var G__22815__$2 = (((G__22815__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22815__$1));return G__22815__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22815 = self__.site_stats;var G__22815__$1 = (((G__22815 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22815));var G__22815__$2 = (((G__22815__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22815__$1));return G__22815__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22809))
{return React.DOM.li(sablono.interpreter.attributes(attrs22809),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22809),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22794){var self__ = this;
var _22794__$1 = this;return self__.meta22793;
});
clustermap.components.map_report.t22792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22794,meta22793__$1){var self__ = this;
var _22794__$1 = this;return (new clustermap.components.map_report.t22792(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22791,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22793__$1));
});
clustermap.components.map_report.__GT_t22792 = (function __GT_t22792(pc_count__$1,ic_count__$1,const_count__$1,map__22791__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22793){return (new clustermap.components.map_report.t22792(pc_count__$1,ic_count__$1,const_count__$1,map__22791__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22793));
});
}
return (new clustermap.components.map_report.t22792(pc_count,ic_count,const_count,map__22791__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22841 = clustermap.components.map_report.type_counts(site_stats);var map__22841__$1 = ((cljs.core.seq_QMARK_(map__22841))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22841):map__22841);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22841__$1,cljs.core.constant$keyword$417);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22841__$1,cljs.core.constant$keyword$416);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22841__$1,cljs.core.constant$keyword$415);if(typeof clustermap.components.map_report.t22842 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22842 = (function (pc_count,ic_count,const_count,map__22841,comm,site_stats,investor_company,investor_company_report,meta22843){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22841 = map__22841;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22843 = meta22843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22842.cljs$lang$type = true;
clustermap.components.map_report.t22842.cljs$lang$ctorStr = "clustermap.components.map-report/t22842";
clustermap.components.map_report.t22842.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22842");
});
clustermap.components.map_report.t22842.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22842.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22847 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22847))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22847),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22847));
}
})()),React.DOM.ul(null,(function (){var attrs22848 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22848))
{return React.DOM.li(sablono.interpreter.attributes(attrs22848),(function (){var attrs22849 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22849))
{return React.DOM.small(sablono.interpreter.attributes(attrs22849),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22849));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22848),(function (){var attrs22850 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22850))
{return React.DOM.small(sablono.interpreter.attributes(attrs22850),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22850));
}
})());
}
})(),(function (){var attrs22851 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22851))
{return React.DOM.li(sablono.interpreter.attributes(attrs22851),(function (){var attrs22852 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22852))
{return React.DOM.small(sablono.interpreter.attributes(attrs22852),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22852));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22851),(function (){var attrs22853 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22853))
{return React.DOM.small(sablono.interpreter.attributes(attrs22853),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22853));
}
})());
}
})(),(function (){var attrs22854 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22864 = self__.site_stats;var G__22864__$1 = (((G__22864 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22864));var G__22864__$2 = (((G__22864__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22864__$1));return G__22864__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22864 = self__.site_stats;var G__22864__$1 = (((G__22864 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22864));var G__22864__$2 = (((G__22864__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22864__$1));return G__22864__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22854))
{return React.DOM.li(sablono.interpreter.attributes(attrs22854),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22854),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22859 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22865 = self__.site_stats;var G__22865__$1 = (((G__22865 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22865));var G__22865__$2 = (((G__22865__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22865__$1));return G__22865__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22865 = self__.site_stats;var G__22865__$1 = (((G__22865 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22865));var G__22865__$2 = (((G__22865__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22865__$1));return G__22865__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22859))
{return React.DOM.li(sablono.interpreter.attributes(attrs22859),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22859),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22844){var self__ = this;
var _22844__$1 = this;return self__.meta22843;
});
clustermap.components.map_report.t22842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22844,meta22843__$1){var self__ = this;
var _22844__$1 = this;return (new clustermap.components.map_report.t22842(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22841,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22843__$1));
});
clustermap.components.map_report.__GT_t22842 = (function __GT_t22842(pc_count__$1,ic_count__$1,const_count__$1,map__22841__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22843){return (new clustermap.components.map_report.t22842(pc_count__$1,ic_count__$1,const_count__$1,map__22841__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22843));
});
}
return (new clustermap.components.map_report.t22842(pc_count,ic_count,const_count,map__22841__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22895 = clustermap.components.map_report.type_counts(site_stats);var map__22895__$1 = ((cljs.core.seq_QMARK_(map__22895))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22895):map__22895);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895__$1,cljs.core.constant$keyword$417);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895__$1,cljs.core.constant$keyword$416);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895__$1,cljs.core.constant$keyword$415);if(typeof clustermap.components.map_report.t22896 !== 'undefined')
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
clustermap.components.map_report.t22896.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22901 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22901))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22901),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22901),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})()),React.DOM.ul(null,(function (){var attrs22906 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22906))
{return React.DOM.li(sablono.interpreter.attributes(attrs22906),(function (){var attrs22907 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22907))
{return React.DOM.small(sablono.interpreter.attributes(attrs22907),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22907));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22906),(function (){var attrs22908 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22908))
{return React.DOM.small(sablono.interpreter.attributes(attrs22908),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22908));
}
})());
}
})(),(function (){var attrs22909 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22909))
{return React.DOM.li(sablono.interpreter.attributes(attrs22909),(function (){var attrs22910 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22910))
{return React.DOM.small(sablono.interpreter.attributes(attrs22910),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22910));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22909),(function (){var attrs22911 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22911))
{return React.DOM.small(sablono.interpreter.attributes(attrs22911),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22911));
}
})());
}
})(),(function (){var attrs22912 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22922 = self__.site_stats;var G__22922__$1 = (((G__22922 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22922));var G__22922__$2 = (((G__22922__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22922__$1));return G__22922__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22922 = self__.site_stats;var G__22922__$1 = (((G__22922 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22922));var G__22922__$2 = (((G__22922__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22922__$1));return G__22922__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22912))
{return React.DOM.li(sablono.interpreter.attributes(attrs22912),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22912),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22917 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22923 = self__.site_stats;var G__22923__$1 = (((G__22923 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22923));var G__22923__$2 = (((G__22923__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22923__$1));return G__22923__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22923 = self__.site_stats;var G__22923__$1 = (((G__22923 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22923));var G__22923__$2 = (((G__22923__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22923__$1));return G__22923__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22917))
{return React.DOM.li(sablono.interpreter.attributes(attrs22917),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22917),React.DOM.small(null,"Portfolio Company Employees"));
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
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$313);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$277], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$242], null));var site_stats = cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(data);var pred__22927 = cljs.core._EQ__EQ_;var expr__22928 = type;if(cljs.core.truth_((pred__22927.cljs$core$IFn$_invoke$arity$2 ? pred__22927.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,expr__22928) : pred__22927.call(null,cljs.core.constant$keyword$310,expr__22928))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22927.cljs$core$IFn$_invoke$arity$2 ? pred__22927.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$311,expr__22928) : pred__22927.call(null,cljs.core.constant$keyword$311,expr__22928))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22927.cljs$core$IFn$_invoke$arity$2 ? pred__22927.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$312,expr__22928) : pred__22927.call(null,cljs.core.constant$keyword$312,expr__22928))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
