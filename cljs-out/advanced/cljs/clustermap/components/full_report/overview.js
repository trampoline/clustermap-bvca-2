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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21432){var map__21437 = p__21432;var map__21437__$1 = ((cljs.core.seq_QMARK_(map__21437))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21437):map__21437);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,cljs.core.constant$keyword$194);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,cljs.core.constant$keyword$224);var pred__21438 = cljs.core._EQ_;var expr__21439 = type;if(cljs.core.truth_((pred__21438.cljs$core$IFn$_invoke$arity$2 ? pred__21438.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21439) : pred__21438.call(null,cljs.core.constant$keyword$259,expr__21439))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Total",cljs.core.constant$keyword$266,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Average",cljs.core.constant$keyword$266,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21438.cljs$core$IFn$_invoke$arity$2 ? pred__21438.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21439) : pred__21438.call(null,cljs.core.constant$keyword$260,expr__21439))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Total",cljs.core.constant$keyword$266,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Average",cljs.core.constant$keyword$266,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21438.cljs$core$IFn$_invoke$arity$2 ? pred__21438.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21439) : pred__21438.call(null,cljs.core.constant$keyword$261,expr__21439))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Total",cljs.core.constant$keyword$266,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Average",cljs.core.constant$keyword$266,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Total",cljs.core.constant$keyword$266,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"Average",cljs.core.constant$keyword$266,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21441){var map__21450 = p__21441;var map__21450__$1 = ((cljs.core.seq_QMARK_(map__21450))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21450):map__21450);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,cljs.core.constant$keyword$267);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,cljs.core.constant$keyword$268);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,cljs.core.constant$keyword$264);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,cljs.core.constant$keyword$269);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$270,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21451 = co_stats;var G__21451__$1 = (((G__21451 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21451));return G__21451__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21451 = co_stats;var G__21451__$1 = (((G__21451 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21451));return G__21451__$1;
})(),cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$271,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21452 = co_stats;var G__21452__$1 = (((G__21452 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21452));return G__21452__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21452 = co_stats;var G__21452__$1 = (((G__21452 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21452));return G__21452__$1;
})(),cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$272,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21453 = co_stats;var G__21453__$1 = (((G__21453 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21453));return G__21453__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21453 = co_stats;var G__21453__$1 = (((G__21453 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21453));return G__21453__$1;
})(),cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$273,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21454 = site_stats;var G__21454__$1 = (((G__21454 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21454));var G__21454__$2 = (((G__21454__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21454__$1));return G__21454__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21454 = site_stats;var G__21454__$1 = (((G__21454 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21454));var G__21454__$2 = (((G__21454__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21454__$1));return G__21454__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$274,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21455 = site_stats;var G__21455__$1 = (((G__21455 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21455));var G__21455__$2 = (((G__21455__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21455__$1));return G__21455__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21455 = site_stats;var G__21455__$1 = (((G__21455 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21455));var G__21455__$2 = (((G__21455__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21455__$1));return G__21455__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"))], null)], 0)),cljs.core.constant$keyword$265,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$270,"\u00A0",cljs.core.constant$keyword$271,"\u00A0",cljs.core.constant$keyword$272,"\u00A0",cljs.core.constant$keyword$273,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21456 = site_stats;var G__21456__$1 = (((G__21456 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21456));var G__21456__$2 = (((G__21456__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21456__$1));return G__21456__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21456 = site_stats;var G__21456__$1 = (((G__21456 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21456));var G__21456__$2 = (((G__21456__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21456__$1));return G__21456__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-")),cljs.core.constant$keyword$274,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21457 = site_stats;var G__21457__$1 = (((G__21457 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21457));var G__21457__$2 = (((G__21457__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21457__$1));return G__21457__$2;
})(),cljs.core.constant$keyword$257,0,cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21457 = site_stats;var G__21457__$1 = (((G__21457 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21457));var G__21457__$2 = (((G__21457__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21457__$1));return G__21457__$2;
})(),cljs.core.constant$keyword$257,0,cljs.core.constant$keyword$190,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21476 = clustermap.components.full_report.overview.overview_data(data);var map__21476__$1 = ((cljs.core.seq_QMARK_(map__21476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21476):map__21476);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21476__$1,cljs.core.constant$keyword$265);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21476__$1,cljs.core.constant$keyword$264);if(typeof clustermap.components.full_report.overview.t21477 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21477 = (function (selection,averages,map__21476,data,overview,meta21478){
this.selection = selection;
this.averages = averages;
this.map__21476 = map__21476;
this.data = data;
this.overview = overview;
this.meta21478 = meta21478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21477.cljs$lang$type = true;
clustermap.components.full_report.overview.t21477.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21477";
clustermap.components.full_report.overview.t21477.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21477");
});
clustermap.components.full_report.overview.t21477.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21477.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$266) : self__.selection.call(null,cljs.core.constant$keyword$266))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$235) : self__.selection.call(null,cljs.core.constant$keyword$235)))),React.DOM.td(null,(function (){var attrs21484 = cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21484))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21484], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21484));
}
})()),React.DOM.td(null,(function (){var attrs21485 = cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21485))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21485], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21485));
}
})()),React.DOM.td(null,(function (){var attrs21486 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21486))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21486], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21486));
}
})()),React.DOM.td(null,(function (){var attrs21487 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21487))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21487], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21487));
}
})()),React.DOM.td(null,(function (){var attrs21488 = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21488))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21488], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21488));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$266) : self__.averages.call(null,cljs.core.constant$keyword$266))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$235) : self__.averages.call(null,cljs.core.constant$keyword$235)))),React.DOM.td(null,(function (){var attrs21489 = cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21489))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21489], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21489));
}
})()),React.DOM.td(null,(function (){var attrs21490 = cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21490))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21490], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21490));
}
})()),React.DOM.td(null,(function (){var attrs21491 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21491))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21491], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21491));
}
})()),React.DOM.td(null,(function (){var attrs21492 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21492))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21492], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21492));
}
})()),React.DOM.td(null,(function (){var attrs21493 = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21493))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21493], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21493));
}
})()))))));
});
clustermap.components.full_report.overview.t21477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21479){var self__ = this;
var _21479__$1 = this;return self__.meta21478;
});
clustermap.components.full_report.overview.t21477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21479,meta21478__$1){var self__ = this;
var _21479__$1 = this;return (new clustermap.components.full_report.overview.t21477(self__.selection,self__.averages,self__.map__21476,self__.data,self__.overview,meta21478__$1));
});
clustermap.components.full_report.overview.__GT_t21477 = (function __GT_t21477(selection__$1,averages__$1,map__21476__$2,data__$1,overview__$1,meta21478){return (new clustermap.components.full_report.overview.t21477(selection__$1,averages__$1,map__21476__$2,data__$1,overview__$1,meta21478));
});
}
return (new clustermap.components.full_report.overview.t21477(selection,averages,map__21476__$1,data,overview,null));
});
