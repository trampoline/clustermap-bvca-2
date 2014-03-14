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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$751,(function (){var G__34311 = site_stats;var G__34311__$1 = (((G__34311 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34311));return G__34311__$1;
})(),cljs.core.constant$keyword$752,(function (){var G__34312 = site_stats;var G__34312__$1 = (((G__34312 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34312));return G__34312__$1;
})(),cljs.core.constant$keyword$753,(function (){var G__34313 = site_stats;var G__34313__$1 = (((G__34313 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34313));return G__34313__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__34345 = clustermap.components.map_report.type_counts(site_stats);var map__34345__$1 = ((cljs.core.seq_QMARK_(map__34345))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34345):map__34345);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34345__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34345__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34345__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34346 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34346 = (function (pc_count,ic_count,const_count,map__34345,comm,site_stats,all_portfolio_companies_summary_report,meta34347){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34345 = map__34345;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34347 = meta34347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34346.cljs$lang$type = true;
clustermap.components.map_report.t34346.cljs$lang$ctorStr = "clustermap.components.map-report/t34346";
clustermap.components.map_report.t34346.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34346");
});
clustermap.components.map_report.t34346.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34346.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34351 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34351))
{return React.DOM.li(sablono.interpreter.attributes(attrs34351),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34351),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs34356 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34356))
{return React.DOM.li(sablono.interpreter.attributes(attrs34356),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34356),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs34361 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34361))
{return React.DOM.li(sablono.interpreter.attributes(attrs34361),(function (){var attrs34362 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34362))
{return React.DOM.small(sablono.interpreter.attributes(attrs34362),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34362));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34361),(function (){var attrs34363 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34363))
{return React.DOM.small(sablono.interpreter.attributes(attrs34363),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34363));
}
})());
}
})(),(function (){var attrs34364 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34374 = self__.site_stats;var G__34374__$1 = (((G__34374 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34374));var G__34374__$2 = (((G__34374__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34374__$1));return G__34374__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34374 = self__.site_stats;var G__34374__$1 = (((G__34374 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34374));var G__34374__$2 = (((G__34374__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34374__$1));return G__34374__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34364))
{return React.DOM.li(sablono.interpreter.attributes(attrs34364),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34364),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34369 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34375 = self__.site_stats;var G__34375__$1 = (((G__34375 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34375));var G__34375__$2 = (((G__34375__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34375__$1));return G__34375__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34375 = self__.site_stats;var G__34375__$1 = (((G__34375 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34375));var G__34375__$2 = (((G__34375__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34375__$1));return G__34375__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34369))
{return React.DOM.li(sablono.interpreter.attributes(attrs34369),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34369),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34348){var self__ = this;
var _34348__$1 = this;return self__.meta34347;
});
clustermap.components.map_report.t34346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34348,meta34347__$1){var self__ = this;
var _34348__$1 = this;return (new clustermap.components.map_report.t34346(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34345,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34347__$1));
});
clustermap.components.map_report.__GT_t34346 = (function __GT_t34346(pc_count__$1,ic_count__$1,const_count__$1,map__34345__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34347){return (new clustermap.components.map_report.t34346(pc_count__$1,ic_count__$1,const_count__$1,map__34345__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34347));
});
}
return (new clustermap.components.map_report.t34346(pc_count,ic_count,const_count,map__34345__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__34401 = clustermap.components.map_report.type_counts(site_stats);var map__34401__$1 = ((cljs.core.seq_QMARK_(map__34401))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34401):map__34401);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34401__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34401__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34401__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34402 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34402 = (function (pc_count,ic_count,const_count,map__34401,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta34403){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34401 = map__34401;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta34403 = meta34403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34402.cljs$lang$type = true;
clustermap.components.map_report.t34402.cljs$lang$ctorStr = "clustermap.components.map-report/t34402";
clustermap.components.map_report.t34402.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34402");
});
clustermap.components.map_report.t34402.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34402.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs34407 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs34407))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34407),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34407));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34408 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34408))
{return React.DOM.li(sablono.interpreter.attributes(attrs34408),(function (){var attrs34409 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34409))
{return React.DOM.small(sablono.interpreter.attributes(attrs34409),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34409));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34408),(function (){var attrs34410 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34410))
{return React.DOM.small(sablono.interpreter.attributes(attrs34410),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34410));
}
})());
}
})(),(function (){var attrs34411 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34411))
{return React.DOM.li(sablono.interpreter.attributes(attrs34411),(function (){var attrs34412 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34412))
{return React.DOM.small(sablono.interpreter.attributes(attrs34412),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34412));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34411),(function (){var attrs34413 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34413))
{return React.DOM.small(sablono.interpreter.attributes(attrs34413),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34413));
}
})());
}
})(),(function (){var attrs34414 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34424 = self__.site_stats;var G__34424__$1 = (((G__34424 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34424));var G__34424__$2 = (((G__34424__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34424__$1));return G__34424__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34424 = self__.site_stats;var G__34424__$1 = (((G__34424 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34424));var G__34424__$2 = (((G__34424__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34424__$1));return G__34424__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34414))
{return React.DOM.li(sablono.interpreter.attributes(attrs34414),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34414),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34419 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34425 = self__.site_stats;var G__34425__$1 = (((G__34425 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34425));var G__34425__$2 = (((G__34425__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34425__$1));return G__34425__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34425 = self__.site_stats;var G__34425__$1 = (((G__34425 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34425));var G__34425__$2 = (((G__34425__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34425__$1));return G__34425__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34419))
{return React.DOM.li(sablono.interpreter.attributes(attrs34419),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34419),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34404){var self__ = this;
var _34404__$1 = this;return self__.meta34403;
});
clustermap.components.map_report.t34402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34404,meta34403__$1){var self__ = this;
var _34404__$1 = this;return (new clustermap.components.map_report.t34402(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34401,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta34403__$1));
});
clustermap.components.map_report.__GT_t34402 = (function __GT_t34402(pc_count__$1,ic_count__$1,const_count__$1,map__34401__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34403){return (new clustermap.components.map_report.t34402(pc_count__$1,ic_count__$1,const_count__$1,map__34401__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34403));
});
}
return (new clustermap.components.map_report.t34402(pc_count,ic_count,const_count,map__34401__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__34451 = clustermap.components.map_report.type_counts(site_stats);var map__34451__$1 = ((cljs.core.seq_QMARK_(map__34451))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34451):map__34451);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34451__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34451__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34451__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34452 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34452 = (function (pc_count,ic_count,const_count,map__34451,path_fn,comm,site_stats,investor_company,investor_company_report,meta34453){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34451 = map__34451;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta34453 = meta34453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34452.cljs$lang$type = true;
clustermap.components.map_report.t34452.cljs$lang$ctorStr = "clustermap.components.map-report/t34452";
clustermap.components.map_report.t34452.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34452");
});
clustermap.components.map_report.t34452.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34452.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs34457 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs34457))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34457),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34457));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34458 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34458))
{return React.DOM.li(sablono.interpreter.attributes(attrs34458),(function (){var attrs34459 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34459))
{return React.DOM.small(sablono.interpreter.attributes(attrs34459),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34459));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34458),(function (){var attrs34460 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34460))
{return React.DOM.small(sablono.interpreter.attributes(attrs34460),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34460));
}
})());
}
})(),(function (){var attrs34461 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34461))
{return React.DOM.li(sablono.interpreter.attributes(attrs34461),(function (){var attrs34462 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34462))
{return React.DOM.small(sablono.interpreter.attributes(attrs34462),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34462));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34461),(function (){var attrs34463 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34463))
{return React.DOM.small(sablono.interpreter.attributes(attrs34463),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34463));
}
})());
}
})(),(function (){var attrs34464 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34474 = self__.site_stats;var G__34474__$1 = (((G__34474 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34474));var G__34474__$2 = (((G__34474__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34474__$1));return G__34474__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34474 = self__.site_stats;var G__34474__$1 = (((G__34474 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34474));var G__34474__$2 = (((G__34474__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34474__$1));return G__34474__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34464))
{return React.DOM.li(sablono.interpreter.attributes(attrs34464),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34464),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34469 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34475 = self__.site_stats;var G__34475__$1 = (((G__34475 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34475));var G__34475__$2 = (((G__34475__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34475__$1));return G__34475__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34475 = self__.site_stats;var G__34475__$1 = (((G__34475 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34475));var G__34475__$2 = (((G__34475__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34475__$1));return G__34475__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34469))
{return React.DOM.li(sablono.interpreter.attributes(attrs34469),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34469),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34454){var self__ = this;
var _34454__$1 = this;return self__.meta34453;
});
clustermap.components.map_report.t34452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34454,meta34453__$1){var self__ = this;
var _34454__$1 = this;return (new clustermap.components.map_report.t34452(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34451,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta34453__$1));
});
clustermap.components.map_report.__GT_t34452 = (function __GT_t34452(pc_count__$1,ic_count__$1,const_count__$1,map__34451__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34453){return (new clustermap.components.map_report.t34452(pc_count__$1,ic_count__$1,const_count__$1,map__34451__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34453));
});
}
return (new clustermap.components.map_report.t34452(pc_count,ic_count,const_count,map__34451__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__34505 = clustermap.components.map_report.type_counts(site_stats);var map__34505__$1 = ((cljs.core.seq_QMARK_(map__34505))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34505):map__34505);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34505__$1,cljs.core.constant$keyword$753);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34505__$1,cljs.core.constant$keyword$752);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34505__$1,cljs.core.constant$keyword$751);if(typeof clustermap.components.map_report.t34506 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34506 = (function (pc_count,ic_count,const_count,map__34505,path_fn,comm,site_stats,constituency,constituency_report,meta34507){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34505 = map__34505;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta34507 = meta34507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34506.cljs$lang$type = true;
clustermap.components.map_report.t34506.cljs$lang$ctorStr = "clustermap.components.map-report/t34506";
clustermap.components.map_report.t34506.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34506");
});
clustermap.components.map_report.t34506.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34506.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs34511 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs34511))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34511),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$639.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$639.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34511),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$639.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$639.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34516 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34516))
{return React.DOM.li(sablono.interpreter.attributes(attrs34516),(function (){var attrs34517 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34517))
{return React.DOM.small(sablono.interpreter.attributes(attrs34517),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34517));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34516),(function (){var attrs34518 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34518))
{return React.DOM.small(sablono.interpreter.attributes(attrs34518),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34518));
}
})());
}
})(),(function (){var attrs34519 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34519))
{return React.DOM.li(sablono.interpreter.attributes(attrs34519),(function (){var attrs34520 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34520))
{return React.DOM.small(sablono.interpreter.attributes(attrs34520),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34520));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34519),(function (){var attrs34521 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34521))
{return React.DOM.small(sablono.interpreter.attributes(attrs34521),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34521));
}
})());
}
})(),(function (){var attrs34522 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34532 = self__.site_stats;var G__34532__$1 = (((G__34532 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34532));var G__34532__$2 = (((G__34532__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34532__$1));return G__34532__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34532 = self__.site_stats;var G__34532__$1 = (((G__34532 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34532));var G__34532__$2 = (((G__34532__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34532__$1));return G__34532__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34522))
{return React.DOM.li(sablono.interpreter.attributes(attrs34522),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34522),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34527 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34533 = self__.site_stats;var G__34533__$1 = (((G__34533 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34533));var G__34533__$2 = (((G__34533__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34533__$1));return G__34533__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34533 = self__.site_stats;var G__34533__$1 = (((G__34533 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34533));var G__34533__$2 = (((G__34533__$1 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34533__$1));return G__34533__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34527))
{return React.DOM.li(sablono.interpreter.attributes(attrs34527),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34527),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34508){var self__ = this;
var _34508__$1 = this;return self__.meta34507;
});
clustermap.components.map_report.t34506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34508,meta34507__$1){var self__ = this;
var _34508__$1 = this;return (new clustermap.components.map_report.t34506(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34505,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta34507__$1));
});
clustermap.components.map_report.__GT_t34506 = (function __GT_t34506(pc_count__$1,ic_count__$1,const_count__$1,map__34505__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34507){return (new clustermap.components.map_report.t34506(pc_count__$1,ic_count__$1,const_count__$1,map__34505__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34507));
});
}
return (new clustermap.components.map_report.t34506(pc_count,ic_count,const_count,map__34505__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__34538 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34538__$1 = ((cljs.core.seq_QMARK_(map__34538))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34538):map__34538);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34538__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34538__$1,cljs.core.constant$keyword$633);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$754);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,cljs.core.constant$keyword$584], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,cljs.core.constant$keyword$545], null));var site_stats = cljs.core.constant$keyword$666.cljs$core$IFn$_invoke$arity$1(data);var pred__34539 = cljs.core._EQ__EQ_;var expr__34540 = type;if(cljs.core.truth_((pred__34539.cljs$core$IFn$_invoke$arity$2 ? pred__34539.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34540) : pred__34539.call(null,cljs.core.constant$keyword$629,expr__34540))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__34539.cljs$core$IFn$_invoke$arity$2 ? pred__34539.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34540) : pred__34539.call(null,cljs.core.constant$keyword$630,expr__34540))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__34539.cljs$core$IFn$_invoke$arity$2 ? pred__34539.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34540) : pred__34539.call(null,cljs.core.constant$keyword$631,expr__34540))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
