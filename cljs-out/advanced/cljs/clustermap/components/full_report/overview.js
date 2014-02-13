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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21676){var map__21681 = p__21676;var map__21681__$1 = ((cljs.core.seq_QMARK_(map__21681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21681):map__21681);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21681__$1,cljs.core.constant$keyword$215);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21681__$1,cljs.core.constant$keyword$247);var pred__21682 = cljs.core._EQ_;var expr__21683 = type;if(cljs.core.truth_((pred__21682.cljs$core$IFn$_invoke$arity$2 ? pred__21682.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$280,expr__21683) : pred__21682.call(null,cljs.core.constant$keyword$280,expr__21683))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,"Total",cljs.core.constant$keyword$287,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,"Average",cljs.core.constant$keyword$287,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21682.cljs$core$IFn$_invoke$arity$2 ? pred__21682.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$281,expr__21683) : pred__21682.call(null,cljs.core.constant$keyword$281,expr__21683))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,"Total",cljs.core.constant$keyword$287,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,"Average",cljs.core.constant$keyword$287,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21682.cljs$core$IFn$_invoke$arity$2 ? pred__21682.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$282,expr__21683) : pred__21682.call(null,cljs.core.constant$keyword$282,expr__21683))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,"Total",cljs.core.constant$keyword$287,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,"Average",cljs.core.constant$keyword$287,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,"Total",cljs.core.constant$keyword$287,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,"Average",cljs.core.constant$keyword$287,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21685){var map__21694 = p__21685;var map__21694__$1 = ((cljs.core.seq_QMARK_(map__21694))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21694):map__21694);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21694__$1,cljs.core.constant$keyword$288);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21694__$1,cljs.core.constant$keyword$289);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21694__$1,cljs.core.constant$keyword$285);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21694__$1,cljs.core.constant$keyword$290);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$291,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21695 = co_stats;var G__21695__$1 = (((G__21695 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21695));return G__21695__$1;
})(),cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21695 = co_stats;var G__21695__$1 = (((G__21695 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21695));return G__21695__$1;
})(),cljs.core.constant$keyword$211,"-")),cljs.core.constant$keyword$292,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21696 = co_stats;var G__21696__$1 = (((G__21696 == null))?null:cljs.core.constant$keyword$297.cljs$core$IFn$_invoke$arity$1(G__21696));return G__21696__$1;
})(),cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21696 = co_stats;var G__21696__$1 = (((G__21696 == null))?null:cljs.core.constant$keyword$297.cljs$core$IFn$_invoke$arity$1(G__21696));return G__21696__$1;
})(),cljs.core.constant$keyword$211,"-")),cljs.core.constant$keyword$293,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21697 = co_stats;var G__21697__$1 = (((G__21697 == null))?null:cljs.core.constant$keyword$298.cljs$core$IFn$_invoke$arity$1(G__21697));return G__21697__$1;
})(),cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21697 = co_stats;var G__21697__$1 = (((G__21697 == null))?null:cljs.core.constant$keyword$298.cljs$core$IFn$_invoke$arity$1(G__21697));return G__21697__$1;
})(),cljs.core.constant$keyword$211,"-")),cljs.core.constant$keyword$294,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21698 = site_stats;var G__21698__$1 = (((G__21698 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21698));var G__21698__$2 = (((G__21698__$1 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21698__$1));return G__21698__$2;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21698 = site_stats;var G__21698__$1 = (((G__21698 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21698));var G__21698__$2 = (((G__21698__$1 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21698__$1));return G__21698__$2;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-")),cljs.core.constant$keyword$295,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21699 = site_stats;var G__21699__$1 = (((G__21699 == null))?null:cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(G__21699));var G__21699__$2 = (((G__21699__$1 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21699__$1));return G__21699__$2;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21699 = site_stats;var G__21699__$1 = (((G__21699 == null))?null:cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(G__21699));var G__21699__$2 = (((G__21699__$1 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21699__$1));return G__21699__$2;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-"))], null)], 0)),cljs.core.constant$keyword$286,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$291,"\u00A0",cljs.core.constant$keyword$292,"\u00A0",cljs.core.constant$keyword$293,"\u00A0",cljs.core.constant$keyword$294,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21700 = site_stats;var G__21700__$1 = (((G__21700 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21700));var G__21700__$2 = (((G__21700__$1 == null))?null:cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(G__21700__$1));return G__21700__$2;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21700 = site_stats;var G__21700__$1 = (((G__21700 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21700));var G__21700__$2 = (((G__21700__$1 == null))?null:cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(G__21700__$1));return G__21700__$2;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-")),cljs.core.constant$keyword$295,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21701 = site_stats;var G__21701__$1 = (((G__21701 == null))?null:cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(G__21701));var G__21701__$2 = (((G__21701__$1 == null))?null:cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(G__21701__$1));return G__21701__$2;
})(),cljs.core.constant$keyword$278,0,cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21701 = site_stats;var G__21701__$1 = (((G__21701 == null))?null:cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(G__21701));var G__21701__$2 = (((G__21701__$1 == null))?null:cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(G__21701__$1));return G__21701__$2;
})(),cljs.core.constant$keyword$278,0,cljs.core.constant$keyword$211,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21720 = clustermap.components.full_report.overview.overview_data(data);var map__21720__$1 = ((cljs.core.seq_QMARK_(map__21720))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21720):map__21720);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21720__$1,cljs.core.constant$keyword$286);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21720__$1,cljs.core.constant$keyword$285);if(typeof clustermap.components.full_report.overview.t21721 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21721 = (function (selection,averages,map__21720,data,overview,meta21722){
this.selection = selection;
this.averages = averages;
this.map__21720 = map__21720;
this.data = data;
this.overview = overview;
this.meta21722 = meta21722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21721.cljs$lang$type = true;
clustermap.components.full_report.overview.t21721.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21721";
clustermap.components.full_report.overview.t21721.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21721");
});
clustermap.components.full_report.overview.t21721.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21721.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$287) : self__.selection.call(null,cljs.core.constant$keyword$287))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$257) : self__.selection.call(null,cljs.core.constant$keyword$257)))),React.DOM.td(null,(function (){var attrs21728 = cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21728))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21728], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21728));
}
})()),React.DOM.td(null,(function (){var attrs21729 = cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21729))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21729], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21729));
}
})()),React.DOM.td(null,(function (){var attrs21730 = cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21730))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21730], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21730));
}
})()),React.DOM.td(null,(function (){var attrs21731 = cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21731))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21731], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21731));
}
})()),React.DOM.td(null,(function (){var attrs21732 = cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21732))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21732], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21732));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$287) : self__.averages.call(null,cljs.core.constant$keyword$287))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$257) : self__.averages.call(null,cljs.core.constant$keyword$257)))),React.DOM.td(null,(function (){var attrs21733 = cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21733))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21733], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21733));
}
})()),React.DOM.td(null,(function (){var attrs21734 = cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21734))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21734], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21734));
}
})()),React.DOM.td(null,(function (){var attrs21735 = cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21735))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21735], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21735));
}
})()),React.DOM.td(null,(function (){var attrs21736 = cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21736))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21736], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21736));
}
})()),React.DOM.td(null,(function (){var attrs21737 = cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21737))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21737], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21737));
}
})()))))));
});
clustermap.components.full_report.overview.t21721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21723){var self__ = this;
var _21723__$1 = this;return self__.meta21722;
});
clustermap.components.full_report.overview.t21721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21723,meta21722__$1){var self__ = this;
var _21723__$1 = this;return (new clustermap.components.full_report.overview.t21721(self__.selection,self__.averages,self__.map__21720,self__.data,self__.overview,meta21722__$1));
});
clustermap.components.full_report.overview.__GT_t21721 = (function __GT_t21721(selection__$1,averages__$1,map__21720__$2,data__$1,overview__$1,meta21722){return (new clustermap.components.full_report.overview.t21721(selection__$1,averages__$1,map__21720__$2,data__$1,overview__$1,meta21722));
});
}
return (new clustermap.components.full_report.overview.t21721(selection,averages,map__21720__$1,data,overview,null));
});
