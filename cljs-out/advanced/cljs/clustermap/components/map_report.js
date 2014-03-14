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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$751,(function (){var G__34341 = site_stats;var G__34341__$1 = (((G__34341 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34341));return G__34341__$1;
})(),cljs.core.constant$keyword$752,(function (){var G__34342 = site_stats;var G__34342__$1 = (((G__34342 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34342));return G__34342__$1;
})(),cljs.core.constant$keyword$753,(function (){var G__34343 = site_stats;var G__34343__$1 = (((G__34343 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34343));return G__34343__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__34375 = clustermap.components.map_report.type_counts(site_stats);var map__34375__$1 = ((cljs.core.seq_QMARK_(map__34375))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34375):map__34375);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34375__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34375__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34375__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34376 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34376 = (function (pc_count,ic_count,const_count,map__34375,comm,site_stats,all_portfolio_companies_summary_report,meta34377){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34375 = map__34375;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34377 = meta34377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34376.cljs$lang$type = true;
clustermap.components.map_report.t34376.cljs$lang$ctorStr = "clustermap.components.map-report/t34376";
clustermap.components.map_report.t34376.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34376");
});
clustermap.components.map_report.t34376.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34376.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34381 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34381))
{return React.DOM.li(sablono.interpreter.attributes(attrs34381),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34381),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs34386 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34386))
{return React.DOM.li(sablono.interpreter.attributes(attrs34386),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34386),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs34391 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34391))
{return React.DOM.li(sablono.interpreter.attributes(attrs34391),(function (){var attrs34392 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34392))
{return React.DOM.small(sablono.interpreter.attributes(attrs34392),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34392));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34391),(function (){var attrs34393 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34393))
{return React.DOM.small(sablono.interpreter.attributes(attrs34393),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34393));
}
})());
}
})(),(function (){var attrs34394 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34404 = self__.site_stats;var G__34404__$1 = (((G__34404 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34404));var G__34404__$2 = (((G__34404__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34404__$1));return G__34404__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34404 = self__.site_stats;var G__34404__$1 = (((G__34404 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34404));var G__34404__$2 = (((G__34404__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34404__$1));return G__34404__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34394))
{return React.DOM.li(sablono.interpreter.attributes(attrs34394),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34394),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34399 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34405 = self__.site_stats;var G__34405__$1 = (((G__34405 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34405));var G__34405__$2 = (((G__34405__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34405__$1));return G__34405__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34405 = self__.site_stats;var G__34405__$1 = (((G__34405 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34405));var G__34405__$2 = (((G__34405__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34405__$1));return G__34405__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34399))
{return React.DOM.li(sablono.interpreter.attributes(attrs34399),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34399),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34378){var self__ = this;
var _34378__$1 = this;return self__.meta34377;
});
clustermap.components.map_report.t34376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34378,meta34377__$1){var self__ = this;
var _34378__$1 = this;return (new clustermap.components.map_report.t34376(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34375,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34377__$1));
});
clustermap.components.map_report.__GT_t34376 = (function __GT_t34376(pc_count__$1,ic_count__$1,const_count__$1,map__34375__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34377){return (new clustermap.components.map_report.t34376(pc_count__$1,ic_count__$1,const_count__$1,map__34375__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34377));
});
}
return (new clustermap.components.map_report.t34376(pc_count,ic_count,const_count,map__34375__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__34431 = clustermap.components.map_report.type_counts(site_stats);var map__34431__$1 = ((cljs.core.seq_QMARK_(map__34431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34431):map__34431);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34431__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34431__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34431__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34432 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34432 = (function (pc_count,ic_count,const_count,map__34431,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta34433){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34431 = map__34431;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta34433 = meta34433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34432.cljs$lang$type = true;
clustermap.components.map_report.t34432.cljs$lang$ctorStr = "clustermap.components.map-report/t34432";
clustermap.components.map_report.t34432.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34432");
});
clustermap.components.map_report.t34432.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34432.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs34437 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs34437))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34437),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34437));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34438 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34438))
{return React.DOM.li(sablono.interpreter.attributes(attrs34438),(function (){var attrs34439 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34439))
{return React.DOM.small(sablono.interpreter.attributes(attrs34439),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34439));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34438),(function (){var attrs34440 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34440))
{return React.DOM.small(sablono.interpreter.attributes(attrs34440),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34440));
}
})());
}
})(),(function (){var attrs34441 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34441))
{return React.DOM.li(sablono.interpreter.attributes(attrs34441),(function (){var attrs34442 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34442))
{return React.DOM.small(sablono.interpreter.attributes(attrs34442),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34442));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34441),(function (){var attrs34443 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34443))
{return React.DOM.small(sablono.interpreter.attributes(attrs34443),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34443));
}
})());
}
})(),(function (){var attrs34444 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34454 = self__.site_stats;var G__34454__$1 = (((G__34454 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34454));var G__34454__$2 = (((G__34454__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34454__$1));return G__34454__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34454 = self__.site_stats;var G__34454__$1 = (((G__34454 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34454));var G__34454__$2 = (((G__34454__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34454__$1));return G__34454__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34444))
{return React.DOM.li(sablono.interpreter.attributes(attrs34444),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34444),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34449 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34455 = self__.site_stats;var G__34455__$1 = (((G__34455 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34455));var G__34455__$2 = (((G__34455__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34455__$1));return G__34455__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34455 = self__.site_stats;var G__34455__$1 = (((G__34455 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34455));var G__34455__$2 = (((G__34455__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34455__$1));return G__34455__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34449))
{return React.DOM.li(sablono.interpreter.attributes(attrs34449),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34449),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34434){var self__ = this;
var _34434__$1 = this;return self__.meta34433;
});
clustermap.components.map_report.t34432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34434,meta34433__$1){var self__ = this;
var _34434__$1 = this;return (new clustermap.components.map_report.t34432(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34431,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta34433__$1));
});
clustermap.components.map_report.__GT_t34432 = (function __GT_t34432(pc_count__$1,ic_count__$1,const_count__$1,map__34431__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34433){return (new clustermap.components.map_report.t34432(pc_count__$1,ic_count__$1,const_count__$1,map__34431__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34433));
});
}
return (new clustermap.components.map_report.t34432(pc_count,ic_count,const_count,map__34431__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__34481 = clustermap.components.map_report.type_counts(site_stats);var map__34481__$1 = ((cljs.core.seq_QMARK_(map__34481))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34481):map__34481);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34482 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34482 = (function (pc_count,ic_count,const_count,map__34481,path_fn,comm,site_stats,investor_company,investor_company_report,meta34483){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34481 = map__34481;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta34483 = meta34483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34482.cljs$lang$type = true;
clustermap.components.map_report.t34482.cljs$lang$ctorStr = "clustermap.components.map-report/t34482";
clustermap.components.map_report.t34482.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34482");
});
clustermap.components.map_report.t34482.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34482.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs34487 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs34487))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34487),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34487));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34488 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34488))
{return React.DOM.li(sablono.interpreter.attributes(attrs34488),(function (){var attrs34489 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34489))
{return React.DOM.small(sablono.interpreter.attributes(attrs34489),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34489));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34488),(function (){var attrs34490 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34490))
{return React.DOM.small(sablono.interpreter.attributes(attrs34490),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34490));
}
})());
}
})(),(function (){var attrs34491 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34491))
{return React.DOM.li(sablono.interpreter.attributes(attrs34491),(function (){var attrs34492 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34492))
{return React.DOM.small(sablono.interpreter.attributes(attrs34492),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34492));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34491),(function (){var attrs34493 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34493))
{return React.DOM.small(sablono.interpreter.attributes(attrs34493),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34493));
}
})());
}
})(),(function (){var attrs34494 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34504 = self__.site_stats;var G__34504__$1 = (((G__34504 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34504));var G__34504__$2 = (((G__34504__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34504__$1));return G__34504__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34504 = self__.site_stats;var G__34504__$1 = (((G__34504 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34504));var G__34504__$2 = (((G__34504__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34504__$1));return G__34504__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34494))
{return React.DOM.li(sablono.interpreter.attributes(attrs34494),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34494),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34499 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34505 = self__.site_stats;var G__34505__$1 = (((G__34505 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34505));var G__34505__$2 = (((G__34505__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34505__$1));return G__34505__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34505 = self__.site_stats;var G__34505__$1 = (((G__34505 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34505));var G__34505__$2 = (((G__34505__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34505__$1));return G__34505__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34499))
{return React.DOM.li(sablono.interpreter.attributes(attrs34499),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34499),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34484){var self__ = this;
var _34484__$1 = this;return self__.meta34483;
});
clustermap.components.map_report.t34482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34484,meta34483__$1){var self__ = this;
var _34484__$1 = this;return (new clustermap.components.map_report.t34482(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34481,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta34483__$1));
});
clustermap.components.map_report.__GT_t34482 = (function __GT_t34482(pc_count__$1,ic_count__$1,const_count__$1,map__34481__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34483){return (new clustermap.components.map_report.t34482(pc_count__$1,ic_count__$1,const_count__$1,map__34481__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34483));
});
}
return (new clustermap.components.map_report.t34482(pc_count,ic_count,const_count,map__34481__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__34535 = clustermap.components.map_report.type_counts(site_stats);var map__34535__$1 = ((cljs.core.seq_QMARK_(map__34535))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34535):map__34535);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34535__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34535__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34535__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34536 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34536 = (function (pc_count,ic_count,const_count,map__34535,path_fn,comm,site_stats,constituency,constituency_report,meta34537){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34535 = map__34535;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta34537 = meta34537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34536.cljs$lang$type = true;
clustermap.components.map_report.t34536.cljs$lang$ctorStr = "clustermap.components.map-report/t34536";
clustermap.components.map_report.t34536.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34536");
});
clustermap.components.map_report.t34536.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34536.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs34541 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs34541))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34541),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34541),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34546 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34546))
{return React.DOM.li(sablono.interpreter.attributes(attrs34546),(function (){var attrs34547 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34547))
{return React.DOM.small(sablono.interpreter.attributes(attrs34547),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34547));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34546),(function (){var attrs34548 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34548))
{return React.DOM.small(sablono.interpreter.attributes(attrs34548),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34548));
}
})());
}
})(),(function (){var attrs34549 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34549))
{return React.DOM.li(sablono.interpreter.attributes(attrs34549),(function (){var attrs34550 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34550))
{return React.DOM.small(sablono.interpreter.attributes(attrs34550),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34550));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34549),(function (){var attrs34551 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34551))
{return React.DOM.small(sablono.interpreter.attributes(attrs34551),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34551));
}
})());
}
})(),(function (){var attrs34552 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34562 = self__.site_stats;var G__34562__$1 = (((G__34562 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34562));var G__34562__$2 = (((G__34562__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34562__$1));return G__34562__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34562 = self__.site_stats;var G__34562__$1 = (((G__34562 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34562));var G__34562__$2 = (((G__34562__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34562__$1));return G__34562__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34552))
{return React.DOM.li(sablono.interpreter.attributes(attrs34552),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34552),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34557 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34563 = self__.site_stats;var G__34563__$1 = (((G__34563 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34563));var G__34563__$2 = (((G__34563__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34563__$1));return G__34563__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34563 = self__.site_stats;var G__34563__$1 = (((G__34563 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34563));var G__34563__$2 = (((G__34563__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34563__$1));return G__34563__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34557))
{return React.DOM.li(sablono.interpreter.attributes(attrs34557),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34557),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34538){var self__ = this;
var _34538__$1 = this;return self__.meta34537;
});
clustermap.components.map_report.t34536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34538,meta34537__$1){var self__ = this;
var _34538__$1 = this;return (new clustermap.components.map_report.t34536(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34535,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta34537__$1));
});
clustermap.components.map_report.__GT_t34536 = (function __GT_t34536(pc_count__$1,ic_count__$1,const_count__$1,map__34535__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34537){return (new clustermap.components.map_report.t34536(pc_count__$1,ic_count__$1,const_count__$1,map__34535__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34537));
});
}
return (new clustermap.components.map_report.t34536(pc_count,ic_count,const_count,map__34535__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__34568 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34568__$1 = ((cljs.core.seq_QMARK_(map__34568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34568):map__34568);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34568__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34568__$1,cljs.core.constant$keyword$633);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,cljs.core.constant$keyword$584], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,cljs.core.constant$keyword$545], null));var site_stats = cljs.core.constant$keyword$667.cljs$core$IFn$_invoke$arity$1(data);var pred__34569 = cljs.core._EQ__EQ_;var expr__34570 = type;if(cljs.core.truth_((pred__34569.cljs$core$IFn$_invoke$arity$2 ? pred__34569.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34570) : pred__34569.call(null,cljs.core.constant$keyword$629,expr__34570))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__34569.cljs$core$IFn$_invoke$arity$2 ? pred__34569.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34570) : pred__34569.call(null,cljs.core.constant$keyword$630,expr__34570))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__34569.cljs$core$IFn$_invoke$arity$2 ? pred__34569.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34570) : pred__34569.call(null,cljs.core.constant$keyword$631,expr__34570))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
