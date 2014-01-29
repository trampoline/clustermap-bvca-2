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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21393){var map__21398 = p__21393;var map__21398__$1 = ((cljs.core.seq_QMARK_(map__21398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21398):map__21398);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,cljs.core.constant$keyword$191);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,cljs.core.constant$keyword$221);var pred__21399 = cljs.core._EQ_;var expr__21400 = type;if(cljs.core.truth_((pred__21399.cljs$core$IFn$_invoke$arity$2 ? pred__21399.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$256,expr__21400) : pred__21399.call(null,cljs.core.constant$keyword$256,expr__21400))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,"Total",cljs.core.constant$keyword$261,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,"Average",cljs.core.constant$keyword$261,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21399.cljs$core$IFn$_invoke$arity$2 ? pred__21399.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21400) : pred__21399.call(null,cljs.core.constant$keyword$257,expr__21400))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,"Total",cljs.core.constant$keyword$261,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,"Average",cljs.core.constant$keyword$261,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21399.cljs$core$IFn$_invoke$arity$2 ? pred__21399.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$258,expr__21400) : pred__21399.call(null,cljs.core.constant$keyword$258,expr__21400))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,"Total",cljs.core.constant$keyword$261,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,"Average",cljs.core.constant$keyword$261,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,"Total",cljs.core.constant$keyword$261,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,"Average",cljs.core.constant$keyword$261,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21402){var map__21411 = p__21402;var map__21411__$1 = ((cljs.core.seq_QMARK_(map__21411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21411):map__21411);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411__$1,cljs.core.constant$keyword$262);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411__$1,cljs.core.constant$keyword$263);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411__$1,cljs.core.constant$keyword$259);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411__$1,cljs.core.constant$keyword$264);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$259.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$265,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21412 = co_stats;var G__21412__$1 = (((G__21412 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21412));return G__21412__$1;
})(),cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21412 = co_stats;var G__21412__$1 = (((G__21412 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21412));return G__21412__$1;
})(),cljs.core.constant$keyword$187,"-")),cljs.core.constant$keyword$266,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21413 = co_stats;var G__21413__$1 = (((G__21413 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21413));return G__21413__$1;
})(),cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21413 = co_stats;var G__21413__$1 = (((G__21413 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21413));return G__21413__$1;
})(),cljs.core.constant$keyword$187,"-")),cljs.core.constant$keyword$267,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21414 = co_stats;var G__21414__$1 = (((G__21414 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21414));return G__21414__$1;
})(),cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21414 = co_stats;var G__21414__$1 = (((G__21414 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21414));return G__21414__$1;
})(),cljs.core.constant$keyword$187,"-")),cljs.core.constant$keyword$268,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21415 = site_stats;var G__21415__$1 = (((G__21415 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21415));var G__21415__$2 = (((G__21415__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21415__$1));return G__21415__$2;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21415 = site_stats;var G__21415__$1 = (((G__21415 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21415));var G__21415__$2 = (((G__21415__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21415__$1));return G__21415__$2;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-")),cljs.core.constant$keyword$269,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21416 = site_stats;var G__21416__$1 = (((G__21416 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21416));var G__21416__$2 = (((G__21416__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21416__$1));return G__21416__$2;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21416 = site_stats;var G__21416__$1 = (((G__21416 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21416));var G__21416__$2 = (((G__21416__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21416__$1));return G__21416__$2;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-"))], null)], 0)),cljs.core.constant$keyword$260,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$265,"\u00A0",cljs.core.constant$keyword$266,"\u00A0",cljs.core.constant$keyword$267,"\u00A0",cljs.core.constant$keyword$268,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21417 = site_stats;var G__21417__$1 = (((G__21417 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21417));var G__21417__$2 = (((G__21417__$1 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21417__$1));return G__21417__$2;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21417 = site_stats;var G__21417__$1 = (((G__21417 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21417));var G__21417__$2 = (((G__21417__$1 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21417__$1));return G__21417__$2;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-")),cljs.core.constant$keyword$269,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21418 = site_stats;var G__21418__$1 = (((G__21418 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21418));var G__21418__$2 = (((G__21418__$1 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21418__$1));return G__21418__$2;
})(),cljs.core.constant$keyword$254,0,cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21418 = site_stats;var G__21418__$1 = (((G__21418 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21418));var G__21418__$2 = (((G__21418__$1 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21418__$1));return G__21418__$2;
})(),cljs.core.constant$keyword$254,0,cljs.core.constant$keyword$187,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21437 = clustermap.components.full_report.overview.overview_data(data);var map__21437__$1 = ((cljs.core.seq_QMARK_(map__21437))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21437):map__21437);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,cljs.core.constant$keyword$260);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,cljs.core.constant$keyword$259);if(typeof clustermap.components.full_report.overview.t21438 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21438 = (function (selection,averages,map__21437,data,overview,meta21439){
this.selection = selection;
this.averages = averages;
this.map__21437 = map__21437;
this.data = data;
this.overview = overview;
this.meta21439 = meta21439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21438.cljs$lang$type = true;
clustermap.components.full_report.overview.t21438.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21438";
clustermap.components.full_report.overview.t21438.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21438");
});
clustermap.components.full_report.overview.t21438.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21438.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$261) : self__.selection.call(null,cljs.core.constant$keyword$261))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232) : self__.selection.call(null,cljs.core.constant$keyword$232)))),React.DOM.td(null,(function (){var attrs21445 = cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21445))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21445], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21445));
}
})()),React.DOM.td(null,(function (){var attrs21446 = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21446))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21446], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21446));
}
})()),React.DOM.td(null,(function (){var attrs21447 = cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21447))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21447], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21447));
}
})()),React.DOM.td(null,(function (){var attrs21448 = cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21448))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21448], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21448));
}
})()),React.DOM.td(null,(function (){var attrs21449 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21449))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21449], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21449));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$261) : self__.averages.call(null,cljs.core.constant$keyword$261))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232) : self__.averages.call(null,cljs.core.constant$keyword$232)))),React.DOM.td(null,(function (){var attrs21450 = cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21450))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21450], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21450));
}
})()),React.DOM.td(null,(function (){var attrs21451 = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21451))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21451], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21451));
}
})()),React.DOM.td(null,(function (){var attrs21452 = cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21452))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21452], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21452));
}
})()),React.DOM.td(null,(function (){var attrs21453 = cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21453))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21453], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21453));
}
})()),React.DOM.td(null,(function (){var attrs21454 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21454))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21454], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21454));
}
})()))))));
});
clustermap.components.full_report.overview.t21438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21440){var self__ = this;
var _21440__$1 = this;return self__.meta21439;
});
clustermap.components.full_report.overview.t21438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21440,meta21439__$1){var self__ = this;
var _21440__$1 = this;return (new clustermap.components.full_report.overview.t21438(self__.selection,self__.averages,self__.map__21437,self__.data,self__.overview,meta21439__$1));
});
clustermap.components.full_report.overview.__GT_t21438 = (function __GT_t21438(selection__$1,averages__$1,map__21437__$2,data__$1,overview__$1,meta21439){return (new clustermap.components.full_report.overview.t21438(selection__$1,averages__$1,map__21437__$2,data__$1,overview__$1,meta21439));
});
}
return (new clustermap.components.full_report.overview.t21438(selection,averages,map__21437__$1,data,overview,null));
});
