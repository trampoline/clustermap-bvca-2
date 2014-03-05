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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$753,(function (){var G__34425 = site_stats;var G__34425__$1 = (((G__34425 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34425));return G__34425__$1;
})(),cljs.core.constant$keyword$754,(function (){var G__34426 = site_stats;var G__34426__$1 = (((G__34426 == null))?null:cljs.core.constant$keyword$682.cljs$core$IFn$_invoke$arity$1(G__34426));return G__34426__$1;
})(),cljs.core.constant$keyword$755,(function (){var G__34427 = site_stats;var G__34427__$1 = (((G__34427 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34427));return G__34427__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__34459 = clustermap.components.map_report.type_counts(site_stats);var map__34459__$1 = ((cljs.core.seq_QMARK_(map__34459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34459):map__34459);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34459__$1,cljs.core.constant$keyword$755);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34459__$1,cljs.core.constant$keyword$754);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34459__$1,cljs.core.constant$keyword$753);if(typeof clustermap.components.map_report.t34460 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34460 = (function (pc_count,ic_count,const_count,map__34459,comm,site_stats,all_portfolio_companies_summary_report,meta34461){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34459 = map__34459;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34461 = meta34461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34460.cljs$lang$type = true;
clustermap.components.map_report.t34460.cljs$lang$ctorStr = "clustermap.components.map-report/t34460";
clustermap.components.map_report.t34460.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34460");
});
clustermap.components.map_report.t34460.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34460.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34465 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34465))
{return React.DOM.li(sablono.interpreter.attributes(attrs34465),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34465),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs34470 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34470))
{return React.DOM.li(sablono.interpreter.attributes(attrs34470),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34470),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs34475 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34475))
{return React.DOM.li(sablono.interpreter.attributes(attrs34475),(function (){var attrs34476 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34476))
{return React.DOM.small(sablono.interpreter.attributes(attrs34476),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34476));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34475),(function (){var attrs34477 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34477))
{return React.DOM.small(sablono.interpreter.attributes(attrs34477),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34477));
}
})());
}
})(),(function (){var attrs34478 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34488 = self__.site_stats;var G__34488__$1 = (((G__34488 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34488));var G__34488__$2 = (((G__34488__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34488__$1));return G__34488__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34488 = self__.site_stats;var G__34488__$1 = (((G__34488 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34488));var G__34488__$2 = (((G__34488__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34488__$1));return G__34488__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34478))
{return React.DOM.li(sablono.interpreter.attributes(attrs34478),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34478),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34483 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34489 = self__.site_stats;var G__34489__$1 = (((G__34489 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34489));var G__34489__$2 = (((G__34489__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34489__$1));return G__34489__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34489 = self__.site_stats;var G__34489__$1 = (((G__34489 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34489));var G__34489__$2 = (((G__34489__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34489__$1));return G__34489__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34483))
{return React.DOM.li(sablono.interpreter.attributes(attrs34483),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34483),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34462){var self__ = this;
var _34462__$1 = this;return self__.meta34461;
});
clustermap.components.map_report.t34460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34462,meta34461__$1){var self__ = this;
var _34462__$1 = this;return (new clustermap.components.map_report.t34460(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34459,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34461__$1));
});
clustermap.components.map_report.__GT_t34460 = (function __GT_t34460(pc_count__$1,ic_count__$1,const_count__$1,map__34459__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34461){return (new clustermap.components.map_report.t34460(pc_count__$1,ic_count__$1,const_count__$1,map__34459__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34461));
});
}
return (new clustermap.components.map_report.t34460(pc_count,ic_count,const_count,map__34459__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__34515 = clustermap.components.map_report.type_counts(site_stats);var map__34515__$1 = ((cljs.core.seq_QMARK_(map__34515))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34515):map__34515);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34515__$1,cljs.core.constant$keyword$755);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34515__$1,cljs.core.constant$keyword$754);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34515__$1,cljs.core.constant$keyword$753);if(typeof clustermap.components.map_report.t34516 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34516 = (function (pc_count,ic_count,const_count,map__34515,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta34517){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34515 = map__34515;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta34517 = meta34517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34516.cljs$lang$type = true;
clustermap.components.map_report.t34516.cljs$lang$ctorStr = "clustermap.components.map-report/t34516";
clustermap.components.map_report.t34516.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34516");
});
clustermap.components.map_report.t34516.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34516.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs34521 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs34521))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34521),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34521));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34522 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34522))
{return React.DOM.li(sablono.interpreter.attributes(attrs34522),(function (){var attrs34523 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34523))
{return React.DOM.small(sablono.interpreter.attributes(attrs34523),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34523));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34522),(function (){var attrs34524 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34524))
{return React.DOM.small(sablono.interpreter.attributes(attrs34524),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34524));
}
})());
}
})(),(function (){var attrs34525 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34525))
{return React.DOM.li(sablono.interpreter.attributes(attrs34525),(function (){var attrs34526 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34526))
{return React.DOM.small(sablono.interpreter.attributes(attrs34526),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34526));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34525),(function (){var attrs34527 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34527))
{return React.DOM.small(sablono.interpreter.attributes(attrs34527),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34527));
}
})());
}
})(),(function (){var attrs34528 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34538 = self__.site_stats;var G__34538__$1 = (((G__34538 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34538));var G__34538__$2 = (((G__34538__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34538__$1));return G__34538__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34538 = self__.site_stats;var G__34538__$1 = (((G__34538 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34538));var G__34538__$2 = (((G__34538__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34538__$1));return G__34538__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34528))
{return React.DOM.li(sablono.interpreter.attributes(attrs34528),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34528),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34533 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34539 = self__.site_stats;var G__34539__$1 = (((G__34539 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34539));var G__34539__$2 = (((G__34539__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34539__$1));return G__34539__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34539 = self__.site_stats;var G__34539__$1 = (((G__34539 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34539));var G__34539__$2 = (((G__34539__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34539__$1));return G__34539__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34533))
{return React.DOM.li(sablono.interpreter.attributes(attrs34533),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34533),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34518){var self__ = this;
var _34518__$1 = this;return self__.meta34517;
});
clustermap.components.map_report.t34516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34518,meta34517__$1){var self__ = this;
var _34518__$1 = this;return (new clustermap.components.map_report.t34516(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34515,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta34517__$1));
});
clustermap.components.map_report.__GT_t34516 = (function __GT_t34516(pc_count__$1,ic_count__$1,const_count__$1,map__34515__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34517){return (new clustermap.components.map_report.t34516(pc_count__$1,ic_count__$1,const_count__$1,map__34515__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34517));
});
}
return (new clustermap.components.map_report.t34516(pc_count,ic_count,const_count,map__34515__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__34565 = clustermap.components.map_report.type_counts(site_stats);var map__34565__$1 = ((cljs.core.seq_QMARK_(map__34565))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34565):map__34565);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565__$1,cljs.core.constant$keyword$755);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565__$1,cljs.core.constant$keyword$754);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565__$1,cljs.core.constant$keyword$753);if(typeof clustermap.components.map_report.t34566 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34566 = (function (pc_count,ic_count,const_count,map__34565,path_fn,comm,site_stats,investor_company,investor_company_report,meta34567){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34565 = map__34565;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta34567 = meta34567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34566.cljs$lang$type = true;
clustermap.components.map_report.t34566.cljs$lang$ctorStr = "clustermap.components.map-report/t34566";
clustermap.components.map_report.t34566.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34566");
});
clustermap.components.map_report.t34566.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34566.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs34571 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs34571))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34571),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34571));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34572 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34572))
{return React.DOM.li(sablono.interpreter.attributes(attrs34572),(function (){var attrs34573 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs34573))
{return React.DOM.small(sablono.interpreter.attributes(attrs34573),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34573));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34572),(function (){var attrs34574 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs34574))
{return React.DOM.small(sablono.interpreter.attributes(attrs34574),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34574));
}
})());
}
})(),(function (){var attrs34575 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34575))
{return React.DOM.li(sablono.interpreter.attributes(attrs34575),(function (){var attrs34576 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34576))
{return React.DOM.small(sablono.interpreter.attributes(attrs34576),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34576));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34575),(function (){var attrs34577 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34577))
{return React.DOM.small(sablono.interpreter.attributes(attrs34577),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34577));
}
})());
}
})(),(function (){var attrs34578 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34588 = self__.site_stats;var G__34588__$1 = (((G__34588 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34588));var G__34588__$2 = (((G__34588__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34588__$1));return G__34588__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34588 = self__.site_stats;var G__34588__$1 = (((G__34588 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34588));var G__34588__$2 = (((G__34588__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34588__$1));return G__34588__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34578))
{return React.DOM.li(sablono.interpreter.attributes(attrs34578),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34578),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34583 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34589 = self__.site_stats;var G__34589__$1 = (((G__34589 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34589));var G__34589__$2 = (((G__34589__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34589__$1));return G__34589__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34589 = self__.site_stats;var G__34589__$1 = (((G__34589 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34589));var G__34589__$2 = (((G__34589__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34589__$1));return G__34589__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34583))
{return React.DOM.li(sablono.interpreter.attributes(attrs34583),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34583),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34568){var self__ = this;
var _34568__$1 = this;return self__.meta34567;
});
clustermap.components.map_report.t34566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34568,meta34567__$1){var self__ = this;
var _34568__$1 = this;return (new clustermap.components.map_report.t34566(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34565,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta34567__$1));
});
clustermap.components.map_report.__GT_t34566 = (function __GT_t34566(pc_count__$1,ic_count__$1,const_count__$1,map__34565__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34567){return (new clustermap.components.map_report.t34566(pc_count__$1,ic_count__$1,const_count__$1,map__34565__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34567));
});
}
return (new clustermap.components.map_report.t34566(pc_count,ic_count,const_count,map__34565__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__34619 = clustermap.components.map_report.type_counts(site_stats);var map__34619__$1 = ((cljs.core.seq_QMARK_(map__34619))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34619):map__34619);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34619__$1,cljs.core.constant$keyword$755);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34619__$1,cljs.core.constant$keyword$754);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34619__$1,cljs.core.constant$keyword$753);if(typeof clustermap.components.map_report.t34620 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34620 = (function (pc_count,ic_count,const_count,map__34619,path_fn,comm,site_stats,constituency,constituency_report,meta34621){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34619 = map__34619;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta34621 = meta34621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34620.cljs$lang$type = true;
clustermap.components.map_report.t34620.cljs$lang$ctorStr = "clustermap.components.map-report/t34620";
clustermap.components.map_report.t34620.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34620");
});
clustermap.components.map_report.t34620.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34620.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs34625 = cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs34625))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34625),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34625),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34630 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34630))
{return React.DOM.li(sablono.interpreter.attributes(attrs34630),(function (){var attrs34631 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs34631))
{return React.DOM.small(sablono.interpreter.attributes(attrs34631),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34631));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34630),(function (){var attrs34632 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs34632))
{return React.DOM.small(sablono.interpreter.attributes(attrs34632),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34632));
}
})());
}
})(),(function (){var attrs34633 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34633))
{return React.DOM.li(sablono.interpreter.attributes(attrs34633),(function (){var attrs34634 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34634))
{return React.DOM.small(sablono.interpreter.attributes(attrs34634),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34634));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34633),(function (){var attrs34635 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34635))
{return React.DOM.small(sablono.interpreter.attributes(attrs34635),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34635));
}
})());
}
})(),(function (){var attrs34636 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34646 = self__.site_stats;var G__34646__$1 = (((G__34646 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34646));var G__34646__$2 = (((G__34646__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34646__$1));return G__34646__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34646 = self__.site_stats;var G__34646__$1 = (((G__34646 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34646));var G__34646__$2 = (((G__34646__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34646__$1));return G__34646__$2;
})(),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34636))
{return React.DOM.li(sablono.interpreter.attributes(attrs34636),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34636),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs34641 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34647 = self__.site_stats;var G__34647__$1 = (((G__34647 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34647));var G__34647__$2 = (((G__34647__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34647__$1));return G__34647__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34647 = self__.site_stats;var G__34647__$1 = (((G__34647 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34647));var G__34647__$2 = (((G__34647__$1 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34647__$1));return G__34647__$2;
})(),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34641))
{return React.DOM.li(sablono.interpreter.attributes(attrs34641),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34641),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34622){var self__ = this;
var _34622__$1 = this;return self__.meta34621;
});
clustermap.components.map_report.t34620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34622,meta34621__$1){var self__ = this;
var _34622__$1 = this;return (new clustermap.components.map_report.t34620(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34619,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta34621__$1));
});
clustermap.components.map_report.__GT_t34620 = (function __GT_t34620(pc_count__$1,ic_count__$1,const_count__$1,map__34619__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34621){return (new clustermap.components.map_report.t34620(pc_count__$1,ic_count__$1,const_count__$1,map__34619__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34621));
});
}
return (new clustermap.components.map_report.t34620(pc_count,ic_count,const_count,map__34619__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__34652 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34652__$1 = ((cljs.core.seq_QMARK_(map__34652))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34652):map__34652);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34652__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34652__$1,cljs.core.constant$keyword$633);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,cljs.core.constant$keyword$584], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,cljs.core.constant$keyword$545], null));var site_stats = cljs.core.constant$keyword$667.cljs$core$IFn$_invoke$arity$1(data);var pred__34653 = cljs.core._EQ__EQ_;var expr__34654 = type;if(cljs.core.truth_((pred__34653.cljs$core$IFn$_invoke$arity$2 ? pred__34653.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34654) : pred__34653.call(null,cljs.core.constant$keyword$629,expr__34654))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__34653.cljs$core$IFn$_invoke$arity$2 ? pred__34653.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34654) : pred__34653.call(null,cljs.core.constant$keyword$630,expr__34654))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn);
} else
{if(cljs.core.truth_((pred__34653.cljs$core$IFn$_invoke$arity$2 ? pred__34653.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34654) : pred__34653.call(null,cljs.core.constant$keyword$631,expr__34654))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
