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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21595){var map__21600 = p__21595;var map__21600__$1 = ((cljs.core.seq_QMARK_(map__21600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21600):map__21600);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21600__$1,cljs.core.constant$keyword$204);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21600__$1,cljs.core.constant$keyword$236);var pred__21601 = cljs.core._EQ_;var expr__21602 = type;if(cljs.core.truth_((pred__21601.cljs$core$IFn$_invoke$arity$2 ? pred__21601.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$269,expr__21602) : pred__21601.call(null,cljs.core.constant$keyword$269,expr__21602))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Total",cljs.core.constant$keyword$276,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Average",cljs.core.constant$keyword$276,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21601.cljs$core$IFn$_invoke$arity$2 ? pred__21601.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$270,expr__21602) : pred__21601.call(null,cljs.core.constant$keyword$270,expr__21602))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Total",cljs.core.constant$keyword$276,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Average",cljs.core.constant$keyword$276,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21601.cljs$core$IFn$_invoke$arity$2 ? pred__21601.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$271,expr__21602) : pred__21601.call(null,cljs.core.constant$keyword$271,expr__21602))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Total",cljs.core.constant$keyword$276,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Average",cljs.core.constant$keyword$276,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Total",cljs.core.constant$keyword$276,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"Average",cljs.core.constant$keyword$276,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21604){var map__21613 = p__21604;var map__21613__$1 = ((cljs.core.seq_QMARK_(map__21613))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21613):map__21613);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,cljs.core.constant$keyword$277);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,cljs.core.constant$keyword$278);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,cljs.core.constant$keyword$274);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,cljs.core.constant$keyword$279);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$280,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21614 = co_stats;var G__21614__$1 = (((G__21614 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21614));return G__21614__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21614 = co_stats;var G__21614__$1 = (((G__21614 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21614));return G__21614__$1;
})(),cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$281,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21615 = co_stats;var G__21615__$1 = (((G__21615 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21615));return G__21615__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21615 = co_stats;var G__21615__$1 = (((G__21615 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21615));return G__21615__$1;
})(),cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$282,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21616 = co_stats;var G__21616__$1 = (((G__21616 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21616));return G__21616__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21616 = co_stats;var G__21616__$1 = (((G__21616 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21616));return G__21616__$1;
})(),cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$283,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21617 = site_stats;var G__21617__$1 = (((G__21617 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21617));var G__21617__$2 = (((G__21617__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21617__$1));return G__21617__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21617 = site_stats;var G__21617__$1 = (((G__21617 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21617));var G__21617__$2 = (((G__21617__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21617__$1));return G__21617__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$284,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21618 = site_stats;var G__21618__$1 = (((G__21618 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21618));var G__21618__$2 = (((G__21618__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21618__$1));return G__21618__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21618 = site_stats;var G__21618__$1 = (((G__21618 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21618));var G__21618__$2 = (((G__21618__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21618__$1));return G__21618__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"))], null)], 0)),cljs.core.constant$keyword$275,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$280,"\u00A0",cljs.core.constant$keyword$281,"\u00A0",cljs.core.constant$keyword$282,"\u00A0",cljs.core.constant$keyword$283,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21619 = site_stats;var G__21619__$1 = (((G__21619 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21619));var G__21619__$2 = (((G__21619__$1 == null))?null:cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(G__21619__$1));return G__21619__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21619 = site_stats;var G__21619__$1 = (((G__21619 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21619));var G__21619__$2 = (((G__21619__$1 == null))?null:cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(G__21619__$1));return G__21619__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-")),cljs.core.constant$keyword$284,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21620 = site_stats;var G__21620__$1 = (((G__21620 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21620));var G__21620__$2 = (((G__21620__$1 == null))?null:cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(G__21620__$1));return G__21620__$2;
})(),cljs.core.constant$keyword$267,0,cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21620 = site_stats;var G__21620__$1 = (((G__21620 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21620));var G__21620__$2 = (((G__21620__$1 == null))?null:cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(G__21620__$1));return G__21620__$2;
})(),cljs.core.constant$keyword$267,0,cljs.core.constant$keyword$200,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21639 = clustermap.components.full_report.overview.overview_data(data);var map__21639__$1 = ((cljs.core.seq_QMARK_(map__21639))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21639):map__21639);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21639__$1,cljs.core.constant$keyword$275);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21639__$1,cljs.core.constant$keyword$274);if(typeof clustermap.components.full_report.overview.t21640 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21640 = (function (selection,averages,map__21639,data,overview,meta21641){
this.selection = selection;
this.averages = averages;
this.map__21639 = map__21639;
this.data = data;
this.overview = overview;
this.meta21641 = meta21641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21640.cljs$lang$type = true;
clustermap.components.full_report.overview.t21640.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21640";
clustermap.components.full_report.overview.t21640.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21640");
});
clustermap.components.full_report.overview.t21640.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21640.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$276) : self__.selection.call(null,cljs.core.constant$keyword$276))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$246) : self__.selection.call(null,cljs.core.constant$keyword$246)))),React.DOM.td(null,(function (){var attrs21647 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21647))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21647], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21647));
}
})()),React.DOM.td(null,(function (){var attrs21648 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21648))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21648], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21648));
}
})()),React.DOM.td(null,(function (){var attrs21649 = cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21649))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21649], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21649));
}
})()),React.DOM.td(null,(function (){var attrs21650 = cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21650))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21650], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21650));
}
})()),React.DOM.td(null,(function (){var attrs21651 = cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21651))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21651], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21651));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$276) : self__.averages.call(null,cljs.core.constant$keyword$276))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$246) : self__.averages.call(null,cljs.core.constant$keyword$246)))),React.DOM.td(null,(function (){var attrs21652 = cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21652))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21652], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21652));
}
})()),React.DOM.td(null,(function (){var attrs21653 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21653))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21653], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21653));
}
})()),React.DOM.td(null,(function (){var attrs21654 = cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21654))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21654], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21654));
}
})()),React.DOM.td(null,(function (){var attrs21655 = cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21655))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21655], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21655));
}
})()),React.DOM.td(null,(function (){var attrs21656 = cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21656))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21656], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21656));
}
})()))))));
});
clustermap.components.full_report.overview.t21640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21642){var self__ = this;
var _21642__$1 = this;return self__.meta21641;
});
clustermap.components.full_report.overview.t21640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21642,meta21641__$1){var self__ = this;
var _21642__$1 = this;return (new clustermap.components.full_report.overview.t21640(self__.selection,self__.averages,self__.map__21639,self__.data,self__.overview,meta21641__$1));
});
clustermap.components.full_report.overview.__GT_t21640 = (function __GT_t21640(selection__$1,averages__$1,map__21639__$2,data__$1,overview__$1,meta21641){return (new clustermap.components.full_report.overview.t21640(selection__$1,averages__$1,map__21639__$2,data__$1,overview__$1,meta21641));
});
}
return (new clustermap.components.full_report.overview.t21640(selection,averages,map__21639__$1,data,overview,null));
});
