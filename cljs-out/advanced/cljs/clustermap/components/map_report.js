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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$301,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$391,(function (){var G__22538 = site_stats;var G__22538__$1 = (((G__22538 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22538));return G__22538__$1;
})(),cljs.core.constant$keyword$392,(function (){var G__22539 = site_stats;var G__22539__$1 = (((G__22539 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22539));return G__22539__$1;
})(),cljs.core.constant$keyword$393,(function (){var G__22540 = site_stats;var G__22540__$1 = (((G__22540 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22540));return G__22540__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__22572 = clustermap.components.map_report.type_counts(site_stats);var map__22572__$1 = ((cljs.core.seq_QMARK_(map__22572))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22572):map__22572);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22572__$1,cljs.core.constant$keyword$393);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22572__$1,cljs.core.constant$keyword$392);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22572__$1,cljs.core.constant$keyword$391);if(typeof clustermap.components.map_report.t22573 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22573 = (function (pc_count,ic_count,const_count,map__22572,comm,site_stats,all_portfolio_companies_summary_report,meta22574){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22572 = map__22572;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta22574 = meta22574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22573.cljs$lang$type = true;
clustermap.components.map_report.t22573.cljs$lang$ctorStr = "clustermap.components.map-report/t22573";
clustermap.components.map_report.t22573.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22573");
});
clustermap.components.map_report.t22573.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22573.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs22578 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22578))
{return React.DOM.li(sablono.interpreter.attributes(attrs22578),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22578),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs22583 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22583))
{return React.DOM.li(sablono.interpreter.attributes(attrs22583),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22583),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs22588 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22588))
{return React.DOM.li(sablono.interpreter.attributes(attrs22588),(function (){var attrs22589 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22589))
{return React.DOM.small(sablono.interpreter.attributes(attrs22589),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22589));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22588),(function (){var attrs22590 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22590))
{return React.DOM.small(sablono.interpreter.attributes(attrs22590),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22590));
}
})());
}
})(),(function (){var attrs22591 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22601 = self__.site_stats;var G__22601__$1 = (((G__22601 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22601));var G__22601__$2 = (((G__22601__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22601__$1));return G__22601__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22601 = self__.site_stats;var G__22601__$1 = (((G__22601 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22601));var G__22601__$2 = (((G__22601__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22601__$1));return G__22601__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22591))
{return React.DOM.li(sablono.interpreter.attributes(attrs22591),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22591),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22596 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22602 = self__.site_stats;var G__22602__$1 = (((G__22602 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22602));var G__22602__$2 = (((G__22602__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22602__$1));return G__22602__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22602 = self__.site_stats;var G__22602__$1 = (((G__22602 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22602));var G__22602__$2 = (((G__22602__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22602__$1));return G__22602__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22596))
{return React.DOM.li(sablono.interpreter.attributes(attrs22596),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22596),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22575){var self__ = this;
var _22575__$1 = this;return self__.meta22574;
});
clustermap.components.map_report.t22573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22575,meta22574__$1){var self__ = this;
var _22575__$1 = this;return (new clustermap.components.map_report.t22573(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22572,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta22574__$1));
});
clustermap.components.map_report.__GT_t22573 = (function __GT_t22573(pc_count__$1,ic_count__$1,const_count__$1,map__22572__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22574){return (new clustermap.components.map_report.t22573(pc_count__$1,ic_count__$1,const_count__$1,map__22572__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta22574));
});
}
return (new clustermap.components.map_report.t22573(pc_count,ic_count,const_count,map__22572__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__22628 = clustermap.components.map_report.type_counts(site_stats);var map__22628__$1 = ((cljs.core.seq_QMARK_(map__22628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22628):map__22628);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22628__$1,cljs.core.constant$keyword$393);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22628__$1,cljs.core.constant$keyword$392);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22628__$1,cljs.core.constant$keyword$391);if(typeof clustermap.components.map_report.t22629 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22629 = (function (pc_count,ic_count,const_count,map__22628,comm,site_stats,portfolio_company,portfolio_company_report,meta22630){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22628 = map__22628;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta22630 = meta22630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22629.cljs$lang$type = true;
clustermap.components.map_report.t22629.cljs$lang$ctorStr = "clustermap.components.map-report/t22629";
clustermap.components.map_report.t22629.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22629");
});
clustermap.components.map_report.t22629.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22629.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Portfolio Company"),(function (){var attrs22634 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs22634))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22634),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22634));
}
})()),React.DOM.ul(null,(function (){var attrs22635 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22635))
{return React.DOM.li(sablono.interpreter.attributes(attrs22635),(function (){var attrs22636 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22636))
{return React.DOM.small(sablono.interpreter.attributes(attrs22636),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22636));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22635),(function (){var attrs22637 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22637))
{return React.DOM.small(sablono.interpreter.attributes(attrs22637),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22637));
}
})());
}
})(),(function (){var attrs22638 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22638))
{return React.DOM.li(sablono.interpreter.attributes(attrs22638),(function (){var attrs22639 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22639))
{return React.DOM.small(sablono.interpreter.attributes(attrs22639),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22639));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22638),(function (){var attrs22640 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22640))
{return React.DOM.small(sablono.interpreter.attributes(attrs22640),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22640));
}
})());
}
})(),(function (){var attrs22641 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22651 = self__.site_stats;var G__22651__$1 = (((G__22651 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22651));var G__22651__$2 = (((G__22651__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22651__$1));return G__22651__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22651 = self__.site_stats;var G__22651__$1 = (((G__22651 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22651));var G__22651__$2 = (((G__22651__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22651__$1));return G__22651__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22641))
{return React.DOM.li(sablono.interpreter.attributes(attrs22641),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22641),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22646 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22652 = self__.site_stats;var G__22652__$1 = (((G__22652 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22652));var G__22652__$2 = (((G__22652__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22652__$1));return G__22652__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22652 = self__.site_stats;var G__22652__$1 = (((G__22652 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22652));var G__22652__$2 = (((G__22652__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22652__$1));return G__22652__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22646))
{return React.DOM.li(sablono.interpreter.attributes(attrs22646),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22646),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22631){var self__ = this;
var _22631__$1 = this;return self__.meta22630;
});
clustermap.components.map_report.t22629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22631,meta22630__$1){var self__ = this;
var _22631__$1 = this;return (new clustermap.components.map_report.t22629(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22628,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta22630__$1));
});
clustermap.components.map_report.__GT_t22629 = (function __GT_t22629(pc_count__$1,ic_count__$1,const_count__$1,map__22628__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22630){return (new clustermap.components.map_report.t22629(pc_count__$1,ic_count__$1,const_count__$1,map__22628__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta22630));
});
}
return (new clustermap.components.map_report.t22629(pc_count,ic_count,const_count,map__22628__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__22678 = clustermap.components.map_report.type_counts(site_stats);var map__22678__$1 = ((cljs.core.seq_QMARK_(map__22678))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22678):map__22678);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22678__$1,cljs.core.constant$keyword$393);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22678__$1,cljs.core.constant$keyword$392);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22678__$1,cljs.core.constant$keyword$391);if(typeof clustermap.components.map_report.t22679 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22679 = (function (pc_count,ic_count,const_count,map__22678,comm,site_stats,investor_company,investor_company_report,meta22680){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22678 = map__22678;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22680 = meta22680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22679.cljs$lang$type = true;
clustermap.components.map_report.t22679.cljs$lang$ctorStr = "clustermap.components.map-report/t22679";
clustermap.components.map_report.t22679.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22679");
});
clustermap.components.map_report.t22679.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22679.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs22684 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22684))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22684),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22684));
}
})()),React.DOM.ul(null,(function (){var attrs22685 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22685))
{return React.DOM.li(sablono.interpreter.attributes(attrs22685),(function (){var attrs22686 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22686))
{return React.DOM.small(sablono.interpreter.attributes(attrs22686),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22686));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22685),(function (){var attrs22687 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22687))
{return React.DOM.small(sablono.interpreter.attributes(attrs22687),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22687));
}
})());
}
})(),(function (){var attrs22688 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22688))
{return React.DOM.li(sablono.interpreter.attributes(attrs22688),(function (){var attrs22689 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22689))
{return React.DOM.small(sablono.interpreter.attributes(attrs22689),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22689));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22688),(function (){var attrs22690 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22690))
{return React.DOM.small(sablono.interpreter.attributes(attrs22690),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22690));
}
})());
}
})(),(function (){var attrs22691 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22701 = self__.site_stats;var G__22701__$1 = (((G__22701 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22701));var G__22701__$2 = (((G__22701__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22701__$1));return G__22701__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22701 = self__.site_stats;var G__22701__$1 = (((G__22701 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22701));var G__22701__$2 = (((G__22701__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22701__$1));return G__22701__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22691))
{return React.DOM.li(sablono.interpreter.attributes(attrs22691),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22691),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22696 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22702 = self__.site_stats;var G__22702__$1 = (((G__22702 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22702));var G__22702__$2 = (((G__22702__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22702__$1));return G__22702__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22702 = self__.site_stats;var G__22702__$1 = (((G__22702 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22702));var G__22702__$2 = (((G__22702__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22702__$1));return G__22702__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22696))
{return React.DOM.li(sablono.interpreter.attributes(attrs22696),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22696),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22681){var self__ = this;
var _22681__$1 = this;return self__.meta22680;
});
clustermap.components.map_report.t22679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22681,meta22680__$1){var self__ = this;
var _22681__$1 = this;return (new clustermap.components.map_report.t22679(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22678,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta22680__$1));
});
clustermap.components.map_report.__GT_t22679 = (function __GT_t22679(pc_count__$1,ic_count__$1,const_count__$1,map__22678__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22680){return (new clustermap.components.map_report.t22679(pc_count__$1,ic_count__$1,const_count__$1,map__22678__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta22680));
});
}
return (new clustermap.components.map_report.t22679(pc_count,ic_count,const_count,map__22678__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__22728 = clustermap.components.map_report.type_counts(site_stats);var map__22728__$1 = ((cljs.core.seq_QMARK_(map__22728))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22728):map__22728);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22728__$1,cljs.core.constant$keyword$393);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22728__$1,cljs.core.constant$keyword$392);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22728__$1,cljs.core.constant$keyword$391);if(typeof clustermap.components.map_report.t22729 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22729 = (function (pc_count,ic_count,const_count,map__22728,comm,site_stats,constituency,constituency_report,meta22730){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__22728 = map__22728;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22730 = meta22730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22729.cljs$lang$type = true;
clustermap.components.map_report.t22729.cljs$lang$ctorStr = "clustermap.components.map-report/t22729";
clustermap.components.map_report.t22729.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22729");
});
clustermap.components.map_report.t22729.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22729.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs22734 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22734))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22734),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$395.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22734),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$395.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22735 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22735))
{return React.DOM.li(sablono.interpreter.attributes(attrs22735),(function (){var attrs22736 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22736))
{return React.DOM.small(sablono.interpreter.attributes(attrs22736),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22736));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22735),(function (){var attrs22737 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22737))
{return React.DOM.small(sablono.interpreter.attributes(attrs22737),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22737));
}
})());
}
})(),(function (){var attrs22738 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22738))
{return React.DOM.li(sablono.interpreter.attributes(attrs22738),(function (){var attrs22739 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22739))
{return React.DOM.small(sablono.interpreter.attributes(attrs22739),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22739));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22738),(function (){var attrs22740 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22740))
{return React.DOM.small(sablono.interpreter.attributes(attrs22740),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22740));
}
})());
}
})(),(function (){var attrs22741 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22751 = self__.site_stats;var G__22751__$1 = (((G__22751 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22751));var G__22751__$2 = (((G__22751__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22751__$1));return G__22751__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22751 = self__.site_stats;var G__22751__$1 = (((G__22751 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22751));var G__22751__$2 = (((G__22751__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22751__$1));return G__22751__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22741))
{return React.DOM.li(sablono.interpreter.attributes(attrs22741),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22741),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22746 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22752 = self__.site_stats;var G__22752__$1 = (((G__22752 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22752));var G__22752__$2 = (((G__22752__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22752__$1));return G__22752__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22752 = self__.site_stats;var G__22752__$1 = (((G__22752 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22752));var G__22752__$2 = (((G__22752__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22752__$1));return G__22752__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22746))
{return React.DOM.li(sablono.interpreter.attributes(attrs22746),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22746),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22731){var self__ = this;
var _22731__$1 = this;return self__.meta22730;
});
clustermap.components.map_report.t22729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22731,meta22730__$1){var self__ = this;
var _22731__$1 = this;return (new clustermap.components.map_report.t22729(self__.pc_count,self__.ic_count,self__.const_count,self__.map__22728,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta22730__$1));
});
clustermap.components.map_report.__GT_t22729 = (function __GT_t22729(pc_count__$1,ic_count__$1,const_count__$1,map__22728__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22730){return (new clustermap.components.map_report.t22729(pc_count__$1,ic_count__$1,const_count__$1,map__22728__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta22730));
});
}
return (new clustermap.components.map_report.t22729(pc_count,ic_count,const_count,map__22728__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$299);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,cljs.core.constant$keyword$263], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,cljs.core.constant$keyword$228], null));var site_stats = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(data);var pred__22756 = cljs.core._EQ__EQ_;var expr__22757 = type;if(cljs.core.truth_((pred__22756.cljs$core$IFn$_invoke$arity$2 ? pred__22756.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,expr__22757) : pred__22756.call(null,cljs.core.constant$keyword$296,expr__22757))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22756.cljs$core$IFn$_invoke$arity$2 ? pred__22756.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__22757) : pred__22756.call(null,cljs.core.constant$keyword$297,expr__22757))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm);
} else
{if(cljs.core.truth_((pred__22756.cljs$core$IFn$_invoke$arity$2 ? pred__22756.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$298,expr__22757) : pred__22756.call(null,cljs.core.constant$keyword$298,expr__22757))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
