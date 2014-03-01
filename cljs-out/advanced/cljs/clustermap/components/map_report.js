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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$344,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$461,(function (){var G__23204 = site_stats;var G__23204__$1 = (((G__23204 == null))?null:cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(G__23204));return G__23204__$1;
})(),cljs.core.constant$keyword$462,(function (){var G__23205 = site_stats;var G__23205__$1 = (((G__23205 == null))?null:cljs.core.constant$keyword$391.cljs$core$IFn$_invoke$arity$1(G__23205));return G__23205__$1;
})(),cljs.core.constant$keyword$463,(function (){var G__23206 = site_stats;var G__23206__$1 = (((G__23206 == null))?null:cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(G__23206));return G__23206__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__23238 = clustermap.components.map_report.type_counts(site_stats);var map__23238__$1 = ((cljs.core.seq_QMARK_(map__23238))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23238):map__23238);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238__$1,cljs.core.constant$keyword$463);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238__$1,cljs.core.constant$keyword$462);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238__$1,cljs.core.constant$keyword$461);if(typeof clustermap.components.map_report.t23239 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23239 = (function (pc_count,ic_count,const_count,map__23238,comm,site_stats,all_portfolio_companies_summary_report,meta23240){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23238 = map__23238;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23240 = meta23240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23239.cljs$lang$type = true;
clustermap.components.map_report.t23239.cljs$lang$ctorStr = "clustermap.components.map-report/t23239";
clustermap.components.map_report.t23239.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t23239");
});
clustermap.components.map_report.t23239.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23239.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23244 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23244))
{return React.DOM.li(sablono.interpreter.attributes(attrs23244),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23244),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs23249 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23249))
{return React.DOM.li(sablono.interpreter.attributes(attrs23249),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23249),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs23254 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23254))
{return React.DOM.li(sablono.interpreter.attributes(attrs23254),(function (){var attrs23255 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23255))
{return React.DOM.small(sablono.interpreter.attributes(attrs23255),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23255));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23254),(function (){var attrs23256 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23256))
{return React.DOM.small(sablono.interpreter.attributes(attrs23256),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23256));
}
})());
}
})(),(function (){var attrs23257 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23267 = self__.site_stats;var G__23267__$1 = (((G__23267 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__23267));var G__23267__$2 = (((G__23267__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23267__$1));return G__23267__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23267 = self__.site_stats;var G__23267__$1 = (((G__23267 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__23267));var G__23267__$2 = (((G__23267__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23267__$1));return G__23267__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23257))
{return React.DOM.li(sablono.interpreter.attributes(attrs23257),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23257),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23262 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23268 = self__.site_stats;var G__23268__$1 = (((G__23268 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__23268));var G__23268__$2 = (((G__23268__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23268__$1));return G__23268__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23268 = self__.site_stats;var G__23268__$1 = (((G__23268 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__23268));var G__23268__$2 = (((G__23268__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23268__$1));return G__23268__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23262))
{return React.DOM.li(sablono.interpreter.attributes(attrs23262),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23262),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t23239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23241){var self__ = this;
var _23241__$1 = this;return self__.meta23240;
});
clustermap.components.map_report.t23239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23241,meta23240__$1){var self__ = this;
var _23241__$1 = this;return (new clustermap.components.map_report.t23239(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23238,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23240__$1));
});
clustermap.components.map_report.__GT_t23239 = (function __GT_t23239(pc_count__$1,ic_count__$1,const_count__$1,map__23238__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23240){return (new clustermap.components.map_report.t23239(pc_count__$1,ic_count__$1,const_count__$1,map__23238__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23240));
});
}
return (new clustermap.components.map_report.t23239(pc_count,ic_count,const_count,map__23238__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__23294 = clustermap.components.map_report.type_counts(site_stats);var map__23294__$1 = ((cljs.core.seq_QMARK_(map__23294))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23294):map__23294);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23294__$1,cljs.core.constant$keyword$463);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23294__$1,cljs.core.constant$keyword$462);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23294__$1,cljs.core.constant$keyword$461);if(typeof clustermap.components.map_report.t23295 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23295 = (function (pc_count,ic_count,const_count,map__23294,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta23296){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23294 = map__23294;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta23296 = meta23296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23295.cljs$lang$type = true;
clustermap.components.map_report.t23295.cljs$lang$ctorStr = "clustermap.components.map-report/t23295";
clustermap.components.map_report.t23295.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t23295");
});
clustermap.components.map_report.t23295.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23295.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs23300 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs23300))
{return React.DOM.h3(sablono.interpreter.attributes(attrs23300),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs23300));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs23301 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs23301))
{return React.DOM.li(sablono.interpreter.attributes(attrs23301),(function (){var attrs23302 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs23302))
{return React.DOM.small(sablono.interpreter.attributes(attrs23302),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23302));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23301),(function (){var attrs23303 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs23303))
{return React.DOM.small(sablono.interpreter.attributes(attrs23303),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23303));
}
})());
}
})(),(function (){var attrs23304 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs23304))
{return React.DOM.li(sablono.interpreter.attributes(attrs23304),(function (){var attrs23305 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23305))
{return React.DOM.small(sablono.interpreter.attributes(attrs23305),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23305));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23304),(function (){var attrs23306 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23306))
{return React.DOM.small(sablono.interpreter.attributes(attrs23306),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23306));
}
})());
}
})(),(function (){var attrs23307 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23317 = self__.site_stats;var G__23317__$1 = (((G__23317 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__23317));var G__23317__$2 = (((G__23317__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23317__$1));return G__23317__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23317 = self__.site_stats;var G__23317__$1 = (((G__23317 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__23317));var G__23317__$2 = (((G__23317__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23317__$1));return G__23317__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23307))
{return React.DOM.li(sablono.interpreter.attributes(attrs23307),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23307),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23312 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23318 = self__.site_stats;var G__23318__$1 = (((G__23318 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__23318));var G__23318__$2 = (((G__23318__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23318__$1));return G__23318__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23318 = self__.site_stats;var G__23318__$1 = (((G__23318 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__23318));var G__23318__$2 = (((G__23318__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23318__$1));return G__23318__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23312))
{return React.DOM.li(sablono.interpreter.attributes(attrs23312),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23312),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t23295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23297){var self__ = this;
var _23297__$1 = this;return self__.meta23296;
});
clustermap.components.map_report.t23295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23297,meta23296__$1){var self__ = this;
var _23297__$1 = this;return (new clustermap.components.map_report.t23295(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23294,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta23296__$1));
});
clustermap.components.map_report.__GT_t23295 = (function __GT_t23295(pc_count__$1,ic_count__$1,const_count__$1,map__23294__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23296){return (new clustermap.components.map_report.t23295(pc_count__$1,ic_count__$1,const_count__$1,map__23294__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23296));
});
}
return (new clustermap.components.map_report.t23295(pc_count,ic_count,const_count,map__23294__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__23344 = clustermap.components.map_report.type_counts(site_stats);var map__23344__$1 = ((cljs.core.seq_QMARK_(map__23344))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23344):map__23344);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23344__$1,cljs.core.constant$keyword$463);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23344__$1,cljs.core.constant$keyword$462);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23344__$1,cljs.core.constant$keyword$461);if(typeof clustermap.components.map_report.t23345 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23345 = (function (pc_count,ic_count,const_count,map__23344,path_fn,comm,site_stats,investor_company,investor_company_report,meta23346){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23344 = map__23344;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta23346 = meta23346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23345.cljs$lang$type = true;
clustermap.components.map_report.t23345.cljs$lang$ctorStr = "clustermap.components.map-report/t23345";
clustermap.components.map_report.t23345.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t23345");
});
clustermap.components.map_report.t23345.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23345.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23350 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs23350))
{return React.DOM.h3(sablono.interpreter.attributes(attrs23350),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs23350));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs23351 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs23351))
{return React.DOM.li(sablono.interpreter.attributes(attrs23351),(function (){var attrs23352 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs23352))
{return React.DOM.small(sablono.interpreter.attributes(attrs23352),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23352));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23351),(function (){var attrs23353 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs23353))
{return React.DOM.small(sablono.interpreter.attributes(attrs23353),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23353));
}
})());
}
})(),(function (){var attrs23354 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs23354))
{return React.DOM.li(sablono.interpreter.attributes(attrs23354),(function (){var attrs23355 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23355))
{return React.DOM.small(sablono.interpreter.attributes(attrs23355),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23355));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23354),(function (){var attrs23356 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23356))
{return React.DOM.small(sablono.interpreter.attributes(attrs23356),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23356));
}
})());
}
})(),(function (){var attrs23357 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23367 = self__.site_stats;var G__23367__$1 = (((G__23367 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__23367));var G__23367__$2 = (((G__23367__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23367__$1));return G__23367__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23367 = self__.site_stats;var G__23367__$1 = (((G__23367 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__23367));var G__23367__$2 = (((G__23367__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23367__$1));return G__23367__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23357))
{return React.DOM.li(sablono.interpreter.attributes(attrs23357),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23357),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23362 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23368 = self__.site_stats;var G__23368__$1 = (((G__23368 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__23368));var G__23368__$2 = (((G__23368__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23368__$1));return G__23368__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23368 = self__.site_stats;var G__23368__$1 = (((G__23368 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__23368));var G__23368__$2 = (((G__23368__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23368__$1));return G__23368__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23362))
{return React.DOM.li(sablono.interpreter.attributes(attrs23362),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23362),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t23345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23347){var self__ = this;
var _23347__$1 = this;return self__.meta23346;
});
clustermap.components.map_report.t23345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23347,meta23346__$1){var self__ = this;
var _23347__$1 = this;return (new clustermap.components.map_report.t23345(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23344,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta23346__$1));
});
clustermap.components.map_report.__GT_t23345 = (function __GT_t23345(pc_count__$1,ic_count__$1,const_count__$1,map__23344__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23346){return (new clustermap.components.map_report.t23345(pc_count__$1,ic_count__$1,const_count__$1,map__23344__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23346));
});
}
return (new clustermap.components.map_report.t23345(pc_count,ic_count,const_count,map__23344__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__23398 = clustermap.components.map_report.type_counts(site_stats);var map__23398__$1 = ((cljs.core.seq_QMARK_(map__23398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23398):map__23398);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23398__$1,cljs.core.constant$keyword$463);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23398__$1,cljs.core.constant$keyword$462);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23398__$1,cljs.core.constant$keyword$461);if(typeof clustermap.components.map_report.t23399 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23399 = (function (pc_count,ic_count,const_count,map__23398,path_fn,comm,site_stats,constituency,constituency_report,meta23400){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23398 = map__23398;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta23400 = meta23400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23399.cljs$lang$type = true;
clustermap.components.map_report.t23399.cljs$lang$ctorStr = "clustermap.components.map-report/t23399";
clustermap.components.map_report.t23399.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t23399");
});
clustermap.components.map_report.t23399.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23399.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23404 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs23404))
{return React.DOM.h3(sablono.interpreter.attributes(attrs23404),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs23404),React.DOM.br(null),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs23409 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs23409))
{return React.DOM.li(sablono.interpreter.attributes(attrs23409),(function (){var attrs23410 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs23410))
{return React.DOM.small(sablono.interpreter.attributes(attrs23410),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23410));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23409),(function (){var attrs23411 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs23411))
{return React.DOM.small(sablono.interpreter.attributes(attrs23411),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23411));
}
})());
}
})(),(function (){var attrs23412 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs23412))
{return React.DOM.li(sablono.interpreter.attributes(attrs23412),(function (){var attrs23413 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs23413))
{return React.DOM.small(sablono.interpreter.attributes(attrs23413),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23413));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23412),(function (){var attrs23414 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs23414))
{return React.DOM.small(sablono.interpreter.attributes(attrs23414),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23414));
}
})());
}
})(),(function (){var attrs23415 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23425 = self__.site_stats;var G__23425__$1 = (((G__23425 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__23425));var G__23425__$2 = (((G__23425__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23425__$1));return G__23425__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23425 = self__.site_stats;var G__23425__$1 = (((G__23425 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__23425));var G__23425__$2 = (((G__23425__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23425__$1));return G__23425__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23415))
{return React.DOM.li(sablono.interpreter.attributes(attrs23415),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23415),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs23420 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23426 = self__.site_stats;var G__23426__$1 = (((G__23426 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__23426));var G__23426__$2 = (((G__23426__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23426__$1));return G__23426__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23426 = self__.site_stats;var G__23426__$1 = (((G__23426 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__23426));var G__23426__$2 = (((G__23426__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__23426__$1));return G__23426__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-"));if(cljs.core.map_QMARK_(attrs23420))
{return React.DOM.li(sablono.interpreter.attributes(attrs23420),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23420),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t23399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23401){var self__ = this;
var _23401__$1 = this;return self__.meta23400;
});
clustermap.components.map_report.t23399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23401,meta23400__$1){var self__ = this;
var _23401__$1 = this;return (new clustermap.components.map_report.t23399(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23398,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta23400__$1));
});
clustermap.components.map_report.__GT_t23399 = (function __GT_t23399(pc_count__$1,ic_count__$1,const_count__$1,map__23398__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23400){return (new clustermap.components.map_report.t23399(pc_count__$1,ic_count__$1,const_count__$1,map__23398__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23400));
});
}
return (new clustermap.components.map_report.t23399(pc_count,ic_count,const_count,map__23398__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23431 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23431__$1 = ((cljs.core.seq_QMARK_(map__23431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23431):map__23431);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23431__$1,cljs.core.constant$keyword$341);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23431__$1,cljs.core.constant$keyword$342);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$348,cljs.core.constant$keyword$305], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$348,cljs.core.constant$keyword$266], null));var site_stats = cljs.core.constant$keyword$376.cljs$core$IFn$_invoke$arity$1(data);var pred__23432 = cljs.core._EQ__EQ_;var expr__23433 = type;if(cljs.core.truth_((pred__23432.cljs$core$IFn$_invoke$arity$2 ? pred__23432.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$338,expr__23433) : pred__23432.call(null,cljs.core.constant$keyword$338,expr__23433))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__23432.cljs$core$IFn$_invoke$arity$2 ? pred__23432.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$339,expr__23433) : pred__23432.call(null,cljs.core.constant$keyword$339,expr__23433))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__23432.cljs$core$IFn$_invoke$arity$2 ? pred__23432.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$340,expr__23433) : pred__23432.call(null,cljs.core.constant$keyword$340,expr__23433))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
