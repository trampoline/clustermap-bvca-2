// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('domina.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$748,(function (){var G__34351 = site_stats;var G__34351__$1 = (((G__34351 == null))?null:cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(G__34351));return G__34351__$1;
})(),cljs.core.constant$keyword$749,(function (){var G__34352 = site_stats;var G__34352__$1 = (((G__34352 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34352));return G__34352__$1;
})(),cljs.core.constant$keyword$750,(function (){var G__34353 = site_stats;var G__34353__$1 = (((G__34353 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34353));return G__34353__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__34385 = clustermap.components.map_report.type_counts(site_stats);var map__34385__$1 = ((cljs.core.seq_QMARK_(map__34385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34385):map__34385);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34385__$1,cljs.core.constant$keyword$750);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34385__$1,cljs.core.constant$keyword$749);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34385__$1,cljs.core.constant$keyword$748);if(typeof clustermap.components.map_report.t34386 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34386 = (function (pc_count,ic_count,const_count,map__34385,comm,site_stats,all_portfolio_companies_summary_report,meta34387){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34385 = map__34385;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34387 = meta34387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34386.cljs$lang$type = true;
clustermap.components.map_report.t34386.cljs$lang$ctorStr = "clustermap.components.map-report/t34386";
clustermap.components.map_report.t34386.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34386");
});
clustermap.components.map_report.t34386.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34386.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34391 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34391))
{return React.DOM.li(sablono.interpreter.attributes(attrs34391),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34391),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs34396 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34396))
{return React.DOM.li(sablono.interpreter.attributes(attrs34396),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34396),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs34401 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34401))
{return React.DOM.li(sablono.interpreter.attributes(attrs34401),(function (){var attrs34402 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34402))
{return React.DOM.small(sablono.interpreter.attributes(attrs34402),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34402));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34401),(function (){var attrs34403 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34403))
{return React.DOM.small(sablono.interpreter.attributes(attrs34403),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34403));
}
})());
}
})(),(function (){var attrs34404 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34414 = self__.site_stats;var G__34414__$1 = (((G__34414 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34414));var G__34414__$2 = (((G__34414__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34414__$1));return G__34414__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34414 = self__.site_stats;var G__34414__$1 = (((G__34414 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34414));var G__34414__$2 = (((G__34414__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34414__$1));return G__34414__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34404))
{return React.DOM.li(sablono.interpreter.attributes(attrs34404),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34404),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34409 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34415 = self__.site_stats;var G__34415__$1 = (((G__34415 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34415));var G__34415__$2 = (((G__34415__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34415__$1));return G__34415__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34415 = self__.site_stats;var G__34415__$1 = (((G__34415 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34415));var G__34415__$2 = (((G__34415__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34415__$1));return G__34415__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34409))
{return React.DOM.li(sablono.interpreter.attributes(attrs34409),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34409),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34388){var self__ = this;
var _34388__$1 = this;return self__.meta34387;
});
clustermap.components.map_report.t34386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34388,meta34387__$1){var self__ = this;
var _34388__$1 = this;return (new clustermap.components.map_report.t34386(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34385,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34387__$1));
});
clustermap.components.map_report.__GT_t34386 = (function __GT_t34386(pc_count__$1,ic_count__$1,const_count__$1,map__34385__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34387){return (new clustermap.components.map_report.t34386(pc_count__$1,ic_count__$1,const_count__$1,map__34385__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34387));
});
}
return (new clustermap.components.map_report.t34386(pc_count,ic_count,const_count,map__34385__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__34441 = clustermap.components.map_report.type_counts(site_stats);var map__34441__$1 = ((cljs.core.seq_QMARK_(map__34441))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34441):map__34441);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34441__$1,cljs.core.constant$keyword$750);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34441__$1,cljs.core.constant$keyword$749);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34441__$1,cljs.core.constant$keyword$748);if(typeof clustermap.components.map_report.t34442 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34442 = (function (pc_count,ic_count,const_count,map__34441,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta34443){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34441 = map__34441;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta34443 = meta34443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34442.cljs$lang$type = true;
clustermap.components.map_report.t34442.cljs$lang$ctorStr = "clustermap.components.map-report/t34442";
clustermap.components.map_report.t34442.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34442");
});
clustermap.components.map_report.t34442.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34442.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs34447 = cljs.core.constant$keyword$592.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs34447))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34447),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34447));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34448 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34448))
{return React.DOM.li(sablono.interpreter.attributes(attrs34448),(function (){var attrs34449 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34449))
{return React.DOM.small(sablono.interpreter.attributes(attrs34449),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34449));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34448),(function (){var attrs34450 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34450))
{return React.DOM.small(sablono.interpreter.attributes(attrs34450),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34450));
}
})());
}
})(),(function (){var attrs34451 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34451))
{return React.DOM.li(sablono.interpreter.attributes(attrs34451),(function (){var attrs34452 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34452))
{return React.DOM.small(sablono.interpreter.attributes(attrs34452),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34452));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34451),(function (){var attrs34453 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34453))
{return React.DOM.small(sablono.interpreter.attributes(attrs34453),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34453));
}
})());
}
})(),(function (){var attrs34454 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34464 = self__.site_stats;var G__34464__$1 = (((G__34464 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34464));var G__34464__$2 = (((G__34464__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34464__$1));return G__34464__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34464 = self__.site_stats;var G__34464__$1 = (((G__34464 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34464));var G__34464__$2 = (((G__34464__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34464__$1));return G__34464__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34454))
{return React.DOM.li(sablono.interpreter.attributes(attrs34454),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34454),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34459 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34465 = self__.site_stats;var G__34465__$1 = (((G__34465 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34465));var G__34465__$2 = (((G__34465__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34465__$1));return G__34465__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34465 = self__.site_stats;var G__34465__$1 = (((G__34465 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34465));var G__34465__$2 = (((G__34465__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34465__$1));return G__34465__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34459))
{return React.DOM.li(sablono.interpreter.attributes(attrs34459),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34459),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34444){var self__ = this;
var _34444__$1 = this;return self__.meta34443;
});
clustermap.components.map_report.t34442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34444,meta34443__$1){var self__ = this;
var _34444__$1 = this;return (new clustermap.components.map_report.t34442(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34441,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta34443__$1));
});
clustermap.components.map_report.__GT_t34442 = (function __GT_t34442(pc_count__$1,ic_count__$1,const_count__$1,map__34441__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34443){return (new clustermap.components.map_report.t34442(pc_count__$1,ic_count__$1,const_count__$1,map__34441__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34443));
});
}
return (new clustermap.components.map_report.t34442(pc_count,ic_count,const_count,map__34441__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__34491 = clustermap.components.map_report.type_counts(site_stats);var map__34491__$1 = ((cljs.core.seq_QMARK_(map__34491))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34491):map__34491);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34491__$1,cljs.core.constant$keyword$750);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34491__$1,cljs.core.constant$keyword$749);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34491__$1,cljs.core.constant$keyword$748);if(typeof clustermap.components.map_report.t34492 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34492 = (function (pc_count,ic_count,const_count,map__34491,path_fn,comm,site_stats,investor_company,investor_company_report,meta34493){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34491 = map__34491;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta34493 = meta34493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34492.cljs$lang$type = true;
clustermap.components.map_report.t34492.cljs$lang$ctorStr = "clustermap.components.map-report/t34492";
clustermap.components.map_report.t34492.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34492");
});
clustermap.components.map_report.t34492.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34492.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs34497 = cljs.core.constant$keyword$592.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs34497))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34497),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34497));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34498 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34498))
{return React.DOM.li(sablono.interpreter.attributes(attrs34498),(function (){var attrs34499 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34499))
{return React.DOM.small(sablono.interpreter.attributes(attrs34499),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34499));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34498),(function (){var attrs34500 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34500))
{return React.DOM.small(sablono.interpreter.attributes(attrs34500),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34500));
}
})());
}
})(),(function (){var attrs34501 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34501))
{return React.DOM.li(sablono.interpreter.attributes(attrs34501),(function (){var attrs34502 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34502))
{return React.DOM.small(sablono.interpreter.attributes(attrs34502),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34502));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34501),(function (){var attrs34503 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34503))
{return React.DOM.small(sablono.interpreter.attributes(attrs34503),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34503));
}
})());
}
})(),(function (){var attrs34504 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34514 = self__.site_stats;var G__34514__$1 = (((G__34514 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34514));var G__34514__$2 = (((G__34514__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34514__$1));return G__34514__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34514 = self__.site_stats;var G__34514__$1 = (((G__34514 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34514));var G__34514__$2 = (((G__34514__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34514__$1));return G__34514__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34504))
{return React.DOM.li(sablono.interpreter.attributes(attrs34504),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34504),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34509 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34515 = self__.site_stats;var G__34515__$1 = (((G__34515 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34515));var G__34515__$2 = (((G__34515__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34515__$1));return G__34515__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34515 = self__.site_stats;var G__34515__$1 = (((G__34515 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34515));var G__34515__$2 = (((G__34515__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34515__$1));return G__34515__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34509))
{return React.DOM.li(sablono.interpreter.attributes(attrs34509),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34509),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34494){var self__ = this;
var _34494__$1 = this;return self__.meta34493;
});
clustermap.components.map_report.t34492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34494,meta34493__$1){var self__ = this;
var _34494__$1 = this;return (new clustermap.components.map_report.t34492(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34491,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta34493__$1));
});
clustermap.components.map_report.__GT_t34492 = (function __GT_t34492(pc_count__$1,ic_count__$1,const_count__$1,map__34491__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34493){return (new clustermap.components.map_report.t34492(pc_count__$1,ic_count__$1,const_count__$1,map__34491__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34493));
});
}
return (new clustermap.components.map_report.t34492(pc_count,ic_count,const_count,map__34491__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__34545 = clustermap.components.map_report.type_counts(site_stats);var map__34545__$1 = ((cljs.core.seq_QMARK_(map__34545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34545):map__34545);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34545__$1,cljs.core.constant$keyword$750);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34545__$1,cljs.core.constant$keyword$749);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34545__$1,cljs.core.constant$keyword$748);if(typeof clustermap.components.map_report.t34546 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34546 = (function (pc_count,ic_count,const_count,map__34545,path_fn,comm,site_stats,constituency,constituency_report,meta34547){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34545 = map__34545;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta34547 = meta34547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34546.cljs$lang$type = true;
clustermap.components.map_report.t34546.cljs$lang$ctorStr = "clustermap.components.map-report/t34546";
clustermap.components.map_report.t34546.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34546");
});
clustermap.components.map_report.t34546.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34546.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs34551 = cljs.core.constant$keyword$592.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs34551))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34551),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$635.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$636.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$635.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$636.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34551),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$635.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$636.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$635.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$636.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34556 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34556))
{return React.DOM.li(sablono.interpreter.attributes(attrs34556),(function (){var attrs34557 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34557))
{return React.DOM.small(sablono.interpreter.attributes(attrs34557),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34557));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34556),(function (){var attrs34558 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34558))
{return React.DOM.small(sablono.interpreter.attributes(attrs34558),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34558));
}
})());
}
})(),(function (){var attrs34559 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34559))
{return React.DOM.li(sablono.interpreter.attributes(attrs34559),(function (){var attrs34560 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34560))
{return React.DOM.small(sablono.interpreter.attributes(attrs34560),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34560));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34559),(function (){var attrs34561 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34561))
{return React.DOM.small(sablono.interpreter.attributes(attrs34561),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34561));
}
})());
}
})(),(function (){var attrs34562 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34572 = self__.site_stats;var G__34572__$1 = (((G__34572 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34572));var G__34572__$2 = (((G__34572__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34572__$1));return G__34572__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34572 = self__.site_stats;var G__34572__$1 = (((G__34572 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34572));var G__34572__$2 = (((G__34572__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34572__$1));return G__34572__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34562))
{return React.DOM.li(sablono.interpreter.attributes(attrs34562),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34562),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34567 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34573 = self__.site_stats;var G__34573__$1 = (((G__34573 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34573));var G__34573__$2 = (((G__34573__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34573__$1));return G__34573__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34573 = self__.site_stats;var G__34573__$1 = (((G__34573 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34573));var G__34573__$2 = (((G__34573__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34573__$1));return G__34573__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-"));if(cljs.core.map_QMARK_(attrs34567))
{return React.DOM.li(sablono.interpreter.attributes(attrs34567),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34567),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34548){var self__ = this;
var _34548__$1 = this;return self__.meta34547;
});
clustermap.components.map_report.t34546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34548,meta34547__$1){var self__ = this;
var _34548__$1 = this;return (new clustermap.components.map_report.t34546(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34545,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta34547__$1));
});
clustermap.components.map_report.__GT_t34546 = (function __GT_t34546(pc_count__$1,ic_count__$1,const_count__$1,map__34545__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34547){return (new clustermap.components.map_report.t34546(pc_count__$1,ic_count__$1,const_count__$1,map__34545__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34547));
});
}
return (new clustermap.components.map_report.t34546(pc_count,ic_count,const_count,map__34545__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__34578 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34578__$1 = ((cljs.core.seq_QMARK_(map__34578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34578):map__34578);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,cljs.core.constant$keyword$630);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,cljs.core.constant$keyword$631);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$637,cljs.core.constant$keyword$582], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$637,cljs.core.constant$keyword$543], null));var site_stats = cljs.core.constant$keyword$663.cljs$core$IFn$_invoke$arity$1(data);var pred__34579 = cljs.core._EQ__EQ_;var expr__34580 = type;if(cljs.core.truth_((pred__34579.cljs$core$IFn$_invoke$arity$2 ? pred__34579.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$627,expr__34580) : pred__34579.call(null,cljs.core.constant$keyword$627,expr__34580))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__34579.cljs$core$IFn$_invoke$arity$2 ? pred__34579.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$628,expr__34580) : pred__34579.call(null,cljs.core.constant$keyword$628,expr__34580))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__34579.cljs$core$IFn$_invoke$arity$2 ? pred__34579.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34580) : pred__34579.call(null,cljs.core.constant$keyword$629,expr__34580))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,shared,cljs.core.constant$keyword$622,document.getElementById(elem_id)], null));
});
