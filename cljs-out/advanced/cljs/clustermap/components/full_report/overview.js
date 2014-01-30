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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21426){var map__21431 = p__21426;var map__21431__$1 = ((cljs.core.seq_QMARK_(map__21431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21431):map__21431);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21431__$1,cljs.core.constant$keyword$194);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21431__$1,cljs.core.constant$keyword$224);var pred__21432 = cljs.core._EQ_;var expr__21433 = type;if(cljs.core.truth_((pred__21432.cljs$core$IFn$_invoke$arity$2 ? pred__21432.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21433) : pred__21432.call(null,cljs.core.constant$keyword$259,expr__21433))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Total",cljs.core.constant$keyword$266,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Average",cljs.core.constant$keyword$266,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21432.cljs$core$IFn$_invoke$arity$2 ? pred__21432.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21433) : pred__21432.call(null,cljs.core.constant$keyword$260,expr__21433))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Total",cljs.core.constant$keyword$266,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Average",cljs.core.constant$keyword$266,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21432.cljs$core$IFn$_invoke$arity$2 ? pred__21432.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21433) : pred__21432.call(null,cljs.core.constant$keyword$261,expr__21433))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Total",cljs.core.constant$keyword$266,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Average",cljs.core.constant$keyword$266,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Total",cljs.core.constant$keyword$266,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Average",cljs.core.constant$keyword$266,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21435){var map__21444 = p__21435;var map__21444__$1 = ((cljs.core.seq_QMARK_(map__21444))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21444):map__21444);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,cljs.core.constant$keyword$267);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,cljs.core.constant$keyword$268);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,cljs.core.constant$keyword$264);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,cljs.core.constant$keyword$269);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$270,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21445 = co_stats;var G__21445__$1 = (((G__21445 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21445));return G__21445__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21445 = co_stats;var G__21445__$1 = (((G__21445 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21445));return G__21445__$1;
})(),cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$271,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21446 = co_stats;var G__21446__$1 = (((G__21446 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21446));return G__21446__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21446 = co_stats;var G__21446__$1 = (((G__21446 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21446));return G__21446__$1;
})(),cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$272,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21447 = co_stats;var G__21447__$1 = (((G__21447 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21447));return G__21447__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21447 = co_stats;var G__21447__$1 = (((G__21447 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21447));return G__21447__$1;
})(),cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$273,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21448 = site_stats;var G__21448__$1 = (((G__21448 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21448));var G__21448__$2 = (((G__21448__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21448__$1));return G__21448__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21448 = site_stats;var G__21448__$1 = (((G__21448 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21448));var G__21448__$2 = (((G__21448__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21448__$1));return G__21448__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$274,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21449 = site_stats;var G__21449__$1 = (((G__21449 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21449));var G__21449__$2 = (((G__21449__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21449__$1));return G__21449__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21449 = site_stats;var G__21449__$1 = (((G__21449 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21449));var G__21449__$2 = (((G__21449__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21449__$1));return G__21449__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"))], null)], 0)),cljs.core.constant$keyword$265,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$270,"\u00A0",cljs.core.constant$keyword$271,"\u00A0",cljs.core.constant$keyword$272,"\u00A0",cljs.core.constant$keyword$273,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21450 = site_stats;var G__21450__$1 = (((G__21450 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21450));var G__21450__$2 = (((G__21450__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21450__$1));return G__21450__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21450 = site_stats;var G__21450__$1 = (((G__21450 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21450));var G__21450__$2 = (((G__21450__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21450__$1));return G__21450__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$274,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21451 = site_stats;var G__21451__$1 = (((G__21451 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21451));var G__21451__$2 = (((G__21451__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21451__$1));return G__21451__$2;
})(),cljs.core.constant$keyword$257,0,cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21451 = site_stats;var G__21451__$1 = (((G__21451 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21451));var G__21451__$2 = (((G__21451__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21451__$1));return G__21451__$2;
})(),cljs.core.constant$keyword$257,0,cljs.core.constant$keyword$190,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21470 = clustermap.components.full_report.overview.overview_data(data);var map__21470__$1 = ((cljs.core.seq_QMARK_(map__21470))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21470):map__21470);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21470__$1,cljs.core.constant$keyword$265);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21470__$1,cljs.core.constant$keyword$264);if(typeof clustermap.components.full_report.overview.t21471 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21471 = (function (selection,averages,map__21470,data,overview,meta21472){
this.selection = selection;
this.averages = averages;
this.map__21470 = map__21470;
this.data = data;
this.overview = overview;
this.meta21472 = meta21472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21471.cljs$lang$type = true;
clustermap.components.full_report.overview.t21471.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21471";
clustermap.components.full_report.overview.t21471.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21471");
});
clustermap.components.full_report.overview.t21471.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21471.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$266) : self__.selection.call(null,cljs.core.constant$keyword$266))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$235) : self__.selection.call(null,cljs.core.constant$keyword$235)))),React.DOM.td(null,(function (){var attrs21478 = cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21478))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21478], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21478));
}
})()),React.DOM.td(null,(function (){var attrs21479 = cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21479))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21479], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21479));
}
})()),React.DOM.td(null,(function (){var attrs21480 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21480))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21480], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21480));
}
})()),React.DOM.td(null,(function (){var attrs21481 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21481))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21481], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21481));
}
})()),React.DOM.td(null,(function (){var attrs21482 = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21482))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21482], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21482));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$266) : self__.averages.call(null,cljs.core.constant$keyword$266))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$235) : self__.averages.call(null,cljs.core.constant$keyword$235)))),React.DOM.td(null,(function (){var attrs21483 = cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21483))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21483], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21483));
}
})()),React.DOM.td(null,(function (){var attrs21484 = cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21484))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21484], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21484));
}
})()),React.DOM.td(null,(function (){var attrs21485 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21485))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21485], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21485));
}
})()),React.DOM.td(null,(function (){var attrs21486 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21486))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21486], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21486));
}
})()),React.DOM.td(null,(function (){var attrs21487 = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21487))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21487], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21487));
}
})()))))));
});
clustermap.components.full_report.overview.t21471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21473){var self__ = this;
var _21473__$1 = this;return self__.meta21472;
});
clustermap.components.full_report.overview.t21471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21473,meta21472__$1){var self__ = this;
var _21473__$1 = this;return (new clustermap.components.full_report.overview.t21471(self__.selection,self__.averages,self__.map__21470,self__.data,self__.overview,meta21472__$1));
});
clustermap.components.full_report.overview.__GT_t21471 = (function __GT_t21471(selection__$1,averages__$1,map__21470__$2,data__$1,overview__$1,meta21472){return (new clustermap.components.full_report.overview.t21471(selection__$1,averages__$1,map__21470__$2,data__$1,overview__$1,meta21472));
});
}
return (new clustermap.components.full_report.overview.t21471(selection,averages,map__21470__$1,data,overview,null));
});
