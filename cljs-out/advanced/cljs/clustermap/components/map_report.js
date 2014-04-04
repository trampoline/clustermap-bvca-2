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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$754,(function (){var G__34153 = site_stats;var G__34153__$1 = (((G__34153 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34153));return G__34153__$1;
})(),cljs.core.constant$keyword$755,(function (){var G__34154 = site_stats;var G__34154__$1 = (((G__34154 == null))?null:cljs.core.constant$keyword$683.cljs$core$IFn$_invoke$arity$1(G__34154));return G__34154__$1;
})(),cljs.core.constant$keyword$756,(function (){var G__34155 = site_stats;var G__34155__$1 = (((G__34155 == null))?null:cljs.core.constant$keyword$685.cljs$core$IFn$_invoke$arity$1(G__34155));return G__34155__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__34187 = clustermap.components.map_report.type_counts(site_stats);var map__34187__$1 = ((cljs.core.seq_QMARK_(map__34187))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34187):map__34187);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34187__$1,cljs.core.constant$keyword$756);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34187__$1,cljs.core.constant$keyword$755);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34187__$1,cljs.core.constant$keyword$754);if(typeof clustermap.components.map_report.t34188 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34188 = (function (pc_count,ic_count,const_count,map__34187,comm,site_stats,all_portfolio_companies_summary_report,meta34189){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34187 = map__34187;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34189 = meta34189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34188.cljs$lang$type = true;
clustermap.components.map_report.t34188.cljs$lang$ctorStr = "clustermap.components.map-report/t34188";
clustermap.components.map_report.t34188.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34188");
});
clustermap.components.map_report.t34188.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34188.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34193 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$543,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34193))
{return React.DOM.li(sablono.interpreter.attributes(attrs34193),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34193),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs34198 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$543,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34198))
{return React.DOM.li(sablono.interpreter.attributes(attrs34198),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34198),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs34203 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$543,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34203))
{return React.DOM.li(sablono.interpreter.attributes(attrs34203),(function (){var attrs34204 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34204))
{return React.DOM.small(sablono.interpreter.attributes(attrs34204),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34204));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34203),(function (){var attrs34205 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34205))
{return React.DOM.small(sablono.interpreter.attributes(attrs34205),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34205));
}
})());
}
})(),(function (){var attrs34206 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34216 = self__.site_stats;var G__34216__$1 = (((G__34216 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34216));var G__34216__$2 = (((G__34216__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34216__$1));return G__34216__$2;
})(),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34216 = self__.site_stats;var G__34216__$1 = (((G__34216 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34216));var G__34216__$2 = (((G__34216__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34216__$1));return G__34216__$2;
})(),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34206))
{return React.DOM.li(sablono.interpreter.attributes(attrs34206),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34206),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34211 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34217 = self__.site_stats;var G__34217__$1 = (((G__34217 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34217));var G__34217__$2 = (((G__34217__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34217__$1));return G__34217__$2;
})(),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34217 = self__.site_stats;var G__34217__$1 = (((G__34217 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34217));var G__34217__$2 = (((G__34217__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34217__$1));return G__34217__$2;
})(),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34211))
{return React.DOM.li(sablono.interpreter.attributes(attrs34211),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34211),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34190){var self__ = this;
var _34190__$1 = this;return self__.meta34189;
});
clustermap.components.map_report.t34188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34190,meta34189__$1){var self__ = this;
var _34190__$1 = this;return (new clustermap.components.map_report.t34188(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34187,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34189__$1));
});
clustermap.components.map_report.__GT_t34188 = (function __GT_t34188(pc_count__$1,ic_count__$1,const_count__$1,map__34187__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34189){return (new clustermap.components.map_report.t34188(pc_count__$1,ic_count__$1,const_count__$1,map__34187__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34189));
});
}
return (new clustermap.components.map_report.t34188(pc_count,ic_count,const_count,map__34187__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__34243 = clustermap.components.map_report.type_counts(site_stats);var map__34243__$1 = ((cljs.core.seq_QMARK_(map__34243))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34243):map__34243);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,cljs.core.constant$keyword$756);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,cljs.core.constant$keyword$755);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34243__$1,cljs.core.constant$keyword$754);if(typeof clustermap.components.map_report.t34244 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34244 = (function (pc_count,ic_count,const_count,map__34243,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta34245){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34243 = map__34243;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta34245 = meta34245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34244.cljs$lang$type = true;
clustermap.components.map_report.t34244.cljs$lang$ctorStr = "clustermap.components.map-report/t34244";
clustermap.components.map_report.t34244.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34244");
});
clustermap.components.map_report.t34244.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34244.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs34249 = cljs.core.constant$keyword$596.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs34249))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34249),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34249));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34250 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34250))
{return React.DOM.li(sablono.interpreter.attributes(attrs34250),(function (){var attrs34251 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34251))
{return React.DOM.small(sablono.interpreter.attributes(attrs34251),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34251));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34250),(function (){var attrs34252 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34252))
{return React.DOM.small(sablono.interpreter.attributes(attrs34252),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34252));
}
})());
}
})(),(function (){var attrs34253 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34253))
{return React.DOM.li(sablono.interpreter.attributes(attrs34253),(function (){var attrs34254 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34254))
{return React.DOM.small(sablono.interpreter.attributes(attrs34254),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34254));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34253),(function (){var attrs34255 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34255))
{return React.DOM.small(sablono.interpreter.attributes(attrs34255),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34255));
}
})());
}
})(),(function (){var attrs34256 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34266 = self__.site_stats;var G__34266__$1 = (((G__34266 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34266));var G__34266__$2 = (((G__34266__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34266__$1));return G__34266__$2;
})(),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34266 = self__.site_stats;var G__34266__$1 = (((G__34266 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34266));var G__34266__$2 = (((G__34266__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34266__$1));return G__34266__$2;
})(),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34256))
{return React.DOM.li(sablono.interpreter.attributes(attrs34256),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34256),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34261 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34267 = self__.site_stats;var G__34267__$1 = (((G__34267 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34267));var G__34267__$2 = (((G__34267__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34267__$1));return G__34267__$2;
})(),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34267 = self__.site_stats;var G__34267__$1 = (((G__34267 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34267));var G__34267__$2 = (((G__34267__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34267__$1));return G__34267__$2;
})(),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34261))
{return React.DOM.li(sablono.interpreter.attributes(attrs34261),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34261),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34246){var self__ = this;
var _34246__$1 = this;return self__.meta34245;
});
clustermap.components.map_report.t34244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34246,meta34245__$1){var self__ = this;
var _34246__$1 = this;return (new clustermap.components.map_report.t34244(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34243,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta34245__$1));
});
clustermap.components.map_report.__GT_t34244 = (function __GT_t34244(pc_count__$1,ic_count__$1,const_count__$1,map__34243__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34245){return (new clustermap.components.map_report.t34244(pc_count__$1,ic_count__$1,const_count__$1,map__34243__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34245));
});
}
return (new clustermap.components.map_report.t34244(pc_count,ic_count,const_count,map__34243__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__34293 = clustermap.components.map_report.type_counts(site_stats);var map__34293__$1 = ((cljs.core.seq_QMARK_(map__34293))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34293):map__34293);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34293__$1,cljs.core.constant$keyword$756);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34293__$1,cljs.core.constant$keyword$755);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34293__$1,cljs.core.constant$keyword$754);if(typeof clustermap.components.map_report.t34294 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34294 = (function (pc_count,ic_count,const_count,map__34293,path_fn,comm,site_stats,investor_company,investor_company_report,meta34295){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34293 = map__34293;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta34295 = meta34295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34294.cljs$lang$type = true;
clustermap.components.map_report.t34294.cljs$lang$ctorStr = "clustermap.components.map-report/t34294";
clustermap.components.map_report.t34294.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34294");
});
clustermap.components.map_report.t34294.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34294.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs34299 = cljs.core.constant$keyword$596.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs34299))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34299),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34299));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34300 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34300))
{return React.DOM.li(sablono.interpreter.attributes(attrs34300),(function (){var attrs34301 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34301))
{return React.DOM.small(sablono.interpreter.attributes(attrs34301),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34301));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34300),(function (){var attrs34302 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34302))
{return React.DOM.small(sablono.interpreter.attributes(attrs34302),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34302));
}
})());
}
})(),(function (){var attrs34303 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs34303))
{return React.DOM.li(sablono.interpreter.attributes(attrs34303),(function (){var attrs34304 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34304))
{return React.DOM.small(sablono.interpreter.attributes(attrs34304),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34304));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34303),(function (){var attrs34305 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs34305))
{return React.DOM.small(sablono.interpreter.attributes(attrs34305),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34305));
}
})());
}
})(),(function (){var attrs34306 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34316 = self__.site_stats;var G__34316__$1 = (((G__34316 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34316));var G__34316__$2 = (((G__34316__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34316__$1));return G__34316__$2;
})(),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34316 = self__.site_stats;var G__34316__$1 = (((G__34316 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34316));var G__34316__$2 = (((G__34316__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34316__$1));return G__34316__$2;
})(),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34306))
{return React.DOM.li(sablono.interpreter.attributes(attrs34306),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34306),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34311 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34317 = self__.site_stats;var G__34317__$1 = (((G__34317 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34317));var G__34317__$2 = (((G__34317__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34317__$1));return G__34317__$2;
})(),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34317 = self__.site_stats;var G__34317__$1 = (((G__34317 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34317));var G__34317__$2 = (((G__34317__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34317__$1));return G__34317__$2;
})(),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34311))
{return React.DOM.li(sablono.interpreter.attributes(attrs34311),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34311),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34296){var self__ = this;
var _34296__$1 = this;return self__.meta34295;
});
clustermap.components.map_report.t34294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34296,meta34295__$1){var self__ = this;
var _34296__$1 = this;return (new clustermap.components.map_report.t34294(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34293,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta34295__$1));
});
clustermap.components.map_report.__GT_t34294 = (function __GT_t34294(pc_count__$1,ic_count__$1,const_count__$1,map__34293__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34295){return (new clustermap.components.map_report.t34294(pc_count__$1,ic_count__$1,const_count__$1,map__34293__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta34295));
});
}
return (new clustermap.components.map_report.t34294(pc_count,ic_count,const_count,map__34293__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__34347 = clustermap.components.map_report.type_counts(site_stats);var map__34347__$1 = ((cljs.core.seq_QMARK_(map__34347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34347):map__34347);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,cljs.core.constant$keyword$756);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,cljs.core.constant$keyword$755);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,cljs.core.constant$keyword$754);if(typeof clustermap.components.map_report.t34348 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34348 = (function (pc_count,ic_count,const_count,map__34347,path_fn,comm,site_stats,constituency,constituency_report,meta34349){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34347 = map__34347;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta34349 = meta34349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34348.cljs$lang$type = true;
clustermap.components.map_report.t34348.cljs$lang$ctorStr = "clustermap.components.map-report/t34348";
clustermap.components.map_report.t34348.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t34348");
});
clustermap.components.map_report.t34348.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34348.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs34353 = cljs.core.constant$keyword$596.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs34353))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34353),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$640.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$641.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$640.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$641.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34353),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$640.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$641.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$640.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$641.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34358 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs34358))
{return React.DOM.li(sablono.interpreter.attributes(attrs34358),(function (){var attrs34359 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34359))
{return React.DOM.small(sablono.interpreter.attributes(attrs34359),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34359));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34358),(function (){var attrs34360 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs34360))
{return React.DOM.small(sablono.interpreter.attributes(attrs34360),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34360));
}
})());
}
})(),(function (){var attrs34361 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs34361))
{return React.DOM.li(sablono.interpreter.attributes(attrs34361),(function (){var attrs34362 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34362))
{return React.DOM.small(sablono.interpreter.attributes(attrs34362),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34362));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34361),(function (){var attrs34363 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs34363))
{return React.DOM.small(sablono.interpreter.attributes(attrs34363),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs34363));
}
})());
}
})(),(function (){var attrs34364 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34374 = self__.site_stats;var G__34374__$1 = (((G__34374 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34374));var G__34374__$2 = (((G__34374__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34374__$1));return G__34374__$2;
})(),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34374 = self__.site_stats;var G__34374__$1 = (((G__34374 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34374));var G__34374__$2 = (((G__34374__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34374__$1));return G__34374__$2;
})(),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34364))
{return React.DOM.li(sablono.interpreter.attributes(attrs34364),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34364),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs34369 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34375 = self__.site_stats;var G__34375__$1 = (((G__34375 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34375));var G__34375__$2 = (((G__34375__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34375__$1));return G__34375__$2;
})(),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34375 = self__.site_stats;var G__34375__$1 = (((G__34375 == null))?null:cljs.core.constant$keyword$684.cljs$core$IFn$_invoke$arity$1(G__34375));var G__34375__$2 = (((G__34375__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34375__$1));return G__34375__$2;
})(),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs34369))
{return React.DOM.li(sablono.interpreter.attributes(attrs34369),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs34369),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t34348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34350){var self__ = this;
var _34350__$1 = this;return self__.meta34349;
});
clustermap.components.map_report.t34348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34350,meta34349__$1){var self__ = this;
var _34350__$1 = this;return (new clustermap.components.map_report.t34348(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34347,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta34349__$1));
});
clustermap.components.map_report.__GT_t34348 = (function __GT_t34348(pc_count__$1,ic_count__$1,const_count__$1,map__34347__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34349){return (new clustermap.components.map_report.t34348(pc_count__$1,ic_count__$1,const_count__$1,map__34347__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta34349));
});
}
return (new clustermap.components.map_report.t34348(pc_count,ic_count,const_count,map__34347__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__34380 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34380__$1 = ((cljs.core.seq_QMARK_(map__34380))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34380):map__34380);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34380__$1,cljs.core.constant$keyword$634);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34380__$1,cljs.core.constant$keyword$635);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$757);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$642,cljs.core.constant$keyword$586], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$642,cljs.core.constant$keyword$547], null));var site_stats = cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(data);var pred__34381 = cljs.core._EQ__EQ_;var expr__34382 = type;if(cljs.core.truth_((pred__34381.cljs$core$IFn$_invoke$arity$2 ? pred__34381.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34382) : pred__34381.call(null,cljs.core.constant$keyword$631,expr__34382))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__34381.cljs$core$IFn$_invoke$arity$2 ? pred__34381.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$632,expr__34382) : pred__34381.call(null,cljs.core.constant$keyword$632,expr__34382))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__34381.cljs$core$IFn$_invoke$arity$2 ? pred__34381.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$633,expr__34382) : pred__34381.call(null,cljs.core.constant$keyword$633,expr__34382))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$621,shared,cljs.core.constant$keyword$626,document.getElementById(elem_id)], null));
});
