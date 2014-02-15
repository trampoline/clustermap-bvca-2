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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$390,(function (){var G__22442 = site_stats;var G__22442__$1 = (((G__22442 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22442));return G__22442__$1;
})(),cljs.core.constant$keyword$391,(function (){var G__22443 = site_stats;var G__22443__$1 = (((G__22443 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22443));return G__22443__$1;
})(),cljs.core.constant$keyword$392,(function (){var G__22444 = site_stats;var G__22444__$1 = (((G__22444 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22444));return G__22444__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22476 = clustermap.components.map_report.type_counts(site_stats);var map__22476__$1 = ((cljs.core.seq_QMARK_(map__22476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22476):map__22476);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476__$1,cljs.core.constant$keyword$392);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476__$1,cljs.core.constant$keyword$391);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476__$1,cljs.core.constant$keyword$390);if(typeof clustermap.components.map_report.t22477 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22477 = (function (pc_count,ic_count,const_count,map__22476,comm,site_stats,all_portfolio_companies_summary_report,meta22478){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22476 = map__22476;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22478 = meta22478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22477.cljs$lang$type = true;
clustermap.components.map_report.t22477.cljs$lang$ctorStr = "clustermap.components.map-report/t22477";
clustermap.components.map_report.t22477.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22477");
});
clustermap.components.map_report.t22477.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22477.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22482 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22482))
{return React.DOM.li(sablono.interpreter.attributes(attrs22482),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22482),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22487 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22487))
{return React.DOM.li(sablono.interpreter.attributes(attrs22487),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22487),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22492 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22492))
{return React.DOM.li(sablono.interpreter.attributes(attrs22492),(function (){var attrs22493 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22493))
{return React.DOM.small(sablono.interpreter.attributes(attrs22493),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22493));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22492),(function (){var attrs22494 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22494))
{return React.DOM.small(sablono.interpreter.attributes(attrs22494),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22494));
}
})());
}
})(),(function (){var attrs22495 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22505 = self__.site_stats;var G__22505__$1 = (((G__22505 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22505));var G__22505__$2 = (((G__22505__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22505__$1));return G__22505__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22505 = self__.site_stats;var G__22505__$1 = (((G__22505 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22505));var G__22505__$2 = (((G__22505__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22505__$1));return G__22505__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22495))
{return React.DOM.li(sablono.interpreter.attributes(attrs22495),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22495),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22500 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22506 = self__.site_stats;var G__22506__$1 = (((G__22506 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22506));var G__22506__$2 = (((G__22506__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22506__$1));return G__22506__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22506 = self__.site_stats;var G__22506__$1 = (((G__22506 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22506));var G__22506__$2 = (((G__22506__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22506__$1));return G__22506__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22500))
{return React.DOM.li(sablono.interpreter.attributes(attrs22500),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22500),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22479){var self__ = this;
var _22479__$1 = this;return self__.meta22478;
});
clustermap.components.map_report.t22477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22479,meta22478__$1){var self__ = this;
var _22479__$1 = this;return (new clustermap.components.map_report.t22477(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22476,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22478__$1));
});
clustermap.components.map_report.__GT_t22477 = (function __GT_t22477(pc_count__$1,ic_count__$1,const_count__$1,map__22476__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22478){return (new clustermap.components.map_report.t22477(pc_count__$1,ic_count__$1,const_count__$1,map__22476__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22478));
});
}
return (new clustermap.components.map_report.t22477(pc_count,ic_count,const_count,map__22476__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22530 = clustermap.components.map_report.type_counts(site_stats);var map__22530__$1 = ((cljs.core.seq_QMARK_(map__22530))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22530):map__22530);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22530__$1,cljs.core.constant$keyword$392);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22530__$1,cljs.core.constant$keyword$391);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22530__$1,cljs.core.constant$keyword$390);if(typeof clustermap.components.map_report.t22531 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22531 = (function (pc_count,ic_count,const_count,map__22530,comm,site_stats,portfolio_company,portfolio_company_report,meta22532){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22530 = map__22530;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22532 = meta22532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22531.cljs$lang$type = true;
clustermap.components.map_report.t22531.cljs$lang$ctorStr = "clustermap.components.map-report/t22531";
clustermap.components.map_report.t22531.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22531");
});
clustermap.components.map_report.t22531.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22531.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22534 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22534))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22534),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22534));
}
})()),React.DOM.ul(null,(function (){var attrs22535 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22535))
{return React.DOM.li(sablono.interpreter.attributes(attrs22535),(function (){var attrs22536 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22536))
{return React.DOM.small(sablono.interpreter.attributes(attrs22536),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22536));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22535),(function (){var attrs22537 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22537))
{return React.DOM.small(sablono.interpreter.attributes(attrs22537),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22537));
}
})());
}
})(),(function (){var attrs22538 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22538))
{return React.DOM.li(sablono.interpreter.attributes(attrs22538),(function (){var attrs22539 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22539))
{return React.DOM.small(sablono.interpreter.attributes(attrs22539),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22539));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22538),(function (){var attrs22540 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22540))
{return React.DOM.small(sablono.interpreter.attributes(attrs22540),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22540));
}
})());
}
})(),(function (){var attrs22541 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22551 = self__.site_stats;var G__22551__$1 = (((G__22551 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22551));var G__22551__$2 = (((G__22551__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22551__$1));return G__22551__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22551 = self__.site_stats;var G__22551__$1 = (((G__22551 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22551));var G__22551__$2 = (((G__22551__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22551__$1));return G__22551__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22541))
{return React.DOM.li(sablono.interpreter.attributes(attrs22541),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22541),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22546 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22552 = self__.site_stats;var G__22552__$1 = (((G__22552 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22552));var G__22552__$2 = (((G__22552__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22552__$1));return G__22552__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22552 = self__.site_stats;var G__22552__$1 = (((G__22552 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22552));var G__22552__$2 = (((G__22552__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22552__$1));return G__22552__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22546))
{return React.DOM.li(sablono.interpreter.attributes(attrs22546),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22546),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22533){var self__ = this;
var _22533__$1 = this;return self__.meta22532;
});
clustermap.components.map_report.t22531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22533,meta22532__$1){var self__ = this;
var _22533__$1 = this;return (new clustermap.components.map_report.t22531(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22530,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22532__$1));
});
clustermap.components.map_report.__GT_t22531 = (function __GT_t22531(pc_count__$1,ic_count__$1,const_count__$1,map__22530__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22532){return (new clustermap.components.map_report.t22531(pc_count__$1,ic_count__$1,const_count__$1,map__22530__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22532));
});
}
return (new clustermap.components.map_report.t22531(pc_count,ic_count,const_count,map__22530__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22576 = clustermap.components.map_report.type_counts(site_stats);var map__22576__$1 = ((cljs.core.seq_QMARK_(map__22576))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22576):map__22576);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,cljs.core.constant$keyword$392);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,cljs.core.constant$keyword$391);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,cljs.core.constant$keyword$390);if(typeof clustermap.components.map_report.t22577 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22577 = (function (pc_count,ic_count,const_count,map__22576,comm,site_stats,investor_company,investor_company_report,meta22578){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22576 = map__22576;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22578 = meta22578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22577.cljs$lang$type = true;
clustermap.components.map_report.t22577.cljs$lang$ctorStr = "clustermap.components.map-report/t22577";
clustermap.components.map_report.t22577.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22577");
});
clustermap.components.map_report.t22577.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22577.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22580 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22580))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22580),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22580));
}
})()),React.DOM.ul(null,(function (){var attrs22581 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22581))
{return React.DOM.li(sablono.interpreter.attributes(attrs22581),(function (){var attrs22582 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22582))
{return React.DOM.small(sablono.interpreter.attributes(attrs22582),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22582));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22581),(function (){var attrs22583 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22583))
{return React.DOM.small(sablono.interpreter.attributes(attrs22583),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22583));
}
})());
}
})(),(function (){var attrs22584 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22584))
{return React.DOM.li(sablono.interpreter.attributes(attrs22584),(function (){var attrs22585 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22585))
{return React.DOM.small(sablono.interpreter.attributes(attrs22585),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22585));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22584),(function (){var attrs22586 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22586))
{return React.DOM.small(sablono.interpreter.attributes(attrs22586),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22586));
}
})());
}
})(),(function (){var attrs22587 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22597 = self__.site_stats;var G__22597__$1 = (((G__22597 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22597));var G__22597__$2 = (((G__22597__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22597__$1));return G__22597__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22597 = self__.site_stats;var G__22597__$1 = (((G__22597 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22597));var G__22597__$2 = (((G__22597__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22597__$1));return G__22597__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22587))
{return React.DOM.li(sablono.interpreter.attributes(attrs22587),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22587),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22592 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22598 = self__.site_stats;var G__22598__$1 = (((G__22598 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22598));var G__22598__$2 = (((G__22598__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22598__$1));return G__22598__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22598 = self__.site_stats;var G__22598__$1 = (((G__22598 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22598));var G__22598__$2 = (((G__22598__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22598__$1));return G__22598__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22592))
{return React.DOM.li(sablono.interpreter.attributes(attrs22592),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22592),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22579){var self__ = this;
var _22579__$1 = this;return self__.meta22578;
});
clustermap.components.map_report.t22577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22579,meta22578__$1){var self__ = this;
var _22579__$1 = this;return (new clustermap.components.map_report.t22577(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22576,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22578__$1));
});
clustermap.components.map_report.__GT_t22577 = (function __GT_t22577(pc_count__$1,ic_count__$1,const_count__$1,map__22576__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22578){return (new clustermap.components.map_report.t22577(pc_count__$1,ic_count__$1,const_count__$1,map__22576__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22578));
});
}
return (new clustermap.components.map_report.t22577(pc_count,ic_count,const_count,map__22576__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22623 = clustermap.components.map_report.type_counts(site_stats);var map__22623__$1 = ((cljs.core.seq_QMARK_(map__22623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22623):map__22623);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22623__$1,cljs.core.constant$keyword$392);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22623__$1,cljs.core.constant$keyword$391);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22623__$1,cljs.core.constant$keyword$390);if(typeof clustermap.components.map_report.t22624 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22624 = (function (pc_count,ic_count,const_count,map__22623,comm,site_stats,constituency,constituency_report,meta22625){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22623 = map__22623;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22625 = meta22625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22624.cljs$lang$type = true;
clustermap.components.map_report.t22624.cljs$lang$ctorStr = "clustermap.components.map-report/t22624";
clustermap.components.map_report.t22624.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22624");
});
clustermap.components.map_report.t22624.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22624.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22627 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22627))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22627),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22627));
}
})(),(function (){var attrs22628 = cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22628))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22628),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22628),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22629 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22629))
{return React.DOM.li(sablono.interpreter.attributes(attrs22629),(function (){var attrs22630 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22630))
{return React.DOM.small(sablono.interpreter.attributes(attrs22630),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22630));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22629),(function (){var attrs22631 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22631))
{return React.DOM.small(sablono.interpreter.attributes(attrs22631),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22631));
}
})());
}
})(),(function (){var attrs22632 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22632))
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
})(),(function (){var attrs22635 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22645 = self__.site_stats;var G__22645__$1 = (((G__22645 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22645));var G__22645__$2 = (((G__22645__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22645__$1));return G__22645__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22645 = self__.site_stats;var G__22645__$1 = (((G__22645 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22645));var G__22645__$2 = (((G__22645__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22645__$1));return G__22645__$2;
})(),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22635))
{return React.DOM.li(sablono.interpreter.attributes(attrs22635),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22635),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22640 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22646 = self__.site_stats;var G__22646__$1 = (((G__22646 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22646));var G__22646__$2 = (((G__22646__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22646__$1));return G__22646__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22646 = self__.site_stats;var G__22646__$1 = (((G__22646 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22646));var G__22646__$2 = (((G__22646__$1 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22646__$1));return G__22646__$2;
})(),cljs.core.constant$keyword$293,0,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22640))
{return React.DOM.li(sablono.interpreter.attributes(attrs22640),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22640),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22626){var self__ = this;
var _22626__$1 = this;return self__.meta22625;
});
clustermap.components.map_report.t22624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22626,meta22625__$1){var self__ = this;
var _22626__$1 = this;return (new clustermap.components.map_report.t22624(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22623,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22625__$1));
});
clustermap.components.map_report.__GT_t22624 = (function __GT_t22624(pc_count__$1,ic_count__$1,const_count__$1,map__22623__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22625){return (new clustermap.components.map_report.t22624(pc_count__$1,ic_count__$1,const_count__$1,map__22623__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22625));
});
}
return (new clustermap.components.map_report.t22624(pc_count,ic_count,const_count,map__22623__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$298);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,cljs.core.constant$keyword$262], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,cljs.core.constant$keyword$227], null));var site_stats = cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(data);var pred__22650 = cljs.core._EQ__EQ_;var expr__22651 = type;if(cljs.core.truth_((pred__22650.cljs$core$IFn$_invoke$arity$2 ? pred__22650.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$295,expr__22651) : pred__22650.call(null,cljs.core.constant$keyword$295,expr__22651))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22650.cljs$core$IFn$_invoke$arity$2 ? pred__22650.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,expr__22651) : pred__22650.call(null,cljs.core.constant$keyword$296,expr__22651))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22650.cljs$core$IFn$_invoke$arity$2 ? pred__22650.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__22651) : pred__22650.call(null,cljs.core.constant$keyword$297,expr__22651))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
