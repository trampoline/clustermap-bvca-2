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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$392,(function (){var G__22499 = site_stats;var G__22499__$1 = (((G__22499 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22499));return G__22499__$1;
})(),cljs.core.constant$keyword$393,(function (){var G__22500 = site_stats;var G__22500__$1 = (((G__22500 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22500));return G__22500__$1;
})(),cljs.core.constant$keyword$394,(function (){var G__22501 = site_stats;var G__22501__$1 = (((G__22501 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22501));return G__22501__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22533 = clustermap.components.map_report.type_counts(site_stats);var map__22533__$1 = ((cljs.core.seq_QMARK_(map__22533))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22533):map__22533);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22533__$1,cljs.core.constant$keyword$394);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22533__$1,cljs.core.constant$keyword$393);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22533__$1,cljs.core.constant$keyword$392);if(typeof clustermap.components.map_report.t22534 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22534 = (function (pc_count,ic_count,const_count,map__22533,comm,site_stats,all_portfolio_companies_summary_report,meta22535){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22533 = map__22533;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22535 = meta22535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22534.cljs$lang$type = true;
clustermap.components.map_report.t22534.cljs$lang$ctorStr = "clustermap.components.map-report/t22534";
clustermap.components.map_report.t22534.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22534");
});
clustermap.components.map_report.t22534.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22534.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22539 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22539))
{return React.DOM.li(sablono.interpreter.attributes(attrs22539),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22539),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22544 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22544))
{return React.DOM.li(sablono.interpreter.attributes(attrs22544),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22544),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22549 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22549))
{return React.DOM.li(sablono.interpreter.attributes(attrs22549),(function (){var attrs22550 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22550))
{return React.DOM.small(sablono.interpreter.attributes(attrs22550),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22550));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22549),(function (){var attrs22551 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22551))
{return React.DOM.small(sablono.interpreter.attributes(attrs22551),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22551));
}
})());
}
})(),(function (){var attrs22552 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22562 = self__.site_stats;var G__22562__$1 = (((G__22562 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22562));var G__22562__$2 = (((G__22562__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22562__$1));return G__22562__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22562 = self__.site_stats;var G__22562__$1 = (((G__22562 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22562));var G__22562__$2 = (((G__22562__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22562__$1));return G__22562__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22552))
{return React.DOM.li(sablono.interpreter.attributes(attrs22552),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22552),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22557 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22563 = self__.site_stats;var G__22563__$1 = (((G__22563 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22563));var G__22563__$2 = (((G__22563__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22563__$1));return G__22563__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22563 = self__.site_stats;var G__22563__$1 = (((G__22563 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22563));var G__22563__$2 = (((G__22563__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22563__$1));return G__22563__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22557))
{return React.DOM.li(sablono.interpreter.attributes(attrs22557),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22557),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22536){var self__ = this;
var _22536__$1 = this;return self__.meta22535;
});
clustermap.components.map_report.t22534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22536,meta22535__$1){var self__ = this;
var _22536__$1 = this;return (new clustermap.components.map_report.t22534(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22533,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22535__$1));
});
clustermap.components.map_report.__GT_t22534 = (function __GT_t22534(pc_count__$1,ic_count__$1,const_count__$1,map__22533__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22535){return (new clustermap.components.map_report.t22534(pc_count__$1,ic_count__$1,const_count__$1,map__22533__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22535));
});
}
return (new clustermap.components.map_report.t22534(pc_count,ic_count,const_count,map__22533__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22587 = clustermap.components.map_report.type_counts(site_stats);var map__22587__$1 = ((cljs.core.seq_QMARK_(map__22587))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22587):map__22587);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,cljs.core.constant$keyword$394);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,cljs.core.constant$keyword$393);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,cljs.core.constant$keyword$392);if(typeof clustermap.components.map_report.t22588 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22588 = (function (pc_count,ic_count,const_count,map__22587,comm,site_stats,portfolio_company,portfolio_company_report,meta22589){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22587 = map__22587;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22589 = meta22589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22588.cljs$lang$type = true;
clustermap.components.map_report.t22588.cljs$lang$ctorStr = "clustermap.components.map-report/t22588";
clustermap.components.map_report.t22588.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22588");
});
clustermap.components.map_report.t22588.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22588.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22591 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22591))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22591),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22591));
}
})()),React.DOM.ul(null,(function (){var attrs22592 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22592))
{return React.DOM.li(sablono.interpreter.attributes(attrs22592),(function (){var attrs22593 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22593))
{return React.DOM.small(sablono.interpreter.attributes(attrs22593),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22593));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22592),(function (){var attrs22594 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22594))
{return React.DOM.small(sablono.interpreter.attributes(attrs22594),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22594));
}
})());
}
})(),(function (){var attrs22595 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22595))
{return React.DOM.li(sablono.interpreter.attributes(attrs22595),(function (){var attrs22596 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22596))
{return React.DOM.small(sablono.interpreter.attributes(attrs22596),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22596));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22595),(function (){var attrs22597 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22597))
{return React.DOM.small(sablono.interpreter.attributes(attrs22597),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22597));
}
})());
}
})(),(function (){var attrs22598 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22608 = self__.site_stats;var G__22608__$1 = (((G__22608 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22608));var G__22608__$2 = (((G__22608__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22608__$1));return G__22608__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22608 = self__.site_stats;var G__22608__$1 = (((G__22608 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22608));var G__22608__$2 = (((G__22608__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22608__$1));return G__22608__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22598))
{return React.DOM.li(sablono.interpreter.attributes(attrs22598),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22598),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22603 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22609 = self__.site_stats;var G__22609__$1 = (((G__22609 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22609));var G__22609__$2 = (((G__22609__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22609__$1));return G__22609__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22609 = self__.site_stats;var G__22609__$1 = (((G__22609 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22609));var G__22609__$2 = (((G__22609__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22609__$1));return G__22609__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22603))
{return React.DOM.li(sablono.interpreter.attributes(attrs22603),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22603),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22590){var self__ = this;
var _22590__$1 = this;return self__.meta22589;
});
clustermap.components.map_report.t22588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22590,meta22589__$1){var self__ = this;
var _22590__$1 = this;return (new clustermap.components.map_report.t22588(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22587,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22589__$1));
});
clustermap.components.map_report.__GT_t22588 = (function __GT_t22588(pc_count__$1,ic_count__$1,const_count__$1,map__22587__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22589){return (new clustermap.components.map_report.t22588(pc_count__$1,ic_count__$1,const_count__$1,map__22587__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22589));
});
}
return (new clustermap.components.map_report.t22588(pc_count,ic_count,const_count,map__22587__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22633 = clustermap.components.map_report.type_counts(site_stats);var map__22633__$1 = ((cljs.core.seq_QMARK_(map__22633))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22633):map__22633);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633__$1,cljs.core.constant$keyword$394);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633__$1,cljs.core.constant$keyword$393);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633__$1,cljs.core.constant$keyword$392);if(typeof clustermap.components.map_report.t22634 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22634 = (function (pc_count,ic_count,const_count,map__22633,comm,site_stats,investor_company,investor_company_report,meta22635){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22633 = map__22633;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22635 = meta22635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22634.cljs$lang$type = true;
clustermap.components.map_report.t22634.cljs$lang$ctorStr = "clustermap.components.map-report/t22634";
clustermap.components.map_report.t22634.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22634");
});
clustermap.components.map_report.t22634.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22634.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22637 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22637))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22637),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22637));
}
})()),React.DOM.ul(null,(function (){var attrs22638 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22638))
{return React.DOM.li(sablono.interpreter.attributes(attrs22638),(function (){var attrs22639 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22639))
{return React.DOM.small(sablono.interpreter.attributes(attrs22639),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22639));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22638),(function (){var attrs22640 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22640))
{return React.DOM.small(sablono.interpreter.attributes(attrs22640),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22640));
}
})());
}
})(),(function (){var attrs22641 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22641))
{return React.DOM.li(sablono.interpreter.attributes(attrs22641),(function (){var attrs22642 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22642))
{return React.DOM.small(sablono.interpreter.attributes(attrs22642),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22642));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22641),(function (){var attrs22643 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22643))
{return React.DOM.small(sablono.interpreter.attributes(attrs22643),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22643));
}
})());
}
})(),(function (){var attrs22644 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22654 = self__.site_stats;var G__22654__$1 = (((G__22654 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22654));var G__22654__$2 = (((G__22654__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22654__$1));return G__22654__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22654 = self__.site_stats;var G__22654__$1 = (((G__22654 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22654));var G__22654__$2 = (((G__22654__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22654__$1));return G__22654__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22644))
{return React.DOM.li(sablono.interpreter.attributes(attrs22644),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22644),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22649 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22655 = self__.site_stats;var G__22655__$1 = (((G__22655 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22655));var G__22655__$2 = (((G__22655__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22655__$1));return G__22655__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22655 = self__.site_stats;var G__22655__$1 = (((G__22655 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22655));var G__22655__$2 = (((G__22655__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22655__$1));return G__22655__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22649))
{return React.DOM.li(sablono.interpreter.attributes(attrs22649),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22649),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22636){var self__ = this;
var _22636__$1 = this;return self__.meta22635;
});
clustermap.components.map_report.t22634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22636,meta22635__$1){var self__ = this;
var _22636__$1 = this;return (new clustermap.components.map_report.t22634(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22633,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22635__$1));
});
clustermap.components.map_report.__GT_t22634 = (function __GT_t22634(pc_count__$1,ic_count__$1,const_count__$1,map__22633__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22635){return (new clustermap.components.map_report.t22634(pc_count__$1,ic_count__$1,const_count__$1,map__22633__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22635));
});
}
return (new clustermap.components.map_report.t22634(pc_count,ic_count,const_count,map__22633__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22680 = clustermap.components.map_report.type_counts(site_stats);var map__22680__$1 = ((cljs.core.seq_QMARK_(map__22680))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22680):map__22680);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$394);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$393);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$392);if(typeof clustermap.components.map_report.t22681 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22681 = (function (pc_count,ic_count,const_count,map__22680,comm,site_stats,constituency,constituency_report,meta22682){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22680 = map__22680;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22682 = meta22682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22681.cljs$lang$type = true;
clustermap.components.map_report.t22681.cljs$lang$ctorStr = "clustermap.components.map-report/t22681";
clustermap.components.map_report.t22681.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22681");
});
clustermap.components.map_report.t22681.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22681.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22684 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22684))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22684),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22684));
}
})(),(function (){var attrs22685 = cljs.core.constant$keyword$395.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22685))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22685),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22685),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22686 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22686))
{return React.DOM.li(sablono.interpreter.attributes(attrs22686),(function (){var attrs22687 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22687))
{return React.DOM.small(sablono.interpreter.attributes(attrs22687),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22687));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22686),(function (){var attrs22688 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22688))
{return React.DOM.small(sablono.interpreter.attributes(attrs22688),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22688));
}
})());
}
})(),(function (){var attrs22689 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22689))
{return React.DOM.li(sablono.interpreter.attributes(attrs22689),(function (){var attrs22690 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22690))
{return React.DOM.small(sablono.interpreter.attributes(attrs22690),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22690));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22689),(function (){var attrs22691 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22691))
{return React.DOM.small(sablono.interpreter.attributes(attrs22691),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22691));
}
})());
}
})(),(function (){var attrs22692 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22702 = self__.site_stats;var G__22702__$1 = (((G__22702 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22702));var G__22702__$2 = (((G__22702__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22702__$1));return G__22702__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22702 = self__.site_stats;var G__22702__$1 = (((G__22702 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22702));var G__22702__$2 = (((G__22702__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22702__$1));return G__22702__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22692))
{return React.DOM.li(sablono.interpreter.attributes(attrs22692),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22692),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22697 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22703 = self__.site_stats;var G__22703__$1 = (((G__22703 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22703));var G__22703__$2 = (((G__22703__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22703__$1));return G__22703__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22703 = self__.site_stats;var G__22703__$1 = (((G__22703 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22703));var G__22703__$2 = (((G__22703__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22703__$1));return G__22703__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22697))
{return React.DOM.li(sablono.interpreter.attributes(attrs22697),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22697),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22683){var self__ = this;
var _22683__$1 = this;return self__.meta22682;
});
clustermap.components.map_report.t22681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22683,meta22682__$1){var self__ = this;
var _22683__$1 = this;return (new clustermap.components.map_report.t22681(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22680,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22682__$1));
});
clustermap.components.map_report.__GT_t22681 = (function __GT_t22681(pc_count__$1,ic_count__$1,const_count__$1,map__22680__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22682){return (new clustermap.components.map_report.t22681(pc_count__$1,ic_count__$1,const_count__$1,map__22680__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22682));
});
}
return (new clustermap.components.map_report.t22681(pc_count,ic_count,const_count,map__22680__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$299);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$301,cljs.core.constant$keyword$263], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$301,cljs.core.constant$keyword$228], null));var site_stats = cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(data);var pred__22707 = cljs.core._EQ__EQ_;var expr__22708 = type;if(cljs.core.truth_((pred__22707.cljs$core$IFn$_invoke$arity$2 ? pred__22707.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,expr__22708) : pred__22707.call(null,cljs.core.constant$keyword$296,expr__22708))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22707.cljs$core$IFn$_invoke$arity$2 ? pred__22707.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__22708) : pred__22707.call(null,cljs.core.constant$keyword$297,expr__22708))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22707.cljs$core$IFn$_invoke$arity$2 ? pred__22707.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$298,expr__22708) : pred__22707.call(null,cljs.core.constant$keyword$298,expr__22708))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
