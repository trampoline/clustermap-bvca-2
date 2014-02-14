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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$174,(function (){var G__12033 = site_stats;var G__12033__$1 = (((G__12033 == null))?null:cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(G__12033));return G__12033__$1;
})(),cljs.core.constant$keyword$175,(function (){var G__12034 = site_stats;var G__12034__$1 = (((G__12034 == null))?null:cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(G__12034));return G__12034__$1;
})(),cljs.core.constant$keyword$176,(function (){var G__12035 = site_stats;var G__12035__$1 = (((G__12035 == null))?null:cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(G__12035));return G__12035__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12067 = clustermap.components.map_report.type_counts(site_stats);var map__12067__$1 = ((cljs.core.seq_QMARK_(map__12067))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12067):map__12067);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12067__$1,cljs.core.constant$keyword$176);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12067__$1,cljs.core.constant$keyword$175);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12067__$1,cljs.core.constant$keyword$174);if(typeof clustermap.components.map_report.t12068 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12068 = (function (pc_count,ic_count,const_count,map__12067,comm,site_stats,all_portfolio_companies_summary_report,meta12069){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12067 = map__12067;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12069 = meta12069;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12068.cljs$lang$type = true;
clustermap.components.map_report.t12068.cljs$lang$ctorStr = "clustermap.components.map-report/t12068";
clustermap.components.map_report.t12068.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t12068");
});
clustermap.components.map_report.t12068.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12068.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12073 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12073))
{return React.DOM.li(sablono.interpreter.attributes(attrs12073),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12073),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12078 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12078))
{return React.DOM.li(sablono.interpreter.attributes(attrs12078),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12078),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12083 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12083))
{return React.DOM.li(sablono.interpreter.attributes(attrs12083),(function (){var attrs12084 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs12084))
{return React.DOM.small(sablono.interpreter.attributes(attrs12084),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12084));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12083),(function (){var attrs12085 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs12085))
{return React.DOM.small(sablono.interpreter.attributes(attrs12085),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12085));
}
})());
}
})(),(function (){var attrs12086 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__12096 = self__.site_stats;var G__12096__$1 = (((G__12096 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__12096));var G__12096__$2 = (((G__12096__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12096__$1));return G__12096__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__12096 = self__.site_stats;var G__12096__$1 = (((G__12096 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__12096));var G__12096__$2 = (((G__12096__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12096__$1));return G__12096__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12086))
{return React.DOM.li(sablono.interpreter.attributes(attrs12086),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12086),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12091 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__12097 = self__.site_stats;var G__12097__$1 = (((G__12097 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__12097));var G__12097__$2 = (((G__12097__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12097__$1));return G__12097__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__12097 = self__.site_stats;var G__12097__$1 = (((G__12097 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__12097));var G__12097__$2 = (((G__12097__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12097__$1));return G__12097__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12091))
{return React.DOM.li(sablono.interpreter.attributes(attrs12091),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12091),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t12068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12070){var self__ = this;
var _12070__$1 = this;return self__.meta12069;
});
clustermap.components.map_report.t12068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12070,meta12069__$1){var self__ = this;
var _12070__$1 = this;return (new clustermap.components.map_report.t12068(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12067,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12069__$1));
});
clustermap.components.map_report.__GT_t12068 = (function __GT_t12068(pc_count__$1,ic_count__$1,const_count__$1,map__12067__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12069){return (new clustermap.components.map_report.t12068(pc_count__$1,ic_count__$1,const_count__$1,map__12067__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12069));
});
}
return (new clustermap.components.map_report.t12068(pc_count,ic_count,const_count,map__12067__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12121 = clustermap.components.map_report.type_counts(site_stats);var map__12121__$1 = ((cljs.core.seq_QMARK_(map__12121))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12121):map__12121);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,cljs.core.constant$keyword$176);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,cljs.core.constant$keyword$175);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,cljs.core.constant$keyword$174);if(typeof clustermap.components.map_report.t12122 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12122 = (function (pc_count,ic_count,const_count,map__12121,comm,site_stats,portfolio_company,portfolio_company_report,meta12123){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12121 = map__12121;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12123 = meta12123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12122.cljs$lang$type = true;
clustermap.components.map_report.t12122.cljs$lang$ctorStr = "clustermap.components.map-report/t12122";
clustermap.components.map_report.t12122.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t12122");
});
clustermap.components.map_report.t12122.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12122.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12125 = cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs12125))
{return React.DOM.h2(sablono.interpreter.attributes(attrs12125),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs12125));
}
})()),React.DOM.ul(null,(function (){var attrs12126 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs12126))
{return React.DOM.li(sablono.interpreter.attributes(attrs12126),(function (){var attrs12127 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs12127))
{return React.DOM.small(sablono.interpreter.attributes(attrs12127),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12127));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12126),(function (){var attrs12128 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs12128))
{return React.DOM.small(sablono.interpreter.attributes(attrs12128),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12128));
}
})());
}
})(),(function (){var attrs12129 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs12129))
{return React.DOM.li(sablono.interpreter.attributes(attrs12129),(function (){var attrs12130 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs12130))
{return React.DOM.small(sablono.interpreter.attributes(attrs12130),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12130));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12129),(function (){var attrs12131 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs12131))
{return React.DOM.small(sablono.interpreter.attributes(attrs12131),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12131));
}
})());
}
})(),(function (){var attrs12132 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__12142 = self__.site_stats;var G__12142__$1 = (((G__12142 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__12142));var G__12142__$2 = (((G__12142__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12142__$1));return G__12142__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__12142 = self__.site_stats;var G__12142__$1 = (((G__12142 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__12142));var G__12142__$2 = (((G__12142__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12142__$1));return G__12142__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12132))
{return React.DOM.li(sablono.interpreter.attributes(attrs12132),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12132),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12137 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__12143 = self__.site_stats;var G__12143__$1 = (((G__12143 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__12143));var G__12143__$2 = (((G__12143__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12143__$1));return G__12143__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__12143 = self__.site_stats;var G__12143__$1 = (((G__12143 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__12143));var G__12143__$2 = (((G__12143__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12143__$1));return G__12143__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12137))
{return React.DOM.li(sablono.interpreter.attributes(attrs12137),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12137),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t12122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12124){var self__ = this;
var _12124__$1 = this;return self__.meta12123;
});
clustermap.components.map_report.t12122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12124,meta12123__$1){var self__ = this;
var _12124__$1 = this;return (new clustermap.components.map_report.t12122(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12121,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12123__$1));
});
clustermap.components.map_report.__GT_t12122 = (function __GT_t12122(pc_count__$1,ic_count__$1,const_count__$1,map__12121__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12123){return (new clustermap.components.map_report.t12122(pc_count__$1,ic_count__$1,const_count__$1,map__12121__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12123));
});
}
return (new clustermap.components.map_report.t12122(pc_count,ic_count,const_count,map__12121__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12167 = clustermap.components.map_report.type_counts(site_stats);var map__12167__$1 = ((cljs.core.seq_QMARK_(map__12167))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12167):map__12167);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12167__$1,cljs.core.constant$keyword$176);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12167__$1,cljs.core.constant$keyword$175);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12167__$1,cljs.core.constant$keyword$174);if(typeof clustermap.components.map_report.t12168 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12168 = (function (pc_count,ic_count,const_count,map__12167,comm,site_stats,investor_company,investor_company_report,meta12169){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12167 = map__12167;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12169 = meta12169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12168.cljs$lang$type = true;
clustermap.components.map_report.t12168.cljs$lang$ctorStr = "clustermap.components.map-report/t12168";
clustermap.components.map_report.t12168.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t12168");
});
clustermap.components.map_report.t12168.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12168.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12171 = cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs12171))
{return React.DOM.h2(sablono.interpreter.attributes(attrs12171),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs12171));
}
})()),React.DOM.ul(null,(function (){var attrs12172 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs12172))
{return React.DOM.li(sablono.interpreter.attributes(attrs12172),(function (){var attrs12173 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs12173))
{return React.DOM.small(sablono.interpreter.attributes(attrs12173),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12173));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12172),(function (){var attrs12174 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs12174))
{return React.DOM.small(sablono.interpreter.attributes(attrs12174),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12174));
}
})());
}
})(),(function (){var attrs12175 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs12175))
{return React.DOM.li(sablono.interpreter.attributes(attrs12175),(function (){var attrs12176 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs12176))
{return React.DOM.small(sablono.interpreter.attributes(attrs12176),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12176));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12175),(function (){var attrs12177 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs12177))
{return React.DOM.small(sablono.interpreter.attributes(attrs12177),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12177));
}
})());
}
})(),(function (){var attrs12178 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__12188 = self__.site_stats;var G__12188__$1 = (((G__12188 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__12188));var G__12188__$2 = (((G__12188__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12188__$1));return G__12188__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__12188 = self__.site_stats;var G__12188__$1 = (((G__12188 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__12188));var G__12188__$2 = (((G__12188__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12188__$1));return G__12188__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12178))
{return React.DOM.li(sablono.interpreter.attributes(attrs12178),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12178),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12183 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__12189 = self__.site_stats;var G__12189__$1 = (((G__12189 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__12189));var G__12189__$2 = (((G__12189__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12189__$1));return G__12189__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__12189 = self__.site_stats;var G__12189__$1 = (((G__12189 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__12189));var G__12189__$2 = (((G__12189__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12189__$1));return G__12189__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12183))
{return React.DOM.li(sablono.interpreter.attributes(attrs12183),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12183),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t12168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12170){var self__ = this;
var _12170__$1 = this;return self__.meta12169;
});
clustermap.components.map_report.t12168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12170,meta12169__$1){var self__ = this;
var _12170__$1 = this;return (new clustermap.components.map_report.t12168(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12167,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12169__$1));
});
clustermap.components.map_report.__GT_t12168 = (function __GT_t12168(pc_count__$1,ic_count__$1,const_count__$1,map__12167__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12169){return (new clustermap.components.map_report.t12168(pc_count__$1,ic_count__$1,const_count__$1,map__12167__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12169));
});
}
return (new clustermap.components.map_report.t12168(pc_count,ic_count,const_count,map__12167__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12214 = clustermap.components.map_report.type_counts(site_stats);var map__12214__$1 = ((cljs.core.seq_QMARK_(map__12214))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12214):map__12214);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12214__$1,cljs.core.constant$keyword$176);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12214__$1,cljs.core.constant$keyword$175);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12214__$1,cljs.core.constant$keyword$174);if(typeof clustermap.components.map_report.t12215 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12215 = (function (pc_count,ic_count,const_count,map__12214,comm,site_stats,constituency,constituency_report,meta12216){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12214 = map__12214;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12216 = meta12216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12215.cljs$lang$type = true;
clustermap.components.map_report.t12215.cljs$lang$ctorStr = "clustermap.components.map-report/t12215";
clustermap.components.map_report.t12215.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t12215");
});
clustermap.components.map_report.t12215.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12215.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12218 = cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs12218))
{return React.DOM.h2(sablono.interpreter.attributes(attrs12218),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs12218));
}
})(),(function (){var attrs12219 = cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs12219))
{return React.DOM.h3(sablono.interpreter.attributes(attrs12219),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$178.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs12219),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$178.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12220 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs12220))
{return React.DOM.li(sablono.interpreter.attributes(attrs12220),(function (){var attrs12221 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs12221))
{return React.DOM.small(sablono.interpreter.attributes(attrs12221),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12221));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12220),(function (){var attrs12222 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs12222))
{return React.DOM.small(sablono.interpreter.attributes(attrs12222),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12222));
}
})());
}
})(),(function (){var attrs12223 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs12223))
{return React.DOM.li(sablono.interpreter.attributes(attrs12223),(function (){var attrs12224 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs12224))
{return React.DOM.small(sablono.interpreter.attributes(attrs12224),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12224));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12223),(function (){var attrs12225 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs12225))
{return React.DOM.small(sablono.interpreter.attributes(attrs12225),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs12225));
}
})());
}
})(),(function (){var attrs12226 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__12236 = self__.site_stats;var G__12236__$1 = (((G__12236 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__12236));var G__12236__$2 = (((G__12236__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12236__$1));return G__12236__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__12236 = self__.site_stats;var G__12236__$1 = (((G__12236 == null))?null:cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__12236));var G__12236__$2 = (((G__12236__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12236__$1));return G__12236__$2;
})(),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12226))
{return React.DOM.li(sablono.interpreter.attributes(attrs12226),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12226),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12231 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__12237 = self__.site_stats;var G__12237__$1 = (((G__12237 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__12237));var G__12237__$2 = (((G__12237__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12237__$1));return G__12237__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__12237 = self__.site_stats;var G__12237__$1 = (((G__12237 == null))?null:cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(G__12237));var G__12237__$2 = (((G__12237__$1 == null))?null:cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__12237__$1));return G__12237__$2;
})(),cljs.core.constant$keyword$75,0,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs12231))
{return React.DOM.li(sablono.interpreter.attributes(attrs12231),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs12231),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t12215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12217){var self__ = this;
var _12217__$1 = this;return self__.meta12216;
});
clustermap.components.map_report.t12215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12217,meta12216__$1){var self__ = this;
var _12217__$1 = this;return (new clustermap.components.map_report.t12215(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12214,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12216__$1));
});
clustermap.components.map_report.__GT_t12215 = (function __GT_t12215(pc_count__$1,ic_count__$1,const_count__$1,map__12214__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12216){return (new clustermap.components.map_report.t12215(pc_count__$1,ic_count__$1,const_count__$1,map__12214__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12216));
});
}
return (new clustermap.components.map_report.t12215(pc_count,ic_count,const_count,map__12214__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$80);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,cljs.core.constant$keyword$44], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82,cljs.core.constant$keyword$11], null));var site_stats = cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(data);var pred__12241 = cljs.core._EQ__EQ_;var expr__12242 = type;if(cljs.core.truth_((pred__12241.cljs$core$IFn$_invoke$arity$2 ? pred__12241.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,expr__12242) : pred__12241.call(null,cljs.core.constant$keyword$77,expr__12242))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__12241.cljs$core$IFn$_invoke$arity$2 ? pred__12241.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78,expr__12242) : pred__12241.call(null,cljs.core.constant$keyword$78,expr__12242))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__12241.cljs$core$IFn$_invoke$arity$2 ? pred__12241.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$79,expr__12242) : pred__12241.call(null,cljs.core.constant$keyword$79,expr__12242))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
