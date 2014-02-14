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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$389,(function (){var G__22434 = site_stats;var G__22434__$1 = (((G__22434 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__22434));return G__22434__$1;
})(),cljs.core.constant$keyword$390,(function (){var G__22435 = site_stats;var G__22435__$1 = (((G__22435 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22435));return G__22435__$1;
})(),cljs.core.constant$keyword$391,(function (){var G__22436 = site_stats;var G__22436__$1 = (((G__22436 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22436));return G__22436__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22468 = clustermap.components.map_report.type_counts(site_stats);var map__22468__$1 = ((cljs.core.seq_QMARK_(map__22468))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22468):map__22468);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22468__$1,cljs.core.constant$keyword$391);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22468__$1,cljs.core.constant$keyword$390);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22468__$1,cljs.core.constant$keyword$389);if(typeof clustermap.components.map_report.t22469 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22469 = (function (pc_count,ic_count,const_count,map__22468,comm,site_stats,all_portfolio_companies_summary_report,meta22470){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22468 = map__22468;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22470 = meta22470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22469.cljs$lang$type = true;
clustermap.components.map_report.t22469.cljs$lang$ctorStr = "clustermap.components.map-report/t22469";
clustermap.components.map_report.t22469.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22469");
});
clustermap.components.map_report.t22469.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22469.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22474 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22474))
{return React.DOM.li(sablono.interpreter.attributes(attrs22474),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22474),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22479 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22479))
{return React.DOM.li(sablono.interpreter.attributes(attrs22479),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22479),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22484 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22484))
{return React.DOM.li(sablono.interpreter.attributes(attrs22484),(function (){var attrs22485 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22485))
{return React.DOM.small(sablono.interpreter.attributes(attrs22485),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22485));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22484),(function (){var attrs22486 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22486))
{return React.DOM.small(sablono.interpreter.attributes(attrs22486),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22486));
}
})());
}
})(),(function (){var attrs22487 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22497 = self__.site_stats;var G__22497__$1 = (((G__22497 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22497));var G__22497__$2 = (((G__22497__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22497__$1));return G__22497__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22497 = self__.site_stats;var G__22497__$1 = (((G__22497 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22497));var G__22497__$2 = (((G__22497__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22497__$1));return G__22497__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22487))
{return React.DOM.li(sablono.interpreter.attributes(attrs22487),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22487),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22492 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22498 = self__.site_stats;var G__22498__$1 = (((G__22498 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22498));var G__22498__$2 = (((G__22498__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22498__$1));return G__22498__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22498 = self__.site_stats;var G__22498__$1 = (((G__22498 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22498));var G__22498__$2 = (((G__22498__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22498__$1));return G__22498__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22492))
{return React.DOM.li(sablono.interpreter.attributes(attrs22492),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22492),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22471){var self__ = this;
var _22471__$1 = this;return self__.meta22470;
});
clustermap.components.map_report.t22469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22471,meta22470__$1){var self__ = this;
var _22471__$1 = this;return (new clustermap.components.map_report.t22469(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22468,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22470__$1));
});
clustermap.components.map_report.__GT_t22469 = (function __GT_t22469(pc_count__$1,ic_count__$1,const_count__$1,map__22468__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22470){return (new clustermap.components.map_report.t22469(pc_count__$1,ic_count__$1,const_count__$1,map__22468__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22470));
});
}
return (new clustermap.components.map_report.t22469(pc_count,ic_count,const_count,map__22468__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22522 = clustermap.components.map_report.type_counts(site_stats);var map__22522__$1 = ((cljs.core.seq_QMARK_(map__22522))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22522):map__22522);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,cljs.core.constant$keyword$391);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,cljs.core.constant$keyword$390);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,cljs.core.constant$keyword$389);if(typeof clustermap.components.map_report.t22523 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22523 = (function (pc_count,ic_count,const_count,map__22522,comm,site_stats,portfolio_company,portfolio_company_report,meta22524){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22522 = map__22522;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22524 = meta22524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22523.cljs$lang$type = true;
clustermap.components.map_report.t22523.cljs$lang$ctorStr = "clustermap.components.map-report/t22523";
clustermap.components.map_report.t22523.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22523");
});
clustermap.components.map_report.t22523.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22523.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22526 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22526))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22526),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22526));
}
})()),React.DOM.ul(null,(function (){var attrs22527 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22527))
{return React.DOM.li(sablono.interpreter.attributes(attrs22527),(function (){var attrs22528 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22528))
{return React.DOM.small(sablono.interpreter.attributes(attrs22528),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22528));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22527),(function (){var attrs22529 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22529))
{return React.DOM.small(sablono.interpreter.attributes(attrs22529),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22529));
}
})());
}
})(),(function (){var attrs22530 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22530))
{return React.DOM.li(sablono.interpreter.attributes(attrs22530),(function (){var attrs22531 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22531))
{return React.DOM.small(sablono.interpreter.attributes(attrs22531),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22531));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22530),(function (){var attrs22532 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22532))
{return React.DOM.small(sablono.interpreter.attributes(attrs22532),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22532));
}
})());
}
})(),(function (){var attrs22533 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22543 = self__.site_stats;var G__22543__$1 = (((G__22543 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22543));var G__22543__$2 = (((G__22543__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22543__$1));return G__22543__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22543 = self__.site_stats;var G__22543__$1 = (((G__22543 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22543));var G__22543__$2 = (((G__22543__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22543__$1));return G__22543__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22533))
{return React.DOM.li(sablono.interpreter.attributes(attrs22533),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22533),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22538 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22544 = self__.site_stats;var G__22544__$1 = (((G__22544 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22544));var G__22544__$2 = (((G__22544__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22544__$1));return G__22544__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22544 = self__.site_stats;var G__22544__$1 = (((G__22544 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22544));var G__22544__$2 = (((G__22544__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22544__$1));return G__22544__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22538))
{return React.DOM.li(sablono.interpreter.attributes(attrs22538),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22538),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22525){var self__ = this;
var _22525__$1 = this;return self__.meta22524;
});
clustermap.components.map_report.t22523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22525,meta22524__$1){var self__ = this;
var _22525__$1 = this;return (new clustermap.components.map_report.t22523(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22522,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22524__$1));
});
clustermap.components.map_report.__GT_t22523 = (function __GT_t22523(pc_count__$1,ic_count__$1,const_count__$1,map__22522__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22524){return (new clustermap.components.map_report.t22523(pc_count__$1,ic_count__$1,const_count__$1,map__22522__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22524));
});
}
return (new clustermap.components.map_report.t22523(pc_count,ic_count,const_count,map__22522__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22568 = clustermap.components.map_report.type_counts(site_stats);var map__22568__$1 = ((cljs.core.seq_QMARK_(map__22568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22568):map__22568);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568__$1,cljs.core.constant$keyword$391);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568__$1,cljs.core.constant$keyword$390);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568__$1,cljs.core.constant$keyword$389);if(typeof clustermap.components.map_report.t22569 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22569 = (function (pc_count,ic_count,const_count,map__22568,comm,site_stats,investor_company,investor_company_report,meta22570){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22568 = map__22568;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22570 = meta22570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22569.cljs$lang$type = true;
clustermap.components.map_report.t22569.cljs$lang$ctorStr = "clustermap.components.map-report/t22569";
clustermap.components.map_report.t22569.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22569");
});
clustermap.components.map_report.t22569.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22569.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22572 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22572))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22572),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22572));
}
})()),React.DOM.ul(null,(function (){var attrs22573 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22573))
{return React.DOM.li(sablono.interpreter.attributes(attrs22573),(function (){var attrs22574 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22574))
{return React.DOM.small(sablono.interpreter.attributes(attrs22574),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22574));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22573),(function (){var attrs22575 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22575))
{return React.DOM.small(sablono.interpreter.attributes(attrs22575),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22575));
}
})());
}
})(),(function (){var attrs22576 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22576))
{return React.DOM.li(sablono.interpreter.attributes(attrs22576),(function (){var attrs22577 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22577))
{return React.DOM.small(sablono.interpreter.attributes(attrs22577),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22577));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22576),(function (){var attrs22578 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22578))
{return React.DOM.small(sablono.interpreter.attributes(attrs22578),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22578));
}
})());
}
})(),(function (){var attrs22579 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22589 = self__.site_stats;var G__22589__$1 = (((G__22589 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22589));var G__22589__$2 = (((G__22589__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22589__$1));return G__22589__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22589 = self__.site_stats;var G__22589__$1 = (((G__22589 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22589));var G__22589__$2 = (((G__22589__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22589__$1));return G__22589__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22579))
{return React.DOM.li(sablono.interpreter.attributes(attrs22579),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22579),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22584 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22590 = self__.site_stats;var G__22590__$1 = (((G__22590 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22590));var G__22590__$2 = (((G__22590__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22590__$1));return G__22590__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22590 = self__.site_stats;var G__22590__$1 = (((G__22590 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22590));var G__22590__$2 = (((G__22590__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22590__$1));return G__22590__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22584))
{return React.DOM.li(sablono.interpreter.attributes(attrs22584),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22584),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22571){var self__ = this;
var _22571__$1 = this;return self__.meta22570;
});
clustermap.components.map_report.t22569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22571,meta22570__$1){var self__ = this;
var _22571__$1 = this;return (new clustermap.components.map_report.t22569(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22568,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22570__$1));
});
clustermap.components.map_report.__GT_t22569 = (function __GT_t22569(pc_count__$1,ic_count__$1,const_count__$1,map__22568__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22570){return (new clustermap.components.map_report.t22569(pc_count__$1,ic_count__$1,const_count__$1,map__22568__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22570));
});
}
return (new clustermap.components.map_report.t22569(pc_count,ic_count,const_count,map__22568__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22615 = clustermap.components.map_report.type_counts(site_stats);var map__22615__$1 = ((cljs.core.seq_QMARK_(map__22615))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22615):map__22615);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22615__$1,cljs.core.constant$keyword$391);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22615__$1,cljs.core.constant$keyword$390);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22615__$1,cljs.core.constant$keyword$389);if(typeof clustermap.components.map_report.t22616 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22616 = (function (pc_count,ic_count,const_count,map__22615,comm,site_stats,constituency,constituency_report,meta22617){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22615 = map__22615;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22617 = meta22617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22616.cljs$lang$type = true;
clustermap.components.map_report.t22616.cljs$lang$ctorStr = "clustermap.components.map-report/t22616";
clustermap.components.map_report.t22616.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22616");
});
clustermap.components.map_report.t22616.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22616.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22619 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22619))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22619),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22619));
}
})(),(function (){var attrs22620 = cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22620))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22620),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22620),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22621 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22621))
{return React.DOM.li(sablono.interpreter.attributes(attrs22621),(function (){var attrs22622 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22622))
{return React.DOM.small(sablono.interpreter.attributes(attrs22622),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22622));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22621),(function (){var attrs22623 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22623))
{return React.DOM.small(sablono.interpreter.attributes(attrs22623),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22623));
}
})());
}
})(),(function (){var attrs22624 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22624))
{return React.DOM.li(sablono.interpreter.attributes(attrs22624),(function (){var attrs22625 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22625))
{return React.DOM.small(sablono.interpreter.attributes(attrs22625),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22625));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22624),(function (){var attrs22626 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22626))
{return React.DOM.small(sablono.interpreter.attributes(attrs22626),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22626));
}
})());
}
})(),(function (){var attrs22627 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22637 = self__.site_stats;var G__22637__$1 = (((G__22637 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22637));var G__22637__$2 = (((G__22637__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22637__$1));return G__22637__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22637 = self__.site_stats;var G__22637__$1 = (((G__22637 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22637));var G__22637__$2 = (((G__22637__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22637__$1));return G__22637__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22627))
{return React.DOM.li(sablono.interpreter.attributes(attrs22627),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22627),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22632 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22638 = self__.site_stats;var G__22638__$1 = (((G__22638 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22638));var G__22638__$2 = (((G__22638__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22638__$1));return G__22638__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22638 = self__.site_stats;var G__22638__$1 = (((G__22638 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22638));var G__22638__$2 = (((G__22638__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22638__$1));return G__22638__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-"));if(cljs.core.map_QMARK_(attrs22632))
{return React.DOM.li(sablono.interpreter.attributes(attrs22632),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22632),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22618){var self__ = this;
var _22618__$1 = this;return self__.meta22617;
});
clustermap.components.map_report.t22616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22618,meta22617__$1){var self__ = this;
var _22618__$1 = this;return (new clustermap.components.map_report.t22616(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22615,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22617__$1));
});
clustermap.components.map_report.__GT_t22616 = (function __GT_t22616(pc_count__$1,ic_count__$1,const_count__$1,map__22615__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22617){return (new clustermap.components.map_report.t22616(pc_count__$1,ic_count__$1,const_count__$1,map__22615__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22617));
});
}
return (new clustermap.components.map_report.t22616(pc_count,ic_count,const_count,map__22615__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$295);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$297,cljs.core.constant$keyword$259], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$297,cljs.core.constant$keyword$226], null));var site_stats = cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(data);var pred__22642 = cljs.core._EQ__EQ_;var expr__22643 = type;if(cljs.core.truth_((pred__22642.cljs$core$IFn$_invoke$arity$2 ? pred__22642.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$292,expr__22643) : pred__22642.call(null,cljs.core.constant$keyword$292,expr__22643))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22642.cljs$core$IFn$_invoke$arity$2 ? pred__22642.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$293,expr__22643) : pred__22642.call(null,cljs.core.constant$keyword$293,expr__22643))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22642.cljs$core$IFn$_invoke$arity$2 ? pred__22642.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$294,expr__22643) : pred__22642.call(null,cljs.core.constant$keyword$294,expr__22643))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
