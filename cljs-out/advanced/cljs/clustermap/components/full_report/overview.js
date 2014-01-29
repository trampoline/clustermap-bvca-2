// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21396){var map__21401 = p__21396;var map__21401__$1 = ((cljs.core.seq_QMARK_(map__21401))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21401):map__21401);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21401__$1,cljs.core.constant$keyword$190);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21401__$1,cljs.core.constant$keyword$220);var pred__21402 = cljs.core._EQ_;var expr__21403 = type;if(cljs.core.truth_((pred__21402.cljs$core$IFn$_invoke$arity$2 ? pred__21402.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__21403) : pred__21402.call(null,cljs.core.constant$keyword$255,expr__21403))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,"Total",cljs.core.constant$keyword$262,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,"Average",cljs.core.constant$keyword$262,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21402.cljs$core$IFn$_invoke$arity$2 ? pred__21402.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$256,expr__21403) : pred__21402.call(null,cljs.core.constant$keyword$256,expr__21403))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,"Total",cljs.core.constant$keyword$262,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,"Average",cljs.core.constant$keyword$262,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21402.cljs$core$IFn$_invoke$arity$2 ? pred__21402.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21403) : pred__21402.call(null,cljs.core.constant$keyword$257,expr__21403))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,"Total",cljs.core.constant$keyword$262,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,"Average",cljs.core.constant$keyword$262,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,"Total",cljs.core.constant$keyword$262,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,"Average",cljs.core.constant$keyword$262,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21405){var map__21414 = p__21405;var map__21414__$1 = ((cljs.core.seq_QMARK_(map__21414))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21414):map__21414);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21414__$1,cljs.core.constant$keyword$263);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21414__$1,cljs.core.constant$keyword$264);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21414__$1,cljs.core.constant$keyword$260);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21414__$1,cljs.core.constant$keyword$265);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$266,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21415 = co_stats;var G__21415__$1 = (((G__21415 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21415));return G__21415__$1;
})(),cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21415 = co_stats;var G__21415__$1 = (((G__21415 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21415));return G__21415__$1;
})(),cljs.core.constant$keyword$186,"-")),cljs.core.constant$keyword$267,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21416 = co_stats;var G__21416__$1 = (((G__21416 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21416));return G__21416__$1;
})(),cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21416 = co_stats;var G__21416__$1 = (((G__21416 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21416));return G__21416__$1;
})(),cljs.core.constant$keyword$186,"-")),cljs.core.constant$keyword$268,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21417 = co_stats;var G__21417__$1 = (((G__21417 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21417));return G__21417__$1;
})(),cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21417 = co_stats;var G__21417__$1 = (((G__21417 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21417));return G__21417__$1;
})(),cljs.core.constant$keyword$186,"-")),cljs.core.constant$keyword$269,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21418 = site_stats;var G__21418__$1 = (((G__21418 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21418));var G__21418__$2 = (((G__21418__$1 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21418__$1));return G__21418__$2;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21418 = site_stats;var G__21418__$1 = (((G__21418 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21418));var G__21418__$2 = (((G__21418__$1 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21418__$1));return G__21418__$2;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-")),cljs.core.constant$keyword$270,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21419 = site_stats;var G__21419__$1 = (((G__21419 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21419));var G__21419__$2 = (((G__21419__$1 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21419__$1));return G__21419__$2;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21419 = site_stats;var G__21419__$1 = (((G__21419 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21419));var G__21419__$2 = (((G__21419__$1 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21419__$1));return G__21419__$2;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-"))], null)], 0)),cljs.core.constant$keyword$261,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$266,"\u00A0",cljs.core.constant$keyword$267,"\u00A0",cljs.core.constant$keyword$268,"\u00A0",cljs.core.constant$keyword$269,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21420 = site_stats;var G__21420__$1 = (((G__21420 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21420));var G__21420__$2 = (((G__21420__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21420__$1));return G__21420__$2;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21420 = site_stats;var G__21420__$1 = (((G__21420 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21420));var G__21420__$2 = (((G__21420__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21420__$1));return G__21420__$2;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-")),cljs.core.constant$keyword$270,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21421 = site_stats;var G__21421__$1 = (((G__21421 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21421));var G__21421__$2 = (((G__21421__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21421__$1));return G__21421__$2;
})(),cljs.core.constant$keyword$253,0,cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21421 = site_stats;var G__21421__$1 = (((G__21421 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21421));var G__21421__$2 = (((G__21421__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21421__$1));return G__21421__$2;
})(),cljs.core.constant$keyword$253,0,cljs.core.constant$keyword$186,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21440 = clustermap.components.full_report.overview.overview_data(data);var map__21440__$1 = ((cljs.core.seq_QMARK_(map__21440))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21440):map__21440);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21440__$1,cljs.core.constant$keyword$261);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21440__$1,cljs.core.constant$keyword$260);if(typeof clustermap.components.full_report.overview.t21441 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21441 = (function (selection,averages,map__21440,data,overview,meta21442){
this.selection = selection;
this.averages = averages;
this.map__21440 = map__21440;
this.data = data;
this.overview = overview;
this.meta21442 = meta21442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21441.cljs$lang$type = true;
clustermap.components.full_report.overview.t21441.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21441";
clustermap.components.full_report.overview.t21441.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21441");
});
clustermap.components.full_report.overview.t21441.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21441.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$262) : self__.selection.call(null,cljs.core.constant$keyword$262))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$231) : self__.selection.call(null,cljs.core.constant$keyword$231)))),React.DOM.td(null,(function (){var attrs21448 = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21448))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21448], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21448));
}
})()),React.DOM.td(null,(function (){var attrs21449 = cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21449))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21449], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21449));
}
})()),React.DOM.td(null,(function (){var attrs21450 = cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21450))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21450], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21450));
}
})()),React.DOM.td(null,(function (){var attrs21451 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21451))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21451], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21451));
}
})()),React.DOM.td(null,(function (){var attrs21452 = cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21452))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21452], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21452));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$262) : self__.averages.call(null,cljs.core.constant$keyword$262))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$231) : self__.averages.call(null,cljs.core.constant$keyword$231)))),React.DOM.td(null,(function (){var attrs21453 = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21453))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21453], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21453));
}
})()),React.DOM.td(null,(function (){var attrs21454 = cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21454))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21454], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21454));
}
})()),React.DOM.td(null,(function (){var attrs21455 = cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21455))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21455], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21455));
}
})()),React.DOM.td(null,(function (){var attrs21456 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21456))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21456], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21456));
}
})()),React.DOM.td(null,(function (){var attrs21457 = cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21457))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21457], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21457));
}
})()))))));
});
clustermap.components.full_report.overview.t21441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21443){var self__ = this;
var _21443__$1 = this;return self__.meta21442;
});
clustermap.components.full_report.overview.t21441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21443,meta21442__$1){var self__ = this;
var _21443__$1 = this;return (new clustermap.components.full_report.overview.t21441(self__.selection,self__.averages,self__.map__21440,self__.data,self__.overview,meta21442__$1));
});
clustermap.components.full_report.overview.__GT_t21441 = (function __GT_t21441(selection__$1,averages__$1,map__21440__$2,data__$1,overview__$1,meta21442){return (new clustermap.components.full_report.overview.t21441(selection__$1,averages__$1,map__21440__$2,data__$1,overview__$1,meta21442));
});
}
return (new clustermap.components.full_report.overview.t21441(selection,averages,map__21440__$1,data,overview,null));
});
