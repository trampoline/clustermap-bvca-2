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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$756,(function (){var G__34177 = site_stats;var G__34177__$1 = (((G__34177 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34177));return G__34177__$1;
})(),cljs.core.constant$keyword$757,(function (){var G__34178 = site_stats;var G__34178__$1 = (((G__34178 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34178));return G__34178__$1;
})(),cljs.core.constant$keyword$758,(function (){var G__34179 = site_stats;var G__34179__$1 = (((G__34179 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__34179));return G__34179__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__34211 = clustermap.components.map_report.type_counts(site_stats);var map__34211__$1 = ((cljs.core.seq_QMARK_(map__34211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34211):map__34211);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34211__$1,cljs.core.constant$keyword$758);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34211__$1,cljs.core.constant$keyword$757);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34211__$1,cljs.core.constant$keyword$756);if(typeof clustermap.components.map_report.t34212 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34212 = (function (pc_count,ic_count,const_count,map__34211,comm,site_stats,all_portfolio_companies_summary_report,meta34213){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34211 = map__34211;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34213 = meta34213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34212.cljs$lang$type = true;
clustermap.components.map_report.t34212.cljs$lang$ctorStr = "clustermap.components.map-report/t34212";
clustermap.components.map_report.t34212.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34212");
});
clustermap.components.map_report.t34212.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34212.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34217 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34217))
{return React.DOM.li(sablono.interpreter.attributes(attrs34217),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34217),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs34222 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34222))
{return React.DOM.li(sablono.interpreter.attributes(attrs34222),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34222),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs34227 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34227))
{return React.DOM.li(sablono.interpreter.attributes(attrs34227),(function (){var attrs34228 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34228))
{return React.DOM.small(sablono.interpreter.attributes(attrs34228),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34228));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34227),(function (){var attrs34229 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34229))
{return React.DOM.small(sablono.interpreter.attributes(attrs34229),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34229));
}
})());
}
})(),(function (){var attrs34230 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34240 = self__.site_stats;var G__34240__$1 = (((G__34240 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34240));var G__34240__$2 = (((G__34240__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34240__$1));return G__34240__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34240 = self__.site_stats;var G__34240__$1 = (((G__34240 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34240));var G__34240__$2 = (((G__34240__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34240__$1));return G__34240__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34230))
{return React.DOM.li(sablono.interpreter.attributes(attrs34230),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34230),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34235 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34241 = self__.site_stats;var G__34241__$1 = (((G__34241 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34241));var G__34241__$2 = (((G__34241__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34241__$1));return G__34241__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34241 = self__.site_stats;var G__34241__$1 = (((G__34241 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34241));var G__34241__$2 = (((G__34241__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34241__$1));return G__34241__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34235))
{return React.DOM.li(sablono.interpreter.attributes(attrs34235),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34235),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34214){var self__ = this;
var _34214__$1 = this;return self__.meta34213;
});
clustermap.components.map_report.t34212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34214,meta34213__$1){var self__ = this;
var _34214__$1 = this;return (new clustermap.components.map_report.t34212(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34211,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34213__$1));
});
clustermap.components.map_report.__GT_t34212 = (function __GT_t34212(pc_count__$1,ic_count__$1,const_count__$1,map__34211__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34213){return (new clustermap.components.map_report.t34212(pc_count__$1,ic_count__$1,const_count__$1,map__34211__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34213));
});
}
return (new clustermap.components.map_report.t34212(pc_count,ic_count,const_count,map__34211__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__34267 = clustermap.components.map_report.type_counts(site_stats);var map__34267__$1 = ((cljs.core.seq_QMARK_(map__34267))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34267):map__34267);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34267__$1,cljs.core.constant$keyword$758);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34267__$1,cljs.core.constant$keyword$757);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34267__$1,cljs.core.constant$keyword$756);if(typeof clustermap.components.map_report.t34268 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34268 = (function (pc_count,ic_count,const_count,map__34267,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta34269){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34267 = map__34267;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta34269 = meta34269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34268.cljs$lang$type = true;
clustermap.components.map_report.t34268.cljs$lang$ctorStr = "clustermap.components.map-report/t34268";
clustermap.components.map_report.t34268.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34268");
});
clustermap.components.map_report.t34268.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34268.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs34273 = cljs.core.constant$keyword$598.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs34273))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34273),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34273));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34274 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34274))
{return React.DOM.li(sablono.interpreter.attributes(attrs34274),(function (){var attrs34275 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34275))
{return React.DOM.small(sablono.interpreter.attributes(attrs34275),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34275));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34274),(function (){var attrs34276 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34276))
{return React.DOM.small(sablono.interpreter.attributes(attrs34276),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34276));
}
})());
}
})(),(function (){var attrs34277 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34277))
{return React.DOM.li(sablono.interpreter.attributes(attrs34277),(function (){var attrs34278 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34278))
{return React.DOM.small(sablono.interpreter.attributes(attrs34278),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34278));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34277),(function (){var attrs34279 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34279))
{return React.DOM.small(sablono.interpreter.attributes(attrs34279),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34279));
}
})());
}
})(),(function (){var attrs34280 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34290 = self__.site_stats;var G__34290__$1 = (((G__34290 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34290));var G__34290__$2 = (((G__34290__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34290__$1));return G__34290__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34290 = self__.site_stats;var G__34290__$1 = (((G__34290 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34290));var G__34290__$2 = (((G__34290__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34290__$1));return G__34290__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34280))
{return React.DOM.li(sablono.interpreter.attributes(attrs34280),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34280),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34285 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34291 = self__.site_stats;var G__34291__$1 = (((G__34291 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34291));var G__34291__$2 = (((G__34291__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34291__$1));return G__34291__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34291 = self__.site_stats;var G__34291__$1 = (((G__34291 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34291));var G__34291__$2 = (((G__34291__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34291__$1));return G__34291__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34285))
{return React.DOM.li(sablono.interpreter.attributes(attrs34285),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34285),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34270){var self__ = this;
var _34270__$1 = this;return self__.meta34269;
});
clustermap.components.map_report.t34268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34270,meta34269__$1){var self__ = this;
var _34270__$1 = this;return (new clustermap.components.map_report.t34268(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34267,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta34269__$1));
});
clustermap.components.map_report.__GT_t34268 = (function __GT_t34268(pc_count__$1,ic_count__$1,const_count__$1,map__34267__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34269){return (new clustermap.components.map_report.t34268(pc_count__$1,ic_count__$1,const_count__$1,map__34267__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34269));
});
}
return (new clustermap.components.map_report.t34268(pc_count,ic_count,const_count,map__34267__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__34317 = clustermap.components.map_report.type_counts(site_stats);var map__34317__$1 = ((cljs.core.seq_QMARK_(map__34317))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34317):map__34317);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34317__$1,cljs.core.constant$keyword$758);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34317__$1,cljs.core.constant$keyword$757);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34317__$1,cljs.core.constant$keyword$756);if(typeof clustermap.components.map_report.t34318 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34318 = (function (pc_count,ic_count,const_count,map__34317,path_fn,comm,site_stats,investor_company,investor_company_report,meta34319){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34317 = map__34317;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta34319 = meta34319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34318.cljs$lang$type = true;
clustermap.components.map_report.t34318.cljs$lang$ctorStr = "clustermap.components.map-report/t34318";
clustermap.components.map_report.t34318.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34318");
});
clustermap.components.map_report.t34318.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34318.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs34323 = cljs.core.constant$keyword$598.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs34323))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34323),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34323));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34324 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34324))
{return React.DOM.li(sablono.interpreter.attributes(attrs34324),(function (){var attrs34325 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34325))
{return React.DOM.small(sablono.interpreter.attributes(attrs34325),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34325));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34324),(function (){var attrs34326 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34326))
{return React.DOM.small(sablono.interpreter.attributes(attrs34326),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34326));
}
})());
}
})(),(function (){var attrs34327 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34327))
{return React.DOM.li(sablono.interpreter.attributes(attrs34327),(function (){var attrs34328 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34328))
{return React.DOM.small(sablono.interpreter.attributes(attrs34328),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34328));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34327),(function (){var attrs34329 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34329))
{return React.DOM.small(sablono.interpreter.attributes(attrs34329),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34329));
}
})());
}
})(),(function (){var attrs34330 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34340 = self__.site_stats;var G__34340__$1 = (((G__34340 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34340));var G__34340__$2 = (((G__34340__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34340__$1));return G__34340__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34340 = self__.site_stats;var G__34340__$1 = (((G__34340 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34340));var G__34340__$2 = (((G__34340__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34340__$1));return G__34340__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34330))
{return React.DOM.li(sablono.interpreter.attributes(attrs34330),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34330),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34335 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34341 = self__.site_stats;var G__34341__$1 = (((G__34341 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34341));var G__34341__$2 = (((G__34341__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34341__$1));return G__34341__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34341 = self__.site_stats;var G__34341__$1 = (((G__34341 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34341));var G__34341__$2 = (((G__34341__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34341__$1));return G__34341__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34335))
{return React.DOM.li(sablono.interpreter.attributes(attrs34335),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34335),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34320){var self__ = this;
var _34320__$1 = this;return self__.meta34319;
});
clustermap.components.map_report.t34318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34320,meta34319__$1){var self__ = this;
var _34320__$1 = this;return (new clustermap.components.map_report.t34318(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34317,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta34319__$1));
});
clustermap.components.map_report.__GT_t34318 = (function __GT_t34318(pc_count__$1,ic_count__$1,const_count__$1,map__34317__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34319){return (new clustermap.components.map_report.t34318(pc_count__$1,ic_count__$1,const_count__$1,map__34317__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34319));
});
}
return (new clustermap.components.map_report.t34318(pc_count,ic_count,const_count,map__34317__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__34371 = clustermap.components.map_report.type_counts(site_stats);var map__34371__$1 = ((cljs.core.seq_QMARK_(map__34371))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34371):map__34371);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34371__$1,cljs.core.constant$keyword$758);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34371__$1,cljs.core.constant$keyword$757);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34371__$1,cljs.core.constant$keyword$756);if(typeof clustermap.components.map_report.t34372 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34372 = (function (pc_count,ic_count,const_count,map__34371,path_fn,comm,site_stats,constituency,constituency_report,meta34373){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34371 = map__34371;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta34373 = meta34373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34372.cljs$lang$type = true;
clustermap.components.map_report.t34372.cljs$lang$ctorStr = "clustermap.components.map-report/t34372";
clustermap.components.map_report.t34372.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34372");
});
clustermap.components.map_report.t34372.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34372.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs34377 = cljs.core.constant$keyword$598.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs34377))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34377),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$642.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$642.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34377),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$642.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$642.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34382 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34382))
{return React.DOM.li(sablono.interpreter.attributes(attrs34382),(function (){var attrs34383 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34383))
{return React.DOM.small(sablono.interpreter.attributes(attrs34383),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34383));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34382),(function (){var attrs34384 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34384))
{return React.DOM.small(sablono.interpreter.attributes(attrs34384),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34384));
}
})());
}
})(),(function (){var attrs34385 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34385))
{return React.DOM.li(sablono.interpreter.attributes(attrs34385),(function (){var attrs34386 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34386))
{return React.DOM.small(sablono.interpreter.attributes(attrs34386),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34386));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34385),(function (){var attrs34387 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34387))
{return React.DOM.small(sablono.interpreter.attributes(attrs34387),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34387));
}
})());
}
})(),(function (){var attrs34388 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34398 = self__.site_stats;var G__34398__$1 = (((G__34398 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34398));var G__34398__$2 = (((G__34398__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34398__$1));return G__34398__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34398 = self__.site_stats;var G__34398__$1 = (((G__34398 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34398));var G__34398__$2 = (((G__34398__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34398__$1));return G__34398__$2;
})(),cljs.core.constant$keyword$629,2,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34388))
{return React.DOM.li(sablono.interpreter.attributes(attrs34388),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34388),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34393 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34399 = self__.site_stats;var G__34399__$1 = (((G__34399 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34399));var G__34399__$2 = (((G__34399__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34399__$1));return G__34399__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34399 = self__.site_stats;var G__34399__$1 = (((G__34399 == null))?null:cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(G__34399));var G__34399__$2 = (((G__34399__$1 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34399__$1));return G__34399__$2;
})(),cljs.core.constant$keyword$631,0,cljs.core.constant$keyword$545,"-"));if(cljs.core.map_QMARK_(attrs34393))
{return React.DOM.li(sablono.interpreter.attributes(attrs34393),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34393),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34374){var self__ = this;
var _34374__$1 = this;return self__.meta34373;
});
clustermap.components.map_report.t34372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34374,meta34373__$1){var self__ = this;
var _34374__$1 = this;return (new clustermap.components.map_report.t34372(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34371,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta34373__$1));
});
clustermap.components.map_report.__GT_t34372 = (function __GT_t34372(pc_count__$1,ic_count__$1,const_count__$1,map__34371__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34373){return (new clustermap.components.map_report.t34372(pc_count__$1,ic_count__$1,const_count__$1,map__34371__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34373));
});
}
return (new clustermap.components.map_report.t34372(pc_count,ic_count,const_count,map__34371__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__34404 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34404__$1 = ((cljs.core.seq_QMARK_(map__34404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34404):map__34404);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34404__$1,cljs.core.constant$keyword$636);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34404__$1,cljs.core.constant$keyword$637);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$759);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$644,cljs.core.constant$keyword$588], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$644,cljs.core.constant$keyword$549], null));var site_stats = cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(data);var pred__34405 = cljs.core._EQ__EQ_;var expr__34406 = type;if(cljs.core.truth_((pred__34405.cljs$core$IFn$_invoke$arity$2 ? pred__34405.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$633,expr__34406) : pred__34405.call(null,cljs.core.constant$keyword$633,expr__34406))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__34405.cljs$core$IFn$_invoke$arity$2 ? pred__34405.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$634,expr__34406) : pred__34405.call(null,cljs.core.constant$keyword$634,expr__34406))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__34405.cljs$core$IFn$_invoke$arity$2 ? pred__34405.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$635,expr__34406) : pred__34405.call(null,cljs.core.constant$keyword$635,expr__34406))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$623,shared,cljs.core.constant$keyword$628,document.getElementById(elem_id)], null));
});
