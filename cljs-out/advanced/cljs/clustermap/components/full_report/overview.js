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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21380){var map__21385 = p__21380;var map__21385__$1 = ((cljs.core.seq_QMARK_(map__21385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21385):map__21385);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.constant$keyword$192);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.constant$keyword$222);var pred__21386 = cljs.core._EQ_;var expr__21387 = type;if(cljs.core.truth_((pred__21386.cljs$core$IFn$_invoke$arity$2 ? pred__21386.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21387) : pred__21386.call(null,cljs.core.constant$keyword$257,expr__21387))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,"Total",cljs.core.constant$keyword$264,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,"Average",cljs.core.constant$keyword$264,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21386.cljs$core$IFn$_invoke$arity$2 ? pred__21386.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$258,expr__21387) : pred__21386.call(null,cljs.core.constant$keyword$258,expr__21387))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,"Total",cljs.core.constant$keyword$264,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,"Average",cljs.core.constant$keyword$264,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21386.cljs$core$IFn$_invoke$arity$2 ? pred__21386.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21387) : pred__21386.call(null,cljs.core.constant$keyword$259,expr__21387))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,"Total",cljs.core.constant$keyword$264,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,"Average",cljs.core.constant$keyword$264,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,"Total",cljs.core.constant$keyword$264,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,"Average",cljs.core.constant$keyword$264,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21389){var map__21398 = p__21389;var map__21398__$1 = ((cljs.core.seq_QMARK_(map__21398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21398):map__21398);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,cljs.core.constant$keyword$265);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,cljs.core.constant$keyword$266);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,cljs.core.constant$keyword$262);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,cljs.core.constant$keyword$267);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$268,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21399 = co_stats;var G__21399__$1 = (((G__21399 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21399));return G__21399__$1;
})(),cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21399 = co_stats;var G__21399__$1 = (((G__21399 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21399));return G__21399__$1;
})(),cljs.core.constant$keyword$188,"-")),cljs.core.constant$keyword$269,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21400 = co_stats;var G__21400__$1 = (((G__21400 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21400));return G__21400__$1;
})(),cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21400 = co_stats;var G__21400__$1 = (((G__21400 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21400));return G__21400__$1;
})(),cljs.core.constant$keyword$188,"-")),cljs.core.constant$keyword$270,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21401 = co_stats;var G__21401__$1 = (((G__21401 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21401));return G__21401__$1;
})(),cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21401 = co_stats;var G__21401__$1 = (((G__21401 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21401));return G__21401__$1;
})(),cljs.core.constant$keyword$188,"-")),cljs.core.constant$keyword$271,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21402 = site_stats;var G__21402__$1 = (((G__21402 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21402));var G__21402__$2 = (((G__21402__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21402__$1));return G__21402__$2;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21402 = site_stats;var G__21402__$1 = (((G__21402 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21402));var G__21402__$2 = (((G__21402__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21402__$1));return G__21402__$2;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-")),cljs.core.constant$keyword$272,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21403 = site_stats;var G__21403__$1 = (((G__21403 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21403));var G__21403__$2 = (((G__21403__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21403__$1));return G__21403__$2;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21403 = site_stats;var G__21403__$1 = (((G__21403 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21403));var G__21403__$2 = (((G__21403__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21403__$1));return G__21403__$2;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-"))], null)], 0)),cljs.core.constant$keyword$263,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$268,"\u00A0",cljs.core.constant$keyword$269,"\u00A0",cljs.core.constant$keyword$270,"\u00A0",cljs.core.constant$keyword$271,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21404 = site_stats;var G__21404__$1 = (((G__21404 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21404));var G__21404__$2 = (((G__21404__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21404__$1));return G__21404__$2;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21404 = site_stats;var G__21404__$1 = (((G__21404 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21404));var G__21404__$2 = (((G__21404__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21404__$1));return G__21404__$2;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-")),cljs.core.constant$keyword$272,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21405 = site_stats;var G__21405__$1 = (((G__21405 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21405));var G__21405__$2 = (((G__21405__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21405__$1));return G__21405__$2;
})(),cljs.core.constant$keyword$255,0,cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21405 = site_stats;var G__21405__$1 = (((G__21405 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21405));var G__21405__$2 = (((G__21405__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21405__$1));return G__21405__$2;
})(),cljs.core.constant$keyword$255,0,cljs.core.constant$keyword$188,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21424 = clustermap.components.full_report.overview.overview_data(data);var map__21424__$1 = ((cljs.core.seq_QMARK_(map__21424))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21424):map__21424);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,cljs.core.constant$keyword$263);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,cljs.core.constant$keyword$262);if(typeof clustermap.components.full_report.overview.t21425 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21425 = (function (selection,averages,map__21424,data,overview,meta21426){
this.selection = selection;
this.averages = averages;
this.map__21424 = map__21424;
this.data = data;
this.overview = overview;
this.meta21426 = meta21426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21425.cljs$lang$type = true;
clustermap.components.full_report.overview.t21425.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21425";
clustermap.components.full_report.overview.t21425.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21425");
});
clustermap.components.full_report.overview.t21425.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21425.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$264) : self__.selection.call(null,cljs.core.constant$keyword$264))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$233) : self__.selection.call(null,cljs.core.constant$keyword$233)))),React.DOM.td(null,(function (){var attrs21432 = cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21432))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21432], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21432));
}
})()),React.DOM.td(null,(function (){var attrs21433 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21433))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21433], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21433));
}
})()),React.DOM.td(null,(function (){var attrs21434 = cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21434))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21434], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21434));
}
})()),React.DOM.td(null,(function (){var attrs21435 = cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21435))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21435], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21435));
}
})()),React.DOM.td(null,(function (){var attrs21436 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21436))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21436], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21436));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$264) : self__.averages.call(null,cljs.core.constant$keyword$264))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$233) : self__.averages.call(null,cljs.core.constant$keyword$233)))),React.DOM.td(null,(function (){var attrs21437 = cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21437))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21437], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21437));
}
})()),React.DOM.td(null,(function (){var attrs21438 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21438))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21438], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21438));
}
})()),React.DOM.td(null,(function (){var attrs21439 = cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21439))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21439], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21439));
}
})()),React.DOM.td(null,(function (){var attrs21440 = cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21440))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21440], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21440));
}
})()),React.DOM.td(null,(function (){var attrs21441 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21441))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21441], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21441));
}
})()))))));
});
clustermap.components.full_report.overview.t21425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21427){var self__ = this;
var _21427__$1 = this;return self__.meta21426;
});
clustermap.components.full_report.overview.t21425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21427,meta21426__$1){var self__ = this;
var _21427__$1 = this;return (new clustermap.components.full_report.overview.t21425(self__.selection,self__.averages,self__.map__21424,self__.data,self__.overview,meta21426__$1));
});
clustermap.components.full_report.overview.__GT_t21425 = (function __GT_t21425(selection__$1,averages__$1,map__21424__$2,data__$1,overview__$1,meta21426){return (new clustermap.components.full_report.overview.t21425(selection__$1,averages__$1,map__21424__$2,data__$1,overview__$1,meta21426));
});
}
return (new clustermap.components.full_report.overview.t21425(selection,averages,map__21424__$1,data,overview,null));
});
