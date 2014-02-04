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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21570){var map__21575 = p__21570;var map__21575__$1 = ((cljs.core.seq_QMARK_(map__21575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21575):map__21575);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21575__$1,cljs.core.constant$keyword$204);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21575__$1,cljs.core.constant$keyword$236);var pred__21576 = cljs.core._EQ_;var expr__21577 = type;if(cljs.core.truth_((pred__21576.cljs$core$IFn$_invoke$arity$2 ? pred__21576.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$269,expr__21577) : pred__21576.call(null,cljs.core.constant$keyword$269,expr__21577))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Total",cljs.core.constant$keyword$276,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Average",cljs.core.constant$keyword$276,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21576.cljs$core$IFn$_invoke$arity$2 ? pred__21576.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$270,expr__21577) : pred__21576.call(null,cljs.core.constant$keyword$270,expr__21577))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Total",cljs.core.constant$keyword$276,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Average",cljs.core.constant$keyword$276,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21576.cljs$core$IFn$_invoke$arity$2 ? pred__21576.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$271,expr__21577) : pred__21576.call(null,cljs.core.constant$keyword$271,expr__21577))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Total",cljs.core.constant$keyword$276,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Average",cljs.core.constant$keyword$276,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Total",cljs.core.constant$keyword$276,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Average",cljs.core.constant$keyword$276,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21579){var map__21588 = p__21579;var map__21588__$1 = ((cljs.core.seq_QMARK_(map__21588))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21588):map__21588);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21588__$1,cljs.core.constant$keyword$277);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21588__$1,cljs.core.constant$keyword$278);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21588__$1,cljs.core.constant$keyword$274);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21588__$1,cljs.core.constant$keyword$279);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$280,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21589 = co_stats;var G__21589__$1 = (((G__21589 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21589));return G__21589__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21589 = co_stats;var G__21589__$1 = (((G__21589 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21589));return G__21589__$1;
})(),cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$281,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21590 = co_stats;var G__21590__$1 = (((G__21590 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21590));return G__21590__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21590 = co_stats;var G__21590__$1 = (((G__21590 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21590));return G__21590__$1;
})(),cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$282,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21591 = co_stats;var G__21591__$1 = (((G__21591 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21591));return G__21591__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21591 = co_stats;var G__21591__$1 = (((G__21591 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21591));return G__21591__$1;
})(),cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$283,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21592 = site_stats;var G__21592__$1 = (((G__21592 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21592));var G__21592__$2 = (((G__21592__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21592__$1));return G__21592__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21592 = site_stats;var G__21592__$1 = (((G__21592 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21592));var G__21592__$2 = (((G__21592__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21592__$1));return G__21592__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$284,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21593 = site_stats;var G__21593__$1 = (((G__21593 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21593));var G__21593__$2 = (((G__21593__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21593__$1));return G__21593__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21593 = site_stats;var G__21593__$1 = (((G__21593 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21593));var G__21593__$2 = (((G__21593__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21593__$1));return G__21593__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"))], null)], 0)),cljs.core.constant$keyword$275,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$280,"\u00A0",cljs.core.constant$keyword$281,"\u00A0",cljs.core.constant$keyword$282,"\u00A0",cljs.core.constant$keyword$283,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21594 = site_stats;var G__21594__$1 = (((G__21594 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21594));var G__21594__$2 = (((G__21594__$1 == null))?null:cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(G__21594__$1));return G__21594__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21594 = site_stats;var G__21594__$1 = (((G__21594 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21594));var G__21594__$2 = (((G__21594__$1 == null))?null:cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(G__21594__$1));return G__21594__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$284,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21595 = site_stats;var G__21595__$1 = (((G__21595 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21595));var G__21595__$2 = (((G__21595__$1 == null))?null:cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(G__21595__$1));return G__21595__$2;
})(),cljs.core.constant$keyword$267,0,cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21595 = site_stats;var G__21595__$1 = (((G__21595 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21595));var G__21595__$2 = (((G__21595__$1 == null))?null:cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(G__21595__$1));return G__21595__$2;
})(),cljs.core.constant$keyword$267,0,cljs.core.constant$keyword$200,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21614 = clustermap.components.full_report.overview.overview_data(data);var map__21614__$1 = ((cljs.core.seq_QMARK_(map__21614))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21614):map__21614);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,cljs.core.constant$keyword$275);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,cljs.core.constant$keyword$274);if(typeof clustermap.components.full_report.overview.t21615 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21615 = (function (selection,averages,map__21614,data,overview,meta21616){
this.selection = selection;
this.averages = averages;
this.map__21614 = map__21614;
this.data = data;
this.overview = overview;
this.meta21616 = meta21616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21615.cljs$lang$type = true;
clustermap.components.full_report.overview.t21615.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21615";
clustermap.components.full_report.overview.t21615.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21615");
});
clustermap.components.full_report.overview.t21615.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21615.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$276) : self__.selection.call(null,cljs.core.constant$keyword$276))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$246) : self__.selection.call(null,cljs.core.constant$keyword$246)))),React.DOM.td(null,(function (){var attrs21622 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21622))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21622], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21622));
}
})()),React.DOM.td(null,(function (){var attrs21623 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21623))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21623], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21623));
}
})()),React.DOM.td(null,(function (){var attrs21624 = cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21624))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21624], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21624));
}
})()),React.DOM.td(null,(function (){var attrs21625 = cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21625))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21625], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21625));
}
})()),React.DOM.td(null,(function (){var attrs21626 = cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21626))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21626], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21626));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$276) : self__.averages.call(null,cljs.core.constant$keyword$276))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$246) : self__.averages.call(null,cljs.core.constant$keyword$246)))),React.DOM.td(null,(function (){var attrs21627 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21627))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21627], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21627));
}
})()),React.DOM.td(null,(function (){var attrs21628 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21628))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21628], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21628));
}
})()),React.DOM.td(null,(function (){var attrs21629 = cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21629))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21629], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21629));
}
})()),React.DOM.td(null,(function (){var attrs21630 = cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21630))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21630], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21630));
}
})()),React.DOM.td(null,(function (){var attrs21631 = cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21631))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21631], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21631));
}
})()))))));
});
clustermap.components.full_report.overview.t21615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21617){var self__ = this;
var _21617__$1 = this;return self__.meta21616;
});
clustermap.components.full_report.overview.t21615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21617,meta21616__$1){var self__ = this;
var _21617__$1 = this;return (new clustermap.components.full_report.overview.t21615(self__.selection,self__.averages,self__.map__21614,self__.data,self__.overview,meta21616__$1));
});
clustermap.components.full_report.overview.__GT_t21615 = (function __GT_t21615(selection__$1,averages__$1,map__21614__$2,data__$1,overview__$1,meta21616){return (new clustermap.components.full_report.overview.t21615(selection__$1,averages__$1,map__21614__$2,data__$1,overview__$1,meta21616));
});
}
return (new clustermap.components.full_report.overview.t21615(selection,averages,map__21614__$1,data,overview,null));
});
