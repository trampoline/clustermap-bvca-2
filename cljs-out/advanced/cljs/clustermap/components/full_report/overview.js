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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21610){var map__21615 = p__21610;var map__21615__$1 = ((cljs.core.seq_QMARK_(map__21615))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21615):map__21615);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.constant$keyword$203);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.constant$keyword$235);var pred__21616 = cljs.core._EQ_;var expr__21617 = type;if(cljs.core.truth_((pred__21616.cljs$core$IFn$_invoke$arity$2 ? pred__21616.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$268,expr__21617) : pred__21616.call(null,cljs.core.constant$keyword$268,expr__21617))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,"Total",cljs.core.constant$keyword$275,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,"Average",cljs.core.constant$keyword$275,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21616.cljs$core$IFn$_invoke$arity$2 ? pred__21616.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$269,expr__21617) : pred__21616.call(null,cljs.core.constant$keyword$269,expr__21617))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,"Total",cljs.core.constant$keyword$275,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,"Average",cljs.core.constant$keyword$275,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21616.cljs$core$IFn$_invoke$arity$2 ? pred__21616.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$270,expr__21617) : pred__21616.call(null,cljs.core.constant$keyword$270,expr__21617))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,"Total",cljs.core.constant$keyword$275,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,"Average",cljs.core.constant$keyword$275,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,"Total",cljs.core.constant$keyword$275,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,"Average",cljs.core.constant$keyword$275,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21619){var map__21628 = p__21619;var map__21628__$1 = ((cljs.core.seq_QMARK_(map__21628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21628):map__21628);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,cljs.core.constant$keyword$276);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,cljs.core.constant$keyword$277);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,cljs.core.constant$keyword$273);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,cljs.core.constant$keyword$278);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$279,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21629 = co_stats;var G__21629__$1 = (((G__21629 == null))?null:cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(G__21629));return G__21629__$1;
})(),cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21629 = co_stats;var G__21629__$1 = (((G__21629 == null))?null:cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(G__21629));return G__21629__$1;
})(),cljs.core.constant$keyword$199,"-")),cljs.core.constant$keyword$280,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21630 = co_stats;var G__21630__$1 = (((G__21630 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21630));return G__21630__$1;
})(),cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21630 = co_stats;var G__21630__$1 = (((G__21630 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21630));return G__21630__$1;
})(),cljs.core.constant$keyword$199,"-")),cljs.core.constant$keyword$281,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21631 = co_stats;var G__21631__$1 = (((G__21631 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21631));return G__21631__$1;
})(),cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21631 = co_stats;var G__21631__$1 = (((G__21631 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21631));return G__21631__$1;
})(),cljs.core.constant$keyword$199,"-")),cljs.core.constant$keyword$282,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21632 = site_stats;var G__21632__$1 = (((G__21632 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21632));var G__21632__$2 = (((G__21632__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21632__$1));return G__21632__$2;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21632 = site_stats;var G__21632__$1 = (((G__21632 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21632));var G__21632__$2 = (((G__21632__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21632__$1));return G__21632__$2;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-")),cljs.core.constant$keyword$283,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21633 = site_stats;var G__21633__$1 = (((G__21633 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21633));var G__21633__$2 = (((G__21633__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21633__$1));return G__21633__$2;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21633 = site_stats;var G__21633__$1 = (((G__21633 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21633));var G__21633__$2 = (((G__21633__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21633__$1));return G__21633__$2;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-"))], null)], 0)),cljs.core.constant$keyword$274,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$279,"\u00A0",cljs.core.constant$keyword$280,"\u00A0",cljs.core.constant$keyword$281,"\u00A0",cljs.core.constant$keyword$282,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21634 = site_stats;var G__21634__$1 = (((G__21634 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21634));var G__21634__$2 = (((G__21634__$1 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21634__$1));return G__21634__$2;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21634 = site_stats;var G__21634__$1 = (((G__21634 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21634));var G__21634__$2 = (((G__21634__$1 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21634__$1));return G__21634__$2;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-")),cljs.core.constant$keyword$283,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21635 = site_stats;var G__21635__$1 = (((G__21635 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21635));var G__21635__$2 = (((G__21635__$1 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21635__$1));return G__21635__$2;
})(),cljs.core.constant$keyword$266,0,cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21635 = site_stats;var G__21635__$1 = (((G__21635 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21635));var G__21635__$2 = (((G__21635__$1 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21635__$1));return G__21635__$2;
})(),cljs.core.constant$keyword$266,0,cljs.core.constant$keyword$199,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21654 = clustermap.components.full_report.overview.overview_data(data);var map__21654__$1 = ((cljs.core.seq_QMARK_(map__21654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21654):map__21654);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21654__$1,cljs.core.constant$keyword$274);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21654__$1,cljs.core.constant$keyword$273);if(typeof clustermap.components.full_report.overview.t21655 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21655 = (function (selection,averages,map__21654,data,overview,meta21656){
this.selection = selection;
this.averages = averages;
this.map__21654 = map__21654;
this.data = data;
this.overview = overview;
this.meta21656 = meta21656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21655.cljs$lang$type = true;
clustermap.components.full_report.overview.t21655.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21655";
clustermap.components.full_report.overview.t21655.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21655");
});
clustermap.components.full_report.overview.t21655.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21655.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$275) : self__.selection.call(null,cljs.core.constant$keyword$275))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$245) : self__.selection.call(null,cljs.core.constant$keyword$245)))),React.DOM.td(null,(function (){var attrs21662 = cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21662))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21662], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21662));
}
})()),React.DOM.td(null,(function (){var attrs21663 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21663))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21663], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21663));
}
})()),React.DOM.td(null,(function (){var attrs21664 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21664))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21664], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21664));
}
})()),React.DOM.td(null,(function (){var attrs21665 = cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21665))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21665], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21665));
}
})()),React.DOM.td(null,(function (){var attrs21666 = cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21666))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21666], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21666));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$275) : self__.averages.call(null,cljs.core.constant$keyword$275))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$245) : self__.averages.call(null,cljs.core.constant$keyword$245)))),React.DOM.td(null,(function (){var attrs21667 = cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21667))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21667], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21667));
}
})()),React.DOM.td(null,(function (){var attrs21668 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21668))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21668], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21668));
}
})()),React.DOM.td(null,(function (){var attrs21669 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21669))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21669], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21669));
}
})()),React.DOM.td(null,(function (){var attrs21670 = cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21670))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21670], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21670));
}
})()),React.DOM.td(null,(function (){var attrs21671 = cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21671))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21671], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21671));
}
})()))))));
});
clustermap.components.full_report.overview.t21655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21657){var self__ = this;
var _21657__$1 = this;return self__.meta21656;
});
clustermap.components.full_report.overview.t21655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21657,meta21656__$1){var self__ = this;
var _21657__$1 = this;return (new clustermap.components.full_report.overview.t21655(self__.selection,self__.averages,self__.map__21654,self__.data,self__.overview,meta21656__$1));
});
clustermap.components.full_report.overview.__GT_t21655 = (function __GT_t21655(selection__$1,averages__$1,map__21654__$2,data__$1,overview__$1,meta21656){return (new clustermap.components.full_report.overview.t21655(selection__$1,averages__$1,map__21654__$2,data__$1,overview__$1,meta21656));
});
}
return (new clustermap.components.full_report.overview.t21655(selection,averages,map__21654__$1,data,overview,null));
});
